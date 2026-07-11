apps/web/src/components/FeatureCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FeatureCard = ({
  number,
  eyebrow,
  title,
  description,
  bullets = [],
  image,
  icon: Icon,
  reverse = false,
  index = 0,
}) => {
  const directionInitial = reverse ? -32 : 32;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -directionInitial }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={[
          'lg:col-span-6 order-2',
          reverse ? 'lg:order-2' : 'lg:order-1',
        ].join(' ')}
      >
        <div className="relative aspect-[5/4] overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-3 -left-3 w-20 h-20 border-l border-t border-gold/40 z-10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 w-20 h-20 border-r border-b border-gold/40 z-10"
          />
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          {Icon && (
            <div className="absolute top-5 left-5">
              <div className="hud-badge hud-badge-gold">
                <Icon className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-ultra">
                  {eyebrow}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: directionInitial }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={[
          'lg:col-span-6 order-1',
          reverse ? 'lg:order-1' : 'lg:order-2',
        ].join(' ')}
      >
        <div className="flex items-baseline gap-4 mb-5">
          <span className="font-headline text-3xl text-gold/40 leading-none">
            {String(number).padStart(2, '0')}
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-gold/30" />
          <p className="text-[11px] font-bold uppercase tracking-ultra text-gold">
            {eyebrow}
          </p>
        </div>

        <h3 className="headline-mega text-white text-[clamp(2.25rem,5vw,4.5rem)] mb-5">
          {title}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">
          {description}
        </p>

        {bullets.length > 0 && (
          <ul className="space-y-3 mb-7">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-foreground/85"
              >
                <span className="text-gold mt-1 leading-none">›</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <a
          href="#showcase"
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-gold hover:text-gold-bright transition-colors group"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
