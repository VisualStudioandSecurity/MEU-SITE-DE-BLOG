apps/web/src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error('login failed', err);
      setError('E-mail ou senha inválidos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet><title>Entrar — Prosa</title></Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-24 container-padding">
          <div className="w-full max-w-md surface-card p-10">
            <p className="eyebrow mb-4">Bem-vindo de volta</p>
            <h1 className="headline-display text-3xl mb-8">Entrar</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</label>
                <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Senha</label>
                <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-none" />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="btn-gold w-full h-11 rounded-none border-0 text-[12px] font-bold uppercase tracking-widest">
                {loading ? 'Entrando…' : 'Entrar'}
              </Button>
            </form>
            <p className="mt-6 text-sm text-muted-foreground">
              Não tem conta?{' '}
              <Link to="/cadastro" className="text-gold hover:underline">Criar conta</Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
