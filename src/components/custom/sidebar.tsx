'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Package, 
  ShoppingBag, 
  User, 
  Lightbulb,
  Home,
  Search,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UserType } from '@/lib/types';

interface SidebarProps {
  userType: UserType;
  isOpen?: boolean;
  onClose?: () => void;
}

const ceramistaLinks = [
  { href: '/dashboard', icon: Home, label: 'Início' },
  { href: '/dashboard/pecas', icon: Package, label: 'Minhas Peças' },
  { href: '/dashboard/encomendas', icon: ShoppingBag, label: 'Encomendas' },
  { href: '/dashboard/perfil', icon: User, label: 'Perfil' },
  { href: '/dashboard/dicas', icon: Lightbulb, label: 'Dicas' },
];

const compradorLinks = [
  { href: '/dashboard', icon: Home, label: 'Início' },
  { href: '/dashboard/catalogo', icon: Search, label: 'Catálogo' },
  { href: '/dashboard/minhas-encomendas', icon: ShoppingBag, label: 'Minhas Encomendas' },
  { href: '/dashboard/perfil', icon: User, label: 'Perfil' },
];

export function Sidebar({ userType, isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const links = userType === 'ceramista' ? ceramistaLinks : compradorLinks;

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen bg-white border-r z-50 transition-transform duration-300",
          "w-64 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="h-16 border-b flex items-center justify-between px-4 lg:hidden">
          <span className="font-semibold text-gray-800">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-amber-50 to-orange-50 text-orange-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="text-xs text-gray-500 text-center">
            {userType === 'ceramista' ? 'Painel do Ceramista' : 'Painel do Comprador'}
          </div>
        </div>
      </aside>
    </>
  );
}
