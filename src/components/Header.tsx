import React, { useState } from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenProjectInquiry: () => void;
}

export function Header({ currentView, onNavigate, onOpenProjectInquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStatusPopover, setShowStatusPopover] = useState(false);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'approach', label: 'Approach' },
    { id: 'about', label: 'About' },
    { id: 'insights', label: 'Insights' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fef9ef]/95 backdrop-blur-md border-b border-[#dedad0]/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-14 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('work')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img
              alt="The Dot Studio Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VvOComKDVABBMS4_M0w-UQ2K2b4Yr6qmXYJMWXH69Z58lNy6OUJfGhhauBVd63zt-FzkxYP8JW8HpgjP1TS239qVwXtZx3foGrVY-yw1PzjseSKJXOUG2JRiBZ0RSzbnVZl0lUOTtT_-PwSn_sqJ1orQvoMsuDrwvkK2_yXrK_7Gm2IrC-4R1tu8OC3E7SYfiHQ-oe89UIrm9Gyh_ozc7jxLfcvP4bJ70Jaw6Gi2n_JDHUKuqi7Rnd"
            />
            <span className="font-display text-[20px] tracking-tight text-[#1d1c16] font-bold">
              The Dot
            </span>
          </button>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#f0c050] ml-1" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-[15px] transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#1d1c16] font-semibold'
                    : 'text-[#414848] hover:text-[#1d1c16]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a3a3a] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`hidden sm:inline-block text-[15px] cursor-pointer transition-colors ${
              currentView === 'contact'
                ? 'text-[#1d1c16] font-semibold underline underline-offset-4'
                : 'text-[#414848] hover:text-[#1d1c16]'
            }`}
          >
            Contact
          </button>

          <button
            type="button"
            onClick={onOpenProjectInquiry}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1a3a3a] hover:bg-[#012425] text-white text-[13px] font-medium shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Discuss a project
          </button>

          {/* Quick Studio Status Pill / Avatar */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowStatusPopover(!showStatusPopover)}
              title="Studio Capacity & Senior Partner Status"
              className="w-8 h-8 rounded-full bg-[#012425] text-white flex items-center justify-center hover:bg-[#1a3a3a] transition-colors cursor-pointer relative"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#f0c050] border-2 border-[#fef9ef]" />
            </button>

            {/* Quick Status Dropdown Popover */}
            {showStatusPopover && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-[#f8f3e9] rounded-2xl p-4 shadow-xl border border-[#dedad0] text-[13px] z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-3 border-b border-[#dedad0]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#785a00] animate-pulse" />
                    <span className="font-bold text-[#1d1c16]">Direct Partner Desk</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowStatusPopover(false)}
                    className="text-[#414848] hover:text-[#1d1c16] text-[16px]"
                  >
                    ×
                  </button>
                </div>
                <div className="py-3 space-y-2 text-[#414848]">
                  <p className="leading-snug">
                    <strong className="text-[#1d1c16]">Active:</strong> Sprint W12 for Kora &amp; Vela Freight.
                  </p>
                  <p className="text-[12px] bg-[#f2ede4] p-2 rounded-lg border border-[#dedad0]/60">
                    🟢 Accepting 3 inquiries for Q2/Q3 2026 sprints.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowStatusPopover(false);
                    onOpenProjectInquiry();
                  }}
                  className="w-full mt-1 py-2 px-3 bg-[#1a3a3a] text-white rounded-lg text-center font-medium text-[12px] hover:bg-[#012425] transition-colors"
                >
                  Schedule Partner Intro →
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1d1c16] hover:bg-[#f2ede4] rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fef9ef] border-b border-[#dedad0] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-[16px] py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  currentView === item.id
                    ? 'bg-[#f2ede4] text-[#1d1c16] font-bold'
                    : 'text-[#414848] hover:bg-[#f8f3e9]'
                }`}
              >
                <span>{item.label}</span>
                {currentView === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
                )}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`text-left text-[16px] py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                currentView === 'contact'
                  ? 'bg-[#f2ede4] text-[#1d1c16] font-bold'
                  : 'text-[#414848] hover:bg-[#f8f3e9]'
              }`}
            >
              <span>Contact</span>
              {currentView === 'contact' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#785a00]" />
              )}
            </button>
          </nav>

          <div className="pt-4 border-t border-[#dedad0] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectInquiry();
              }}
              className="w-full py-3 rounded-xl bg-[#1a3a3a] text-white font-medium text-center shadow-md hover:bg-[#012425]"
            >
              Discuss a project
            </button>
            <div className="flex items-center justify-between text-[12px] text-[#414848] px-1">
              <span>Chennai · Global Engagements</span>
              <span className="text-[#785a00] font-semibold">Q2/Q3 Available</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
