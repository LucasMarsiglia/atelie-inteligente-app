import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/core/utils/utils';
import { buttonVariants } from './styles';
import { IButton } from './types';

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading,
  children,
  loadingCustom,
  ...props
}: IButton) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading && loadingCustom && loadingCustom}

      {isLoading && !loadingCustom && (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Carregando...
        </span>
      )}

      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
