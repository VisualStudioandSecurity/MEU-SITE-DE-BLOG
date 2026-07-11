apps/web/src/components/Header.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PenSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { useAuth } from '@/hooks/useAuth';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Tecnologia', href: '/?categoria=Tecnologia' },
  { name: 'Viagem', href: '/?categoria=Viagem' },
  { name: 'Estilo de Vida', href: '/?categoria=Estilo de Vida' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthed, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-gold/20 bg-navy-deep/80 backdrop-blur-xl'
          : 'bg-gradient-to-b from-navy-deep/70 via-navy-deep/30 to-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group relative px-4 py-2 text-[12px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gold transition-all duration-300 group-hover:w-2/3" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {isAuthed ? (
              <>
                <Button asChild className="btn-gold h-10 px-5 rounded-none border-0 text-[12px] font-bold uppercase tracking-widest">
                  <Link to="/novo" className="inline-flex items-center gap-2">
                    <PenSquare className="w-3.5 h-3.5" />
                    Novo post
                  </Link>
                </Button>
                <button
                  onClick={logout}
                  className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-2"
                >
                  {user?.name || 'Sair'}
                </button>
              </>
            ) : (
              <>
                <Link to="/entrar" className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-3">
                  Entrar
                </Link>
                <Button asChild className="btn-gold h-10 px-6 rounded-none border-0 text-[12px] font-bold uppercase tracking-widest">
                  <Link to="/cadastro">Escrever</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gold/15 bg-navy-deep/95 backdrop-blur-xl -mx-4 sm:-mx-6 px-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="py-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground border-b border-border/40 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-5 flex flex-col gap-3">
                {isAuthed ? (
                  <>
                    <Link to="/novo" className="text-sm font-semibold uppercase tracking-widest text-gold" onClick={() => setIsMobileMenuOpen(false)}>
                      Novo post
                    </Link>
                    <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-left text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      Sair
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/entrar" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                      Entrar
                    </Link>
                    <Button asChild className="btn-gold h-12 rounded-none border-0 text-[13px] font-bold uppercase tracking-widest">
                      <Link to="/cadastro" onClick={() => setIsMobileMenuOpen(false)}>Criar conta</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
