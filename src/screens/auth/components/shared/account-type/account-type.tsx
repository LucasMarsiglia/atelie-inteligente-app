import { Palette } from 'lucide-react';
import { IAccountTypeProps } from './account-type.types';
import { use } from 'react';

export function AccountType({
  onSelectType,
  selectType,
  name,
  disabled,
}: IAccountTypeProps) {
  return (
    <button
      type="button"
      onClick={() => onSelectType(name)}
      className={`p-4 rounded-lg border-2 transition-all ${name === selectType ? 'border-orange-600 bg-orange-50' : 'border-gray-200'}`}
      disabled={disabled}
    >
      <Palette className="w-6 h-6 mx-auto mb-2 text-orange-600" />
      <div className="font-semibold text-sm">{name}</div>
    </button>
  );
}
