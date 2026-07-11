apps/web/src/components/sections/CTA.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const includes = [
  'Everything in Standard & Deluxe',
  'Dedicated CSM + 1-hour SLA',
  'White-glove migration & onboarding',
  'Custom contracts and invoicing',
  'Regional data residency (EU/US/APAC)',
  'Limited-edition Helm steel keycard',
];

const CTA = () => {
  return (
    <section className="relative cinematic-section flex items-center border-y border-gold/20">
      <div className="cinematic-bg">
        <img
          src="https://images.unsplash.com/photo-1518562923155-4cde4d9a2b28?auto=format&fit=crop&w=2400&q=85"
          alt=""
          aria-hidden="true"
          className="animate-ken-burns"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/70"
        />
        <div aria-hidden="true" className="absolute inset-0 grain" />
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-6">Discover the Collector's Edition</p>

            <h2 className="headline-mega text-white text-[clamp(3rem,8vw,7.5rem)] mb-6">
              Take command,
              <br />
              <span className="headline-script text-gradient-gold normal-case">
                from day one.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
              The flagship tier for orgs that refuse to compromise. Premium
              collectibles, white-glove onboarding, dedicated success — and an
              edition built around the way your team actually works.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                asChild
                className="btn-gold h-14 px-8 rounded-none border-0 text-sm font-bold uppercase tracking-widest"
              >
                <a href="#pricing" className="inline-flex items-center gap-2">
                  Pre-order Collector's
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="btn-ghost-gold h-14 px-7 rounded-none text-sm font-bold uppercase tracking-widest"
              >
                <a href="#signup">Talk to sales</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative surface-elevated p-8 corner-marks shadow-edition">
              <div className="absolute -top-3 left-6">
                <div className="hud-badge hud-badge-gold">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-ultra">
                    Limited release
                  </span>
                </div>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-ultra text-gold/80 mb-4 mt-2">
                Collector's Edition includes
              </p>

              <ul className="space-y-3.5">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <span className="text-gold mt-0.5 leading-none">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="divider-gold-thick mt-7 mb-5" />

              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-bold uppercase tracking-ultra text-muted-foreground">
                  From
                </span>
                <span className="font-headline text-4xl text-gradient-gold leading-none">
                  Custom
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">
                — talk to sales for a tailored quote
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
