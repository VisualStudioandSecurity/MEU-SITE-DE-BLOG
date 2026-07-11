apps/web/src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const socials = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer className="relative mt-0 border-t border-border/60 bg-navy-deep">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px divider-gold opacity-60" />

      <div className="relative max-w-7xl mx-auto container-padding pt-16 pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Histórias, ideias e reflexões — publicadas com cuidado, uma semana por vez.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full surface-card flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prosa. Todos os direitos reservados.
          </p>
          <Link to="/cadastro" className="text-xs text-muted-foreground/80 hover:text-gold transition-colors">
            Quer escrever aqui? Crie sua conta.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
