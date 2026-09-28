import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeEditorial } from './motion/MotionReveal';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export function ProjectInquiryModal({ isOpen, onClose, initialTopic }: ProjectInquiryModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialTopic ? [initialTopic] : ['Product & UX Design']
  );
  const [budgetTier, setBudgetTier] = useState<string>('$20,000 – $35,000');
  const [timeline, setTimeline] = useState<string>('Next 2–4 Weeks');
  const [companyStage, setCompanyStage] = useState<string>('Series A / B');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const serviceOptions = [
    'Product & UX Design',
    'Websites & Digital Platforms',
    'Brand & Digital Identity',
    'Growth & Conversion (CRO)',
  ];

  const budgetOptions = [
    '$12,000 – $20,000 (Targeted Sprint)',
    '$20,000 – $35,000 (Full System Redesign)',
    '$35,000+ (Multi-Product Platform)',
    'Monthly Retainer ($8,500 / mo)',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid full name and work email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-[#fef9ef] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#dedad0] relative flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#fef9ef]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#dedad0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#785a00] animate-pulse" />
                <h3 className="font-display text-[20px] font-bold text-[#1d1c16]">
                  {submitted ? 'Inquiry Received' : 'Discuss a Project with Partners'}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#f2ede4] hover:bg-[#dedad0] text-[#1d1c16] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close form"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: easeEditorial }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c7e9e8] text-[#002020] flex items-center justify-center mx-auto shadow-sm">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-[24px] font-bold text-[#1d1c16]">
                      Thank you, {fullName.split(' ')[0] || 'there'}.
                    </h4>
                    <p className="text-[15px] text-[#414848] max-w-md mx-auto leading-relaxed">
                      Our direct partners (Aditya &amp; Maya) have received your brief for{' '}
                      <strong className="text-[#1d1c16]">{company || 'your team'}</strong>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-2xl bg-[#f8f3e9] border border-[#dedad0] text-left text-[13px] space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between py-1 border-b border-[#dedad0]/60">
                      <span className="text-[#414848]">Selected Disciplines:</span>
                      <span className="font-semibold text-[#1d1c16]">{selectedServices.join(', ')}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#dedad0]/60">
                      <span className="text-[#414848]">Planned Budget:</span>
                      <span className="font-semibold text-[#1d1c16]">{budgetTier}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#dedad0]/60">
                      <span className="text-[#414848]">Kickoff Target:</span>
                      <span className="font-semibold text-[#1d1c16]">{timeline}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#414848]">Partner SLA:</span>
                      <span className="font-semibold text-[#785a00]">Guaranteed &lt; 24h Response</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#1a3a3a] text-white text-[13px] font-medium hover:bg-[#012425] transition-colors cursor-pointer"
                    >
                      Done
                    </motion.button>
                    <a
                      href="mailto:hello@thedot.studio"
                      className="px-6 py-2.5 rounded-xl bg-[#f2ede4] text-[#1d1c16] text-[13px] font-medium hover:bg-[#dedad0] transition-colors"
                    >
                      Send Direct Files via Email
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-2.5">
                    <label className="block text-[13px] font-bold text-[#1d1c16] uppercase tracking-wider">
                      1. Which capabilities do you need?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <motion.button
                            whileTap={{ scale: 0.98 }}
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`p-3 rounded-xl text-left text-[13px] font-medium transition-all flex items-center justify-between border cursor-pointer ${
                              isSelected
                                ? 'bg-[#1a3a3a] text-white border-[#1a3a3a] shadow-xs'
                                : 'bg-[#f8f3e9] text-[#1d1c16] border-[#dedad0] hover:bg-[#f2ede4]'
                            }`}
                          >
                            <span>{srv}</span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isSelected ? 'bg-[#ffce5d]' : 'bg-[#dedad0]'
                              }`}
                            />
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stage & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-[13px] font-bold text-[#1d1c16] uppercase tracking-wider">
                        2. Company Stage
                      </label>
                      <select
                        value={companyStage}
                        onChange={(e) => setCompanyStage(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#f8f3e9] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                      >
                        <option value="Seed Funded">Seed Funded</option>
                        <option value="Series A / B">Series A / B</option>
                        <option value="Profitable Bootstrapped">Profitable Bootstrapped</option>
                        <option value="Enterprise / Public">Enterprise / Public</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[13px] font-bold text-[#1d1c16] uppercase tracking-wider">
                        3. Target Kickoff
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#f8f3e9] border border-[#dedad0] text-[14px] text-[#1d1c16] focus:outline-none focus:border-[#1a3a3a]"
                      >
                        <option value="Immediate (Next 10 days)">Immediate (Next 10 days)</option>
                        <option value="Next 2–4 Weeks">Next 2–4 Weeks</option>
                        <option value="Q3 2026 Pipeline">Q3 2026 Pipeline</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Tier */}
                  <div className="space-y-2">
                    <label className="block text-[13px] font-bold text-[#1d1c16] uppercase tracking-wider">
                      4. Anticipated Investment Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {budgetOptions.map((opt) => (
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          key={opt}
                          type="button"
                          onClick={() => setBudgetTier(opt)}
                          className={`p-2.5 rounded-xl text-left text-[12px] font-medium transition-all border cursor-pointer ${
                            budgetTier === opt
                              ? 'bg-[#f2ede4] text-[#1a3a3a] border-[#1a3a3a] font-bold'
                              : 'bg-[#f8f3e9] text-[#414848] border-[#dedad0] hover:bg-[#f2ede4]'
                          }`}
                        >
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-[13px] font-bold text-[#1d1c16] uppercase tracking-wider">
                      5. Contact &amp; Brief
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#f8f3e9] border border-[#dedad0] text-[14px] text-[#1d1c16] placeholder:text-[#414848]/60 focus:outline-none focus:border-[#1a3a3a]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#f8f3e9] border border-[#dedad0] text-[14px] text-[#1d1c16] placeholder:text-[#414848]/60 focus:outline-none focus:border-[#1a3a3a]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name & Website URL"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#f8f3e9] border border-[#dedad0] text-[14px] text-[#1d1c16] placeholder:text-[#414848]/60 focus:outline-none focus:border-[#1a3a3a]"
                    />
                    <textarea
                      rows={3}
                      placeholder="Brief context: What challenge are you trying to solve? (e.g. Low trial conversion, re-architecting complex dashboard, new category brand drop)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#f8f3e9] border border-[#dedad0] text-[14px] text-[#1d1c16] placeholder:text-[#414848]/60 focus:outline-none focus:border-[#1a3a3a] resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-[#ffdad6] text-[#ba1a1a] rounded-xl text-[13px] font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[12px] text-[#414848]">
                      <span className="w-2 h-2 rounded-full bg-[#785a00]" />
                      <span>Direct Partner Execution · No Spam</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1a3a3a] hover:bg-[#012425] text-white font-bold text-[14px] shadow-md transition-all cursor-pointer"
                    >
                      Send Brief to Senior Partners →
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
