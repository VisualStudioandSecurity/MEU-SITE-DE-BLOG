apps/web/src/components/sections/Pricing.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PricingCard from '@/components/PricingCard';

const editions = [
  {
    key: 'standard',
    edition: 'Standard Edition',
    tagline: 'Set sail with the essentials.',
    price: '$24',
    annualPrice: '$24',
    monthlyPrice: '$29',
    description:
      'Everything a small crew needs to plan, ship and stay aligned from day one. The complete Helm experience, no compromises.',
    features: [
      'Up to 10 members',
      'Unlimited projects, docs & wikis',
      'Roadmaps, sprints & OKRs',
      'GitHub, Slack & Linear sync',
      '14-day version history',
      'Community support',
      'Pre-order bonus: founder pricing locked',
    ],
    cta: 'Pre-order Standard',
    image:
      'https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1600&q=85',
    highlighted: false,
  },
  {
    key: 'deluxe',
    edition: 'Deluxe Edition',
    tagline: 'The flagship experience.',
    price: '$49',
    annualPrice: '$49',
    monthlyPrice: '$59',
    description:
      'The base experience plus the Master Operator Pack and the Velocity Naval Pack. Everything in Standard, supercharged.',
    features: [
      'Unlimited members',
      'Advanced automations & AI workflows',
      'Custom dashboards & reports',
      '80+ native integrations',
      '12-month version history',
      'Priority chat support (4h SLA)',
      'Guest & client portals',
      'Pre-order bonus: Deluxe theme pack',
    ],
    cta: 'Pre-order Deluxe',
    ribbon: 'Most popular',
    image:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=85',
    highlighted: true,
  },
  {
    key: 'collectors',
    edition: "Collector's Edition",
    tagline: 'Premium, in every detail.',
    price: 'Custom',
    annualPrice: 'Custom',
    monthlyPrice: 'Custom',
    description:
      "Everything in Deluxe, plus premium collectible items, white-glove onboarding, and the partnership your enterprise demands.",
    features: [
      'Everything in Deluxe',
      'SSO, SCIM & advanced RBAC',
      'SOC 2, ISO 27001, HIPAA',
      'Regional data residency (EU/US/APAC)',
      'Dedicated CSM & onboarding engineer',
      'Uptime SLA 99.99% with credits',
      'White-glove migration',
      'Limited-edition Helm steel keycard',
    ],
    cta: 'Talk to sales',
    image:
      'https://images.unsplash.com/photo-1518562923155-4cde4d9a2b28?auto=format&fit=crop&w=1600&q=85',
    highlighted: false,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const [activeKey, setActiveKey] = useState('deluxe');

  const buildPlan = (e) => ({
    ...e,
    price: e.key === 'collectors' ? 'Custom' : annual ? e.annualPrice : e.monthlyPrice,
    period: e.key === 'collectors'
      ? '— talk to sales'
      : annual
        ? '/seat /mo, billed annually'
        : '/seat /month',
  });

  const active = editions.find((e) => e.key === activeKey);

  return (
    <section
      id="pricing"
      className="relative section-spacing overflow-hidden bg-navy-deep"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px divider-gold-thick opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-radial-gold opacity-50 -z-10"
      />

      <div className="relative max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-14"
        >
          <p className="eyebrow mb-6">Choose your edition</p>
          <h2 className="headline-mega text-white text-[clamp(3rem,8vw,7.5rem)] mb-6">
            Three editions.
            <br />
            <span className="headline-script text-gradient-gold normal-case">
              one destination.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Whether you're a small crew or a flagship fleet, there's a plan
            built for the way you sail. Pre-order today and get founder pricing
            for life.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-1 border border-border p-1 self-start">
            {editions.map((e) => (
              <button
                key={e.key}
                type="button"
                onClick={() => setActiveKey(e.key)}
                className={[
                  'px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all',
                  activeKey === e.key
                    ? 'btn-gold text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                ].join(' ')}
              >
                {e.edition.replace(' Edition', '')}
              </button>
            ))}
          </div>

          <div className="surface-card inline-flex items-center self-start md:self-auto p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={[
                'h-9 px-4 text-[11px] font-bold uppercase tracking-widest transition-all',
                !annual
                  ? 'btn-gold text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={[
                'h-9 px-4 text-[11px] font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2',
                annual
                  ? 'btn-gold text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              Annual
              <span
                className={[
                  'text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5',
                  annual
                    ? 'bg-primary-foreground/15 text-primary-foreground'
                    : 'bg-gold/15 text-gold',
                ].join(' ')}
              >
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey + (annual ? 'a' : 'm')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <PricingCard {...buildPlan(active)} index={0} />
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {editions.map((e) => (
            <button
              key={e.key}
              type="button"
              onClick={() => setActiveKey(e.key)}
              className={[
                'text-left p-5 transition-all duration-300 group',
                activeKey === e.key
                  ? 'surface-elevated border border-gold/40'
                  : 'surface-card hover:border-gold/25',
              ].join(' ')}
            >
              <div className="flex items-center justify-between mb-2">
                <p
                  className={[
                    'text-[10px] font-bold uppercase tracking-ultra',
                    activeKey === e.key ? 'text-gold' : 'text-muted-foreground',
                  ].join(' ')}
                >
                  {e.edition}
                </p>
                <span
                  className={[
                    'text-[10px] font-bold uppercase tracking-widest',
                    activeKey === e.key ? 'text-gold' : 'text-muted-foreground/60',
                  ].join(' ')}
                >
                  {e.key === 'collectors'
                    ? 'Custom'
                    : annual
                      ? `${e.annualPrice}/mo`
                      : `${e.monthlyPrice}/mo`}
                </span>
              </div>
              <p className="font-headline text-2xl text-foreground leading-tight">
                {e.tagline}
              </p>
            </button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-xs text-muted-foreground mt-12"
        >
          All editions include a 14-day free trial. No credit card required.
          Cancel anytime — your data is yours, always.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
