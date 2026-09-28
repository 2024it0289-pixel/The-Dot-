import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem, easeEditorial } from '../motion/MotionReveal';

interface ApproachViewProps {
  onOpenProjectInquiry: () => void;
}

export function ApproachView({ onOpenProjectInquiry }: ApproachViewProps) {
  const [selectedSprintWeek, setSelectedSprintWeek] = useState<number>(3);

  const sprintCadence = [
    {
      week: 1,
      title: 'Week 01: Strategic Ingestion',
      focus: 'Discover',
      objective: 'Heuristic teardown of existing funnel analytics and competitor product architecture.',
      deliverable: 'Diagnostic Friction Map & Prioritized Sprint Backlog',
    },
    {
      week: 2,
      title: 'Week 02: User Journeys & Wireframe Primitives',
      focus: 'Discover',
      objective: 'Low-fidelity architectural flows focusing on high-friction decision nodes.',
      deliverable: 'Scope Architecture & Interactive Wireframe Click-through',
    },
    {
      week: 3,
      title: 'Week 03: Visual Identity & Design Tokens',
      focus: 'Design',
      objective: 'Foundational typography, tactile surface hierarchy, color tokens, and elevation math.',
      deliverable: 'Figma Design Token System & Hero Surface Exploration',
    },
    {
      week: 4,
      title: 'Week 04: High-Density UI & Key Dashboards',
      focus: 'Design',
      objective: 'Designing core responsive screens with strict tabular data alignment.',
      deliverable: 'Core App / Web Platform High-Fidelity Figma Flows',
    },
    {
      week: 5,
      title: 'Week 05: Motion & Interactive Prototyping',
      focus: 'Design',
      objective: 'Micro-interactions, state transitions, validation feedback, and edge-case testing.',
      deliverable: 'Clickable Prototype Tested with 5 Real Stakeholders',
    },
    {
      week: 6,
      title: 'Week 06: Component System Documentation',
      focus: 'Design',
      objective: 'Locking auto-layout components, variant states, and engineering handoff rules.',
      deliverable: 'Comprehensive Design System Library & Asset Export',
    },
    {
      week: 7,
      title: 'Week 07: Semantic Code Architecture',
      focus: 'Build',
      objective: 'Setting up clean semantic markup, Tailwind tokens, and responsive layout structures.',
      deliverable: 'Staging Environment Live Deployment & CMS Setup',
    },
    {
      week: 8,
      title: 'Week 08: Interactivity, Micro-animations & Telemetry',
      focus: 'Build',
      objective: 'Wiring forms, custom animations with 60fps compositor curves, and event tracking.',
      deliverable: 'Functional Frontend Prototype with Live Data Hooks',
    },
    {
      week: 9,
      title: 'Week 09: Cross-Device QA & Performance Audit',
      focus: 'Build',
      objective: 'Lighthouse 95+ score validation, accessibility audits, and cross-browser stress tests.',
      deliverable: 'Performance Audit Report & Zero-Bug Certification',
    },
    {
      week: 10,
      title: 'Week 10: Production Cutover & Team Handover',
      focus: 'Build',
      objective: 'DNS cutover, client CMS training videos, and launching production traffic.',
      deliverable: 'Live Production Release + 30-Day Stabilization Warranty',
    },
  ];

  const activeCadence = sprintCadence[selectedSprintWeek - 1];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-8 lg:py-16 space-y-24">
      {/* Approach Hero & Creed */}
      <FadeInView yOffset={24} className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] uppercase tracking-wider font-semibold border border-[#dedad0]">
          <span className="w-2 h-2 rounded-full bg-[#785a00]" />
          <span>The Dot Studio Creed</span>
        </div>
        <h1 className="font-display text-[38px] sm:text-[56px] lg:text-[72px] text-[#1d1c16] tracking-tight leading-[1.08] font-extrabold text-balance">
          “Design is not art. Design is solving problems.”
        </h1>
        <p className="text-[18px] text-[#414848] leading-relaxed max-w-2xl">
          We eschew vanity decoration and agency jargon in favor of ruthless clarity. We treat your digital product as an economic engine, not a portfolio playground.
        </p>
      </FadeInView>

      {/* 3-Step Process Row */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 01 */}
        <StaggerItem>
          <div className="bg-[#f2ede4] rounded-3xl p-8 space-y-6 border border-[#dedad0] shadow-xs h-full hover:border-[#1a3a3a]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-white text-[#1d1c16] font-display text-[16px] font-bold flex items-center justify-center border border-[#dedad0]">
                01
              </span>
              <span className="text-[12px] text-[#414848] uppercase tracking-wider font-semibold">
                Week 1–2
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-[22px] font-bold text-[#1d1c16]">
                Discover &amp; Diagnose
              </h3>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                We interrogate your business fundamentals, interview key stakeholders, audit current funnel analytics, and map user friction before drafting a single pixel.
              </p>
            </div>
            <div className="pt-4 border-t border-[#dedad0] space-y-1 text-[13px] text-[#1d1c16]">
              <p className="font-semibold text-[#414848] text-[11px] uppercase tracking-wider">
                Key Deliverable
              </p>
              <p className="font-medium">Product Strategy Blueprint &amp; Scope Architecture</p>
            </div>
          </div>
        </StaggerItem>

        {/* Step 02 */}
        <StaggerItem>
          <div className="bg-[#f2ede4] rounded-3xl p-8 space-y-6 border border-[#dedad0] shadow-xs h-full hover:border-[#1a3a3a]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-white text-[#1d1c16] font-display text-[16px] font-bold flex items-center justify-center border border-[#dedad0]">
                02
              </span>
              <span className="text-[12px] text-[#414848] uppercase tracking-wider font-semibold">
                Week 3–6
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-[22px] font-bold text-[#1d1c16]">
                Design &amp; Prototype
              </h3>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                Rapid iterative cycles in Figma. We craft modular design systems, clickable high-fidelity flows, and test critical interaction moments directly with real users.
              </p>
            </div>
            <div className="pt-4 border-t border-[#dedad0] space-y-1 text-[13px] text-[#1d1c16]">
              <p className="font-semibold text-[#414848] text-[11px] uppercase tracking-wider">
                Key Deliverable
              </p>
              <p className="font-medium">Fully Interactive Prototype &amp; Design System Tokens</p>
            </div>
          </div>
        </StaggerItem>

        {/* Step 03 */}
        <StaggerItem>
          <div className="bg-[#f2ede4] rounded-3xl p-8 space-y-6 border border-[#dedad0] shadow-xs h-full hover:border-[#1a3a3a]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-white text-[#1d1c16] font-display text-[16px] font-bold flex items-center justify-center border border-[#dedad0]">
                03
              </span>
              <span className="text-[12px] text-[#414848] uppercase tracking-wider font-semibold">
                Week 7–10
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-[22px] font-bold text-[#1d1c16]">
                Build &amp; Scale
              </h3>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                Clean, semantic frontend engineering or custom Webflow builds with performance-optimized animations, complete accessibility audits, and telemetry setup.
              </p>
            </div>
            <div className="pt-4 border-t border-[#dedad0] space-y-1 text-[13px] text-[#1d1c16]">
              <p className="font-semibold text-[#414848] text-[11px] uppercase tracking-wider">
                Key Deliverable
              </p>
              <p className="font-medium">Production-Ready Site / App &amp; CMS Training</p>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>

      {/* Interactive 10-Week Sprint Cadence Explorer */}
      <FadeInView yOffset={24} className="bg-[#f8f3e9] rounded-3xl p-6 sm:p-10 border border-[#dedad0] shadow-sm space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#785a00] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#785a00]" />
            <span>Interactive Sprint Timeline</span>
          </div>
          <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-[#1d1c16] tracking-tight">
            How a 10-Week Dot Sprint unfolds day by day.
          </h2>
          <p className="text-[15px] text-[#414848]">
            Click any week below to inspect milestones, working sessions, and concrete output deliverables.
          </p>
        </div>

        {/* Week Tabs */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-[#dedad0]">
          {sprintCadence.map((sc) => {
            const isSelected = selectedSprintWeek === sc.week;
            return (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={sc.week}
                type="button"
                onClick={() => setSelectedSprintWeek(sc.week)}
                className={`px-3.5 py-2 rounded-xl text-[12px] font-mono font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1a3a3a] text-white shadow-xs'
                    : 'bg-[#f2ede4] text-[#414848] hover:text-[#1d1c16]'
                }`}
              >
                W0{sc.week}
              </motion.button>
            );
          })}
        </div>

        {/* Active Week Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCadence.week}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: easeEditorial }}
            className="bg-[#f2ede4] rounded-2xl p-6 sm:p-8 border border-[#dedad0] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#1a3a3a] text-[#c7e9e8] text-[11px] font-semibold uppercase">
                  {activeCadence.focus} Phase
                </span>
                <span className="font-mono text-[13px] text-[#785a00] font-bold">
                  Sprint Week {activeCadence.week} of 10
                </span>
              </div>
              <h3 className="font-display text-[22px] sm:text-[26px] font-bold text-[#1d1c16]">
                {activeCadence.title}
              </h3>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                {activeCadence.objective}
              </p>
            </div>

            <div className="md:col-span-4 p-5 rounded-xl bg-white border border-[#dedad0] space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#785a00] font-semibold block">
                Friday Milestone Handoff
              </span>
              <p className="text-[14px] font-bold text-[#1d1c16] leading-snug">
                {activeCadence.deliverable}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </FadeInView>

      {/* 4 Studio Non-Negotiables */}
      <div className="space-y-8">
        <FadeInView yOffset={20} className="space-y-2">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#785a00] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#785a00]" />
            <span>Operational Integrity</span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[38px] font-bold text-[#1d1c16] tracking-tight">
            Our 4 non-negotiable execution principles.
          </h2>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StaggerItem>
            <div className="p-8 rounded-3xl bg-[#f8f3e9] border border-[#dedad0] space-y-3 h-full hover:border-[#1a3a3a]/40 transition-colors">
              <span className="font-display text-[20px] font-bold text-[#785a00]">01. Direct Partner Immersion</span>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                You will never be handed off to an associate designer or an intern who just learned Figma. Our founding partners do the wireframing, the code architecture, and attend every review.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-3xl bg-[#f8f3e9] border border-[#dedad0] space-y-3 h-full hover:border-[#1a3a3a]/40 transition-colors">
              <span className="font-display text-[20px] font-bold text-[#785a00]">02. Zero Hourly Padding</span>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                Hourly billing creates perverse economic incentives for agencies to work slowly. We operate with fixed-fee, value-aligned sprints where our incentive is to ship rapidly with ruthless precision.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-3xl bg-[#f8f3e9] border border-[#dedad0] space-y-3 h-full hover:border-[#1a3a3a]/40 transition-colors">
              <span className="font-display text-[20px] font-bold text-[#785a00]">03. Production Code Rigor</span>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                We never stop at static Figma files. We engineer fully functional Webflow architectures or React/Next.js codebases, complete with 95+ Google Lighthouse scores and zero bloat.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-3xl bg-[#f8f3e9] border border-[#dedad0] space-y-3 h-full hover:border-[#1a3a3a]/40 transition-colors">
              <span className="font-display text-[20px] font-bold text-[#785a00]">04. Quantitative Attribution</span>
              <p className="text-[15px] text-[#414848] leading-relaxed">
                Design that doesn't produce measurable business outcomes is decoration. We establish baseline metrics (onboarding time, lead conversion, retention) and engineer the product to move them.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Conversion Banner */}
      <FadeInView yOffset={24}>
        <div className="p-10 rounded-3xl bg-[#1a3a3a] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#2d4c4c]">
          <div className="space-y-2">
            <h3 className="font-display text-[24px] sm:text-[28px] font-bold">
              Ready to experience a predictable product sprint?
            </h3>
            <p className="text-[14px] text-[#83a4a3]">
              Let’s review your roadmap and schedule an initial diagnostic sprint session.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onOpenProjectInquiry}
            className="px-8 py-3.5 rounded-xl bg-[#ffce5d] text-[#755700] hover:bg-[#ffdf9d] font-bold text-[14px] whitespace-nowrap shadow-md cursor-pointer transition-colors"
          >
            Discuss a project →
          </motion.button>
        </div>
      </FadeInView>
    </div>
  );
}
