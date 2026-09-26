import React from 'react';
import { ArrowRight, Search, Calculator, Store, ShieldCheck, HelpCircle, FileCheck2, Mic, Globe, Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onStartDiscovery: () => void;
  onBrowseSchemes: () => void;
  onLaunchCalculator: () => void;
  onLocatePartner: () => void;
  onGoToTracking: () => void;
  onOpenVoiceMitra?: () => void;
  onOpenGroundedSearch?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartDiscovery,
  onBrowseSchemes,
  onLaunchCalculator,
  onLocatePartner,
  onGoToTracking,
  onOpenVoiceMitra,
  onOpenGroundedSearch,
}) => {
  return (
    <div className="space-y-6 pb-20">
      {/* Hero Section - Solid Deep Teal, Clean & Trustworthy */}
      <div className="bg-[#124C5F] text-white rounded-xl p-6 sm:p-9 shadow-[0_2px_8px_rgba(18,76,95,0.08)]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 bg-[#FAF8F3]/15 text-[#FAF8F3] text-sm sm:text-base font-bold px-3.5 py-1.5 rounded-md border border-white/20 flex-wrap">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D99A32]" />
            <span>Public Financial Assistance Discovery</span>
            <span className="text-sm sm:text-base font-black text-red-300 uppercase tracking-wide bg-red-900/50 px-2.5 py-0.5 rounded border border-red-400/40">
              DEMO PORTAL
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Find the right financial assistance for your needs.
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F3]/95 leading-relaxed font-normal">
            Navigate central and state government schemes, calculate indicative financing options, and connect with certified local channel partners with complete transparency.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onStartDiscovery}
              className="bg-[#D99A32] text-[#102A32] font-bold text-base px-6 py-3.5 rounded-lg hover:bg-[#c48928] transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Check My Options</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onBrowseSchemes}
              className="bg-white/10 text-white font-bold text-base px-6 py-3.5 rounded-lg hover:bg-white/20 border border-white/25 transition-colors"
            >
              Explore Schemes
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-2xl sm:text-3xl font-black text-[#124C5F]">₹450Cr+</div>
          <div className="text-sm sm:text-base font-bold text-[#263238] mt-1">Indicative Aid</div>
          <span className="text-xs sm:text-sm text-[#73706A] block mt-0.5 font-medium">Demo metrics</span>
        </div>
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-2xl sm:text-3xl font-black text-[#124C5F]">120+</div>
          <div className="text-sm sm:text-base font-bold text-[#263238] mt-1">Welfare Schemes</div>
          <span className="text-xs sm:text-sm text-[#73706A] block mt-0.5 font-medium">Central & State</span>
        </div>
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-2xl sm:text-3xl font-black text-[#34745A]">98%</div>
          <div className="text-sm sm:text-base font-bold text-[#263238] mt-1">Guidance Rate</div>
          <span className="text-xs sm:text-sm text-[#73706A] block mt-0.5 font-medium">Through Partners</span>
        </div>
      </div>

      {/* 3 Simple Steps Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-[#102A32]">How Sahay Helps You</h2>
          <span className="text-xs sm:text-sm font-bold text-[#124C5F] bg-[#E6F0F0] px-3.5 py-1.5 rounded-md">
            3 simple steps
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Step 1 Card */}
          <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#124C5F]/40 transition-colors">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A32]">1. Find suitable schemes</h3>
                <p className="text-sm sm:text-base text-[#73706A] mt-2 leading-relaxed font-normal">
                  Provide demographic details and project goals to identify welfare schemes matched to your profile.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E5E0D6]">
              <button
                onClick={onStartDiscovery}
                className="text-sm sm:text-base font-bold text-[#124C5F] hover:text-[#102A32] inline-flex items-center gap-1.5 group"
              >
                <span>Check Match</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#124C5F]/40 transition-colors">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6] text-[#D99A32] flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A32]">2. Estimate financing</h3>
                <p className="text-sm sm:text-base text-[#73706A] mt-2 leading-relaxed font-normal">
                  Use our calculator to project indicative subsidy grants, margin contribution, and monthly EMIs.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E5E0D6]">
              <button
                onClick={onLaunchCalculator}
                className="text-sm sm:text-base font-bold text-[#124C5F] hover:text-[#102A32] inline-flex items-center gap-1.5 group"
              >
                <span>Launch Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#124C5F]/40 transition-colors">
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#E6F0F0] text-[#34745A] flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A32]">3. Find a channel partner</h3>
                <p className="text-sm sm:text-base text-[#73706A] mt-2 leading-relaxed font-normal">
                  Connect with certified banking correspondents and Common Service Centers (CSCs) for guided application.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E5E0D6]">
              <button
                onClick={onLocatePartner}
                className="text-sm sm:text-base font-bold text-[#124C5F] hover:text-[#102A32] inline-flex items-center gap-1.5 group"
              >
                <span>Locate Partner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time AI Public Service Assistance (Voice Mitra & Search Grounding) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Card 1: Gemini Live Voice Mitra */}
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="w-11 h-11 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center shrink-0">
                <Mic className="w-5 h-5 text-[#124C5F]" />
              </div>
              <span className="text-xs sm:text-sm uppercase font-extrabold tracking-wider text-[#124C5F] bg-[#E6F0F0] px-3 py-1 rounded border border-[#124C5F]/20">
                Voice + Text Assistant
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#102A32]">Sahay Voice & Text Mitra</h3>
            <p className="text-sm sm:text-base text-[#73706A] leading-relaxed">
              Have an interactive voice conversation or type your queries about business eligibility, subsidy percentages, and booking channel partners.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-[#E5E0D6]">
            {onOpenVoiceMitra && (
              <button
                type="button"
                onClick={onOpenVoiceMitra}
                className="w-full py-3.5 px-4 bg-[#124C5F] hover:bg-[#102A32] text-white font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Mic className="w-4 h-4" />
                <span>Start Voice / Text Mitra</span>
                <span className="w-2 h-2 rounded-full bg-[#34745A] animate-ping ml-1" />
              </button>
            )}
          </div>
        </div>

        {/* Card 2: Google Search Grounding */}
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="w-11 h-11 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6] text-[#124C5F] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-[#124C5F]" />
              </div>
              <span className="text-xs sm:text-sm uppercase font-extrabold tracking-wider text-[#34745A] bg-[#E6F0F0] px-3 py-1 rounded border border-[#34745A]/20">
                Official Scheme Grounding
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#102A32]">Official Scheme & Portal Search</h3>
            <p className="text-sm sm:text-base text-[#73706A] leading-relaxed">
              Query active 2025/2026 notifications, portal application links, and official subsidy guidelines grounded in real-time government registry data.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-[#E5E0D6]">
            {onOpenGroundedSearch && (
              <button
                type="button"
                onClick={onOpenGroundedSearch}
                className="w-full py-3.5 px-4 bg-white hover:bg-[#FAF8F3] text-[#124C5F] border border-[#124C5F]/30 font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Search className="w-4 h-4 text-[#124C5F]" />
                <span>Search Live Government Portals</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Guided Discovery Banner */}
      <div className="bg-[#102A32] text-white rounded-xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#D99A32] text-[#102A32] flex items-center justify-center shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">Not sure where to start?</h4>
            <p className="text-sm sm:text-base text-[#FAF8F3]/85 mt-1 font-normal">
              Take our 60-second guided eligibility quiz to find potentially suitable assistance schemes.
            </p>
          </div>
        </div>
        <button
          onClick={onStartDiscovery}
          className="w-full sm:w-auto shrink-0 bg-[#D99A32] text-[#102A32] font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg hover:bg-[#c48928] transition-colors shadow-sm"
        >
          Start 60-Second Quiz
        </button>
      </div>

      {/* Existing Application Quick Track Banner */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center shrink-0">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-[#102A32]">Already submitted an application?</div>
            <div className="text-sm text-[#73706A] font-medium">Track progress for demo reference #SHY-2024-8921</div>
          </div>
        </div>
        <button
          onClick={onGoToTracking}
          className="text-sm sm:text-base font-bold text-[#124C5F] bg-[#FAF8F3] border border-[#E5E0D6] hover:bg-[#E6F0F0] px-5 py-3 rounded-lg transition-colors shrink-0 shadow-xs"
        >
          Track Status
        </button>
      </div>
    </div>
  );
};
