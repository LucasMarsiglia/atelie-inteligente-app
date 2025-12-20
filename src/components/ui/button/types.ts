import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './styles';

export interface IButton
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}
