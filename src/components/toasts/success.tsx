import React from 'react';
import ToastBase, {BaseProps} from './base';

interface Props extends Omit<BaseProps, 'color'> {}

export const ToastSuccess = (props: Props) => {
  return <ToastBase {...props} color="#14BBA9" />;
};
