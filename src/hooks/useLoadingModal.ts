import {useContext, useCallback, ComponentType} from 'react';
import {ModalContext} from '@app/context';

interface Options {
  removeAllEntries: boolean;
}

export default function useLoadingModal(
  render: ComponentType,
  options?: Partial<Options>,
) {
  const {modals, setModals} = useContext(ModalContext);

  const getLastId = useCallback(
    () => (modals.sort((a, b) => a.id - b.id)[modals.length - 1]?.id ?? 0) + 1,
    [modals.length],
  );

  const onShowModal = () => {
    if (!render) throw new Error('No hay ningun componente que renderizar');
    setModals(prev => {
      if (options && options.removeAllEntries)
        return [
          {
            id: 1,
            render,
            isLoader: true,
          },
        ];
      return prev.concat({
        id: getLastId(),
        render,
        isLoader: true,
      });
    });
  };

  const onCloseModal = () => {
    if (!render) throw new Error('No hay ningun componente que renderizar');
    setModals(prev => prev.filter(modal => modal.isLoader !== true));
  };

  return {showLoadingModal: onShowModal, closeLoadingModal: onCloseModal};
}
