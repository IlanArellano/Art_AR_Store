import React from 'react';
import ToastBase, {BaseProps} from './base';

interface Props extends Omit<BaseProps, 'color'> {}

export const ToastFailed = (props: Props) => {
  return <ToastBase {...props} color="#FC5454" />;
};
