/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WorkView } from './components/views/WorkView';
import { ServicesView } from './components/views/ServicesView';
import { ApproachView } from './components/views/ApproachView';
import { AboutView } from './components/views/AboutView';
import { InsightsView } from './components/views/InsightsView';
import { ContactView } from './components/views/ContactView';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CaseStudy } from './types';
import { easeEditorial } from './components/motion/MotionReveal';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  // Synchronize scroll on view change
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic);
    setIsInquiryOpen(true);
  };

  const handleCaseStudySelect = (cs: CaseStudy) => {
    setSelectedCaseStudy(cs);
  };

  return (
    <div className="min-h-screen bg-[#fef9ef] text-[#1d1c16] flex flex-col font-sans selection:bg-[#c7e9e8] selection:text-[#002020]">
      {/* Fixed Sticky Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenProjectInquiry={() => handleOpenInquiry()}
      />

      {/* Main Content Area with View Transition */}
      <main className="flex-1 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: easeEditorial }}
            className="w-full"
          >
            {currentView === 'work' && (
              <WorkView
                onSelectCaseStudy={handleCaseStudySelect}
                onOpenProjectInquiry={handleOpenInquiry}
                onNavigateToServices={() => handleNavigate('services')}
                onNavigateToContact={() => handleNavigate('contact')}
              />
            )}

            {currentView === 'services' && (
              <ServicesView
                onOpenProjectInquiry={handleOpenInquiry}
              />
            )}

            {currentView === 'approach' && (
              <ApproachView
                onOpenProjectInquiry={() => handleOpenInquiry()}
              />
            )}

            {currentView === 'about' && (
              <AboutView
                onOpenProjectInquiry={() => handleOpenInquiry()}
              />
            )}

            {currentView === 'insights' && (
              <InsightsView
                onOpenProjectInquiry={() => handleOpenInquiry()}
              />
            )}

            {currentView === 'contact' && (
              <ContactView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProjectInquiry={() => handleOpenInquiry()}
      />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onDiscussProject={(caseStudyTitle) => {
          setSelectedCaseStudy(null);
          handleOpenInquiry(caseStudyTitle ? `${caseStudyTitle} Sprint` : undefined);
        }}
      />

      {/* Project Inquiry ("Discuss a project") Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialTopic={inquiryTopic}
      />
    </div>
  );
}
