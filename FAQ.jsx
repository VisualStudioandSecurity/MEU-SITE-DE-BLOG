apps/web/src/components/sections/FAQ.jsx

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'When does Helm officially launch?',
    a: "Helm v2.0 enters general availability on July 9, 2026. Pre-orders ship on launch day with 30 days of full access included before billing starts. Early-access seats are already live for Deluxe and Collector's Edition customers.",
  },
  {
    q: 'Can I migrate from Notion, Linear, Asana, or Jira?',
    a: "Yes. Helm includes one-click importers for Notion, Linear, Asana, Jira, ClickUp, Trello and Monday. Collector's Edition customers also get a dedicated migration engineer who handles the entire move for you, free of charge.",
  },
  {
    q: 'Does Helm work offline?',
    a: 'Helm is local-first. All your data lives on-device and syncs through our edge network when you\'re online. You can plan, write and ship from a plane, a train or a coffee shop with three bars of LTE — and everything stitches back together cleanly.',
  },
  {
    q: 'How does pricing work for the team?',
    a: "Standard and Deluxe are billed per active seat, monthly or annually. Annual saves 17%. The Collector's Edition is a flat-rate enterprise contract — talk to sales for a quote tailored to your headcount, region and contract length.",
  },
  {
    q: 'What about security and compliance?',
    a: 'Helm is SOC 2 Type II, ISO 27001, GDPR, HIPAA and CCPA compliant. We support SSO via SAML and OIDC, SCIM provisioning, regional data residency in EU/US/APAC, customer-managed encryption keys, and a 24-month immutable audit log.',
  },
  {
    q: 'Can I rebrand Helm as my own template?',
    a: "Absolutely — that's exactly what this template is built for. Replace the brand name, swap the logo SVG in `Logo.jsx`, adjust the gold/teal hues in `index.css`, and you've got a completely new, premium product surface in under an hour.",
  },
  {
    q: 'Is there a free trial?',
    a: 'Every plan starts with a 14-day full-feature trial — no credit card required. Cancel any time and keep an export of all your data, on us.',
  },
  {
    q: 'How does support work?',
    a: "Standard includes community + 48h email. Deluxe includes priority chat with a 4-hour SLA. Collector's Edition includes a dedicated CSM, a private Slack channel, and a 1-hour SLA for production-impacting issues, 24/7.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative section-spacing overflow-hidden bg-navy-deep"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px divider-gold-thick opacity-70"
      />

      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
          >
            <p className="eyebrow mb-6">Questions, answered</p>
            <h2 className="headline-mega text-white text-[clamp(2.75rem,6vw,5.5rem)] mb-6">
              Everything
              <br />
              <span className="headline-script text-gradient-gold normal-case">
                you need to know.
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Still have questions? Reach out — we usually reply within an
              hour, even on weekends.
            </p>

            <Button
              asChild
              variant="ghost"
              className="btn-ghost-gold h-12 px-6 rounded-none text-[12px] font-bold uppercase tracking-widest"
            >
              <a href="#signup" className="inline-flex items-center gap-2">
                Talk to the team
                <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Accordion
              type="single"
              collapsible
              className="surface-card divide-y divide-border/60"
            >
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-0 group px-6 md:px-8"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] md:text-base font-semibold uppercase tracking-wide text-foreground hover:text-gold hover:no-underline group-data-[state=open]:text-gold transition-colors [&>svg]:text-gold/70 [&>svg]:transition-transform">
