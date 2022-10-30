import React, {
  ComponentType,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';

export interface ModalManagerProps {
  onClose: (res?: any) => void;
}

interface ModalComponentProps<IProps = any> {
  id: number;
  render: ComponentType<IProps>;
  props: IProps & ModalManagerProps;
}

interface ModalContext<IProps = any> {
  modals: ModalComponentProps<IProps>[];
  setModals: Dispatch<SetStateAction<ModalComponentProps<IProps>[]>>;
  queue: number[];
  setQueue: Dispatch<SetStateAction<number[]>>;
}

const initial: ModalContext = {
  modals: [],
  setModals: () => void 0,
  queue: [],
  setQueue: () => void 0,
};

export const ModalContext = createContext(initial);

export const ModalContextProvider = ({children}: PropsWithChildren) => {
  const [modals, setModals] = useState<ModalComponentProps[]>([]);
  const [queue, setQueue] = useState<number[]>([]);

  return (
    <ModalContext.Provider value={{modals, setModals, queue, setQueue}}>
      {children}
    </ModalContext.Provider>
  );
};
