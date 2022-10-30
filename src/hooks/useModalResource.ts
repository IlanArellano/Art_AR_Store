import {ComponentType, useContext, useEffect, useCallback} from 'react';
import {ModalContext, ModalManagerProps} from '@app/context';

type ResourceFunction<T> =
  | ((...args: any[]) => T)
  | ((...args: any[]) => Promise<T>);

interface ModalResourceProps<IProps> {
  /**El componente del modal que se desea renderizar, notese que el metodo @see onModalResult no se resolvera por completo hasta
   * que ejecute el metodo @see Onclose del modal
   */
  render: ComponentType<IProps & ModalManagerProps>;
  /** Las props del modal */
  props?: IProps & ModalManagerProps;
}

interface ResourceOptions<T, IProps = any> {
  /**devuelve una funcion cuyos argumentos son lo que espera la funcion, en caso de declararse se puede establecer una interpretacion manual
   * para devolver un tipo de toast, en caso de no declararse la funcion lo interpretara si fue resuelta correctamente o no */
  interpeter: (result: T) => boolean;
  modalOnSuccess?: ModalResourceProps<IProps>;
  modalOnFailure?: ModalResourceProps<IProps>;
}

/**Custom hook que evalua una funcion ya sea una funcion sincrona o una promesa, el custom hook llama al metodo @see `onResult` para pasarle el
 * constructor de la funcion y sus parametros, devolviendo como resultado el resultante de la funcion, y en la parte superior de la pantalla del
 * dispositivo se mostrara un toast dependiendo si el resultado fue un success o un failed
 */
export default function useModalResource() {
  const {modals, setModals, queue, setQueue} = useContext(ModalContext);

  const addEntry = (
    component: ModalResourceProps<any>,
    resolve: (res: any) => void,
  ) => {
    const id = getLastId();
    setModals(prev =>
      prev.concat({
        id,
        render: component.render,
        props: {
          ...(component.props ?? {}),
          onClose: handleClose(id, resolve),
        },
      }),
    );
  };

  const removeEntry = (id: number) => {
    setModals(prev => prev.filter(modal => modal.id !== id));
  };

  const getLastId = useCallback(
    () => (modals.sort((a, b) => a.id - b.id)[modals.length - 1]?.id ?? 0) + 1,
    [modals.length],
  );

  const handleClose =
    (id: number, resolve: (res: any) => void) => (result: any) => {
      resolve(result);
      removeEntry(id);
    };

  useEffect(() => {}, []);

  /**
   * Metodo que muestra un modal de manera asincrona, al ejecutar el metodo @see OnClose puede devolver un resultado
   * @param render El modal que se desea renderizar
   * @param props Las props del modal
   * @returns
   */
  function showModal<IProps>(render: ComponentType<IProps>, props?: IProps) {
    return new Promise(resolve => {
      addEntry(
        {
          render,
          props,
        },
        resolve,
      );
    });
  }

  /**
   * Funcion del hook que devuelve como resultado la funcion resuelta y un modal con la interpretacion del resultado,
   * dependiendo si se resolvio correctamente o no, note que si no se le pasan un render para pintar un modal cuando la
   * funcion sea resuelta, el resultado se va a resolver de manera normal pero de forma asincrona
   * @param fn La funcion a llamar
   * @param args Los parametros de la funcion
   * @returns
   */
  function onModalResult<T>(
    fn: ResourceFunction<T>,
    args: any[] | undefined,
    options: ResourceOptions<T>,
  ) {
    return new Promise<T>((resolve, reject) => {
      let result: T = null as unknown as T;
      (async () => {
        try {
          const exec = fn(...(args !== undefined ? args : []));
          if (exec instanceof Promise) {
            result = await new Promise(resolve => exec.then(resolve));
          } else {
            result = exec;
          }
          if (options) {
            const interpeter = options.interpeter && options.interpeter(result);
            await new Promise(resolve => {
              if (
                (interpeter === true || interpeter === undefined) &&
                options.modalOnSuccess
              ) {
                addEntry(options.modalOnSuccess, resolve);
              } else if (interpeter === false && options.modalOnFailure) {
                addEntry(options.modalOnFailure, resolve);
              } else {
                resolve(undefined);
              }
            });
          }
          resolve(result);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  return {onModalResult, showModal};
}
