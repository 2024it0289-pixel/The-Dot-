import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../data/studioData';
import { FadeInView, easeEditorial } from '../motion/MotionReveal';

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Within 30 Days',
    budget: '$20,000 – $35,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Calendar slot booking state
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const availableSlots = [
    { day: 'Thursday, Oct 1', time: '10:00 AM EDT / 7:30 PM IST' },
    { day: 'Thursday, Oct 1', time: '2:00 PM EDT / 11:30 PM IST' },
    { day: 'Friday, Oct 2', time: '9:30 AM EDT / 7:00 PM IST' },
    { day: 'Monday, Oct 5', time: '11:00 AM EDT / 8:30 PM IST' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-8 lg:py-16 space-y-24">
      {/* Header */}
      <FadeInView yOffset={24} className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede4] text-[#414848] text-[11px] uppercase tracking-wider font-semibold border border-[#dedad0]">
          <span className="w-2 h-2 rounded-full bg-[#785a00] animate-pulse" />
          <span>Direct Studio Channel</span>
        </div>
        <h1 className="font-display text-[38px] sm:text-[56px] lg:text-[64px] text-[#1d1c16] tracking-tight leading-[1.08] font-extrabold text-balance">
          Let’s diagnose your product.
        </h1>
        <p className="text-[17px] text-[#414848] leading-relaxed">
          Reach our senior partners directly. Whether you have an explicit RFP or need high-level strategic counsel on a complex redesign, we respond within 24 business hours.
        </p>
      </FadeInView>

      {/* 2-Column Contact & Scheduler Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Form (7 cols) */}
        <FadeInView yOffset={28} className="lg:col-span-7 bg-[#f8f3e9] rounded-3xl p-6 sm:p-10 border border-[#dedad0] shadow-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: easeEditorial }}
              className="text-center py-12 space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-[#c7e9e8] text-[#002020] flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[32px]">task_alt</span>
              </div>
              <h3 className="font-display text-[26px] font-bold text-[#1d1c16]">
                Brief Received, {formData.name}
              </h3>
              <p className="text-[15px] text-[#414848] max-w-md mx-auto leading-relaxed">
                Aditya and Maya will review your requirements for <strong className="text-[#1d1c16]">{formData.company || 'your team'}</strong> and reply with an initial diagnostic breakdown shortly.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#1a3a3a] text-white text-[13px] font-medium hover:bg-[#012425] cursor-pointer"
              >
                Send Another Note
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-[22px] font-bold text-[#1d1c16]">
                  Send a Direct Brief
                </h3>
                <p className="text-[14px] text-[#414848]">
                  Fill out the parameters below or email us directly at{' '}
                  <a href="mailto:hello@thedot.studio" className="font-semibold text-[#1a3a3a] hover:underline">
                    hello@thedot.studio
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#f2ede4] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#f2ede4] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider">
                  Company / Product URL
                </label>
                <input
                  type="text"
                  placeholder="https://company.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#f2ede4] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider">
                    Target Kickoff
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#f2ede4] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                  >
                    <option value="Immediately (Next 10 days)">Immediately (Next 10 days)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Q3 2026 Pipeline">Q3 2026 Pipeline</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider">
                    Planned Investment
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#f2ede4] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                  >
                    <option value="$12,000 – $20,000">$12,000 – $20,000</option>
                    <option value="$20,000 – $35,000">$20,000 – $35,000</option>
                    <option value="$35,000+">$35,000+</option>
                    <option value="Monthly Retainer ($8,500/mo)">Monthly Retainer ($8,500/mo)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider">
                  Challenge Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline the core objective (e.g. converting low-intent trial users, complete rebrand before Series A round, scaling high-velocity Webflow marketing site)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#f2ede4] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a] resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-[#1a3a3a] hover:bg-[#012425] text-white font-bold text-[14px] shadow-md transition-all cursor-pointer"
              >
                Submit Project Brief to Partners →
              </motion.button>
            </form>
          )}
        </FadeInView>

        {/* Right Info & Direct Scheduling (5 cols) */}
        <FadeInView yOffset={28} delay={0.15} className="lg:col-span-5 space-y-8">
          {/* Instant Calendar Slot Picker */}
          <div className="bg-[#f2ede4] rounded-3xl p-6 sm:p-8 border border-[#dedad0] space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-[#785a00] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#785a00]" />
                Direct Partner Calendar
              </span>
              <span className="text-[11px] font-mono text-[#414848]">30 Min Diagnostic</span>
            </div>

            <h3 className="font-display text-[20px] font-bold text-[#1d1c16]">
              Schedule a 30-min Video Consultation
            </h3>

            {bookingConfirmed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-[#c7e9e8] text-[#002020] space-y-2 text-[13px]"
              >
                <p className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">event_available</span>
                  Calendar Invite Reserved!
                </p>
                <p>
                  A calendar invite with Google Meet link for <strong>{selectedSlot}</strong> has been sent to your email.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingConfirmed(false)}
                  className="text-[12px] underline font-semibold mt-1 cursor-pointer"
                >
                  Pick a different time
                </button>
              </motion.div>
            ) : (
              <div className="space-y-3">
                <p className="text-[13px] text-[#414848]">
                  Select an available opening with our design &amp; technical partners:
                </p>
                <div className="space-y-2">
                  {availableSlots.map((slot) => {
                    const isSelected = selectedSlot === `${slot.day} at ${slot.time}`;
                    return (
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        key={slot.time + slot.day}
                        type="button"
                        onClick={() => setSelectedSlot(`${slot.day} at ${slot.time}`)}
                        className={`w-full p-3 rounded-xl text-left text-[13px] transition-all flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? 'bg-[#1a3a3a] text-white border-[#1a3a3a] font-bold shadow-xs'
                            : 'bg-white text-[#1d1c16] border-[#dedad0] hover:bg-[#ece8de]'
                        }`}
                      >
                        <div>
                          <p className="font-semibold">{slot.day}</p>
                          <p className={`text-[11px] ${isSelected ? 'text-[#c7e9e8]' : 'text-[#414848]'}`}>
                            {slot.time}
                          </p>
                        </div>
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#ffce5d]' : 'bg-[#dedad0]'}`} />
                      </motion.button>
                    );
                  })}
                </div>
                <motion.button
                  whileHover={selectedSlot ? { scale: 1.01 } : {}}
                  whileTap={selectedSlot ? { scale: 0.99 } : {}}
                  type="button"
                  disabled={!selectedSlot}
                  onClick={() => setBookingConfirmed(true)}
                  className={`w-full py-3 rounded-xl font-bold text-[13px] transition-all ${
                    selectedSlot
                      ? 'bg-[#ffce5d] text-[#755700] hover:bg-[#f0c050] shadow-sm cursor-pointer'
                      : 'bg-[#dedad0] text-[#717878] cursor-not-allowed'
                  }`}
                >
                  Confirm Video Introduction →
                </motion.button>
              </div>
            )}
          </div>

          {/* Studio Anchor Details */}
          <div className="bg-[#1a3a3a] text-white rounded-3xl p-6 sm:p-8 border border-[#2d4c4c] space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
              Studio Operating Nodes
            </span>
            <div className="space-y-3 text-[14px]">
              <div>
                <p className="font-bold text-white">Chennai Headquarters</p>
                <p className="text-[13px] text-[#83a4a3]">13.0827° N, 80.2707° E</p>
                <p className="text-[13px] text-[#c7e9e8]">Primary Product Architecture &amp; Engineering</p>
              </div>
              <div className="pt-2 border-t border-[#2d4c4c]">
                <p className="font-bold text-white">San Francisco Liaison</p>
                <p className="text-[13px] text-[#83a4a3]">Pacific Timezone Coordination &amp; Governance</p>
              </div>
              <div className="pt-2 border-t border-[#2d4c4c]">
                <p className="font-bold text-white">Direct Email</p>
                <a href="mailto:hello@thedot.studio" className="text-[13px] text-[#ffce5d] hover:underline">
                  hello@thedot.studio
                </a>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>

      {/* FAQ Block */}
      <FadeInView yOffset={24} className="space-y-6 pt-12 border-t border-[#dedad0]">
        <h3 className="font-display text-[26px] font-bold text-[#1d1c16]">
          Frequently Asked Questions About Kickoff
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggleFaq(faq.id)}
              className="p-6 rounded-2xl bg-[#f8f3e9] border border-[#dedad0] cursor-pointer hover:bg-[#f2ede4] transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-[16px] font-bold text-[#1d1c16]">
                  {faq.question}
                </h4>
                <span className="material-symbols-outlined text-[20px] text-[#414848]">
                  {openFaqId === faq.id ? 'expand_less' : 'expand_more'}
                </span>
              </div>
              {openFaqId === faq.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3, ease: easeEditorial }}
                  className="pt-3 text-[14px] text-[#414848] leading-relaxed border-t border-[#dedad0]/60 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </FadeInView>
    </div>
  );
}
