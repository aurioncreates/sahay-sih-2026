import React, { useState } from 'react';
import { Landmark, Bell, User, Phone, CheckCircle2, X, Mic, Globe } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  userProfile: UserProfile;
  onNavigateHome: () => void;
  onOpenTracking: () => void;
  onOpenVoiceMitra?: () => void;
  onOpenGroundedSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  userProfile,
  onNavigateHome,
  onOpenTracking,
  onOpenVoiceMitra,
  onOpenGroundedSearch,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E0D6] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Top Demo Portal Notice Strip */}
      <div className="bg-red-50 border-b border-red-200 py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
        <span className="text-base sm:text-lg font-black text-red-600 tracking-wider uppercase">
          DEMO PORTAL
        </span>
        <span className="text-xs sm:text-sm font-semibold text-red-700 hidden sm:inline">
          — Public Financial Assistance & Welfare Scheme Discovery Simulator
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 min-h-[4.75rem] flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-3 text-left group focus:outline-none min-w-0"
          title="Sahay Home"
        >
          <div className="w-11 h-11 rounded-xl bg-[#124C5F] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Landmark className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-black text-2xl sm:text-3xl tracking-tight text-[#102A32]">SAHAY</span>
              <span className="text-base sm:text-xl font-black text-red-600 tracking-wide uppercase">
                DEMO PORTAL
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#73706A] hidden sm:block truncate">
              Public Service Financial Assistance Discovery
            </p>
          </div>
        </button>

        {/* Center / Helpline info */}
        <div className="hidden xl:flex items-center gap-2 text-sm text-[#73706A] bg-[#FAF8F3] px-3.5 py-2 rounded-lg border border-[#E5E0D6] whitespace-nowrap shrink-0">
          <Phone className="w-4 h-4 text-[#124C5F] shrink-0" />
          <span>Citizen Helpline: <strong className="text-[#102A32] font-bold">1800-111-222</strong></span>
          <span className="text-[#E5E0D6]">|</span>
          <span className="text-[#73706A]">9 AM – 6 PM</span>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Live Voice Mitra Button */}
          {onOpenVoiceMitra && (
            <button
              onClick={onOpenVoiceMitra}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#E6F0F0] text-[#124C5F] hover:bg-[#124C5F] hover:text-white border border-[#124C5F]/25 text-sm sm:text-base font-bold transition-colors shadow-xs whitespace-nowrap"
              title="Speak with Sahay Voice & Text Mitra"
            >
              <Mic className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Voice Mitra</span>
              <span className="w-2 h-2 rounded-full bg-[#34745A] animate-pulse shrink-0" />
            </button>
          )}

          {/* Search Grounding Button */}
          {onOpenGroundedSearch && (
            <button
              onClick={onOpenGroundedSearch}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-[#E5E0D6] text-[#263238] hover:border-[#124C5F] hover:text-[#124C5F] text-sm sm:text-base font-bold transition-colors shadow-xs whitespace-nowrap"
              title="Search Live Government Portals"
            >
              <Globe className="w-4 h-4 text-[#124C5F] shrink-0" />
              <span className="hidden md:inline">Portal Search</span>
            </button>
          )}

          {/* Notification Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="w-11 h-11 rounded-lg border border-[#E5E0D6] bg-white flex items-center justify-center text-[#263238] hover:bg-[#FAF8F3] transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#D99A32]" />
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-88 sm:w-96 bg-white border border-[#E5E0D6] rounded-xl shadow-xl p-4 z-50">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#E5E0D6]">
                  <span className="text-xs sm:text-sm font-bold text-[#102A32] uppercase tracking-wider">Updates</span>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-[#73706A] hover:text-[#102A32] p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 space-y-2">
                  <div
                    onClick={() => {
                      setShowNotifications(false);
                      onOpenTracking();
                    }}
                    className="p-3.5 rounded-lg bg-[#FAF8F3] hover:bg-[#E6F0F0] cursor-pointer transition-colors border border-[#E5E0D6]"
                  >
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#124C5F]">
                      <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0" />
                      <span>Application Status Update</span>
                    </div>
                    <p className="text-sm text-[#263238] mt-1.5 font-normal leading-relaxed">
                      App #SHY-2024-8921 is now under Nodal Officer Review in Pune district.
                    </p>
                    <span className="text-xs text-[#73706A] mt-1.5 block">Today · 10:15 AM</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile / Demo User */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#E5E0D6] bg-white hover:bg-[#FAF8F3] transition-colors shadow-xs"
              aria-label="User Profile"
            >
              <div className="w-8 h-8 rounded-full bg-[#124C5F] text-white flex items-center justify-center text-sm font-bold shrink-0">
                {userProfile.fullName.charAt(0)}
              </div>
              <div className="text-left hidden lg:block">
                <span className="text-sm font-bold text-[#102A32] block leading-tight whitespace-nowrap">{userProfile.fullName}</span>
                <span className="text-xs text-[#73706A] block leading-tight whitespace-nowrap">{userProfile.district}, {userProfile.state}</span>
              </div>
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-[#E5E0D6] rounded-xl shadow-xl p-4.5 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E0D6]">
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      DEMO CITIZEN PROFILE
                    </span>
                    <h4 className="font-bold text-base text-[#102A32] mt-1.5">{userProfile.fullName}</h4>
                  </div>
                  <button
                    onClick={() => setShowProfile(false)}
                    className="text-[#73706A] hover:text-[#102A32] p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3.5 space-y-2 text-sm text-[#263238]">
                  <div className="flex justify-between py-1 border-b border-[#FAF8F3]">
                    <span className="text-[#73706A]">Social Category:</span>
                    <span className="font-bold text-[#102A32]">{userProfile.category}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#FAF8F3]">
                    <span className="text-[#73706A]">Annual Family Income:</span>
                    <span className="font-bold text-[#102A32]">₹ {userProfile.annualIncome.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#FAF8F3]">
                    <span className="text-[#73706A]">Location:</span>
                    <span className="font-bold text-[#102A32]">{userProfile.district}, {userProfile.state}</span>
                  </div>
                </div>
                <div className="mt-4 pt-2.5 border-t border-[#E5E0D6]">
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      onOpenTracking();
                    }}
                    className="w-full py-2.5 bg-[#124C5F] text-white text-sm font-bold rounded-lg hover:bg-[#102A32] transition-colors shadow-xs"
                  >
                    View Active Application (#SHY-2024-8921)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
