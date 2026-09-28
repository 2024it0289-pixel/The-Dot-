import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../../data/studioData';
import { FadeInView, StaggerContainer, StaggerItem } from '../motion/MotionReveal';

interface AboutViewProps {
  onOpenProjectInquiry: () => void;
}

export function AboutView({ onOpenProjectInquiry }: AboutViewProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-8 lg:py-16 space-y-24">
      {/* Hero */}
      <FadeInView yOffset={24} className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] uppercase tracking-wider font-semibold border border-[#dedad0]">
          <span className="w-2 h-2 rounded-full bg-[#785a00]" />
          <span>About The Dot</span>
        </div>
        <h1 className="font-display text-[38px] sm:text-[56px] lg:text-[72px] text-[#1d1c16] tracking-tight leading-[1.08] font-extrabold text-balance">
          Craft-led studio engineered for ambitious founders.
        </h1>
        <p className="text-[18px] text-[#414848] leading-relaxed max-w-2xl">
          Founded in 2020 in Chennai, India, The Dot was created in direct opposition to bloated global agency networks. We assemble small, partner-led strike teams to design and build digital platforms that shift market valuation.
        </p>
      </FadeInView>

      {/* Metrics Row */}
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StaggerItem>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#f2ede4] border border-[#dedad0] space-y-2 h-full hover:border-[#1a3a3a]/40 transition-colors">
            <span className="text-[12px] uppercase tracking-wider text-[#414848] font-semibold">
              Track Record
            </span>
            <p className="font-display text-[36px] sm:text-[44px] font-bold text-[#1a3a3a] tabular-nums">
              18
            </p>
            <p className="text-[13px] text-[#414848]">
              Shipped digital products &amp; enterprise platforms
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#f2ede4] border border-[#dedad0] space-y-2 h-full hover:border-[#1a3a3a]/40 transition-colors">
            <span className="text-[12px] uppercase tracking-wider text-[#414848] font-semibold">
              Client Funding
            </span>
            <p className="font-display text-[36px] sm:text-[44px] font-bold text-[#1a3a3a] tabular-nums">
              $120M+
            </p>
            <p className="text-[13px] text-[#414848]">
              Venture capital secured with our product systems
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#f2ede4] border border-[#dedad0] space-y-2 h-full hover:border-[#1a3a3a]/40 transition-colors">
            <span className="text-[12px] uppercase tracking-wider text-[#414848] font-semibold">
              Client Retention
            </span>
            <p className="font-display text-[36px] sm:text-[44px] font-bold text-[#1a3a3a] tabular-nums">
              100%
            </p>
            <p className="text-[13px] text-[#414848]">
              Every client has continued or returned for additional sprints
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#f2ede4] border border-[#dedad0] space-y-2 h-full hover:border-[#1a3a3a]/40 transition-colors">
            <span className="text-[12px] uppercase tracking-wider text-[#414848] font-semibold">
              Junior Pass-off
            </span>
            <p className="font-display text-[36px] sm:text-[44px] font-bold text-[#1a3a3a] tabular-nums">
              0%
            </p>
            <p className="text-[13px] text-[#414848]">
              Only senior partners design, architect, and code
            </p>
          </div>
        </StaggerItem>
      </StaggerContainer>

      {/* Leadership Partners */}
      <div className="space-y-12">
        <FadeInView yOffset={20} className="space-y-3">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#785a00] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#785a00]" />
            <span>Studio Leadership</span>
          </div>
          <h2 className="font-display text-[28px] sm:text-[38px] font-bold text-[#1d1c16] tracking-tight">
            Direct partner execution on every engagement.
          </h2>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((partner) => (
            <StaggerItem key={partner.name}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-[#f8f3e9] rounded-3xl p-8 border border-[#dedad0] shadow-xs flex flex-col justify-between space-y-6 h-full"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1a3a3a] text-white flex items-center justify-center font-display text-[20px] font-bold shadow-sm">
                    {partner.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="font-display text-[20px] font-bold text-[#1d1c16]">
                      {partner.name}
                    </h3>
                    <p className="text-[13px] font-medium text-[#785a00]">
                      {partner.role}
                    </p>
                    <p className="text-[12px] text-[#414848] font-mono mt-0.5">
                      {partner.location}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#414848] leading-relaxed">
                    {partner.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#dedad0] space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#414848] font-semibold block">
                    Core Mastery
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="px-2.5 py-1 rounded-md bg-[#f2ede4] text-[#1d1c16] text-[11px] border border-[#dedad0]"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Origin & Location Footprint */}
      <FadeInView yOffset={24}>
        <div className="bg-[#1a3a3a] text-white rounded-3xl p-8 sm:p-14 shadow-xl border border-[#2d4c4c] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#012425] text-[#c7e9e8] text-[11px] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#ffce5d]" />
              <span>Chennai HQ · Operating Globally</span>
            </div>
            <h3 className="font-display text-[28px] sm:text-[36px] font-bold text-white tracking-tight">
              Why our location and structure gives clients an unfair speed advantage.
            </h3>
            <p className="text-[15px] text-[#83a4a3] leading-relaxed">
              Headquartered in Chennai, India (13.0827° N, 80.2707° E), our studio bridges Western product and strategy expectations with rapid engineering execution. We overlap 4+ hours with European and US business hours while operating uninterrupted design sprints during global night shifts.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-[13px]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffce5d]" />
                <span className="text-[#f5f0e6]">San Francisco Strategy Liaison</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffce5d]" />
                <span className="text-[#f5f0e6]">London Financial Markets Partner</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#012425] border border-[#2d4c4c] space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
              Direct Communications Policy
            </span>
            <p className="text-[14px] text-[#c7e9e8] leading-relaxed">
              Every client gets a dedicated private Slack or Discord channel directly with our founding partners. No tickets, no customer service desks, no waiting 3 days for an answer.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onOpenProjectInquiry}
              className="w-full py-3 rounded-xl bg-[#ffce5d] text-[#755700] hover:bg-[#ffdf9d] font-bold text-[13px] shadow-sm transition-colors text-center cursor-pointer"
            >
              Start a Direct Partner Chat →
            </motion.button>
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
