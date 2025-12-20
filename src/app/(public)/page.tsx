'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Palette, ShoppingBag, Sparkles, Mail } from 'lucide-react';
import { supabase } from '@/core/utils/lib/supabase';

export default function Home() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [accountType, setAccountType] = useState<'ceramista' | 'comprador'>('ceramista');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);

  //   const checkSession = async () => {
  //     try {
  //       const {
  //         data: { session },
  //       } = await supabase.auth.getSession();
  //       if (session?.user) {
  //         const { data: profile } = await supabase
  //           .from('profiles')
  //           .select('*')
  //           .eq('id', session.user.id)
  //           .single();

  //         console.log('Perfil do usuário:', profile);
  //         localStorage.setItem('atelie_user', JSON.stringify(profile));
  //         if (profile) {
  //           router.push(
  //             profile.plan === 'pro' || profile.plan === 'premium'
  //               ? '/painel'
  //               : '/assinar'
  //           );
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Erro ao verificar sessão:', error);
  //     }
  //   };
  //   checkSession();
  // }, [router]);

  // Função para recuperar senha
  const handleForgotPassword = async () => {
    setError('');
    setSuccessMessage('');
    if (!email) {
      setError('Por favor, digite seu e-mail para recuperar a senha.');
      return;
    }
    setLoading(true);
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-pass`,
      });
      if (resetError) {
        setError(resetError.message);
      } else {
        setSuccessMessage(
          'E-mail de recuperação enviado! Verifique sua caixa de entrada.'
        );
      }
    } catch (err) {
      setError('Erro ao processar solicitação.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      if (isLogin) {
        // --- FLUXO DE LOGIN ---
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) {
          setError(
            loginError.message.includes('Email not confirmed')
              ? 'Por favor, confirme seu e-mail antes de entrar.'
              : 'E-mail ou senha incorretos.'
          );
          setLoading(false);
          return;
        }

        // if (data.user) {
        //   const { data: profile } = await supabase
        //     .from('profiles')
        //     .select('*')
        //     .eq('id', data.user.id)
        //     .single();
        //   if (profile) {
        //     router.push(
        //       profile.plan === 'pro' || profile.plan === 'premium'
        //         ? '/painel'
        //         : '/assinar'
        //     );
        //   }
        // }
      } else {
        // --- FLUXO DE CADASTRO ---
        if (!name) {
          setError('Por favor, preencha seu nome.');
          setLoading(false);
          return;
        }

        const { data, error: signupError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: name, account_type: accountType } },
        });

        if (signupError) {
          setError(signupError.message);
          setLoading(false);
          return;
        }

        if (data.user) {
          await supabase.from('profiles').insert({
            id: data.user.id,
            email: email,
            full_name: name,
            plan: 'free',
            created_at: new Date().toISOString(),
          });

          // Mensagem clara de confirmação necessária
          setSuccessMessage(
            'Conta criada! 📧 Enviamos um link de confirmação para seu e-mail. Você precisa confirmar para ativar sua conta.'
          );

          // Limpa campos e volta para login após um tempo
          setEmail('');
          setPassword('');
          setName('');
          setTimeout(() => {
            setIsLogin(true);
            setSuccessMessage(
              'Após clicar no link enviado ao seu e-mail, faça login aqui.'
            );
          }, 8000);
        }
      }
    } catch (err) {
      setError('Erro ao processar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 text-left">
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

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Plataforma para Ceramistas
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Transforme sua arte em{' '}
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                negócio digital
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Crie catálogos profissionais, gere textos para redes sociais e gerencie
              pedidos em um só lugar.
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle>{isLogin ? 'Entrar' : 'Criar Conta'}</CardTitle>
              <CardDescription>
                {isLogin
                  ? 'Acesse sua conta para continuar'
                  : 'Comece a vender suas peças hoje'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Tipo de Conta</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setAccountType('ceramista')}
                          className={`p-4 rounded-lg border-2 transition-all ${accountType === 'ceramista' ? 'border-orange-600 bg-orange-50' : 'border-gray-200'}`}
                        >
                          <Palette className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                          <div className="font-semibold text-sm">Ceramista</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setAccountType('comprador')}
                          className={`p-4 rounded-lg border-2 transition-all ${accountType === 'comprador' ? 'border-pink-600 bg-pink-50' : 'border-gray-200'}`}
                        >
                          <ShoppingBag className="w-6 h-6 mx-auto mb-2 text-pink-600" />
                          <div className="font-semibold text-sm">Comprador</div>
                        </button>
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Senha</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    minLength={6}
                  />
                  {isLogin && (
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-xs text-orange-600 hover:underline"
                      disabled={loading}
                    >
                      Esqueci a senha
                    </button>
                  )}
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {successMessage && (
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-pink-600"
                  disabled={loading}
                >
                  {loading ? 'Processando...' : isLogin ? 'Entrar' : 'Criar Conta'}
                </Button>

                <div className="text-center text-sm pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                      setSuccessMessage('');
                    }}
                    className="text-orange-600 hover:underline"
                  >
                    {isLogin ? 'Não tem conta? Criar agora' : 'Já tem conta? Entrar'}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">IA Integrada</h3>
            <p className="text-gray-600">
              Textos profissionais gerados automaticamente para suas peças
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Vendas Simplificadas</h3>
            <p className="text-gray-600">
              Checkout integrado e gestão completa de pedidos
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto flex items-center justify-center">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Páginas Públicas</h3>
            <p className="text-gray-600">
              Compartilhe suas peças no Instagram e WhatsApp facilmente
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t mt-24 py-8 bg-white/50 text-center text-gray-600">
        <p>© 2024 Ateliê Inteligente - Transformando arte em negócio</p>
      </footer>
    </div>
  );
}
