// Tipos do Ateliê Inteligente

export type UserType = 'ceramista' | 'comprador';

export type OrderStatus = 'pendente' | 'aceito' | 'recusado' | 'em_producao' | 'concluido';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  avatar?: string;
  createdAt: Date;
}

export interface Ceramista extends User {
  type: 'ceramista';
  bio?: string;
  location?: string;
  phone?: string;
  instagram?: string;
  specialties?: string[];
}

export interface Comprador extends User {
  type: 'comprador';
  phone?: string;
  address?: string;
}

export interface Piece {
  id: string;
  ceramistaId: string;
  title: string;
  description: string;
  images: string[];
  category?: string;
  price?: number;
  available: boolean;
  createdAt: Date;
}

export interface Order {
  id: string;
  compradorId: string;
  ceramistaId: string;
  pieceId?: string;
  description: string;
  customDetails?: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}
