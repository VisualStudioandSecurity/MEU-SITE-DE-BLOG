apps/web/src/components/StickyCTABar.jsx

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(y > window.innerHeight * 0.7);
      setIsHidden(y > max - 240);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={[
        'fixed bottom-0 inset-x-0 z-40 transition-all duration-500',
        isVisible && !isHidden
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px divider-gold opacity-70"
      />
      <div className="bg-navy-deep/85 backdrop-blur-xl shadow-sticky-bar border-t border-border/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between gap-4 py-3">
            <div className="hidden sm:flex items-center gap-4 min-w-0">
              <Logo variant="mark" className="w-9 h-9 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-ultra text-gold/80">
                  Pre-order open
                </p>
                <p className="font-headline text-lg leading-none mt-1 text-foreground truncate">
                  Helm — from <span className="text-gradient-gold">$24/mo</span>
                </p>
              </div>
            </div>

            <div className="flex sm:hidden items-center gap-3 min-w-0">
              <Logo variant="mark" className="w-8 h-8 flex-shrink-0" />
              <p className="font-headline text-base leading-none text-foreground truncate">
                Helm — <span className="text-gradient-gold">$24/mo</span>
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="#pricing"
                className="hidden md:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3"
              >
                Compare editions
              </a>
              <Button
                asChild
                className="btn-gold h-11 px-5 md:px-7 rounded-none border-0 text-[13px] font-semibold uppercase tracking-widest"
              >
                <a href="#pricing">
                  Pre-order
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABar;
