import React from 'react';
import { ArrowRight, UserCheck, Info } from 'lucide-react';
import { UserProfile } from '../types';

interface UserDetailsScreenProps {
  userProfile: UserProfile;
  onChangeProfile: (updated: Partial<UserProfile>) => void;
  onContinue: () => void;
}

export const UserDetailsScreen: React.FC<UserDetailsScreenProps> = ({
  userProfile,
  onChangeProfile,
  onContinue
}) => {
  const categories: Array<UserProfile['category']> = ['General', 'SC', 'ST', 'OBC'];
  const incomePresets = [120000, 180000, 250000, 500000];

  const stateDistrictMap: Record<string, string[]> = {
    Maharashtra: ['Pune', 'Nagpur', 'Nashik', 'Thane', 'Mumbai City'],
    Delhi: ['New Delhi', 'Central Delhi', 'North Delhi', 'South Delhi'],
    Karnataka: ['Bengaluru Urban', 'Mysuru', 'Hubballi-Dharwad', 'Belagavi'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli']
  };

  const currentDistricts = stateDistrictMap[userProfile.state] || ['Pune', 'Nagpur', 'Nashik'];

  return (
    <div className="space-y-6 pb-20">
      {/* Top Context Banner */}
      <div className="bg-[#124C5F] text-white rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(18,76,95,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FAF8F3]/95 bg-white/15 px-3 py-1 rounded-md border border-white/20 mb-2.5">
              <UserCheck className="w-4 h-4 text-[#D99A32]" />
              <span>Step 1 of 6 · About You</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tell us about your profile
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/90 mt-1.5 max-w-2xl leading-relaxed">
              Central and State welfare guidelines define eligibility based on social category, income threshold, and domicile district.
            </p>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D6]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
              Demographic Information
            </span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#73706A]">
            Demo pre-loaded
          </span>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
            Applicant Full Name
          </label>
          <input
            type="text"
            value={userProfile.fullName}
            onChange={(e) => onChangeProfile({ fullName: e.target.value })}
            className="w-full bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-4 py-3 text-base text-[#263238] focus:border-[#124C5F] focus:bg-white transition-colors"
            placeholder="Enter applicant name"
          />
        </div>

        {/* Social Category Selection */}
        <div>
          <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
            Social Category <span className="text-[#73706A] font-normal text-sm">(Used for affirmative quota welfare grants)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const isSelected = userProfile.category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onChangeProfile({ category: cat })}
                  className={`py-3 px-4 rounded-lg text-sm sm:text-base font-bold border transition-all text-center ${
                    isSelected
                      ? 'bg-[#124C5F] border-[#124C5F] text-white shadow-xs'
                      : 'bg-white border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {cat} {isSelected && '✓'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Annual Family Income Slider */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-sm sm:text-base font-bold text-[#102A32]">
              Annual Family Income
            </label>
            <span className="text-sm sm:text-base font-extrabold text-[#124C5F] bg-[#E6F0F0] px-3.5 py-1 rounded-lg border border-[#124C5F]/20">
              ₹ {userProfile.annualIncome.toLocaleString('en-IN')}
            </span>
          </div>

          <input
            type="range"
            min={50000}
            max={1000000}
            step={25000}
            value={userProfile.annualIncome}
            onChange={(e) => onChangeProfile({ annualIncome: Number(e.target.value) })}
            className="w-full accent-[#124C5F] cursor-pointer h-2"
          />

          <div className="flex justify-between text-xs sm:text-sm text-[#73706A] font-medium">
            <span>₹ 50,000</span>
            <span>₹ 10,00,000+</span>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs sm:text-sm font-medium text-[#73706A]">Quick select:</span>
            {incomePresets.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChangeProfile({ annualIncome: val })}
                className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-md border transition-colors ${
                  userProfile.annualIncome === val
                    ? 'bg-[#124C5F] text-white border-[#124C5F]'
                    : 'bg-[#FAF8F3] text-[#263238] border-[#E5E0D6] hover:bg-white'
                }`}
              >
                ₹ {(val / 100000).toFixed(1)}L
              </button>
            ))}
          </div>
        </div>

        {/* State and District */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
              Domicile State
            </label>
            <select
              value={userProfile.state}
              onChange={(e) => {
                const newState = e.target.value;
                const newDistricts = stateDistrictMap[newState] || ['District Central'];
                onChangeProfile({
                  state: newState,
                  district: newDistricts[0]
                });
              }}
              className="w-full bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-3.5 py-3 text-sm sm:text-base text-[#263238] focus:border-[#124C5F] focus:bg-white"
            >
              {Object.keys(stateDistrictMap).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
              District
            </label>
            <select
              value={userProfile.district}
              onChange={(e) => onChangeProfile({ district: e.target.value })}
              className="w-full bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-3.5 py-3 text-sm sm:text-base text-[#263238] focus:border-[#124C5F] focus:bg-white"
            >
              {currentDistricts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender & Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
              Applicant Gender
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {(['Female', 'Male', 'Other'] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => onChangeProfile({ gender: g })}
                  className={`py-2.5 px-3 text-sm sm:text-base font-semibold rounded-lg border text-center transition-colors ${
                    userProfile.gender === g
                      ? 'bg-[#124C5F] border-[#124C5F] text-white'
                      : 'bg-white border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
              Locality Classification
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {(['Rural', 'Semi-Urban', 'Urban'] as const).map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => onChangeProfile({ residenceArea: a })}
                  className={`py-2.5 px-2 text-sm sm:text-base font-semibold rounded-lg border text-center transition-colors ${
                    userProfile.residenceArea === a
                      ? 'bg-[#124C5F] border-[#124C5F] text-white'
                      : 'bg-white border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3.5 flex items-start gap-2.5 text-xs sm:text-sm text-[#73706A]">
          <Info className="w-4 h-4 text-[#124C5F] shrink-0 mt-0.5" />
          <span>
            Citizen profile criteria are matched locally against active public scheme rules. No private data is shared without explicit consent.
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onContinue}
            className="w-full bg-[#124C5F] text-white font-bold text-base py-3.5 px-5 rounded-lg hover:bg-[#102A32] transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Continue to Project Requirement</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
