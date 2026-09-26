import React from 'react';
import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck, Globe, Mic } from 'lucide-react';
import { Scheme } from '../types';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  onProceedToFinancing: (scheme: Scheme) => void;
  onOpenGroundedSearch?: (schemeName: string) => void;
  onOpenVoiceMitra?: (prompt?: string) => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  scheme,
  onClose,
  onProceedToFinancing,
  onOpenGroundedSearch,
  onOpenVoiceMitra,
}) => {
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E5E0D6] shadow-xl p-6 sm:p-7 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E5E0D6]">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs uppercase font-bold tracking-wider text-[#34745A] bg-[#E6F0F0] px-2.5 py-0.5 rounded">
                Potentially Suitable Scheme
              </span>
              <span className="text-sm font-black text-red-600 tracking-wide uppercase">
                DEMO PORTAL
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A32] leading-snug">{scheme.name}</h3>
            <p className="text-sm text-[#73706A] mt-1">{scheme.ministry}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg border border-[#E5E0D6] text-[#73706A] hover:text-[#102A32] hover:bg-[#FAF8F3] flex items-center justify-center shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Financial Allocation Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4">
          <div>
            <span className="text-xs sm:text-sm text-[#73706A] block font-medium">Indicative Max Financing</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#124C5F]">{scheme.maxFinancing}</span>
            <span className="text-xs text-[#73706A] block mt-0.5">Subsidy + Concessional Loan</span>
          </div>
          <div>
            <span className="text-xs sm:text-sm text-[#73706A] block font-medium">Financial Terms</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#102A32]">{scheme.interestRate}</span>
            <span className="text-xs text-[#34745A] font-bold block mt-0.5">{scheme.subsidyRate}</span>
          </div>
        </div>

        {/* Why it may fit */}
        <div className="bg-[#E6F0F0] border border-[#124C5F]/20 rounded-xl p-4 text-sm sm:text-base">
          <span className="font-bold text-[#124C5F] block mb-1">Why this scheme may fit your requirement:</span>
          <p className="text-[#263238] leading-relaxed">{scheme.fitReason}</p>
        </div>

        {/* Eligibility Criteria Checklist */}
        <div className="space-y-2.5">
          <h4 className="text-xs sm:text-sm font-bold text-[#102A32] uppercase tracking-wider">
            Basic Eligibility Criteria
          </h4>
          <ul className="space-y-2 text-sm sm:text-base text-[#263238]">
            {scheme.eligibilitySummary.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 bg-[#FAF8F3] border border-[#E5E0D6] p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Required Verification Documents */}
        <div className="space-y-2.5">
          <h4 className="text-xs sm:text-sm font-bold text-[#102A32] uppercase tracking-wider">
            Required Documents for Verification
          </h4>
          <div className="space-y-2 text-sm sm:text-base text-[#263238]">
            {scheme.requiredDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E5E0D6]">
                <FileText className="w-4 h-4 text-[#124C5F] shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Search Grounding & Voice Mitra Tools */}
        <div className="p-4 bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#102A32]">
            <span>Live Government Assistance Tools</span>
            <span className="text-xs text-[#34745A] font-bold">
              Instant Advisory
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {onOpenGroundedSearch && (
              <button
                type="button"
                onClick={() => onOpenGroundedSearch(scheme.name)}
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 text-sm font-bold text-[#124C5F] bg-white border border-[#124C5F]/30 hover:bg-[#E6F0F0] rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>Search 2025/26 Guidelines</span>
              </button>
            )}
            {onOpenVoiceMitra && (
              <button
                type="button"
                onClick={() => onOpenVoiceMitra(`Tell me about ${scheme.name} eligibility and subsidy rates`)}
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 text-sm font-bold text-[#124C5F] bg-white border border-[#124C5F]/30 hover:bg-[#E6F0F0] rounded-lg transition-colors"
              >
                <Mic className="w-4 h-4 shrink-0" />
                <span>Ask Voice & Text Mitra</span>
              </button>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#73706A] pt-1">
          <ShieldCheck className="w-4 h-4 text-[#124C5F] shrink-0 mt-0.5" />
          <span>
            Indicative matching only. Final sanction and disbursal is subject to official verification of original documents by the nodal department.
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-[#E5E0D6]">
          <button
            onClick={onClose}
            className="w-1/3 py-3 px-4 bg-white border border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3] font-bold text-sm sm:text-base rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => onProceedToFinancing(scheme)}
            className="w-2/3 py-3 px-4 bg-[#124C5F] text-white hover:bg-[#102A32] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Proceed to Financing Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
