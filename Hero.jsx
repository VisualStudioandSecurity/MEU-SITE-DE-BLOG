apps/web/src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="cinematic-section flex items-end pt-28 pb-32 md:pb-40">
      <div className="cinematic-bg">
        <img
          src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden="true"
          className="animate-ken-burns"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy-deep/65 to-navy-deep"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 scrim-side-left hidden md:block"
        />
        <div
          aria-hidden="true"
          className="absolute -inset-x-10 -top-20 h-[420px] bg-radial-gold opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 grain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hud-badge hud-badge-gold mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-ultra">
                Pre-order open · Ships July 9, 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="headline-mega text-white mb-6"
            >
              <span className="block text-[clamp(3.5rem,11vw,11rem)]">
                Take the helm
              </span>
              <span className="block text-[clamp(3.5rem,11vw,11rem)]">
                of <span className="headline-script text-gradient-gold">what's next.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              The cinematic command center for ambitious SaaS teams. Plan
              roadmaps, align every crew, and ship the work that actually
              moves the needle — from one flagship platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10"
            >
              <Button
                asChild
                className="btn-gold h-14 px-8 rounded-none border-0 text-sm font-bold uppercase tracking-widest"
              >
                <a href="#pricing" className="inline-flex items-center gap-2">
                  Pre-order Helm
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="btn-ghost-gold h-14 px-7 rounded-none text-sm font-bold uppercase tracking-widest"
              >
                <a href="#showcase" className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold/20 group-hover:bg-gold/30">
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                  Watch the trailer
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center -space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-navy-deep bg-gradient-to-br from-navy-elevated to-navy-surface"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9 / 5</span>
                  {' '}from 2,400+ teams
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="surface-elevated relative p-6 corner-marks">
              <p className="text-[10px] font-bold uppercase tracking-ultra text-gold/80 mb-4">
                Standard Edition
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-headline text-5xl text-foreground leading-none">
                  $24
                </span>
                <span className="text-xs text-muted-foreground">/seat / mo</span>
              </div>
              <p className="text-xs text-muted-foreground mb-5">
                Founder pricing — locked for life on annual plans.
              </p>
              <div className="divider-gold-thick mb-5" />
              <ul className="space-y-2 mb-6">
                {[
                  'Up to 10 members',
                  'Unlimited projects',
                  'GitHub & Slack sync',
                ].map((f) => (
                  <li
                    key={f}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-gold mt-0.5">›</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="btn-ghost-gold w-full h-11 rounded-none text-[11px] font-bold uppercase tracking-widest"
              >
                <a href="#pricing">Compare editions</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-gold/15"
        >
          <p className="text-[10px] font-bold uppercase tracking-ultra text-muted-foreground/60 mb-5">
            Trusted by forward-thinking crews
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 opacity-70">
            {['Atlas', 'Northwind', 'Vertex', 'Lumen', 'Orbital', 'Schooner'].map(
              (logo) => (
                <span
                  key={logo}
                  className="font-headline text-2xl tracking-tight text-muted-foreground"
                >
                  {logo}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 lg:right-10 z-10 hidden md:block">
        <motion.a
          href="#features"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          aria-label="Scroll"
        >
          <span className="text-[9px] font-bold uppercase tracking-ultra">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/70 to-transparent" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
