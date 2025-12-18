'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Lock } from 'lucide-react';

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleUpdatePassword(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    
    if (newPassword.length < 6) {
      setError('A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      alert("Senha atualizada com sucesso!");
      router.push('/');
    }
  }

  return (
    // Removido qualquer limite de largura do container pai para o bg ocupar tudo
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col">
      
      {/* Header ocupando 100% da largura */}
      <header className="w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <Palette className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Ateliê Inteligente
            </span>
          </div>
        </div>
      </header>

      {/* Main expandido para empurrar o footer para baixo e centralizar o card */}
      <main className="flex-1 w-full flex items-center justify-center p-4">
        <Card className="w-full max-w-[400px] shadow-2xl border-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Lock className="w-5 h-5 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Nova Senha</CardTitle>
            </div>
            <CardDescription className="text-left">
              Digite sua nova senha de acesso abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="password">Nova Senha</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="••••••••" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                  required
                  disabled={loading}
                  className="focus-visible:ring-orange-500"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-left">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 transition-all shadow-md" 
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Atualizar Senha'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer ocupando 100% da largura */}
      <footer className="w-full py-8 bg-white/50 border-t mt-auto">
        <div className="w-full text-center text-gray-600 text-sm">
          <p>© 2024 Ateliê Inteligente - Transformando arte em negócio</p>
        </div>
      </footer>
    </div>
  );
}