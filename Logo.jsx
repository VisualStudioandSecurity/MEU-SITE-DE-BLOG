apps/web/src/components/Logo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
const LogoMark = ({
  className = 'w-9 h-9'
}) => <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="helmGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(41 78% 70%)" />
        <stop offset="55%" stopColor="hsl(41 60% 55%)" />
        <stop offset="100%" stopColor="hsl(41 45% 38%)" />
      </linearGradient>
      <radialGradient id="helmCore" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(41 85% 78%)" />
        <stop offset="100%" stopColor="hsl(41 60% 50%)" />
      </radialGradient>
    </defs>

    <circle cx="20" cy="20" r="18.5" stroke="url(#helmGold)" strokeWidth="1.25" opacity="0.9" />
    <circle cx="20" cy="20" r="11.5" stroke="url(#helmGold)" strokeWidth="1.25" />

    {[0, 45, 90, 135].map(angle => <line key={angle} x1="20" y1="0.5" x2="20" y2="39.5" stroke="url(#helmGold)" strokeWidth="1.25" strokeLinecap="round" transform={`rotate(${angle} 20 20)`} />)}

    {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => <circle key={angle} cx="20" cy="1.5" r="1.8" fill="url(#helmGold)" transform={`rotate(${angle} 20 20)`} />)}

    <circle cx="20" cy="20" r="3.4" fill="url(#helmCore)" />
  </svg>;
const Logo = ({
  variant = 'full',
  className = ''
}) => {
  if (variant === 'mark') {
    return <LogoMark className={className || 'w-9 h-9'} />;
  }
  return <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Prosa — home"><LogoMark className="w-9 h-9 transition-transform duration-700 group-hover:rotate-[22.5deg]" /><span className="headline-display text-3xl tracking-tight text-foreground leading-none mt-1">VSAS</span></Link>;
};
export default Logo;
