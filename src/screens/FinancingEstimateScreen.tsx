import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calculator, AlertTriangle, CheckCircle2, Building, RefreshCw, FileText } from 'lucide-react';
import { Scheme, ProjectRequirement } from '../types';

interface FinancingEstimateScreenProps {
  selectedScheme: Scheme;
  requirement: ProjectRequirement;
  onBack: () => void;
  onProceedToPartner: () => void;
}

export const FinancingEstimateScreen: React.FC<FinancingEstimateScreenProps> = ({
  selectedScheme,
  requirement,
  onBack,
  onProceedToPartner
}) => {
  const [projectCost, setProjectCost] = useState(requirement.estimatedCost || 400000);
  const [financingPercent, setFinancingPercent] = useState(80); // 80% financing, 20% margin
  const [tenureYears, setTenureYears] = useState(5); // 5 years = 60 months
  const interestRateAnnual = 4.0; // 4% concessional annual

  // Calculations
  const potentialFinancing = Math.round((projectCost * financingPercent) / 100);
  const applicantContribution = projectCost - potentialFinancing;

  // Monthly EMI calculation formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRateAnnual / (12 * 100);
  const totalMonths = tenureYears * 12;
  const rawEmi = potentialFinancing > 0
    ? (potentialFinancing * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : 0;
  
  // If baseline ₹4,00,000, potential financing is ₹3,20,000 and EMI is ~₹6,500 (rounded)
  const estimatedEmi = Math.round(rawEmi / 50) * 50 || 6500;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Context Banner */}
      <div className="bg-[#124C5F] text-white rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(18,76,95,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FAF8F3]/95 bg-white/15 px-3 py-1 rounded-md border border-white/20 mb-2.5">
              <Calculator className="w-4 h-4 text-[#D99A32]" />
              <span>Step 4 of 6 · Financing Estimate</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Indicative Financial Breakdown
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/90 mt-1.5 max-w-2xl leading-relaxed">
              Calculations based on <strong>{selectedScheme.name}</strong> concessional credit structure.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Financial Overview Box */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D6]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
              Assistance Structure
            </span>
            <p className="text-xs sm:text-sm text-[#73706A]">Indicative projection for your requirement</p>
          </div>
          <span className="text-sm font-black text-red-600 uppercase tracking-wide">
            DEMO PORTAL
          </span>
        </div>

        {/* 4 Core Financial Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Project Cost */}
          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm font-semibold text-[#73706A] block">Project Cost</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#102A32] block mt-1">
              ₹{projectCost.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#73706A] mt-1 block">Total outlay</span>
          </div>

          {/* Potential Financing */}
          <div className="bg-[#E6F0F0] border border-[#124C5F]/20 rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm font-bold text-[#124C5F] block">Potential Financing</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#124C5F] block mt-1">
              ₹{potentialFinancing.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#34745A] font-bold mt-1 block">
              {financingPercent}% of project cost
            </span>
          </div>

          {/* Applicant Contribution */}
          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm font-semibold text-[#73706A] block">Applicant Contribution</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#102A32] block mt-1">
              ₹{applicantContribution.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#73706A] mt-1 block">
              {100 - financingPercent}% margin money
            </span>
          </div>

          {/* Estimated EMI */}
          <div className="bg-[#FAF8F3] border border-[#D99A32]/40 rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm font-bold text-[#102A32] block">Estimated EMI</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#D99A32] block mt-1">
              ₹{estimatedEmi.toLocaleString('en-IN')}<span className="text-xs sm:text-sm font-normal text-[#73706A]">/month</span>
            </span>
            <span className="text-xs text-[#73706A] mt-1 block">
              @ {interestRateAnnual}% for {tenureYears} yrs
            </span>
          </div>
        </div>

        {/* Essential Legal Disclaimer */}
        <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 flex items-start gap-3 text-xs sm:text-sm text-[#73706A]">
          <AlertTriangle className="w-5 h-5 text-[#D99A32] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#102A32] block">
              Notice: Indicative Calculation Only
            </span>
            <p className="leading-relaxed">
              These figures are representative estimates for demo and planning purposes. They do not constitute a formal sanction letter or imply guaranteed government approval. Final loan sanction, interest rate, and margin subsidy depend on lending bank evaluation and physical verification.
            </p>
          </div>
        </div>

        {/* Interactive Adjuster Drawer */}
        <div className="border-t border-[#E5E0D6] pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base font-bold text-[#102A32]">
              Adjust Project Parameters
            </span>
            <button
              onClick={() => {
                setProjectCost(400000);
                setFinancingPercent(80);
                setTenureYears(5);
              }}
              className="text-xs sm:text-sm text-[#124C5F] hover:underline flex items-center gap-1.5 font-bold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Baseline (₹4 Lakhs)</span>
            </button>
          </div>

          {/* Cost Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-[#73706A] font-medium">Project Cost:</span>
              <span className="font-bold text-[#102A32]">₹{projectCost.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={1000000}
              step={25000}
              value={projectCost}
              onChange={(e) => setProjectCost(Number(e.target.value))}
              className="w-full accent-[#124C5F] cursor-pointer h-2"
            />
          </div>

          {/* Repayment Tenure */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-[#73706A] font-medium">Repayment Tenure:</span>
              <span className="font-bold text-[#102A32]">{tenureYears} Years ({tenureYears * 12} Months)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {[3, 5, 7, 10].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setTenureYears(yr)}
                  className={`py-2 text-sm rounded-lg border transition-colors ${
                    tenureYears === yr
                      ? 'bg-[#124C5F] text-white border-[#124C5F] font-bold'
                      : 'bg-white text-[#263238] border-[#E5E0D6] hover:bg-[#FAF8F3] font-medium'
                  }`}
                >
                  {yr} Years
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subsidy & Sanction Details */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
          Subsidized Benefit Breakdown
        </h3>
        <div className="space-y-2.5 text-sm sm:text-base text-[#263238]">
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6] gap-2">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0" />
              <span>Capital Subsidy (NSFDC / Government grant component)</span>
            </div>
            <span className="font-bold text-[#34745A] shrink-0">Up to ₹80,000 (20%)</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6] gap-2">
            <div className="flex items-center gap-2.5">
              <Building className="w-4 h-4 text-[#124C5F] shrink-0" />
              <span>Concessional Term Loan (Through Partner Commercial Bank)</span>
            </div>
            <span className="font-bold text-[#124C5F] shrink-0">₹{(potentialFinancing - 80000 > 0 ? potentialFinancing - 80000 : potentialFinancing).toLocaleString('en-IN')}</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6] gap-2">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-[#73706A] shrink-0" />
              <span>Collateral Requirement</span>
            </div>
            <span className="font-bold text-[#102A32]">Nil (Covered under Credit Guarantee Trust)</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="w-1/3 py-3.5 px-4 bg-white border border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Schemes</span>
        </button>

        <button
          type="button"
          onClick={onProceedToPartner}
          className="w-2/3 py-3.5 px-4 bg-[#124C5F] text-white hover:bg-[#102A32] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <span>Find Nearby Channel Partner</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
