import React from 'react';
import { ArrowLeft, ArrowRight, Store, Wrench, Sprout, GraduationCap, Home, Lightbulb } from 'lucide-react';
import { ProjectRequirement } from '../types';

interface RequirementScreenProps {
  requirement: ProjectRequirement;
  onChangeRequirement: (updated: Partial<ProjectRequirement>) => void;
  onBack: () => void;
  onFindSchemes: () => void;
}

export const RequirementScreen: React.FC<RequirementScreenProps> = ({
  requirement,
  onChangeRequirement,
  onBack,
  onFindSchemes
}) => {
  const purposes: {
    id: ProjectRequirement['purpose'];
    label: string;
    icon: React.ReactNode;
    subtitle: string;
  }[] = [
    {
      id: 'Micro Business',
      label: 'Micro Business / MSME',
      icon: <Store className="w-4 h-4" />,
      subtitle: 'Retail, manufacturing, tailoring, service shops'
    },
    {
      id: 'Skill Training',
      label: 'Skill Training & Cert',
      icon: <Wrench className="w-4 h-4" />,
      subtitle: 'Vocational tooling, trade certifications'
    },
    {
      id: 'Agriculture',
      label: 'Agri & Allied Equipment',
      icon: <Sprout className="w-4 h-4" />,
      subtitle: 'Farm implements, irrigation, allied dairy'
    },
    {
      id: 'Higher Education',
      label: 'Higher Education Loan',
      icon: <GraduationCap className="w-4 h-4" />,
      subtitle: 'Professional degree & vocational diplomas'
    },
    {
      id: 'Housing Assistance',
      label: 'Housing Assistance',
      icon: <Home className="w-4 h-4" />,
      subtitle: 'Rural/Urban home construction & expansion'
    }
  ];

  const costPresets = [150000, 250000, 400000, 750000, 1000000];

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-[#124C5F] text-white rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(18,76,95,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FAF8F3]/95 bg-white/15 px-3 py-1 rounded-md border border-white/20 mb-2.5">
              <Lightbulb className="w-4 h-4 text-[#D99A32]" />
              <span>Step 2 of 6 · Project & Requirement</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What do you need assistance for?
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/90 mt-1.5 max-w-2xl leading-relaxed">
              Specify your project category and estimated capital requirement to identify grant ceilings and loan limits.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D6]">
          <span className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
            Funding Purpose & Capital Scale
          </span>
          <span className="text-xs sm:text-sm font-medium text-[#73706A]">
            Indicative Scope
          </span>
        </div>

        {/* Purpose Cards */}
        <div>
          <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2.5">
            Select Primary Assistance Category
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {purposes.map((p) => {
              const isSelected = requirement.purpose === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onChangeRequirement({ purpose: p.id })}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#E6F0F0] border-[#124C5F] text-[#124C5F] shadow-xs'
                      : 'bg-white border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3]'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      isSelected ? 'bg-[#124C5F] text-white' : 'bg-[#FAF8F3] text-[#73706A]'
                    }`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-[#102A32] flex items-center gap-1.5">
                      <span>{p.label}</span>
                      {isSelected && <span className="text-[#34745A] font-bold text-sm">✓</span>}
                    </div>
                    <p className="text-xs sm:text-sm text-[#73706A] mt-1">{p.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Estimated Project Cost */}
        <div className="space-y-2.5 pt-3 border-t border-[#E5E0D6]">
          <div className="flex items-center justify-between gap-2">
            <div>
              <label className="text-sm sm:text-base font-bold text-[#102A32] block">
                Estimated Total Project Cost
              </label>
              <span className="text-xs sm:text-sm text-[#73706A]">Total equipment, inventory, or operational requirement</span>
            </div>
            <span className="text-sm sm:text-base font-extrabold text-[#124C5F] bg-[#E6F0F0] px-3.5 py-1 rounded-lg border border-[#124C5F]/20 shrink-0">
              ₹ {requirement.estimatedCost.toLocaleString('en-IN')}
            </span>
          </div>

          <input
            type="range"
            min={25000}
            max={1500000}
            step={25000}
            value={requirement.estimatedCost}
            onChange={(e) => {
              const cost = Number(e.target.value);
              onChangeRequirement({
                estimatedCost: cost,
                applicantEquity: Math.round(cost * 0.2)
              });
            }}
            className="w-full accent-[#124C5F] cursor-pointer h-2"
          />

          <div className="flex justify-between text-xs sm:text-sm text-[#73706A] font-medium">
            <span>₹ 25,000</span>
            <span>₹ 15,00,000</span>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs sm:text-sm font-medium text-[#73706A]">Cost Presets:</span>
            {costPresets.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChangeRequirement({
                  estimatedCost: val,
                  applicantEquity: Math.round(val * 0.2)
                })}
                className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-md border transition-colors ${
                  requirement.estimatedCost === val
                    ? 'bg-[#124C5F] text-white border-[#124C5F]'
                    : 'bg-[#FAF8F3] text-[#263238] border-[#E5E0D6] hover:bg-white'
                }`}
              >
                ₹ {(val / 100000).toFixed(1)}L
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-2 pt-2">
          <label className="block text-sm sm:text-base font-bold text-[#102A32]">
            Brief Project Description
          </label>
          <textarea
            rows={3}
            value={requirement.description}
            onChange={(e) => onChangeRequirement({ description: e.target.value })}
            placeholder="e.g. Setting up a small mechanized tailoring and embroidery shop with 2 modern sewing machines..."
            className="w-full bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3.5 text-sm sm:text-base text-[#263238] focus:border-[#124C5F] focus:bg-white resize-none"
          />
          <p className="text-xs sm:text-sm text-[#73706A]">
            A brief statement helps local channel partners verify the relevant trade code for your application.
          </p>
        </div>

        {/* Dual Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#E5E0D6]">
          <button
            type="button"
            onClick={onBack}
            className="w-1/3 py-3.5 px-4 bg-white border border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <button
            type="button"
            onClick={onFindSchemes}
            className="w-2/3 py-3.5 px-4 bg-[#124C5F] text-white hover:bg-[#102A32] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Find Potentially Suitable Schemes</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
