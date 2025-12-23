import { Palette } from 'lucide-react';
import { IAccountTypeProps } from './account-type.types';
import { use } from 'react';

export function AccountType({
  onSelectType,
  selectType,
  name,
  icon,
  disabled,
}: IAccountTypeProps) {
  return (
    <button
      type="button"
      onClick={() => onSelectType(name)}
      className={`p-4 rounded-lg border-2 transition-all ${name === selectType ? 'border-orange-600 bg-orange-50' : 'border-gray-200'}`}
      disabled={disabled}
    >
      {icon}
      <div className="font-semibold text-sm">{name}</div>
    </button>
  );
}
