import React, { useState } from 'react';
import { CheckCircle2, Clock, Hourglass, Gavel, FileText, Upload, AlertCircle, Phone, Landmark, PlusCircle, Check } from 'lucide-react';
import { ApplicationTrackerItem } from '../types';
import { mockTrackingApplication } from '../data/mockData';

interface TrackingScreenProps {
  onStartNewApplication: () => void;
  activeSchemeName?: string;
  assignedPartnerName?: string;
}

export const TrackingScreen: React.FC<TrackingScreenProps> = ({
  onStartNewApplication,
  activeSchemeName,
  assignedPartnerName
}) => {
  const [appData, setAppData] = useState<ApplicationTrackerItem>({
    ...mockTrackingApplication,
    schemeName: activeSchemeName || mockTrackingApplication.schemeName,
    partnerAssigned: assignedPartnerName || mockTrackingApplication.partnerAssigned
  });

  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [resolveSuccess, setResolveSuccess] = useState(false);

  const handleMockUpload = (docId: string) => {
    setAppData((prev) => ({
      ...prev,
      documents: prev.documents.map((d) =>
        d.id === docId ? { ...d, status: 'Under Review', meta: 'Re-uploaded today at 11:20 AM' } : d
      )
    }));
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const handleResolveAction = (actId: string) => {
    setAppData((prev) => ({
      ...prev,
      actionRequiredItems: prev.actionRequiredItems.map((a) =>
        a.id === actId ? { ...a, status: 'resolved', actionLabel: 'Submitted' } : a
      )
    }));
    setResolveSuccess(true);
    setTimeout(() => setResolveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Tracking Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D99A32] animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
            DEMO TRACKING ACTIVE
          </span>
          <span className="text-sm font-black text-red-600 uppercase">
            · DEMO PORTAL
          </span>
        </div>
        <div className="text-sm text-[#73706A]">
          Application Dossier: <strong className="text-[#124C5F] font-bold">#{appData.id}</strong>
        </div>
      </div>

      {/* Main Status Hero Card */}
      <div className="bg-[#124C5F] text-white rounded-xl p-5 sm:p-7 shadow-[0_1px_3px_rgba(18,76,95,0.04)] space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#FAF8F3]/85 block mb-1">
              Active Welfare Scheme
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {appData.schemeName}
            </h1>
            <p className="text-sm sm:text-base text-[#FAF8F3]/90 mt-1.5">
              Filing Facilitator: <strong className="text-white">{appData.partnerAssigned}</strong>
            </p>
          </div>
          <div className="w-11 h-11 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/20">
            <Landmark className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Phase Details Box */}
        <div className="bg-[#102A32] rounded-xl p-4 border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-[#FAF8F3]/85">Current Processing Stage:</span>
            <span className="font-bold text-[#D99A32] flex items-center gap-1.5">
              <Hourglass className="w-4 h-4" />
              <span>{appData.currentPhase}</span>
            </span>
          </div>
          <p className="text-sm text-[#FAF8F3]/95 leading-relaxed pt-1">
            {appData.phaseDescription}
          </p>
        </div>
      </div>

      {/* Application Journey Horizontal Stepper */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
          Application Journey
        </h2>

        <div className="flex items-center justify-between relative my-2">
          {/* Step 1: Submitted */}
          <div className="flex flex-col items-center gap-1.5 z-10 w-24 text-center">
            <div className="w-9 h-9 rounded-full bg-[#34745A] text-white flex items-center justify-center shadow-xs">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#102A32]">Submitted</span>
            <span className="text-xs text-[#73706A]">18 Sep 2026</span>
          </div>

          <div className="flex-1 h-0.5 bg-[#34745A] -mx-1" />

          {/* Step 2: Verified */}
          <div className="flex flex-col items-center gap-1.5 z-10 w-24 text-center">
            <div className="w-9 h-9 rounded-full bg-[#34745A] text-white flex items-center justify-center shadow-xs">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#102A32]">Verified</span>
            <span className="text-xs text-[#73706A]">20 Sep 2026</span>
          </div>

          <div className="flex-1 h-0.5 bg-[#124C5F] -mx-1" />

          {/* Step 3: Review (Active) */}
          <div className="flex flex-col items-center gap-1.5 z-10 w-24 text-center">
            <div className="w-9 h-9 rounded-full bg-[#124C5F] text-white flex items-center justify-center ring-4 ring-[#E6F0F0]">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#124C5F]">Review</span>
            <span className="text-xs font-semibold text-[#D99A32]">In Progress</span>
          </div>

          <div className="flex-1 h-0.5 bg-[#E5E0D6] -mx-1" />

          {/* Step 4: Decision (Upcoming) */}
          <div className="flex flex-col items-center gap-1.5 z-10 w-24 text-center opacity-60">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#E5E0D6] text-[#73706A] flex items-center justify-center">
              <Gavel className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-[#73706A] font-medium">Decision</span>
            <span className="text-xs text-[#73706A]">Est. ~3 days</span>
          </div>
        </div>
      </div>

      {/* Notifications / Alerts banner */}
      {uploadSuccess && (
        <div className="bg-[#E6F0F0] border border-[#34745A] text-[#34745A] rounded-lg p-3.5 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Demo Document successfully re-uploaded. Sent to District Verification Queue.</span>
        </div>
      )}

      {resolveSuccess && (
        <div className="bg-[#E6F0F0] border border-[#34745A] text-[#34745A] rounded-lg p-3.5 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Verification step scheduled with your assigned Sahay Kendra.</span>
        </div>
      )}

      {/* Recommended Next Steps */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5E0D6]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
            Assistance Action Items
          </h3>
          <span className="text-xs sm:text-sm text-[#34745A] font-bold">
            2 items
          </span>
        </div>

        <div className="space-y-3">
          {appData.actionRequiredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 flex items-start justify-between gap-3 text-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#102A32] text-sm sm:text-base">{item.title}</span>
                  {item.status === 'resolved' && (
                    <span className="text-xs text-[#34745A] font-bold">
                      · Completed
                    </span>
                  )}
                </div>
                <p className="text-[#73706A]">{item.description}</p>
              </div>

              {item.status === 'pending' ? (
                <button
                  type="button"
                  onClick={() => handleResolveAction(item.id)}
                  className="px-4 py-2 bg-[#124C5F] text-white hover:bg-[#102A32] font-bold text-xs sm:text-sm rounded-lg transition-colors shrink-0 shadow-xs"
                >
                  {item.actionLabel}
                </button>
              ) : (
                <span className="text-xs sm:text-sm font-bold text-[#34745A] flex items-center gap-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Done</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Document Checklist */}
      <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5E0D6]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A32]">
            Required Document Dossier
          </h3>
          <span className="text-xs sm:text-sm text-[#73706A]">UIDAI & Bank Integrated</span>
        </div>

        <div className="space-y-3">
          {appData.documents.map((doc) => {
            const isApproved = doc.status === 'Approved';
            const isActionRequired = doc.status === 'Action Required';

            return (
              <div
                key={doc.id}
                className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3.5 flex items-center justify-between gap-3 text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E0D6] flex items-center justify-center text-[#124C5F] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102A32] text-sm sm:text-base">{doc.name}</h4>
                    <p className="text-xs sm:text-sm text-[#73706A]">{doc.meta}</p>
                  </div>
                </div>

                <div className="shrink-0">
                  {isApproved && (
                    <span className="text-xs sm:text-sm font-bold text-[#34745A] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approved</span>
                    </span>
                  )}

                  {isActionRequired && (
                    <button
                      type="button"
                      onClick={() => handleMockUpload(doc.id)}
                      className="px-3.5 py-2 bg-[#D99A32] text-[#102A32] hover:bg-[#c48928] font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Re-upload</span>
                    </button>
                  )}

                  {doc.status === 'Under Review' && (
                    <span className="text-xs sm:text-sm font-bold text-[#124C5F] flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>Under Review</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Start New Application CTA & Citizen Helpline */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={onStartNewApplication}
          className="w-full py-3.5 px-5 bg-[#124C5F] text-white hover:bg-[#102A32] font-bold text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Start Another Scheme Discovery</span>
        </button>

        <div className="text-center text-xs sm:text-sm text-[#73706A]">
          Need assistance with your filing? Call Toll-Free Sahay Helpline at{' '}
          <strong className="text-[#102A32]">1800-111-222</strong>
        </div>
      </div>
    </div>
  );
};
