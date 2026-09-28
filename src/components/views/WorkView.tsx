import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroTactileArtifact } from '../HeroTactileArtifact';
import { CASE_STUDIES, ALL_CASE_STUDIES_ARCHIVE, FAQS } from '../../data/studioData';
import { CaseStudy } from '../../types';
import { FadeInView, StaggerContainer, StaggerItem, easeEditorial } from '../motion/MotionReveal';

interface WorkViewProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenProjectInquiry: (initialTopic?: string) => void;
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
}

export function WorkView({
  onSelectCaseStudy,
  onOpenProjectInquiry,
  onNavigateToServices,
  onNavigateToContact,
}: WorkViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [showFullArchive, setShowFullArchive] = useState<boolean>(false);

  const categories = ['All', 'Fintech', 'Logistics', 'B2B SaaS', 'Healthtech'];

  const displayedCases = showFullArchive
    ? selectedCategory === 'All'
      ? ALL_CASE_STUDIES_ARCHIVE
      : ALL_CASE_STUDIES_ARCHIVE.filter((c) => c.category === selectedCategory)
    : selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full text-[#1d1c16]">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 pt-8 lg:pt-16 pb-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeEditorial }}
            className="lg:col-span-7 flex flex-col items-start space-y-8"
          >
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeEditorial }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f2ede4] shadow-xs border border-[#dedad0]/60"
            >
              <span className="w-2 h-2 rounded-full bg-[#785a00] animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider text-[#414848] font-semibold">
                Independent Digital Product &amp; Growth Studio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: easeEditorial }}
              className="font-display text-[38px] sm:text-[52px] lg:text-[72px] xl:text-[84px] text-[#1d1c16] tracking-tight leading-[1.05] font-extrabold text-balance"
            >
              Digital experiences built to move business forward.
            </motion.h1>

            {/* Support Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: easeEditorial }}
              className="text-[16px] sm:text-[18px] text-[#414848] max-w-xl leading-relaxed"
            >
              We turn complex business challenges into clear brand systems, high-utility digital products, and high-converting platforms for ambitious B2B and funded teams.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: easeEditorial }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => onOpenProjectInquiry()}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#1a3a3a] text-white text-[15px] font-medium shadow-md hover:bg-[#012425] transition-colors duration-200 group cursor-pointer hover:shadow-lg"
              >
                <span>Discuss a project</span>
                <span className="w-6 h-6 rounded-full bg-[#012425] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                  <span className="material-symbols-outlined text-[15px] text-[#c7e9e8]">
                    arrow_forward
                  </span>
                </span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#featured-work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#f2ede4] hover:bg-[#ece8de] text-[#1d1c16] text-[15px] font-medium transition-colors duration-150 border border-[#dedad0]/60"
              >
                <span>See our work</span>
                <span className="material-symbols-outlined text-[18px] text-[#414848]">
                  arrow_downward
                </span>
              </motion.a>
            </motion.div>

            {/* Micro Meta Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: easeEditorial }}
              className="pt-6 flex flex-wrap items-center gap-6 text-[#414848] text-[12px] font-semibold tracking-wide"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                <span>Est. 2020</span>
              </div>
              <span className="text-[#dedad0]">/</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                <span>Direct Partner Execution</span>
              </div>
              <span className="text-[#dedad0]">/</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                <span>Fixed-Sprint Predictability</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Tactile Studio Artifact (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeEditorial }}
            className="lg:col-span-5"
          >
            <HeroTactileArtifact onOpenProjectInquiry={() => onOpenProjectInquiry()} />
          </motion.div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF & TRUST STRIP ================= */}
      <section className="w-full bg-[#f8f3e9] py-14 shadow-2xs border-y border-[#dedad0]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 flex flex-col items-center gap-8">
          <FadeInView yOffset={16}>
            <p className="text-[12px] uppercase tracking-widest text-[#414848] font-semibold text-center">
              Trusted by founders &amp; product leaders across B2B, Fintech, and venture-backed brands
            </p>
          </FadeInView>

          {/* Staggered Brand Wordmarks */}
          <StaggerContainer className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-85">
            {[
              { name: 'LinearScale' },
              { name: 'PayPulse' },
              { name: 'Aurum OS' },
              { name: 'Kora Health' },
              { name: 'Vela Freight' },
              { name: 'Omnia SaaS' },
            ].map((brand) => (
              <StaggerItem key={brand.name}>
                <div className="flex items-center gap-2 font-display text-[18px] font-bold tracking-tight text-[#1d1c16] hover:text-[#785a00] transition-colors cursor-default">
                  <span className="w-2 h-2 rounded-full bg-[#1d1c16]" />
                  <span>{brand.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= FEATURED WORK / SELECTED CASES ================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-20 lg:py-28" id="featured-work">
        {/* Section Header */}
        <FadeInView yOffset={24} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-[#414848] text-[12px] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#785a00]" />
              <span>Selected Client Engagements</span>
            </div>
            <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] text-[#1d1c16] tracking-tight leading-tight font-bold text-balance">
              Proof over promises. Work that shifted the needle.
            </h2>
          </div>
          <p className="text-[15px] text-[#414848] max-w-md leading-relaxed">
            Every case study below represents real strategic diagnosis, meticulous UI craftsmanship, and bottom-line revenue or efficiency impact.
          </p>
        </FadeInView>

        {/* Filter Bar */}
        <FadeInView yOffset={16} delay={0.1} className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#dedad0]">
          <span className="text-[12px] font-bold text-[#414848] uppercase tracking-wider mr-2">
            Filter:
          </span>
          {categories.map((cat) => (
            <motion.button
              whileTap={{ scale: 0.96 }}
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1a3a3a] text-white font-semibold'
                  : 'bg-[#f2ede4] text-[#414848] hover:text-[#1d1c16] hover:bg-[#ece8de]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
          {showFullArchive && (
            <span className="text-[12px] text-[#785a00] font-mono ml-auto">
              Archive Mode ({displayedCases.length} items)
            </span>
          )}
        </FadeInView>

        {/* Case Studies Display */}
        <div className="space-y-16">
          {displayedCases.map((cs) => {
            if (cs.highlightTeal) {
              return (
                /* Hero Teal Case Card (Kora Capital) */
                <FadeInView key={cs.id} yOffset={32} duration={0.75}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1a3a3a] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden relative group border border-[#2d4c4c]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-[#012425] text-[#c7e9e8] text-[11px] font-semibold">
                              {cs.number}
                            </span>
                            <span className="text-[13px] text-[#83a4a3]">
                              {cs.clientSubtitle}
                            </span>
                          </div>
                          <h3 className="font-display text-[32px] sm:text-[38px] text-white tracking-tight font-bold">
                            {cs.title}
                          </h3>
                          <p className="font-display text-[20px] text-[#abcdcc] leading-snug">
                            {cs.summary}
                          </p>
                          <p className="text-[15px] text-[#83a4a3] leading-relaxed">
                            {cs.description}
                          </p>
                        </div>

                        {/* Quantitative Impact Metric Card */}
                        <div className="p-6 rounded-2xl bg-[#012425] text-white shadow-sm space-y-2 border border-[#2d4c4c]">
                          <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
                            Verified Outcome
                          </span>
                          <p className="font-display text-[26px] sm:text-[30px] text-white font-bold tabular-nums">
                            {cs.impactMetric}
                          </p>
                          <p className="text-[13px] text-[#83a4a3]">
                            {cs.impactDetail}
                          </p>
                        </div>

                        {/* Scope Tags & Link */}
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-white/10 text-[#c7e9e8] text-[11px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div>
                          <button
                            type="button"
                            onClick={() => onSelectCaseStudy(cs)}
                            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#ffce5d] hover:underline group-hover:gap-3 transition-all duration-200 cursor-pointer"
                          >
                            <span>View complete case study</span>
                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Card Visual Display */}
                      <div className="lg:col-span-7">
                        <div
                          onClick={() => onSelectCaseStudy(cs)}
                          className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2.5 cursor-pointer group-hover:scale-[1.01] transition-transform duration-300"
                        >
                          <img
                            className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                            alt={cs.altText}
                            src={cs.image}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-2.5 rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="px-4 py-2 rounded-full bg-[#1a3a3a] text-white text-[12px] font-bold shadow-lg">
                              Click to Explore Full Breakdown
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeInView>
              );
            }

            return null;
          })}

          {/* 2-Column Split for Secondary Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedCases
              .filter((cs) => !cs.highlightTeal)
              .map((cs, idx) => (
                <FadeInView key={cs.id} yOffset={28} delay={idx * 0.1} duration={0.65}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#f8f3e9] rounded-3xl p-6 sm:p-10 shadow-sm border border-[#dedad0] flex flex-col justify-between space-y-8 h-full"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] font-semibold border border-[#dedad0]/60">
                          {cs.number}
                        </span>
                        <span className="text-[12px] text-[#414848] font-mono">
                          {cs.category}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display text-[28px] text-[#1d1c16] tracking-tight font-bold">
                          {cs.title}
                        </h3>
                        <p className="font-display text-[18px] text-[#414848] font-medium">
                          {cs.summary}
                        </p>
                      </div>

                      {/* Visual Snapshot */}
                      <div
                        onClick={() => onSelectCaseStudy(cs)}
                        className="relative rounded-2xl overflow-hidden shadow-sm bg-[#f2ede4] cursor-pointer group"
                      >
                        <img
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={cs.altText}
                          src={cs.image}
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Impact Badge */}
                      <div className="p-5 rounded-2xl bg-[#f2ede4] border border-[#dedad0] space-y-1">
                        <span className="text-[11px] uppercase tracking-wider text-[#785a00] font-semibold">
                          Key Metric
                        </span>
                        <p className="font-display text-[22px] font-bold text-[#1d1c16] tabular-nums">
                          {cs.impactMetric}
                        </p>
                        <p className="text-[13px] text-[#414848]">
                          {cs.impactDetail}
                        </p>
                      </div>

                      {/* Deliverables tags */}
                      <div className="flex flex-wrap gap-2">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] border border-[#dedad0]/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(cs)}
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#012425] hover:underline cursor-pointer pt-2"
                    >
                      <span>Read full project breakdown</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </motion.div>
                </FadeInView>
              ))}
          </div>
        </div>

        {/* Bottom Case Study Directory CTA */}
        <FadeInView yOffset={20} className="pt-16 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setShowFullArchive(!showFullArchive)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#f2ede4] hover:bg-[#ece8de] text-[#1d1c16] text-[15px] font-semibold shadow-xs border border-[#dedad0] transition-colors duration-200 cursor-pointer"
          >
            <span>
              {showFullArchive ? 'Collapse to Featured 3 Cases' : 'Explore all 18 client case studies in archive'}
            </span>
            <span className="material-symbols-outlined text-[20px]">
              {showFullArchive ? 'expand_less' : 'arrow_forward'}
            </span>
          </motion.button>
        </FadeInView>
      </section>

      {/* ================= CAPABILITIES PREVIEW SECTION ================= */}
      <section className="w-full bg-[#f8f3e9] py-20 lg:py-28 border-y border-[#dedad0]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 space-y-16">
          <FadeInView yOffset={24} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-[#414848] text-[12px] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#785a00]" />
                <span>Studio Capabilities</span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] text-[#1d1c16] tracking-tight leading-tight font-bold text-balance">
                Four specialized disciplines. One integrated partner.
              </h2>
            </div>
            <p className="text-[15px] text-[#414848] max-w-md leading-relaxed">
              We don't hand off PSDs or write disconnected strategy decks. Every capability is engineered for rapid shipping and measurable revenue growth.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Capability 01 */}
            <StaggerItem>
              <div className="bg-[#f2ede4] rounded-3xl p-8 lg:p-10 shadow-xs border border-[#dedad0] flex flex-col justify-between space-y-8 h-full hover:border-[#1a3a3a]/40 transition-colors">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[24px] font-bold text-[#414848]/40">01</span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1c16] text-[11px] font-semibold shadow-2xs border border-[#dedad0]">
                      Core Specialism
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-[#1d1c16]">
                      Product &amp; UX Design
                    </h3>
                    <p className="text-[15px] text-[#414848] leading-relaxed">
                      We untangle complex SaaS dashboards, multi-step customer portals, and internal tools into intuitive, frictionless workflows users actually love using.
                    </p>
                  </div>
                  <div className="space-y-2.5 pt-2 text-[13px] text-[#1d1c16]">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>End-to-end UX wireframing &amp; interactive Figma prototypes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Enterprise design systems (Tokens, Auto-layout, Documentation)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>User testing, cognitive walkthroughs, &amp; friction analysis</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#414848] text-[12px] border-t border-[#dedad0]/60">
                  <span>Best for: Seed to Series-B SaaS</span>
                  <button
                    type="button"
                    onClick={onNavigateToServices}
                    className="font-semibold text-[#012425] hover:underline"
                  >
                    6–12 week engagements →
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* Capability 02 */}
            <StaggerItem>
              <div className="bg-[#f2ede4] rounded-3xl p-8 lg:p-10 shadow-xs border border-[#dedad0] flex flex-col justify-between space-y-8 h-full hover:border-[#1a3a3a]/40 transition-colors">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[24px] font-bold text-[#414848]/40">02</span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1c16] text-[11px] font-semibold shadow-2xs border border-[#dedad0]">
                      High Demand
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-[#1d1c16]">
                      Websites &amp; Digital Platforms
                    </h3>
                    <p className="text-[15px] text-[#414848] leading-relaxed">
                      Marketing websites engineered for extreme performance. Semantic Webflow builds, custom micro-interactions, responsive precision, and effortless client editing.
                    </p>
                  </div>
                  <div className="space-y-2.5 pt-2 text-[13px] text-[#1d1c16]">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Bespoke Webflow development &amp; client-first architecture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Next.js / Headless web engineering &amp; CMS setups</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>95+ Google Lighthouse scores, SEO structuring, &amp; speed audits</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#414848] text-[12px] border-t border-[#dedad0]/60">
                  <span>Best for: Scaling B2B &amp; Growth Brands</span>
                  <button
                    type="button"
                    onClick={onNavigateToServices}
                    className="font-semibold text-[#012425] hover:underline"
                  >
                    4–8 week sprint cycles →
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* Capability 03 */}
            <StaggerItem>
              <div className="bg-[#f2ede4] rounded-3xl p-8 lg:p-10 shadow-xs border border-[#dedad0] flex flex-col justify-between space-y-8 h-full hover:border-[#1a3a3a]/40 transition-colors">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[24px] font-bold text-[#414848]/40">03</span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1c16] text-[11px] font-semibold shadow-2xs border border-[#dedad0]">
                      Strategic
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-[#1d1c16]">
                      Brand &amp; Digital Identity
                    </h3>
                    <p className="text-[15px] text-[#414848] leading-relaxed">
                      Transformational visual identities built specifically for modern digital surfaces. We craft distinct systems that elevate enterprise credibility and valuation.
                    </p>
                  </div>
                  <div className="space-y-2.5 pt-2 text-[13px] text-[#1d1c16]">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Strategic brand positioning, narrative, &amp; voice direction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Logo suites, typographic palettes, &amp; comprehensive brand books</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Digital collateral, pitch decks, &amp; social motion templates</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#414848] text-[12px] border-t border-[#dedad0]/60">
                  <span>Best for: Category Challengers</span>
                  <button
                    type="button"
                    onClick={onNavigateToServices}
                    className="font-semibold text-[#012425] hover:underline"
                  >
                    3–6 week sprint packages →
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* Capability 04 */}
            <StaggerItem>
              <div className="bg-[#f2ede4] rounded-3xl p-8 lg:p-10 shadow-xs border border-[#dedad0] flex flex-col justify-between space-y-8 h-full hover:border-[#1a3a3a]/40 transition-colors">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[24px] font-bold text-[#414848]/40">04</span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1c16] text-[11px] font-semibold shadow-2xs border border-[#dedad0]">
                      Revenue Impact
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-[#1d1c16]">
                      Growth &amp; Conversion Enablement
                    </h3>
                    <p className="text-[15px] text-[#414848] leading-relaxed">
                      Systematic Conversion Rate Optimization (CRO), data-backed landing page sprints, and funnel audits that extract maximum enterprise value from traffic.
                    </p>
                  </div>
                  <div className="space-y-2.5 pt-2 text-[13px] text-[#1d1c16]">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Quantitative funnel teardowns &amp; behavioral heatmap telemetry</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>High-velocity multi-variant landing page experiments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                      <span>Post-click messaging consistency &amp; demo request funnels</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-[#414848] text-[12px] border-t border-[#dedad0]/60">
                  <span>Best for: Revenue Operations &amp; Marketers</span>
                  <button
                    type="button"
                    onClick={onNavigateToServices}
                    className="font-semibold text-[#012425] hover:underline"
                  >
                    Monthly Growth Retainers →
                  </button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ================= VERIFIED CLIENT VOICE ================= */}
      <section className="w-full bg-[#fef9ef] py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
          <FadeInView yOffset={24} duration={0.75}>
            <div className="bg-[#f2ede4] rounded-3xl p-8 lg:p-16 shadow-md border border-[#dedad0] relative overflow-hidden">
              <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-[#dedad0] opacity-30 select-none pointer-events-none">
                format_quote
              </span>
              <div className="relative z-10 max-w-4xl space-y-8">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 text-[#785a00]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[20px] fill text-[#785a00]"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[12px] text-[#414848] font-semibold">
                    Verified Client Review · Series-A Founder
                  </span>
                </div>
                <blockquote className="font-display text-[26px] sm:text-[34px] lg:text-[44px] text-[#1d1c16] tracking-tight font-bold leading-snug">
                  “The Dot gave us what three previous agencies couldn’t: surgical design execution combined with genuine commercial acumen. Our conversion doubled in week three.”
                </blockquote>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#dedad0] border border-[#dedad0]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Marcus Sterling portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnO1iShgAAFaMKQSnrPcYKIz6EofXFoxwwlClCH0n4AIeMjayzZHZzQupxFHXgGG4fJ7HdIBzDzcQonpf0JkK9S3s_Z42Vc6nPC65-WnOdZNqUstxJ1i0uCt9RGBnoYwrgPTldBVrk5nQn_qTEYZB18s7gy4amjW6WhD0smW33-G4k5WhefdolYM39kEFUuNLqnXOmL_xHC7Nnk8NDy3wcMikBvhAtGHYVQ1sx72OwgZRD21kNhZeq"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[18px] font-bold text-[#1d1c16]">
                      Marcus Sterling
                    </p>
                    <p className="text-[13px] text-[#414848]">
                      Founder &amp; Chief Executive Officer, Kora Capital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ================= BUYER FAQ ACCORDION ================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FAQ Left Header */}
          <FadeInView yOffset={20} className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#414848] text-[12px] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#785a00]" />
              <span>Frequently Addressed</span>
            </div>
            <h2 className="font-display text-[32px] sm:text-[44px] text-[#1d1c16] tracking-tight leading-tight font-bold">
              Clear answers for decisive leaders.
            </h2>
            <p className="text-[15px] text-[#414848] leading-relaxed">
              Everything you need to know about working with The Dot, our commercial structure, and sprint pacing.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#012425] hover:underline cursor-pointer"
              >
                <span>Have a unique question? Message us</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </FadeInView>

          {/* FAQ Right Accordions */}
          <FadeInView yOffset={24} delay={0.1} className="lg:col-span-7 space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  onClick={() => toggleFaq(faq.id)}
                  className="p-6 rounded-2xl bg-[#f2ede4] hover:bg-[#ece8de] transition-colors cursor-pointer border border-[#dedad0]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-display text-[17px] font-bold text-[#1d1c16]">
                      {faq.question}
                    </h4>
                    <span
                      className={`material-symbols-outlined text-[#414848] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: easeEditorial }}
                      className="pt-4 text-[#414848] text-[15px] leading-relaxed border-t border-[#dedad0]/60 mt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </FadeInView>
        </div>
      </section>

      {/* ================= FINAL CONVERSION BANNER ================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 pb-20">
        <FadeInView yOffset={32} duration={0.8}>
          <div className="w-full bg-[#1a3a3a] text-white rounded-3xl p-8 sm:p-12 lg:p-20 relative overflow-hidden shadow-2xl border border-[#2d4c4c]">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#012425]/50 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#012425] text-[#c7e9e8] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ffdf9d] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Start A Conversation
                </span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[56px] text-white tracking-tight leading-tight font-bold text-balance">
                Have a complex challenge ready for a solution?
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#83a4a3] leading-relaxed">
                Let’s diagnose your product and digital platform with our senior partners. No generic sales decks — just honest critique, actionable roadmap steps, and verified velocity.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => onOpenProjectInquiry()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#ffce5d] text-[#755700] hover:bg-[#ffdf9d] text-[15px] font-bold shadow-md transition-colors duration-200 cursor-pointer"
                >
                  <span>Discuss your project</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </motion.button>
                <a
                  href="mailto:hello@thedot.studio"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#012425] text-white text-[15px] font-medium hover:bg-[#2d4c4c] transition-colors border border-[#2d4c4c]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#c7e9e8]">
                    mail
                  </span>
                  <span>hello@thedot.studio</span>
                </a>
              </div>
              <div className="pt-4 flex items-center gap-3 text-[#83a4a3] text-[13px]">
                <span className="w-2 h-2 rounded-full bg-[#f0c050]" />
                <span>Guaranteed partner response within 24 business hours. No spam, ever.</span>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
