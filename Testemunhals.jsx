apps/web/src/components/sections/Testimonials.jsx

import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    quote:
      'Helm replaced four tools and a weekly status meeting. We ship twice as often and our standups are over before the coffee gets cold.',
    name: 'Amelia Hart',
    role: 'VP Product',
    company: 'Northwind',
    rating: 5,
    highlight: true,
  },
  {
    quote:
      "It's the first ops tool that actually feels designed. The whole team genuinely enjoys opening it. That alone is worth the price.",
    name: 'Marcus Okafor',
    role: 'CTO',
    company: 'Atlas Labs',
    rating: 5,
  },
  {
    quote:
      'We migrated 140 people in a single afternoon. Six months later, our engineering velocity is up 38% and our meeting load is down 60%.',
    name: 'Priya Raman',
    role: 'Chief of Staff',
    company: 'Vertex',
    rating: 5,
  },
  {
    quote:
      "The Collector's Edition onboarding was white-glove from day one. Helm feels less like a vendor and more like part of the leadership team.",
    name: 'Jonas Lindqvist',
    role: 'COO',
    company: 'Lumen',
    rating: 5,
    highlight: true,
  },
  {
    quote:
      'I have never seen a tool this opinionated land this softly with a team. Six weeks in, no one wants to go back.',
    name: 'Sasha Beltran',
    role: 'Head of Design',
    company: 'Orbital',
    rating: 5,
  },
  {
    quote:
      "The cinematic interface might be why I picked it. The fact it cut our roadmap cycle in half is why we re-signed for three years.",
    name: 'Elena Petrov',
    role: 'CEO',
    company: 'Schooner',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative section-spacing overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px divider-gold-thick opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-radial-teal opacity-40 -z-10"
      />

      <div className="relative max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-20"
        >
          <p className="eyebrow mb-6">Voices from the crew</p>
          <h2 className="headline-mega text-white text-[clamp(3rem,8vw,7.5rem)] mb-6">
            Loved by the teams
            <br />
            <span className="headline-script text-gradient-gold normal-case">
              who actually ship.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            From scrappy founders to flagship orgs, here's what teams say after
            their first 90 days at the helm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-gold/15 grid grid-cols-2 md:grid-cols-4 gap-y-8"
        >
          {[
            { stat: '4.9 / 5', label: 'Avg. rating' },
            { stat: '92 NPS', label: 'Customer love' },
            { stat: '< 1h', label: 'Avg. response' },
            { stat: '98%', label: 'Re-sign rate' },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-headline text-4xl md:text-5xl text-gradient-gold leading-none mb-2">
                {item.stat}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-ultra text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
