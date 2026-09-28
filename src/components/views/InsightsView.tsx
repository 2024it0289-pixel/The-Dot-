import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSIGHTS } from '../../data/studioData';
import { InsightArticle } from '../../types';
import { FadeInView, StaggerContainer, StaggerItem, easeEditorial } from '../motion/MotionReveal';

interface InsightsViewProps {
  onOpenProjectInquiry: () => void;
}

export function InsightsView({ onOpenProjectInquiry }: InsightsViewProps) {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-8 lg:py-16 space-y-20">
      {/* Header */}
      <FadeInView yOffset={24} className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] uppercase tracking-wider font-semibold border border-[#dedad0]">
          <span className="w-2 h-2 rounded-full bg-[#785a00]" />
          <span>Editorial Dispatches &amp; Engineering Field Notes</span>
        </div>
        <h1 className="font-display text-[38px] sm:text-[56px] lg:text-[64px] text-[#1d1c16] tracking-tight leading-[1.08] font-extrabold text-balance">
          Unfiltered thinking on product architecture and conversion.
        </h1>
        <p className="text-[17px] text-[#414848] leading-relaxed">
          Essays, telemetry teardowns, and design system field notes written by our senior partners. No ghostwriters, no fluff.
        </p>
      </FadeInView>

      {/* Articles Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INSIGHTS.map((article) => (
          <StaggerItem key={article.id}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveArticle(article)}
              className="bg-[#f8f3e9] rounded-3xl p-8 border border-[#dedad0] shadow-xs flex flex-col justify-between space-y-6 hover:border-[#1a3a3a]/40 transition-colors duration-200 cursor-pointer h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[12px] text-[#414848]">
                  <span className="font-semibold text-[#785a00]">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-display text-[22px] font-bold text-[#1d1c16] leading-snug">
                  {article.title}
                </h2>
                <p className="text-[14px] text-[#414848] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#dedad0] flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-bold text-[#1d1c16]">{article.author.name}</p>
                  <p className="text-[11px] text-[#414848]">{article.publishedDate}</p>
                </div>
                <span className="text-[13px] font-semibold text-[#012425] hover:underline flex items-center gap-1">
                  Read Essay →
                </span>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#012425]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: easeEditorial }}
              className="bg-[#fef9ef] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#dedad0] relative flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 bg-[#fef9ef]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#dedad0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#785a00]" />
                  <span className="text-[12px] uppercase tracking-wider font-semibold text-[#414848]">
                    {activeArticle.category} · {activeArticle.readTime}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="w-8 h-8 rounded-full bg-[#f2ede4] hover:bg-[#dedad0] text-[#1d1c16] flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-6">
                <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-[#1d1c16] tracking-tight leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 pb-4 border-b border-[#dedad0] text-[13px] text-[#414848]">
                  <span>By {activeArticle.author.name}, {activeArticle.author.role}</span>
                  <span>·</span>
                  <span>{activeArticle.publishedDate}</span>
                </div>

                <div className="space-y-4 text-[16px] text-[#1d1c16] leading-relaxed">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#dedad0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[13px] text-[#414848]">
                    Want to apply these design architectural principles to your platform?
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenProjectInquiry();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#1a3a3a] text-white text-[13px] font-medium hover:bg-[#012425] transition-colors cursor-pointer"
                  >
                    Discuss with Partners →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
