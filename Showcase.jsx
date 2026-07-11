apps/web/src/components/sections/Showcase.jsx

import React from 'react';
import { motion } from 'framer-motion';

const moments = [
  {
    eyebrow: 'Updated interface',
    title: 'A flagship, reimagined.',
    description:
      'Every pixel rebuilt from the ground up. Helm feels less like software and more like a cinematic command bridge — purposeful, calm, and decisive under pressure.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=85',
    align: 'left',
  },
  {
    eyebrow: 'New story content',
    title: 'Workflows that flow.',
    description:
      'Plans, sprints and OKRs stitch into chapters. Plot the arc of a quarter, see exactly where the story is heading, and rewrite it the moment the world shifts.',
    image:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=2400&q=85',
    align: 'right',
  },
  {
    eyebrow: 'And much more',
    title: 'Performance, everywhere.',
    description:
      'Local-first engine. Edge sync. Helm renders before you blink, collaborates in under 40ms, and works on a plane with three bars of LTE — quietly.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85',
    align: 'left',
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative bg-navy-deep">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px divider-gold-thick opacity-70"
      />

      <div className="relative section-spacing pb-12">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="eyebrow mb-6">The experience like never before</p>
            <h2 className="headline-mega text-white text-[clamp(3rem,8vw,7.5rem)] mb-6">
              Discover the
              <br />
              <span className="headline-script text-gradient-gold normal-case">
                improvements brought
              </span>
              <br />
              by the remake.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              From new visuals to new exclusive workflows and many quality-of-life
              improvements, Helm is the most ambitious release we've ever shipped.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="space-y-0">
        {moments.map((m, i) => {
          const isLeft = m.align === 'left';
          return (
            <motion.section
              key={m.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
              className={[
                'relative cinematic-section flex items-center',
                i === 0 ? 'border-t border-gold/15' : '',
                'border-b border-gold/15',
              ].join(' ')}
              style={{ minHeight: 'clamp(540px, 75vh, 900px)' }}
            >
              <div className="cinematic-bg">
                <img
                  src={m.image}
                  alt=""
                  aria-hidden="true"
                  className="animate-ken-burns"
                />
                <div
                  aria-hidden="true"
                  className={[
                    'absolute inset-0',
                    isLeft ? 'scrim-side-left' : 'scrim-side-right',
                  ].join(' ')}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/70"
                />
                <div aria-hidden="true" className="absolute inset-0 grain" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto container-padding w-full py-16 md:py-24">
                <div
                  className={[
                    'grid grid-cols-1 lg:grid-cols-12',
                    isLeft ? '' : 'lg:text-right',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'lg:col-span-7',
                      isLeft ? '' : 'lg:col-start-6 lg:col-span-7',
                    ].join(' ')}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p
                        className={[
                          'text-[11px] font-bold uppercase tracking-ultra text-gold mb-5 inline-flex items-center gap-2',
                          isLeft ? '' : 'lg:flex-row-reverse',
                        ].join(' ')}
                      >
                        <span className="h-px w-10 bg-gold/60" />
                        {m.eyebrow}
                      </p>

                      <h3 className="headline-mega text-white text-[clamp(2.5rem,7vw,6rem)] mb-6">
                        {m.title}
                      </h3>

                      <p
                        className={[
                          'text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed',
                          isLeft ? '' : 'lg:ml-auto',
                        ].join(' ')}
                      >
                        {m.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
