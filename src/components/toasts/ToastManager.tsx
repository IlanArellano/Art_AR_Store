import React, {useContext} from 'react';
import {ToastContext} from '@app/context';

export function ToastManager() {
  const {toasts} = useContext(ToastContext);

  if (toasts.length === 0) return null;
  return (
    <>
      {toasts.map(toast => {
        const Component = toast.render;
        return <Component key={toast.id} {...toast.props} />;
      })}
    </>
  );
}
