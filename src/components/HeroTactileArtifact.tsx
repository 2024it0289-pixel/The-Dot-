import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeEditorial } from './motion/MotionReveal';

export function HeroTactileArtifact({ onOpenProjectInquiry }: { onOpenProjectInquiry: () => void }) {
  const [activeSprint, setActiveSprint] = useState<'W10' | 'W12' | 'W14'>('W12');
  const [selectedPhase, setSelectedPhase] = useState<number>(3); // 1 = Discover, 2 = Design, 3 = Build
  const [isRadarHovered, setIsRadarHovered] = useState(false);

  const phaseData = [
    {
      phase: 'Phase 01',
      title: 'Discover',
      tag: 'Diagnostics & CRO',
      desc: 'In-depth heuristic teardown, stakeholder interviews, and telemetry funnel audit.',
      metric: 'Week 1–2',
    },
    {
      phase: 'Phase 02',
      title: 'Design',
      tag: 'Systems & Prototyping',
      desc: 'Figma tokens, high-density wireframes, component library, and clickable user testing.',
      metric: 'Week 3–6',
    },
    {
      phase: 'Phase 03',
      title: 'Build',
      tag: 'Webflow & Code',
      desc: 'Semantic React/Webflow codebase, 95+ Lighthouse audits, motion curves, and CMS rollout.',
      metric: 'Week 7–10',
    },
  ];

  return (
    <div className="relative">
      {/* Background Ambient Warm Glows */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#ffdf9d]/40 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#c7e9e8]/30 blur-3xl pointer-events-none"
      />

      {/* Main Card Canvas */}
      <div className="relative bg-[#f8f3e9] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#dedad0]/60 flex flex-col gap-6 overflow-hidden">
        {/* Top bar with live status and origin */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f2ede4] shadow-xs border border-[#dedad0]/40">
            <span className="w-2 h-2 rounded-full bg-[#785a00] animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider text-[#1d1c16] font-semibold">Studio System v3.2</span>
          </div>
          <span className="text-[12px] text-[#414848] font-mono">Chennai · Global Engagements</span>
        </div>

        {/* Central Dot Visual Diagram */}
        <div
          onMouseEnter={() => setIsRadarHovered(true)}
          onMouseLeave={() => setIsRadarHovered(false)}
          className="relative h-64 w-full bg-[#f2ede4] rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-inner border border-[#dedad0]/40 transition-colors"
        >
          {/* Architectural Background Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              animate={{ r: isRadarHovered ? 95 : 85 }}
              transition={{ duration: 0.4, ease: easeEditorial }}
              className="text-[#c1c8c7]"
              cx="50%"
              cy="50%"
              fill="none"
              stroke="currentColor"
              strokeDasharray="4 4"
            />
            <motion.circle
              animate={{ r: isRadarHovered ? 142 : 130 }}
              transition={{ duration: 0.4, ease: easeEditorial }}
              className="text-[#c1c8c7]"
              cx="50%"
              cy="50%"
              fill="none"
              stroke="currentColor"
              strokeDasharray="2 4"
            />
            <line className="text-[#c1c8c7]" stroke="currentColor" x1="0" x2="100%" y1="50%" y2="50%" />
            <line className="text-[#c1c8c7]" stroke="currentColor" x1="50%" x2="50%" y1="0" y2="100%" />
          </svg>

          {/* Corner Metadata */}
          <div className="relative z-10 flex justify-between text-[11px] text-[#414848] font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
              01. ORIGIN_POINT
            </span>
            <span>13.0827° N, 80.2707° E</span>
          </div>

          {/* Central Pulse Motif */}
          <div className="relative z-10 self-center flex items-center justify-center my-auto cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-full bg-[#1a3a3a] text-white flex items-center justify-center shadow-lg relative"
            >
              <span className="w-5 h-5 rounded-full bg-[#f0c050] shadow-sm" />
              <span className="absolute inset-0 rounded-full border-2 border-[#abcdcc] animate-ping opacity-30 pointer-events-none" />
            </motion.div>
            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[#012425] text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap">
              Click to examine sprint pipeline
            </div>
          </div>

          {/* Bottom Data Readout */}
          <div className="relative z-10 flex items-center justify-between text-[#1d1c16] text-[12px] pt-2">
            <span className="font-medium text-[#414848]">100% Client Retention</span>
            <div className="flex items-center gap-1 text-[11px] bg-[#f8f3e9] px-2 py-0.5 rounded-md border border-[#dedad0]">
              <span className="text-[#414848]">Sprint:</span>
              <button
                type="button"
                onClick={() => setActiveSprint('W10')}
                className={`px-1 rounded cursor-pointer ${activeSprint === 'W10' ? 'bg-[#1a3a3a] text-white font-bold' : 'text-[#785a00] hover:underline'}`}
              >
                W10
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setActiveSprint('W12')}
                className={`px-1 rounded cursor-pointer ${activeSprint === 'W12' ? 'bg-[#1a3a3a] text-white font-bold' : 'text-[#785a00] hover:underline'}`}
              >
                W12
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setActiveSprint('W14')}
                className={`px-1 rounded cursor-pointer ${activeSprint === 'W14' ? 'bg-[#1a3a3a] text-white font-bold' : 'text-[#785a00] hover:underline'}`}
              >
                W14
              </button>
            </div>
          </div>
        </div>

        {/* Process Pipeline Preview Chips */}
        <div className="grid grid-cols-3 gap-2">
          {phaseData.map((item, index) => {
            const phaseNum = index + 1;
            const isSelected = selectedPhase === phaseNum;
            return (
              <motion.button
                whileTap={{ scale: 0.96 }}
                key={item.phase}
                type="button"
                onClick={() => setSelectedPhase(phaseNum)}
                className={`text-left p-3 rounded-xl transition-all duration-200 cursor-pointer flex flex-col gap-1 ${
                  isSelected
                    ? 'bg-[#1a3a3a] text-white shadow-md -translate-y-0.5'
                    : 'bg-[#f2ede4] hover:bg-[#ece8de] text-[#1d1c16] shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase tracking-wide font-medium ${
                      isSelected ? 'text-[#83a4a3]' : 'text-[#414848]'
                    }`}
                  >
                    {item.phase}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#f0c050]' : 'bg-[#785a00]/40'}`}
                  />
                </div>
                <span className={`text-[13px] font-bold ${isSelected ? 'text-white' : 'text-[#1d1c16]'}`}>
                  {item.title}
                </span>
                <span
                  className={`text-[10px] leading-tight ${isSelected ? 'text-[#abcdcc]' : 'text-[#414848]'}`}
                >
                  {item.tag}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Detail Expander for Phase with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPhase}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-3 bg-[#f2ede4] rounded-xl text-[12px] text-[#414848] border border-[#dedad0]/50 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#785a00]">info</span>
              <span>{phaseData[selectedPhase - 1].desc}</span>
            </div>
            <span className="font-mono text-[11px] font-bold text-[#1d1c16] shrink-0">
              {phaseData[selectedPhase - 1].metric}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Live Metric Pill */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onOpenProjectInquiry}
          className="flex items-center justify-between p-3.5 rounded-xl bg-[#f2ede4] hover:bg-[#ece8de] text-[#1d1c16] transition-colors cursor-pointer border border-[#dedad0]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#785a00] animate-pulse" />
            <span className="text-[13px] font-medium text-[#1d1c16]">Accepting Q2/Q3 2026 Studio Inquiries</span>
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#785a00] bg-[#ffdf9d] px-2 py-0.5 rounded-md">
            3 slots left
          </span>
        </motion.div>
      </div>
    </div>
  );
}
