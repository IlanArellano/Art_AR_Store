import React, {useContext} from 'react';
import {ModalContext} from '@app/context';

export function ModalManager() {
  const {modals} = useContext(ModalContext);

  if (modals.length === 0) return null;
  return (
    <>
      {modals.map(modal => {
        const Component = modal.render;
        return <Component key={modal.id} {...modal.props} />;
      })}
    </>
  );
}
