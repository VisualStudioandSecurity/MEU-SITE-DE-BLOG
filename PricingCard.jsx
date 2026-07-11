apps/web/src/components/PricingCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({
  edition,
  tagline,
  price,
  period = '/seat /mo',
  description,
  features,
  cta,
  href = '#signup',
  highlighted = false,
  ribbon,
  image,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'relative grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden transition-all duration-500',
        highlighted
          ? 'surface-elevated border border-gold/50 shadow-edition-hover'
          : 'surface-card hover:border-gold/30',
      ].join(' ')}
    >
      {ribbon && (
        <div className="absolute top-6 right-6 z-10">
          <div className="hud-badge hud-badge-gold">
            <span className="text-[10px] font-bold uppercase tracking-ultra">
              {ribbon}
            </span>
          </div>
        </div>
      )}

      <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className={[
            'absolute inset-0',
            highlighted
              ? 'bg-gradient-to-tr from-navy-deep via-navy-deep/50 to-navy-deep/10'
              : 'bg-gradient-to-tr from-navy-deep/95 via-navy-deep/70 to-navy-deep/30',
          ].join(' ')}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 lg:bg-gradient-to-r lg:from-transparent lg:to-navy-deep/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent via-transparent to-navy-deep"
        />

        <div className="absolute bottom-6 left-6 right-6 lg:right-8">
          <p
            className={[
              'text-[10px] font-bold uppercase tracking-ultra mb-2',
              highlighted ? 'text-gold-bright' : 'text-gold',
            ].join(' ')}
          >
            {edition}
          </p>
          <p className="font-headline text-4xl md:text-5xl text-white leading-[0.9]">
            {tagline}
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 p-8 md:p-10 flex flex-col">
        <p className="text-sm text-muted-foreground leading-relaxed mb-7">
          {description}
        </p>

        <div className="flex items-baseline gap-2 mb-2">
          <span
            className={[
              'font-headline text-6xl md:text-7xl leading-none',
              highlighted ? 'text-gradient-gold' : 'text-foreground',
            ].join(' ')}
          >
            {price}
          </span>
          {period && (
            <span className="text-sm text-muted-foreground">{period}</span>
          )}
        </div>

        <p className="text-[10px] font-bold uppercase tracking-ultra text-gold/70 mb-7">
          Includes pre-order bonus pack
        </p>

        <div className="divider-gold-thick mb-7" />

        <ul className="space-y-3 mb-9 flex-1">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-sm text-foreground/85"
            >
              <span
                className={[
                  'mt-0.5 inline-flex items-center justify-center w-4 h-4 flex-shrink-0',
                  highlighted ? 'bg-gold/20' : 'bg-navy-elevated border border-border',
                ].join(' ')}
              >
                <Check
                  className={[
                    'w-2.5 h-2.5',
                    highlighted ? 'text-gold' : 'text-muted-foreground',
                  ].join(' ')}
                />
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={[
            'h-12 rounded-none border-0 text-[12px] font-bold uppercase tracking-widest w-full',
            highlighted ? 'btn-gold' : 'btn-ghost-gold',
          ].join(' ')}
        >
          <a href={href} className="inline-flex items-center justify-center gap-2">
            {cta}
            <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
