apps/web/src/components/TestimonialCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  rating = 5,
  highlight = false,
  index = 0,
}) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'group relative rounded-2xl p-7 md:p-8 transition-all duration-500 flex flex-col h-full',
        highlight
          ? 'surface-elevated border border-gold/40 shadow-edition'
          : 'surface-card hover:border-gold/30 hover:-translate-y-1',
      ].join(' ')}
    >
      <Quote
        className={[
          'absolute top-6 right-6 w-7 h-7 transition-opacity',
          highlight ? 'text-gold/40' : 'text-gold/20 group-hover:text-gold/40',
        ].join(' ')}
        aria-hidden="true"
      />

      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>

      <blockquote className="flex-1 text-[15px] md:text-base text-foreground/90 leading-relaxed mb-6">
        <p className="relative">"{quote}"</p>
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-5 border-t border-border/60">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-elevated to-navy-surface border border-gold/20 flex items-center justify-center font-display text-sm font-semibold text-gold flex-shrink-0">
          {name
            .split(' ')
            .map((s) => s[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-foreground truncate">
            {name}
          </div>
          <div className="text-xs text-muted-foreground truncate">
            {role}{company ? ` · ${company}` : ''}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export default TestimonialCard;
