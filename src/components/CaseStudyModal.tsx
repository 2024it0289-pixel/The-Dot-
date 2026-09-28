import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../types';
import { easeEditorial } from './motion/MotionReveal';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onDiscussProject: (caseStudyName?: string) => void;
}

export function CaseStudyModal({ caseStudy, onClose, onDiscussProject }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'outcomes'>('overview');

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#012425]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: easeEditorial }}
            className="bg-[#fef9ef] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#dedad0] relative flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header Bar */}
            <div className="sticky top-0 z-20 bg-[#fef9ef]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#dedad0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#1a3a3a] text-[#c7e9e8] text-[11px] font-semibold tracking-wider uppercase">
                  {caseStudy.number}
                </span>
                <span className="text-[13px] text-[#414848] font-medium hidden sm:inline">
                  {caseStudy.category}
                </span>
                <span className="text-[#dedad0] hidden sm:inline">/</span>
                <span className="text-[13px] text-[#414848] font-mono hidden sm:inline">
                  {caseStudy.details.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => onDiscussProject(caseStudy.title)}
                  className="px-4 py-2 rounded-full bg-[#ffce5d] text-[#755700] hover:bg-[#f0c050] text-[12px] font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Start Similar Sprint →
                </motion.button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-[#f2ede4] hover:bg-[#dedad0] text-[#1d1c16] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Title Lockup */}
              <div className="space-y-3">
                <div className="text-[13px] text-[#785a00] font-mono font-medium">
                  {caseStudy.clientSubtitle}
                </div>
                <h2 className="font-display text-[28px] sm:text-[38px] font-bold text-[#1d1c16] tracking-tight leading-tight">
                  {caseStudy.title}
                </h2>
                <p className="font-display text-[18px] sm:text-[22px] text-[#414848] font-medium leading-snug">
                  {caseStudy.summary}
                </p>
              </div>

              {/* Featured Visual */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#dedad0] bg-[#f2ede4]">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.altText}
                  className="w-full h-72 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Tab Switcher */}
              <div className="flex items-center gap-2 p-1.5 bg-[#f2ede4] rounded-xl border border-[#dedad0] w-fit">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-white text-[#1d1c16] shadow-xs font-semibold'
                      : 'text-[#414848] hover:text-[#1d1c16]'
                  }`}
                >
                  Overview &amp; Strategy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('challenge')}
                  className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === 'challenge'
                      ? 'bg-white text-[#1d1c16] shadow-xs font-semibold'
                      : 'text-[#414848] hover:text-[#1d1c16]'
                  }`}
                >
                  Challenge &amp; Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('outcomes')}
                  className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === 'outcomes'
                      ? 'bg-white text-[#1d1c16] shadow-xs font-semibold'
                      : 'text-[#414848] hover:text-[#1d1c16]'
                  }`}
                >
                  Verified Outcomes
                </button>
              </div>

              {/* Tab Content with AnimatePresence */}
              <AnimatePresence mode="wait">
                {/* Tab Content 1: Overview */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-2xl bg-[#f8f3e9] border border-[#dedad0] space-y-4">
                      <span className="text-[11px] uppercase tracking-wider text-[#785a00] font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                        Executive Summary
                      </span>
                      <p className="text-[16px] text-[#1d1c16] leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </div>

                    {/* Verified Quantitative Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {caseStudy.details.outcomes.map((item) => (
                        <div key={item.label} className="p-5 rounded-2xl bg-[#f2ede4] border border-[#dedad0] space-y-1">
                          <span className="text-[11px] uppercase tracking-wider text-[#414848] font-semibold">
                            {item.label}
                          </span>
                          <p className="font-display text-[26px] font-bold text-[#1a3a3a] tabular-nums">
                            {item.value}
                          </p>
                          <p className="text-[12px] text-[#414848] leading-tight">
                            {item.note}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Scope Tags */}
                    <div className="pt-2">
                      <span className="text-[12px] text-[#414848] font-medium mr-3">Disciplines Deployed:</span>
                      <div className="inline-flex flex-wrap gap-2 pt-1">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-[#f2ede4] text-[#1d1c16] text-[12px] font-medium border border-[#dedad0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab Content 2: Challenge */}
                {activeTab === 'challenge' && (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-[#ffdad6]/20 border border-[#ffdad6] space-y-3">
                        <div className="flex items-center gap-2 text-[#ba1a1a] font-semibold text-[13px]">
                          <span className="material-symbols-outlined text-[18px]">error</span>
                          <span>The Underlying Challenge</span>
                        </div>
                        <p className="text-[15px] text-[#1d1c16] leading-relaxed">
                          {caseStudy.details.challenge}
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#c7e9e8]/30 border border-[#c7e9e8] space-y-3">
                        <div className="flex items-center gap-2 text-[#002020] font-semibold text-[13px]">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                          <span>The Architectural Solution</span>
                        </div>
                        <p className="text-[15px] text-[#1d1c16] leading-relaxed">
                          {caseStudy.details.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Matrix */}
                    <div className="p-6 rounded-2xl bg-[#f2ede4] border border-[#dedad0] space-y-3">
                      <span className="text-[12px] uppercase tracking-wider text-[#414848] font-semibold">
                        Engineering &amp; Tooling Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.details.stack.map((item) => (
                          <span
                            key={item}
                            className="px-3.5 py-1.5 rounded-lg bg-white text-[#1a3a3a] text-[13px] font-mono border border-[#dedad0] shadow-2xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab Content 3: Outcomes */}
                {activeTab === 'outcomes' && (
                  <motion.div
                    key="outcomes"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-2xl bg-[#1a3a3a] text-white shadow-xl space-y-4">
                      <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
                        Primary Commercial Headline
                      </span>
                      <p className="font-display text-[32px] sm:text-[40px] font-bold text-white tracking-tight">
                        {caseStudy.impactMetric}
                      </p>
                      <p className="text-[16px] text-[#83a4a3] leading-relaxed">
                        {caseStudy.impactDetail}
                      </p>
                    </div>

                    {/* Client Quote */}
                    <div className="p-6 rounded-2xl bg-[#f8f3e9] border border-[#dedad0] space-y-4">
                      <blockquote className="text-[16px] sm:text-[18px] text-[#1d1c16] italic leading-relaxed">
                        "{caseStudy.client.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3 pt-2">
                        {caseStudy.client.avatar && (
                          <img
                            src={caseStudy.client.avatar}
                            alt={caseStudy.client.name}
                            className="w-11 h-11 rounded-full object-cover border border-[#dedad0]"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div>
                          <p className="font-bold text-[14px] text-[#1d1c16]">{caseStudy.client.name}</p>
                          <p className="text-[12px] text-[#414848]">{caseStudy.client.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Action Footer in Modal */}
              <div className="pt-6 border-t border-[#dedad0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[13px] text-[#414848]">
                  Want to see detailed Figma wireframes or live deployment links?
                </span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => onDiscussProject(caseStudy.title)}
                  className="px-6 py-3 rounded-xl bg-[#1a3a3a] hover:bg-[#012425] text-white font-medium text-[14px] shadow-sm transition-colors cursor-pointer"
                >
                  Discuss a similar engagement →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
