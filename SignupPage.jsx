apps/web/src/pages/SignupPage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres.');
      return;
    }
    setLoading(true);
    try {
      await signup(email, password, name);
      navigate('/');
    } catch (err) {
      console.error('signup failed', err);
      setError('Não foi possível criar sua conta. Verifique os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet><title>Criar conta — Prosa</title></Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-24 container-padding">
          <div className="w-full max-w-md surface-card p-10">
            <p className="eyebrow mb-4">Junte-se a nós</p>
            <h1 className="headline-display text-3xl mb-8">Criar conta</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
                <Input required value={name} onChange={(e) => setName(e.target.value)} className="rounded-none" />
              </div>
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
                {loading ? 'Criando…' : 'Criar conta'}
              </Button>
            </form>
            <p className="mt-6 text-sm text-muted-foreground">
              Já tem conta?{' '}
              <Link to="/entrar" className="text-gold hover:underline">Entrar</Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SignupPage;
