'use client';

import * as React from 'react';
import { cn } from '@/core/utils/utils';
import { Label } from '../label';
import { InputProps } from './types';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({
  label,
  className,
  htmlFor,
  ref,
  type,
  error,
  isPassword,
  iconPosition = 'left',
  ...props
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={cn(className)}>
      {label && (
        <Label htmlFor={htmlFor} className="mb-1 block text-sm font-medium">
          {label}
        </Label>
      )}

      <div className={cn(className, 'relative')}>
        {props.icon && (
          <div
            className={cn(
              'absolute flex items-center h-full w-full px-2  pointer-events-none transition-opacity text-secondary-300 dark:text-primary-300',

              iconPosition === 'left' ? 'justify-start' : 'justify-end',
              props.disabled ? 'opacity-70' : 'opacity-100'
            )}
          >
            {props.icon}
          </div>
        )}

        <input
          ref={ref}
          id={htmlFor}
          type={type === 'password' && passwordVisible ? 'text' : type}
          data-slot="input"
          aria-invalid={!!error}
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            'placeholder:text-gray-400',

            props.icon && iconPosition === 'left' && 'pl-10',
            props.icon && iconPosition === 'right' && 'pr-10',

            isPassword && 'pr-10',

            props.inputClassName
          )}
          {...props}
        />

        {isPassword && (
          <div
            className="absolute right-px px-2 top-2 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <EyeOff
                size={20}
                strokeWidth={1}
                className="text-secondary-300 dark:text-primary-300"
              />
            ) : (
              <Eye
                size={20}
                strokeWidth={1}
                className="text-secondary-300 dark:text-primary-300"
              />
            )}
          </div>
        )}
      </div>

      {error && <span className="mt-1 text-sm text-red-600 block">{error}</span>}
    </div>
  );
};

Input.displayName = 'Input';

export { Input };
