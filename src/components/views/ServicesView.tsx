import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../../data/studioData';
import { SprintCalculator } from '../SprintCalculator';
import { FadeInView, StaggerContainer, StaggerItem, easeEditorial } from '../motion/MotionReveal';

interface ServicesViewProps {
  onOpenProjectInquiry: (serviceName?: string) => void;
}

export function ServicesView({ onOpenProjectInquiry }: ServicesViewProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-8 lg:py-16 space-y-20">
      {/* Services Header */}
      <FadeInView yOffset={24} className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] uppercase tracking-wider font-semibold border border-[#dedad0]">
          <span className="w-2 h-2 rounded-full bg-[#785a00]" />
          <span>Studio Capabilities &amp; Commercial Terms</span>
        </div>
        <h1 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] text-[#1d1c16] tracking-tight leading-tight font-extrabold text-balance">
          Ruthless craft. Predictable sprint velocity.
        </h1>
        <p className="text-[17px] text-[#414848] leading-relaxed">
          We combine product strategy, world-class interface aesthetics, and production-grade engineering under one roof. No disconnected vendor handoffs, no bloated retainers.
        </p>
      </FadeInView>

      {/* 4 Core Disciplines Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => {
          const isSelected = selectedServiceId === service.id;
          return (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedServiceId(service.id)}
                className={`rounded-3xl p-8 lg:p-10 border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-8 h-full ${
                  isSelected
                    ? 'bg-[#f2ede4] border-[#1a3a3a] shadow-md ring-1 ring-[#1a3a3a]'
                    : 'bg-[#f8f3e9] border-[#dedad0] hover:bg-[#f2ede4]'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[24px] font-bold text-[#414848]/40">
                      {service.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-[#1d1c16] text-[11px] font-semibold border border-[#dedad0]">
                      {service.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-[24px] font-bold text-[#1d1c16]">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-[#414848] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-2.5 pt-2 text-[13px] text-[#1d1c16]">
                    {service.checklist.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dedad0] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#414848] block">
                      Starting Investment
                    </span>
                    <span className="font-display text-[18px] font-bold text-[#1a3a3a] tabular-nums">
                      {service.startingTier}
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProjectInquiry(service.title);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#1a3a3a] hover:bg-[#012425] text-white text-[12px] font-bold shadow-xs transition-colors"
                  >
                    Book This Sprint →
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Deep-Dive Inspection Card of Selected Service */}
      <FadeInView yOffset={24}>
        <div className="bg-[#1a3a3a] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#2d4c4c] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2d4c4c] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
                Discipline Deep-Dive: {activeService.number}
              </span>
              <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
                {activeService.title}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[12px] text-[#83a4a3] block">Typical Cadence:</span>
              <span className="font-mono text-[14px] text-[#c7e9e8] font-bold">
                {activeService.duration}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: easeEditorial }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h4 className="font-display text-[16px] font-bold text-[#c7e9e8] uppercase tracking-wider">
                  Guaranteed Deliverables Package
                </h4>
                <div className="space-y-3 text-[14px]">
                  {activeService.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#012425] border border-[#2d4c4c]">
                      <span className="material-symbols-outlined text-[18px] text-[#ffce5d] shrink-0 mt-0.5">
                        task_alt
                      </span>
                      <span className="text-[#f5f0e6]">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex flex-col justify-between">
                <div className="p-6 rounded-2xl bg-[#012425] border border-[#2d4c4c] space-y-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
                    Client Profile Fit
                  </span>
                  <p className="font-display text-[20px] font-bold text-white">
                    {activeService.bestFor}
                  </p>
                  <p className="text-[14px] text-[#83a4a3] leading-relaxed">
                    Specifically tailored for teams who have validated market product-market fit and need to replace prototype UI with an institutional system that converts enterprise buyers.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  onClick={() => onOpenProjectInquiry(activeService.title)}
                  className="w-full py-4 rounded-xl bg-[#ffce5d] text-[#755700] hover:bg-[#ffdf9d] font-bold text-[14px] shadow-md transition-all text-center cursor-pointer"
                >
                  Discuss {activeService.title} Scope with Partners →
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeInView>

      {/* Interactive Scope & Sprint Modeler */}
      <FadeInView yOffset={24} className="space-y-6">
        <SprintCalculator onBookSprint={(summary) => onOpenProjectInquiry(summary)} />
      </FadeInView>

      {/* The Dot Comparison Matrix */}
      <FadeInView yOffset={24} className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#785a00] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#785a00]" />
            <span>The Working Model</span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[38px] font-bold text-[#1d1c16] tracking-tight">
            How The Dot compares to agency alternatives.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-[#f8f3e9] rounded-2xl border border-[#dedad0] overflow-hidden text-[14px]">
            <thead>
              <tr className="bg-[#f2ede4] border-b border-[#dedad0] text-[12px] uppercase tracking-wider text-[#414848]">
                <th className="p-4 sm:p-5 font-semibold">Operating Dimension</th>
                <th className="p-4 sm:p-5 font-semibold text-[#1a3a3a] bg-[#c7e9e8]/30">The Dot Studio</th>
                <th className="p-4 sm:p-5 font-semibold">Traditional Agencies</th>
                <th className="p-4 sm:p-5 font-semibold">Freelancer Roster</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dedad0]">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#1d1c16]">Execution Team</td>
                <td className="p-4 sm:p-5 font-bold text-[#1a3a3a] bg-[#c7e9e8]/10">Direct Founding Partners</td>
                <td className="p-4 sm:p-5 text-[#414848]">Junior Designers / Account Reps</td>
                <td className="p-4 sm:p-5 text-[#414848]">Solo, Uncoordinated</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#1d1c16]">Pricing Model</td>
                <td className="p-4 sm:p-5 font-bold text-[#1a3a3a] bg-[#c7e9e8]/10">Fixed-Scope Sprint Guarantee</td>
                <td className="p-4 sm:p-5 text-[#414848]">Hourly Billing (Incentivizes Latency)</td>
                <td className="p-4 sm:p-5 text-[#414848]">Uncertain Time Estimates</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#1d1c16]">Engineering Delivery</td>
                <td className="p-4 sm:p-5 font-bold text-[#1a3a3a] bg-[#c7e9e8]/10">Semantic Webflow / Next.js Ready</td>
                <td className="p-4 sm:p-5 text-[#414848]">Static Figma / PDF Handoff</td>
                <td className="p-4 sm:p-5 text-[#414848]">Fragmented Code Quality</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-[#1d1c16]">Commercial Alignment</td>
                <td className="p-4 sm:p-5 font-bold text-[#1a3a3a] bg-[#c7e9e8]/10">Revenue &amp; Conversion Attribution</td>
                <td className="p-4 sm:p-5 text-[#414848]">Subjective Aesthetic Awards</td>
                <td className="p-4 sm:p-5 text-[#414848]">Pixel Completion Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeInView>
    </div>
  );
}
