import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenProjectInquiry: () => void;
}

export function Footer({ onNavigate, onOpenProjectInquiry }: FooterProps) {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleLink = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f2ede4] mt-16 border-t border-[#dedad0]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 pt-16 pb-16">
        {/* Studio Creed Header */}
        <div className="pb-16 border-b border-[#dedad0]">
          <p className="text-[12px] uppercase tracking-wider text-[#414848] mb-4 flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#785a00]" />
            STUDIO CREED
          </p>
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[56px] text-[#1d1c16] max-w-4xl tracking-tight leading-tight font-bold">
            “Design is not art. Design is solving problems.”
          </h2>
        </div>

        {/* 12-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 pb-16 border-b border-[#dedad0]">
          {/* Brand & Direct Channel Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  alt="The Dot Studio Logo"
                  className="h-7 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VvOComKDVABBMS4_M0w-UQ2K2b4Yr6qmXYJMWXH69Z58lNy6OUJfGhhauBVd63zt-FzkxYP8JW8HpgjP1TS239qVwXtZx3foGrVY-yw1PzjseSKJXOUG2JRiBZ0RSzbnVZl0lUOTtT_-PwSn_sqJ1orQvoMsuDrwvkK2_yXrK_7Gm2IrC-4R1tu8OC3E7SYfiHQ-oe89UIrm9Gyh_ozc7jxLfcvP4bJ70Jaw6Gi2n_JDHUKuqi7Rnd"
                />
                <span className="font-display text-[20px] font-bold text-[#1d1c16] tracking-tight">
                  The Dot Studio
                </span>
              </div>
              <p className="text-[15px] text-[#414848] max-w-sm leading-relaxed">
                Premier digital product and growth studio engineering strategic systems, craft-led platforms, and category-defining identities.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-wider text-[#414848] font-semibold">
                Direct Channels
              </p>
              <a
                className="block text-[18px] text-[#1d1c16] font-medium hover:underline"
                href="mailto:hello@thedot.studio"
              >
                hello@thedot.studio
              </a>
              <p className="text-[13px] text-[#414848]">
                HQ: Chennai, India · Operating globally
              </p>
            </div>
          </div>

          {/* Navigation Links Columns (8 cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Capabilities */}
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-wider text-[#1d1c16] font-semibold">
                Capabilities
              </p>
              <ul className="space-y-3 text-[13px]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleLink('services')}
                    className="text-[#414848] hover:text-[#1d1c16] transition-colors cursor-pointer text-left"
                  >
                    Product &amp; UX
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleLink('services')}
                    className="text-[#414848] hover:text-[#1d1c16] transition-colors cursor-pointer text-left"
                  >
                    Digital Platforms
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleLink('services')}
                    className="text-[#414848] hover:text-[#1d1c16] transition-colors cursor-pointer text-left"
                  >
                    Brand Systems
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleLink('services')}
                    className="text-[#414848] hover:text-[#1d1c16] transition-colors cursor-pointer text-left"
                  >
                    Growth &amp; CRO
                  </button>
                </li>
              </ul>
            </div>

            {/* Studio */}
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-wider text-[#1d1c16] font-semibold">
                Studio
              </p>
              <nav className="space-y-3 text-[13px] flex flex-col">
                <button
                  type="button"
                  onClick={() => handleLink('approach')}
                  className="text-[#414848] hover:text-[#1d1c16] transition-colors text-left cursor-pointer"
                >
                  Approach
                </button>
                <button
                  type="button"
                  onClick={() => handleLink('about')}
                  className="text-[#414848] hover:text-[#1d1c16] transition-colors text-left cursor-pointer"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => handleLink('insights')}
                  className="text-[#414848] hover:text-[#1d1c16] transition-colors text-left cursor-pointer"
                >
                  Insights
                </button>
                <button
                  type="button"
                  onClick={() => handleLink('contact')}
                  className="text-[#414848] hover:text-[#1d1c16] transition-colors text-left cursor-pointer"
                >
                  Careers (Senior Leads)
                </button>
              </nav>
            </div>

            {/* Work */}
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-wider text-[#1d1c16] font-semibold">
                Work
              </p>
              <nav className="space-y-3 text-[13px] flex flex-col">
                <button
                  type="button"
                  onClick={() => handleLink('work')}
                  className="text-[#1d1c16] font-semibold transition-colors text-left cursor-pointer"
                >
                  Featured Cases
                </button>
                <button
                  type="button"
                  onClick={() => handleLink('work')}
                  className="text-[#414848] hover:text-[#1d1c16] transition-colors text-left cursor-pointer"
                >
                  Index / Archive
                </button>
                <button
                  type="button"
                  onClick={() => handleLink('services')}
                  className="text-[#414848] hover:text-[#1d1c16] transition-colors text-left cursor-pointer"
                >
                  Client Engagements
                </button>
                <button
                  type="button"
                  onClick={onOpenProjectInquiry}
                  className="text-[#785a00] font-semibold hover:underline text-left cursor-pointer"
                >
                  Inquiries →
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#414848]">
          <p>© 2026 The Dot Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#1d1c16] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#1d1c16] transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-[#012425]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#f8f3e9] rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-[#dedad0] space-y-6">
            <div className="flex items-center justify-between border-b border-[#dedad0] pb-4">
              <h3 className="font-display text-[22px] font-bold text-[#1d1c16]">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-[#f2ede4] flex items-center justify-center text-[#1d1c16] hover:bg-[#dedad0]"
              >
                ✕
              </button>
            </div>
            <div className="text-[14px] text-[#414848] space-y-4 max-h-96 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    The Dot Studio prioritizes strict confidentiality and data protection for all prospective and active clients. We do not sell, distribute, or monetize project briefs or contact information submitted through this website.
                  </p>
                  <p>
                    All strategic briefs, NDA provisions, and design assets are held in encrypted, private enterprise repositories. We use essential analytical telemetry solely to measure site performance and conversion efficacy.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All client engagements are governed by fixed-scope, value-driven sprint contracts. Prior to kickoff, mutual sprint deliverables, timelines, and acceptance criteria are signed by both parties.
                  </p>
                  <p>
                    Upon completion and final settlement, all intellectual property, Figma tokens, Webflow configurations, and code repositories are transferred 100% to the client with full commercial ownership rights.
                  </p>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="w-full py-3 bg-[#1a3a3a] text-white rounded-xl font-medium hover:bg-[#012425] transition-colors"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
