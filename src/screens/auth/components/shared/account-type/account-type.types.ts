export interface IAccountTypeProps {
  onSelectType: (type: 'ceramista' | 'comprador') => void;
  selectType?: 'ceramista' | 'comprador';
  name: 'ceramista' | 'comprador';
  disabled?: boolean;
  icon?: React.ReactNode;
}
