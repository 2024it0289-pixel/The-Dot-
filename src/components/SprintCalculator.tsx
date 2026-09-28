import React, { useState } from 'react';

interface SprintCalculatorProps {
  onBookSprint: (summary: string) => void;
}

export function SprintCalculator({ onBookSprint }: SprintCalculatorProps) {
  const [includeProductUX, setIncludeProductUX] = useState(true);
  const [includePlatformWebflow, setIncludePlatformWebflow] = useState(true);
  const [includeBrandIdentity, setIncludeBrandIdentity] = useState(false);
  const [includeGrowthOptimization, setIncludeGrowthOptimization] = useState(false);
  const [complexity, setComplexity] = useState<'standard' | 'deep'>('standard');

  // Calculate pricing & weeks
  let basePrice = 0;
  let weeks = 0;

  if (includeProductUX) {
    basePrice += complexity === 'standard' ? 14000 : 20000;
    weeks += complexity === 'standard' ? 4 : 6;
  }
  if (includePlatformWebflow) {
    basePrice += complexity === 'standard' ? 10000 : 15000;
    weeks += complexity === 'standard' ? 3 : 5;
  }
  if (includeBrandIdentity) {
    basePrice += complexity === 'standard' ? 8000 : 12000;
    weeks += 2;
  }
  if (includeGrowthOptimization) {
    basePrice += 4500;
    weeks += 1;
  }

  // Sprints overlap intentionally by ~30% in parallel execution
  const totalWeeks = Math.max(4, Math.round(weeks * 0.75));

  const handleBook = () => {
    const summary = `Calculated Sprint (~${totalWeeks} wks, ~$${basePrice.toLocaleString()})`;
    onBookSprint(summary);
  };

  return (
    <div className="bg-[#f8f3e9] rounded-3xl p-6 sm:p-10 border border-[#dedad0] shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#785a00] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#785a00]" />
              <span>Interactive Scope Modeler</span>
            </div>
            <h3 className="font-display text-[22px] sm:text-[28px] font-bold text-[#1d1c16] tracking-tight">
              Model your custom sprint commitment.
            </h3>
            <p className="text-[14px] text-[#414848]">
              No ambiguous hourly timesheets. Select your exact deliverables to configure a guaranteed, fixed-price sprint.
            </p>
          </div>

          {/* Module Toggles */}
          <div className="space-y-3">
            <span className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider block">
              1. Select Studio Disciplines
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIncludeProductUX(!includeProductUX)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                  includeProductUX
                    ? 'bg-[#1a3a3a] text-white border-[#1a3a3a] shadow-xs'
                    : 'bg-[#f2ede4] text-[#1d1c16] border-[#dedad0] hover:bg-[#ece8de]'
                }`}
              >
                <div>
                  <p className="font-bold text-[14px]">Product &amp; UX System</p>
                  <p className={`text-[11px] ${includeProductUX ? 'text-[#83a4a3]' : 'text-[#414848]'}`}>
                    Wireframes, Design Tokens, Flows
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full ${includeProductUX ? 'bg-[#ffce5d]' : 'bg-[#dedad0]'}`} />
              </button>

              <button
                type="button"
                onClick={() => setIncludePlatformWebflow(!includePlatformWebflow)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                  includePlatformWebflow
                    ? 'bg-[#1a3a3a] text-white border-[#1a3a3a] shadow-xs'
                    : 'bg-[#f2ede4] text-[#1d1c16] border-[#dedad0] hover:bg-[#ece8de]'
                }`}
              >
                <div>
                  <p className="font-bold text-[14px]">Platform / Webflow Code</p>
                  <p className={`text-[11px] ${includePlatformWebflow ? 'text-[#83a4a3]' : 'text-[#414848]'}`}>
                    Semantic build, CMS, 95+ Score
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full ${includePlatformWebflow ? 'bg-[#ffce5d]' : 'bg-[#dedad0]'}`} />
              </button>

              <button
                type="button"
                onClick={() => setIncludeBrandIdentity(!includeBrandIdentity)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                  includeBrandIdentity
                    ? 'bg-[#1a3a3a] text-white border-[#1a3a3a] shadow-xs'
                    : 'bg-[#f2ede4] text-[#1d1c16] border-[#dedad0] hover:bg-[#ece8de]'
                }`}
              >
                <div>
                  <p className="font-bold text-[14px]">Brand &amp; Digital Identity</p>
                  <p className={`text-[11px] ${includeBrandIdentity ? 'text-[#83a4a3]' : 'text-[#414848]'}`}>
                    Logo suite, Typography, Voice
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full ${includeBrandIdentity ? 'bg-[#ffce5d]' : 'bg-[#dedad0]'}`} />
              </button>

              <button
                type="button"
                onClick={() => setIncludeGrowthOptimization(!includeGrowthOptimization)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                  includeGrowthOptimization
                    ? 'bg-[#1a3a3a] text-white border-[#1a3a3a] shadow-xs'
                    : 'bg-[#f2ede4] text-[#1d1c16] border-[#dedad0] hover:bg-[#ece8de]'
                }`}
              >
                <div>
                  <p className="font-bold text-[14px]">Growth &amp; CRO Funnel</p>
                  <p className={`text-[11px] ${includeGrowthOptimization ? 'text-[#83a4a3]' : 'text-[#414848]'}`}>
                    Telemetry audit, Multi-variant test
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full ${includeGrowthOptimization ? 'bg-[#ffce5d]' : 'bg-[#dedad0]'}`} />
              </button>
            </div>
          </div>

          {/* Scope Depth Selector */}
          <div className="space-y-2">
            <span className="text-[12px] font-bold text-[#1d1c16] uppercase tracking-wider block">
              2. Product Scope Depth
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setComplexity('standard')}
                className={`flex-1 py-2 px-4 rounded-xl text-[13px] font-medium transition-all border ${
                  complexity === 'standard'
                    ? 'bg-white text-[#1d1c16] border-[#1d1c16] font-bold shadow-xs'
                    : 'bg-[#f2ede4] text-[#414848] border-[#dedad0]'
                }`}
              >
                Standard (Core SaaS / V1 Platform)
              </button>
              <button
                type="button"
                onClick={() => setComplexity('deep')}
                className={`flex-1 py-2 px-4 rounded-xl text-[13px] font-medium transition-all border ${
                  complexity === 'deep'
                    ? 'bg-white text-[#1d1c16] border-[#1d1c16] font-bold shadow-xs'
                    : 'bg-[#f2ede4] text-[#414848] border-[#dedad0]'
                }`}
              >
                Comprehensive (Enterprise / Multi-role)
              </button>
            </div>
          </div>
        </div>

        {/* Output Readout Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#1a3a3a] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#2d4c4c]">
              <span className="text-[11px] uppercase tracking-wider text-[#ffce5d] font-semibold">
                Sprint Readout
              </span>
              <span className="text-[12px] text-[#83a4a3] font-mono">100% Fixed Guarantee</span>
            </div>

            <div>
              <span className="text-[13px] text-[#83a4a3]">Estimated Total Sprint:</span>
              <p className="font-display text-[36px] sm:text-[44px] font-bold text-white tracking-tight tabular-nums">
                ${basePrice.toLocaleString()}
              </p>
              <p className="text-[13px] text-[#c7e9e8] mt-1 font-mono">
                Duration: ~{totalWeeks} Weeks Bounded Sprint
              </p>
            </div>

            {/* Included Guarantees */}
            <div className="space-y-2 pt-2 border-t border-[#2d4c4c] text-[13px]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#ffce5d]">check</span>
                <span className="text-[#f5f0e6]">Direct Founding Partner Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#ffce5d]">check</span>
                <span className="text-[#f5f0e6]">Bi-weekly Working Prototypes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#ffce5d]">check</span>
                <span className="text-[#f5f0e6]">30-Day Post-Launch Code Warranty</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBook}
            className="w-full py-4 rounded-xl bg-[#ffce5d] text-[#755700] hover:bg-[#f0c050] font-bold text-[14px] shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            Lock In This Sprint Scope →
          </button>
        </div>
      </div>
    </div>
  );
}
