import { ReactNode } from 'react';

interface IOptionsItem {
  label: string;
  value?: string | number;
}

export interface ISelectProps {
  /** Rótulo acima do select */
  label?: string;

  /** Placeholder (opção desabilitada no topo) */
  placeholder?: string;

  /** Lista de opções do select */
  options?: IOptionsItem[];

  /** Classe do container principal */
  className?: string;

  /** Classe do <select> ou trigger (caso use componente custom) */
  selectClassName?: string;

  /** Classe do label */
  labelClassName?: string;

  /** Ícone à esquerda (ex: <IoSearch />) */
  icon?: ReactNode;

  /** Estado de erro (borda vermelha) */
  error?: string;

  /** Mensagem de erro abaixo do campo */
  errorMessage?: string;

  /** Valor atual (modo controlado) */
  value?: string;

  /** Callback quando o valor muda */
  onValueChange?: (value: string) => void;

  /** Desabilita o select */
  disabled?: boolean;

  /** Campo obrigatório */
  required?: boolean;

  /** Permite limpar o valor com um X */
  allowClear?: boolean;

  /** ID do campo (útil para label for="") */
  id?: string;

  /** Nome do campo (para formulários) */
  name?: string;

  /** Ref do select */
  ref?: React.Ref<HTMLSelectElement>;

  defaultValue?: string;
}
