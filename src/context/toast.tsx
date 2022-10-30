import React, {
  ComponentType,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';

type ToastType = 'success' | 'info' | 'error';

export interface ToastManagerProps {
  onClose: () => void;
  type: ToastType;
}

interface ToastComponentProps<IProps = any> {
  id: number;
  render: ComponentType<IProps>;
  props: IProps & ToastManagerProps;
}

interface ToastContext<IProps = any> {
  toasts: ToastComponentProps<IProps>[];
  setToasts: Dispatch<SetStateAction<ToastComponentProps<IProps>[]>>;
}

const initial: ToastContext = {
  toasts: [],
  setToasts: () => void 0,
};

export const ToastContext = createContext(initial);

export const ToastContextProvider = ({children}: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastComponentProps[]>([]);

  return (
    <ToastContext.Provider value={{toasts, setToasts}}>
      {children}
    </ToastContext.Provider>
  );
};
