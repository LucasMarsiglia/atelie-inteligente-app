import { ISelectProps } from './select-root-types';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/core/utils/utils';

export function SelectRoot({
  className,
  label,
  selectClassName,
  options,
  placeholder,
  value,
  onValueChange,
  error,
  ...props
}: ISelectProps) {
  return (
    <div className={cn(className)}>
      {label && <Label className="mb-2">{label}</Label>}
      <Select value={value} onValueChange={onValueChange} {...props}>
        <SelectTrigger className={cn('w-full !h-[40px] cursor-pointe', selectClassName)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options?.map((option, index) => (
              <SelectItem key={index} value={option.value as string}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {error && <span className="mt-1 text-sm text-red-600 block">{error}</span>}
    </div>
  );
}
