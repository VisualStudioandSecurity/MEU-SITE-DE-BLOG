apps/web/src/components/sections/Features.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap, GitBranch, ShieldCheck } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    eyebrow: 'Command center',
    title: 'Plan at flagship scale.',
    description:
      'Replace a dozen dashboards with one cinematic workspace. Roadmaps, sprints, OKRs and metrics — every plan, in a single source of truth your whole crew can steer by.',
    bullets: [
      'Live, multi-team roadmaps with dependencies',
      'OKRs that auto-roll up to outcomes',
      'Capacity, milestones and risk on one canvas',
    ],
    icon: Compass,
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    reverse: false,
  },
  {
    eyebrow: 'Velocity engine',
    title: 'Ship faster, with less drag.',
    description:
      'Automations that learn your rhythm. Helm handles the repetitive ops work — handoffs, approvals, status updates — so your team compounds focus hours into shipped features.',
    bullets: [
      'AI-powered triage and code review queueing',
      'Custom rituals: standups, reviews, retros',
      'Async-first updates with zero meeting tax',
    ],
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    reverse: true,
  },
  {
    eyebrow: 'Integrations',
    title: 'Native, never brittle.',
    description:
      'Deep, two-way sync with the 80+ tools your team already lives in — GitHub, Linear, Slack, Notion, Figma, Stripe, Datadog. No more Zaps held together with duct tape.',
    bullets: [
      'Bi-directional GitHub, Linear & Jira sync',
      'Slack, MS Teams & Discord deep links',
      'Open API + webhooks for everything else',
    ],
    icon: GitBranch,
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80',
    reverse: false,
  },
  {
    eyebrow: 'Trust',
    title: 'Enterprise-grade, by default.',
    description:
      'SOC 2 Type II, ISO 27001, GDPR, HIPAA. Zero-knowledge encryption, regional data residency, customer-managed keys, and an immutable audit trail on every action.',
    bullets: [
      'SSO via SAML, OIDC; SCIM provisioning',
      'Role-based access with custom policies',
      '24-month immutable audit logs',
    ],
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1600&q=80',
    reverse: true,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative section-spacing overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px divider-gold opacity-60"
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
          className="max-w-4xl mb-24"
        >
          <p className="eyebrow mb-6">A renewed, enhanced experience</p>
          <h2 className="headline-mega text-white text-[clamp(3rem,8vw,7.5rem)] mb-6">
            Everything the modern crew
            <br />
            <span className="headline-script text-gradient-gold normal-case">
              was missing.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Four disciplines, one cinematic surface. Helm gives ambitious teams
            the tools to operate with the rigor of a flagship and the agility
            of a schooner.
          </p>
        </motion.div>

        <div className="space-y-32 lg:space-y-44">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              number={i + 1}
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              bullets={feature.bullets}
              icon={feature.icon}
              image={feature.image}
              reverse={feature.reverse}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-y-10 text-left border-t border-gold/15 pt-14"
        >
          {[
            { stat: '2,400+', label: 'Teams aboard' },
            { stat: '99.99%', label: 'Uptime SLA' },
            { stat: '18 min', label: 'Setup time' },
            { stat: '12×', label: 'Faster reviews' },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-headline text-5xl md:text-6xl text-gradient-gold leading-none mb-2">
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

export default Features;
