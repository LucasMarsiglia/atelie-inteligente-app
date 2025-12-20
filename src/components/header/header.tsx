import { Palette } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="w-8 h-8 text-orange-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Ateliê Inteligente
          </span>
        </div>
      </div>
    </header>
  );
}
