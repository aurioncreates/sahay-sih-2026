import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Store, Calendar, Clock, CheckCircle2, FileText, Phone, MapPin, AlertCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { Scheme, ChannelPartner, UserProfile, ProjectRequirement } from '../types';

interface ApplicationAssistanceScreenProps {
  selectedScheme: Scheme;
  selectedPartner: ChannelPartner;
  userProfile: UserProfile;
  requirement: ProjectRequirement;
  onBack: () => void;
  onConfirmAssistance: () => void;
}

export const ApplicationAssistanceScreen: React.FC<ApplicationAssistanceScreenProps> = ({
  selectedScheme,
  selectedPartner,
  userProfile,
  requirement,
  onBack,
  onConfirmAssistance
}) => {
  const [assistanceMode, setAssistanceMode] = useState<'center-visit' | 'doorstep'>('center-visit');
  const [appointmentDate, setAppointmentDate] = useState('Tomorrow, 25 Sep');
  const [appointmentTime, setAppointmentTime] = useState('11:00 AM - 12:30 PM');
  const [applicantContact, setApplicantContact] = useState('98765-43210');
  const [needsBiometricConsent, setNeedsBiometricConsent] = useState(true);

  // Financial values
  const projectCost = requirement.estimatedCost || 400000;
  const potentialFinancing = Math.round(projectCost * 0.8);
  const applicantContribution = projectCost - potentialFinancing;
  const estimatedEmi = 6500;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-[#124C5F] text-white rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(18,76,95,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FAF8F3]/95 bg-white/15 px-3 py-1 rounded-md border border-white/20 mb-2.5">
              <Store className="w-4 h-4 text-[#D99A32]" />
              <span>Step 6 of 6 · Application Assistance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Confirm Application Assistance
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/90 mt-1.5 max-w-2xl leading-relaxed">
              Your selected channel partner will prepare your official dossier, perform original document verification, and coordinate with the nodal department.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3.5 flex items-center justify-between gap-2 text-xs sm:text-sm text-[#73706A]">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#D99A32] shrink-0" />
          <span>
            <strong>DEMO DATA:</strong> Facilitation appointment and dossier generation are simulated for this prototype.
          </span>
        </div>
        <span className="text-sm font-black text-red-600 uppercase shrink-0">
          DEMO PORTAL
        </span>
      </div>

      {/* Orientation Box: Where you are, what to do, what happens next */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
          Assistance Overview & What Happens Next
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm">
          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 space-y-1.5">
            <span className="font-bold text-[#102A32] block">1. You Schedule Assistance</span>
            <p className="text-[#73706A] leading-relaxed">
              Choose a convenient appointment slot with your certified Sahay Kendra for document verification.
            </p>
          </div>
          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 space-y-1.5">
            <span className="font-bold text-[#102A32] block">2. Kendra Verifies Dossier</span>
            <p className="text-[#73706A] leading-relaxed">
              The Kendra officer checks your original Aadhaar, income, and trade estimates, and registers your government token.
            </p>
          </div>
          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 space-y-1.5">
            <span className="font-bold text-[#102A32] block">3. Track Milestones Live</span>
            <p className="text-[#73706A] leading-relaxed">
              Follow your application dossier status through district review, nodal sanction, and loan disbursal.
            </p>
          </div>
        </div>
      </div>

      {/* Assigned Partner Card */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D6]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
              Assigned Facilitation Center
            </span>
            <span className="text-xs text-[#34745A] font-bold">
              · Certified Partner
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-bold text-[#124C5F] hover:underline"
          >
            Change Partner
          </button>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center shrink-0">
            <Store className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-bold text-[#102A32]">{selectedPartner.name}</h3>
              <span className="text-xs sm:text-sm text-[#73706A]">{selectedPartner.distanceKm} km from your registered area</span>
            </div>
            <p className="text-sm text-[#73706A] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0 text-[#124C5F]" />
              <span>{selectedPartner.address}, {selectedPartner.city}, {selectedPartner.state}</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#73706A] pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#73706A]" />
                <span>{selectedPartner.operatingHours}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#73706A]" />
                <span>Direct Contact: <strong className="text-[#102A32]">{selectedPartner.contactNumber}</strong></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scheme & Financial Summary */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D6]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
              Dossier Summary & Indicative Financing
            </span>
            <p className="text-xs sm:text-sm text-[#73706A] mt-0.5">Program: {selectedScheme.name}</p>
          </div>
          <span className="text-sm font-black text-red-600 uppercase">
            DEMO PORTAL
          </span>
        </div>

        {/* 4 Financial Metric Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm text-[#73706A] font-semibold block">Project Cost</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#102A32] mt-1 block">
              ₹{projectCost.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#73706A] block mt-0.5">Indicative outlay</span>
          </div>

          <div className="bg-[#E6F0F0] border border-[#124C5F]/20 rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm font-bold text-[#124C5F] block">Potential Financing</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#124C5F] mt-1 block">
              ₹{potentialFinancing.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#34745A] font-bold block mt-0.5">80% concessional aid</span>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm text-[#73706A] font-semibold block">Applicant Contribution</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#102A32] mt-1 block">
              ₹{applicantContribution.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#73706A] block mt-0.5">20% margin capital</span>
          </div>

          <div className="bg-[#FAF8F3] border border-[#D99A32]/30 rounded-xl p-4 text-center">
            <span className="text-xs sm:text-sm font-bold text-[#102A32] block">Estimated EMI</span>
            <span className="text-lg sm:text-xl font-extrabold text-[#D99A32] mt-1 block">
              ₹{estimatedEmi.toLocaleString('en-IN')}<span className="text-xs sm:text-sm text-[#73706A] font-normal">/mo</span>
            </span>
            <span className="text-xs text-[#73706A] block mt-0.5">Indicative monthly loan</span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-[#73706A] bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#124C5F] shrink-0" />
          <span>
            These figures are indicative estimates. Government sanction is based on formal physical evaluation.
          </span>
        </div>
      </div>

      {/* Appointment Slot & Mode Selection */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
          Assistance Mode & Verification Schedule
        </h3>

        {/* Mode Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            type="button"
            onClick={() => setAssistanceMode('center-visit')}
            className={`p-4 rounded-xl border text-left transition-colors flex items-start gap-3 ${
              assistanceMode === 'center-visit'
                ? 'bg-[#E6F0F0] border-[#124C5F] text-[#124C5F]'
                : 'bg-white border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                assistanceMode === 'center-visit'
                  ? 'border-[#124C5F] bg-[#124C5F]'
                  : 'border-[#73706A]'
              }`}
            >
              {assistanceMode === 'center-visit' && <span className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold block text-[#102A32]">In-Person Center Visit (Recommended)</span>
              <span className="text-xs sm:text-sm text-[#73706A] mt-1 block leading-relaxed">
                Walk in to the Kendra with original documents for instant biometric verification & registration token.
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setAssistanceMode('doorstep')}
            className={`p-4 rounded-xl border text-left transition-colors flex items-start gap-3 ${
              assistanceMode === 'doorstep'
                ? 'bg-[#E6F0F0] border-[#124C5F] text-[#124C5F]'
                : 'bg-white border-[#E5E0D6] text-[#263238] hover:bg-[#FAF8F3]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                assistanceMode === 'doorstep'
                  ? 'border-[#124C5F] bg-[#124C5F]'
                  : 'border-[#73706A]'
              }`}
            >
              {assistanceMode === 'doorstep' && <span className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold block text-[#102A32]">Assisted Call / Doorstep Facilitation</span>
              <span className="text-xs sm:text-sm text-[#73706A] mt-1 block leading-relaxed">
                A Kendra banking correspondent calls your phone to guide you on required paperwork.
              </span>
            </div>
          </button>
        </div>

        {/* Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
              Preferred Verification Date
            </label>
            <select
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-3.5 py-3 text-sm sm:text-base text-[#263238] focus:border-[#124C5F] focus:bg-white"
            >
              <option value="Tomorrow, 25 Sep">Tomorrow, 25 Sep 2026</option>
              <option value="Friday, 26 Sep">Friday, 26 Sep 2026</option>
              <option value="Saturday, 27 Sep">Saturday, 27 Sep 2026</option>
              <option value="Monday, 29 Sep">Monday, 29 Sep 2026</option>
            </select>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
              Preferred Time Slot
            </label>
            <select
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-3.5 py-3 text-sm sm:text-base text-[#263238] focus:border-[#124C5F] focus:bg-white"
            >
              <option value="10:00 AM - 11:30 AM">10:00 AM – 11:30 AM (Morning)</option>
              <option value="11:00 AM - 12:30 PM">11:00 AM – 12:30 PM (Mid-day)</option>
              <option value="02:30 PM - 04:00 PM">02:30 PM – 04:00 PM (Afternoon)</option>
              <option value="04:30 PM - 06:00 PM">04:30 PM – 06:00 PM (Evening)</option>
            </select>
          </div>
        </div>

        {/* Contact Confirmation */}
        <div>
          <label className="block text-sm sm:text-base font-bold text-[#102A32] mb-2">
            Applicant Mobile Number for SMS Token
          </label>
          <div className="flex items-center gap-2.5">
            <span className="text-sm sm:text-base font-bold text-[#73706A] bg-[#FAF8F3] border border-[#E5E0D6] px-3.5 py-3 rounded-lg">
              +91
            </span>
            <input
              type="text"
              value={applicantContact}
              onChange={(e) => setApplicantContact(e.target.value)}
              className="flex-1 bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg px-4 py-3 text-sm sm:text-base text-[#263238] focus:border-[#124C5F] focus:bg-white"
              placeholder="10-digit mobile number"
            />
          </div>
        </div>
      </div>

      {/* Physical Documents to Bring Checklist */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5E0D6]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
            What to bring to your appointment
          </h3>
          <span className="text-xs sm:text-sm font-medium text-[#73706A]">Originals + 1 Xerox Copy</span>
        </div>

        <div className="space-y-2.5 text-sm sm:text-base text-[#263238]">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6]">
            <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0" />
            <span><strong>Aadhaar Card:</strong> Linked with your mobile number for OTP verification</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6]">
            <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0" />
            <span><strong>Category / Domicile Certificate:</strong> Supporting {userProfile.category} category in {userProfile.state}</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6]">
            <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0" />
            <span><strong>Bank Account Passbook:</strong> Showing applicant name, account number & IFSC code</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6]">
            <CheckCircle2 className="w-4 h-4 text-[#34745A] shrink-0" />
            <span><strong>Project Estimate / Quotation:</strong> Machinery or tools invoice for {requirement.purpose}</span>
          </div>
        </div>
      </div>

      {/* Free Public Service Guarantee */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 flex items-start gap-3 text-xs sm:text-sm text-[#73706A]">
        <ShieldCheck className="w-5 h-5 text-[#34745A] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#102A32] block">
            Zero Facilitation Fee Guarantee
          </span>
          <p className="mt-1 leading-relaxed">
            Application assistance and physical verification at certified Sahay Kendras and CSCs are 100% free of charge under Ministry guidelines. No facilitation agent or Kendra may demand cash payments.
          </p>
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
          <span>Back to Partners</span>
        </button>

        <button
          type="button"
          onClick={onConfirmAssistance}
          className="w-2/3 py-3.5 px-4 bg-[#124C5F] text-white hover:bg-[#102A32] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <span>Confirm & Submit Dossier</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
