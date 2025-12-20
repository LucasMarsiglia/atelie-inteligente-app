import React from 'react';

export type IconPosition = 'left' | 'right';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  htmlFor?: string;
  error?: string;
  isPassword?: boolean;

  icon?: React.ReactNode;
  iconPosition?: IconPosition;

  className?: string;
  inputClassName?: string;
}
