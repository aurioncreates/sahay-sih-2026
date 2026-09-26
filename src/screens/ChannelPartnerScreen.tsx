import React, { useState } from 'react';
import { Search, MapPin, Store, Navigation, Phone, Clock, CheckCircle2, AlertCircle, ArrowRight, X } from 'lucide-react';
import { ChannelPartner } from '../types';
import { mockChannelPartners } from '../data/mockData';

interface ChannelPartnerScreenProps {
  onSelectPartnerForAssistance: (partner: ChannelPartner) => void;
}

export const ChannelPartnerScreen: React.FC<ChannelPartnerScreenProps> = ({
  onSelectPartnerForAssistance
}) => {
  const [searchLocation, setSearchLocation] = useState('Pune - Central District');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Active' | 'Sahay Kendra' | 'CSC Center'>('All');
  const [activePartnerDetail, setActivePartnerDetail] = useState<ChannelPartner | null>(null);
  const [partnerRegNotice, setPartnerRegNotice] = useState(false);

  const filteredPartners = mockChannelPartners.filter((p) => {
    if (activeFilter === 'Active' && p.status !== 'Active') return false;
    if (activeFilter === 'Sahay Kendra' && p.type !== 'Sahay Kendra') return false;
    if (activeFilter === 'CSC Center' && p.type !== 'CSC Center') return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-[#124C5F] text-white rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(18,76,95,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FAF8F3]/95 bg-white/15 px-3 py-1 rounded-md border border-white/20 mb-2.5">
              <Store className="w-4 h-4 text-[#D99A32]" />
              <span>Step 5 of 6 · Channel Partner Finder</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Connect with an Authorized Channel Partner
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/90 mt-1.5 max-w-2xl leading-relaxed">
              Certified Sahay Kendras, Common Service Centers (CSCs), and banking facilitators provide physical document verification and end-to-end filing assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3.5 flex items-center justify-between gap-2 text-xs sm:text-sm text-[#73706A]">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#D99A32] shrink-0" />
          <span>
            <strong>DEMO DATA:</strong> Partner locations and operating timings shown are illustrative mockups for this prototype.
          </span>
        </div>
        <span className="text-sm font-black text-red-600 uppercase shrink-0">
          DEMO PORTAL
        </span>
      </div>

      {/* Search & Location Bar */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <div className="flex items-center gap-2.5 bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-3.5 py-3">
          <MapPin className="w-5 h-5 text-[#124C5F] shrink-0" />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Enter city, district or PIN code..."
            className="w-full bg-transparent text-sm sm:text-base text-[#263238] focus:outline-none"
          />
          <button className="bg-[#124C5F] text-white p-2 rounded-lg hover:bg-[#102A32] transition-colors shrink-0">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-sm">
          {(['All', 'Active', 'Sahay Kendra', 'CSC Center'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-2 rounded-lg border transition-colors whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#124C5F] text-white border-[#124C5F] font-bold'
                  : 'bg-white text-[#73706A] border-[#E5E0D6] hover:bg-[#FAF8F3] font-medium'
              }`}
            >
              {filter === 'All' ? 'All Partners' : filter === 'Active' ? 'Active Only' : filter + 's'}
            </button>
          ))}
        </div>
      </div>

      {/* Simplified, Clean Non-Dominating Map Widget */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="relative h-48 sm:h-56 bg-[#FAF8F3] border-b border-[#E5E0D6] overflow-hidden">
          <svg className="w-full h-full text-[#E5E0D6]/40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E0D6" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <path d="M -20 80 Q 150 40 400 120 T 900 60" fill="none" stroke="#E6F0F0" strokeWidth="12" />
            <path d="M 200 -20 Q 220 100 240 250" fill="none" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M 50 160 Q 300 140 600 200" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          </svg>

          <div className="absolute inset-0 p-4 pointer-events-auto flex items-center justify-around">
            <button
              onClick={() => setActivePartnerDetail(mockChannelPartners[0])}
              className="group flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-9 h-9 rounded-full bg-[#124C5F] text-white flex items-center justify-center shadow-md border-2 border-white">
                <Store className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#102A32] bg-white px-2 py-0.5 rounded shadow-xs mt-1 border border-[#E5E0D6]">
                Kendra (1.2 km)
              </span>
            </button>

            <button
              onClick={() => setActivePartnerDetail(mockChannelPartners[3])}
              className="group flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-9 h-9 rounded-full bg-[#34745A] text-white flex items-center justify-center shadow-md border-2 border-white">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#102A32] bg-white px-2 py-0.5 rounded shadow-xs mt-1 border border-[#E5E0D6]">
                Pune Hub (2.1 km)
              </span>
            </button>

            <button
              onClick={() => setActivePartnerDetail(mockChannelPartners[1])}
              className="group flex flex-col items-center cursor-pointer opacity-75 transition-transform hover:scale-105"
            >
              <div className="w-9 h-9 rounded-full bg-[#73706A] text-white flex items-center justify-center shadow-md border-2 border-white">
                <Store className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-[#73706A] bg-white px-2 py-0.5 rounded shadow-xs mt-1 border border-[#E5E0D6]">
                Desk (3.5 km)
              </span>
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-[#102A32] text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#D99A32]" />
              <span>Showing 5 verified partner centers within 10 km radius</span>
            </div>
            <span className="text-xs text-[#FAF8F3]/80 hidden sm:inline">District Zone Central</span>
          </div>
        </div>
      </div>

      {/* Partner Network List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#102A32]">
            Nearby Verified Partner Centers ({filteredPartners.length})
          </h2>
          <span className="text-xs sm:text-sm text-[#73706A]">Sorted by proximity</span>
        </div>

        {filteredPartners.map((partner) => {
          const isActive = partner.status === 'Active';
          return (
            <div
              key={partner.id}
              className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4 hover:border-[#124C5F]/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-[#E6F0F0] text-[#124C5F]'
                        : 'bg-[#FAF8F3] border border-[#E5E0D6] text-[#73706A]'
                    }`}
                  >
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102A32] leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#73706A] mt-1 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#73706A] shrink-0" />
                      <span>{partner.distanceKm} km away · {partner.address}</span>
                    </p>
                  </div>
                </div>

                {/* Status indicator */}
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#E6F0F0] text-[#34745A]'
                      : 'bg-[#FAF8F3] text-[#73706A] border border-[#E5E0D6]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#34745A]' : 'bg-[#73706A]'
                    }`}
                  />
                  <span>{partner.status}</span>
                </span>
              </div>

              {/* Supported Schemes List */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm text-[#263238]">
                <span className="font-bold text-[#73706A]">Supported Schemes:</span>
                <span>{partner.supportedSchemes.join(' · ')}</span>
              </div>

              {/* Operating Info or warning */}
              {partner.statusReason ? (
                <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3 text-xs sm:text-sm text-[#73706A] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D99A32] shrink-0" />
                  <span>{partner.statusReason}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#73706A] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#73706A]" />
                    <span>{partner.operatingHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <Phone className="w-4 h-4 text-[#73706A]" />
                    <span>{partner.contactNumber}</span>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#E5E0D6]">
                <button
                  type="button"
                  onClick={() => setActivePartnerDetail(partner)}
                  className="px-4 py-2 text-sm font-bold text-[#124C5F] bg-white border border-[#E5E0D6] hover:bg-[#FAF8F3] rounded-lg transition-colors"
                >
                  View Details
                </button>
                <button
                  type="button"
                  disabled={!isActive}
                  onClick={() => onSelectPartnerForAssistance(partner)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs ${
                    isActive
                      ? 'bg-[#124C5F] text-white hover:bg-[#102A32]'
                      : 'bg-[#E5E0D6] text-[#73706A] cursor-not-allowed'
                  }`}
                >
                  <span>Select for Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Partner Registration Callout */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-5 sm:p-6 text-center space-y-2.5">
        <h3 className="text-base sm:text-lg font-bold text-[#102A32]">Are you an authorized CSC or Banking Partner?</h3>
        <p className="text-sm text-[#73706A] max-w-lg mx-auto">
          Empanel your Common Service Center or micro-finance branch to receive verified citizen application dossiers.
        </p>
        {partnerRegNotice && (
          <p className="text-sm font-bold text-[#34745A]">
            ✓ Demo Notice: Partner empanelment request logged for District Nodal Officer review.
          </p>
        )}
        <div className="pt-1">
          <button
            onClick={() => setPartnerRegNotice(true)}
            className="text-sm font-bold text-[#124C5F] bg-white border border-[#E5E0D6] hover:bg-[#FAF8F3] px-5 py-2.5 rounded-lg transition-colors"
          >
            Register as Channel Partner
          </button>
        </div>
      </div>

      {/* Partner Details Modal */}
      {activePartnerDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#E5E0D6] shadow-xl p-6 space-y-4">
            <div className="flex items-start justify-between pb-3.5 border-b border-[#E5E0D6]">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#73706A]">
                  {activePartnerDetail.type} · <strong className="text-red-600">DEMO PORTAL</strong>
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A32] mt-1">{activePartnerDetail.name}</h3>
              </div>
              <button
                onClick={() => setActivePartnerDetail(null)}
                className="w-9 h-9 rounded-lg border border-[#E5E0D6] text-[#73706A] hover:text-[#102A32] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-sm text-[#263238]">
              <div className="flex items-start gap-2.5 bg-[#FAF8F3] p-3 rounded-lg border border-[#E5E0D6]">
                <MapPin className="w-4 h-4 text-[#124C5F] shrink-0 mt-1" />
                <div>
                  <span className="font-bold block text-[#102A32]">Address:</span>
                  <span>{activePartnerDetail.address}, {activePartnerDetail.city}, {activePartnerDetail.state}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#FAF8F3] p-3 rounded-lg border border-[#E5E0D6]">
                <Phone className="w-4 h-4 text-[#124C5F] shrink-0" />
                <div>
                  <span className="font-bold text-[#102A32]">Direct Helpline: </span>
                  <span>{activePartnerDetail.contactNumber}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#FAF8F3] p-3 rounded-lg border border-[#E5E0D6]">
                <Clock className="w-4 h-4 text-[#124C5F] shrink-0" />
                <div>
                  <span className="font-bold text-[#102A32]">Operating Hours: </span>
                  <span>{activePartnerDetail.operatingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setActivePartnerDetail(null)}
                className="w-1/2 py-2.5 text-sm font-bold text-[#263238] bg-white border border-[#E5E0D6] rounded-lg hover:bg-[#FAF8F3]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const partner = activePartnerDetail;
                  setActivePartnerDetail(null);
                  onSelectPartnerForAssistance(partner);
                }}
                className="w-1/2 py-2.5 text-sm font-bold text-white bg-[#124C5F] rounded-lg hover:bg-[#102A32] shadow-xs"
              >
                Select & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
