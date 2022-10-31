import {useContext} from 'react';
import {ToastContext} from '@app/context';
import {ToastSuccess, ToastFailed} from '@app/components/toasts';
import LoadingModal from '@app/components/modals/LoadingModal';
import useLoadingModal from './useLoadingModal';

type TypeResult = 'success' | 'failed';

type ResourceFunction<T> =
  | ((...args: any[]) => T)
  | ((...args: any[]) => Promise<T>);

interface ResourceOptions<T> {
  /**El titulo para darle al toast, se puede pasar un string o una funcion que recibe como argumento la interpretacion, de acuerdo con el resultado
   * devuelve un string */
  title: string | ((type: TypeResult, result: T) => string);
  /**devuelve una funcion cuyos argumentos son lo que espera la funcion, en caso de declararse se puede establecer una interpretacion manual
   * para devolver un tipo de toast, en caso de no declararse la funcion lo interpretara si fue resuelta correctamente o no */
  interpeter: (result: T) => boolean;
  /** Si se establece en true, si la funcion se resuelve correctamente no mostrara el toast, en caso de establecer el opcion @see interpeter verificara si la funcion devuelve true o undefined */
  dontShowOnSuccess: boolean;
  /** Si se establece en true, si la funcion NO se resuelve correctamente no mostrara el toast, en caso de establecer el opcion @see interpeter verificara si la funcion devuelve false */
  dontShowOnFailure: boolean;
  /**Muestra un modal de carga mientras se resuelve el metodo, este modal solo se mostrara si el metodo a resolver es una promesa */
  showLoadingModal: boolean;
}

/**Custom hook que evalua una funcion ya sea una funcion sincrona o una promesa, el custom hook llama al metodo @see `onResult` para pasarle el
 * constructor de la funcion y sus parametros, devolviendo como resultado el resultante de la funcion, y en la parte superior de la pantalla del
 * dispositivo se mostrara un toast dependiendo si el resultado fue un success o un failed
 */
export default function useToastResource() {
  const {setToasts, toasts} = useContext(ToastContext);
  const {showLoadingModal, closeLoadingModal} = useLoadingModal(LoadingModal, {
    removeAllEntries: true,
  });

  const addEntry = (type: TypeResult, title?: string) => {
    setToasts(prev =>
      prev.concat({
        id: prev.length + 1,
        props: {
          title: title ?? 'Something went wrong!',
          onClose: handleClose,
        },
        render: type === 'success' ? ToastSuccess : ToastFailed,
      }),
    );
  };

  const removeAllEntries = () => {
    setToasts([]);
  };

  const handleClose = () => {
    removeAllEntries();
  };

  /**
   * Funcion del hook que devuelve como resultado la funcion resuelta y un toast con la interpretacion del resultado, dependiendo si se
   * resolvio correctamente o no
   * @param fn La funcion a llamar
   * @param args Los parametros de la funcion
   * @returns
   */
  function onResult<T>(
    fn: ResourceFunction<T>,
    args?: any[],
    options?: Partial<ResourceOptions<T>>,
  ) {
    return new Promise<T>((resolve, reject) => {
      if (toasts.length > 0) removeAllEntries();
      let result: T = null as unknown as T;
      (async () => {
        try {
          const exec = fn(...(args !== undefined ? args : []));
          if (exec instanceof Promise) {
            if (options && options.showLoadingModal) {
              showLoadingModal();
              result = await new Promise(resolve => exec.then(resolve));
              closeLoadingModal();
            } else {
              result = await new Promise(resolve => exec.then(resolve));
            }
          } else {
            result = exec;
          }
          let type: TypeResult = 'success';
          let finalTitle;
          if (options) {
            const interpeter = options.interpeter && options.interpeter(result);
            if (interpeter === false) type = 'failed';
            if (options.title)
              finalTitle =
                typeof options.title === 'function'
                  ? options.title(type, result)
                  : options.title;
            if (
              (interpeter === true || interpeter === undefined) &&
              !options.dontShowOnSuccess
            )
              addEntry(type, finalTitle);
            else if (interpeter === false && !options.dontShowOnFailure)
              addEntry(type, finalTitle);
          } else {
            addEntry(type, finalTitle);
          }
          resolve(result);
        } catch (error) {
          addEntry('failed');
          reject(error);
        }
      })();
    });
  }

  return onResult;
}
