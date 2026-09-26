import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRight, CheckCircle2, Clock, Landmark, AlertCircle, Globe, Mic } from 'lucide-react';
import { Scheme, UserProfile, ProjectRequirement } from '../types';
import { mockSchemes } from '../data/mockData';
import { SchemeDetailModal } from '../components/SchemeDetailModal';

interface SchemesScreenProps {
  userProfile: UserProfile;
  requirement: ProjectRequirement;
  onEditQuery: () => void;
  onSelectSchemeForFinancing: (scheme: Scheme) => void;
  onOpenGroundedSearch?: (schemeName?: string) => void;
  onOpenVoiceMitra?: (prompt?: string) => void;
}

export const SchemesScreen: React.FC<SchemesScreenProps> = ({
  userProfile,
  requirement,
  onEditQuery,
  onSelectSchemeForFinancing,
  onOpenGroundedSearch,
  onOpenVoiceMitra,
}) => {
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'All' | 'Central' | 'State' | 'Credit Linked'>('All');

  const filteredSchemes = mockSchemes.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'All' || s.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Profile Criteria Summary Card */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs sm:text-sm uppercase font-extrabold tracking-wider text-[#124C5F] bg-[#E6F0F0] px-2.5 py-0.5 rounded">
                Matched Profile Criteria
              </span>
              <span className="text-xs sm:text-sm font-black text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                DEMO PORTAL
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#102A32] mt-2">
              Potentially Suitable Government Schemes
            </h1>
            <p className="text-sm sm:text-base text-[#73706A] mt-1 font-normal">
              Filtered for: <strong className="text-[#263238] font-bold">{userProfile.category} Category</strong> · Income <strong className="text-[#263238] font-bold">₹{userProfile.annualIncome.toLocaleString('en-IN')}</strong> · <strong className="text-[#263238] font-bold">{userProfile.district}, {userProfile.state}</strong> · <strong className="text-[#263238] font-bold">{requirement.purpose}</strong>
            </p>
          </div>
          <button
            onClick={onEditQuery}
            className="self-start sm:self-auto text-sm sm:text-base font-bold text-[#124C5F] bg-[#FAF8F3] hover:bg-[#E6F0F0] border border-[#E5E0D6] px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 shrink-0 shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Modify Filters</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Tabs */}
      <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-[#73706A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search scheme name, ministry, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5E0D6] rounded-lg text-sm sm:text-base text-[#263238] focus:border-[#124C5F] transition-colors shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 shrink-0">
          {(['All', 'Central', 'State', 'Credit Linked'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setTypeFilter(filter)}
              className={`text-sm sm:text-base px-4 py-2.5 rounded-lg border transition-colors whitespace-nowrap font-semibold ${
                typeFilter === filter
                  ? 'bg-[#124C5F] text-white border-[#124C5F] font-bold'
                  : 'bg-white text-[#73706A] border-[#E5E0D6] hover:bg-[#FAF8F3]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Official Scheme Grounding Banner */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-[#124C5F]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm sm:text-base font-bold text-[#102A32]">Official Scheme Grounding</span>
              <span className="text-xs sm:text-sm text-[#34745A] font-bold bg-[#E6F0F0] px-2.5 py-0.5 rounded">
                Live Google Search
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#73706A] mt-0.5">Verify real-time circulars, 2025/2026 interest subsidies, and national portal guidelines</p>
          </div>
        </div>
        {onOpenGroundedSearch && (
          <button
            type="button"
            onClick={() => onOpenGroundedSearch()}
            className="text-sm sm:text-base font-bold text-[#124C5F] bg-white border border-[#124C5F]/30 hover:bg-[#E6F0F0] px-4 py-2.5 rounded-lg transition-colors shrink-0 flex items-center gap-2 shadow-xs"
          >
            <Search className="w-4 h-4" />
            <span>Search Live Government Portals</span>
          </button>
        )}
      </div>

      {/* Disclaimer on Indicative Status */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-4 py-3.5 flex items-center gap-3 text-xs sm:text-sm text-[#73706A]">
        <AlertCircle className="w-5 h-5 text-[#124C5F] shrink-0" />
        <span>
          Schemes shown are <strong>potentially suitable</strong> based on initial criteria. Official approval is determined upon physical/biometric document verification.
        </span>
      </div>

      {/* Scheme Cards List */}
      <div className="space-y-5">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4 hover:border-[#124C5F]/40 transition-colors"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap mb-2">
                  <span className="text-xs sm:text-sm font-bold text-[#34745A] bg-[#E6F0F0] px-3 py-1 rounded flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#34745A]" />
                    <span>Potentially Suitable ({scheme.matchScore}% Match)</span>
                  </span>
                  <span className="text-xs sm:text-sm text-[#73706A] bg-[#FAF8F3] border border-[#E5E0D6] px-2.5 py-1 rounded font-semibold">
                    {scheme.type} Scheme
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A32]">
                  {scheme.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#73706A] mt-1 flex items-center gap-1.5 font-medium">
                  <Landmark className="w-4 h-4 text-[#73706A]" />
                  <span>{scheme.ministry}</span>
                </p>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#263238] leading-relaxed font-normal">
              {scheme.shortDescription}
            </p>

            {/* Why it may fit box */}
            <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 text-xs sm:text-sm">
              <span className="font-bold text-[#102A32] block mb-1">
                Why it may fit your requirement:
              </span>
              <p className="text-[#73706A] leading-relaxed">
                {scheme.fitReason}
              </p>
            </div>

            {/* Financial & Eligibility Key Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 text-xs sm:text-sm">
              <div>
                <span className="text-xs sm:text-sm text-[#73706A] block font-medium">Potential Financing</span>
                <span className="font-bold text-base sm:text-lg text-[#124C5F]">{scheme.maxFinancing}</span>
              </div>
              <div>
                <span className="text-xs sm:text-sm text-[#73706A] block font-medium">Interest / Subsidy</span>
                <span className="font-bold text-base sm:text-lg text-[#102A32]">{scheme.interestRate}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-xs sm:text-sm text-[#73706A] block font-medium">Basic Eligibility</span>
                <span className="text-sm sm:text-base text-[#263238] font-bold">{scheme.categoryEligibility.join(', ')} · &lt; ₹{(scheme.incomeLimit/100000).toFixed(0)}L</span>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pt-3.5 border-t border-[#E5E0D6]">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#73706A]">
                <Clock className="w-4 h-4 text-[#73706A]" />
                <span>Indicative processing: <strong className="font-bold text-[#102A32]">{scheme.processingTime}</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                {onOpenGroundedSearch && (
                  <button
                    type="button"
                    onClick={() => onOpenGroundedSearch(scheme.name)}
                    className="p-3 text-[#124C5F] bg-white border border-[#E5E0D6] hover:bg-[#FAF8F3] hover:border-[#124C5F] rounded-lg transition-colors"
                    title="Check live updates for this scheme"
                  >
                    <Globe className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedScheme(scheme)}
                  className="w-1/2 sm:w-auto px-4 py-2.5 text-sm sm:text-base font-bold text-[#124C5F] bg-white border border-[#E5E0D6] hover:bg-[#FAF8F3] rounded-lg transition-colors"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSchemeForFinancing(scheme)}
                  className="w-1/2 sm:w-auto px-5 py-2.5 text-sm sm:text-base font-bold text-white bg-[#124C5F] hover:bg-[#102A32] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Estimate Financing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scheme Detail Modal */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
        onProceedToFinancing={(scheme) => {
          setSelectedScheme(null);
          onSelectSchemeForFinancing(scheme);
        }}
        onOpenGroundedSearch={onOpenGroundedSearch}
        onOpenVoiceMitra={onOpenVoiceMitra}
      />
    </div>
  );
};
