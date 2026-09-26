import React from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { FlowStep } from '../types';

interface FlowProgressHeaderProps {
  currentStep: FlowStep;
  onBack?: () => void;
  onJumpToStep?: (step: FlowStep) => void;
}

interface StepMeta {
  id: FlowStep;
  stepNum: number;
  label: string;
  todo: string;
  next: string;
}

const FLOW_STEPS: StepMeta[] = [
  {
    id: 'user-details',
    stepNum: 1,
    label: 'Applicant Details',
    todo: 'Specify social category, income, and district',
    next: 'Project Requirement'
  },
  {
    id: 'requirement',
    stepNum: 2,
    label: 'Requirement & Cost',
    todo: 'Define funding purpose and estimated project cost',
    next: 'Scheme Recommendations'
  },
  {
    id: 'schemes',
    stepNum: 3,
    label: 'Scheme Recommendations',
    todo: 'Review potentially suitable schemes and eligibility',
    next: 'Financing Estimate'
  },
  {
    id: 'financing-estimate',
    stepNum: 4,
    label: 'Financing Estimate',
    todo: 'Examine indicative project breakdown and monthly EMI',
    next: 'Channel Partner Finder'
  },
  {
    id: 'channel-partners',
    stepNum: 5,
    label: 'Channel Partner',
    todo: 'Connect with a certified nearby Sahay or CSC Kendra',
    next: 'Application Assistance'
  },
  {
    id: 'application-assistance',
    stepNum: 6,
    label: 'Assistance',
    todo: 'Schedule verification appointment & confirm application dossier',
    next: 'Application Tracking'
  }
];

export const FlowProgressHeader: React.FC<FlowProgressHeaderProps> = ({
  currentStep,
  onBack,
  onJumpToStep
}) => {
  const currentMeta = FLOW_STEPS.find((s) => s.id === currentStep);
  if (!currentMeta) return null;

  return (
    <div className="bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] mb-6">
      {/* Top row: Back button & Demo Tag */}
      <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#E5E0D6]">
        {onBack ? (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#124C5F] hover:text-[#102A32] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>
        ) : (
          <div className="text-sm sm:text-base font-semibold text-[#73706A]">Assisted Discovery Flow</div>
        )}
        <div className="flex items-center gap-1.5">
          <span className="text-sm sm:text-base font-black text-red-600 tracking-wide uppercase">
            DEMO PORTAL
          </span>
        </div>
      </div>

      {/* Stepper indicator line */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 mb-4 overflow-x-auto pb-1">
        {FLOW_STEPS.map((step, idx) => {
          const isCurrent = step.id === currentStep;
          const isPassed = step.stepNum < currentMeta.stepNum;
          const isAccessible = step.stepNum <= currentMeta.stepNum;

          return (
            <React.Fragment key={step.id}>
              <button
                type="button"
                disabled={!isAccessible}
                onClick={() => onJumpToStep && isAccessible && onJumpToStep(step.id)}
                className={`flex items-center gap-2 text-left py-1.5 px-2 rounded-lg transition-colors shrink-0 ${
                  isCurrent
                    ? 'text-[#124C5F] font-bold bg-[#E6F0F0]/50'
                    : isPassed
                    ? 'text-[#34745A] font-semibold hover:text-[#124C5F]'
                    : 'text-[#73706A] opacity-60 cursor-not-allowed'
                }`}
                title={`Step ${step.stepNum}: ${step.label}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors ${
                    isCurrent
                      ? 'bg-[#124C5F] text-white shadow-xs'
                      : isPassed
                      ? 'bg-[#E6F0F0] text-[#34745A]'
                      : 'bg-[#FAF8F3] border border-[#E5E0D6] text-[#73706A]'
                  }`}
                >
                  {isPassed ? <CheckCircle2 className="w-4 h-4" /> : step.stepNum}
                </div>
                <span className="text-xs sm:text-sm hidden lg:inline whitespace-nowrap">{step.label}</span>
              </button>

              {idx < FLOW_STEPS.length - 1 && (
                <div
                  className={`flex-1 min-w-[12px] h-[2px] rounded ${
                    isPassed ? 'bg-[#34745A]' : 'bg-[#E5E0D6]'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Orientation & Context: Where you are, what to do, what's next */}
      <div className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-3.5 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-start gap-2">
          <span className="font-bold text-[#102A32] shrink-0">
            Step {currentMeta.stepNum} of 6 ({currentMeta.label}):
          </span>
          <span className="text-[#263238]">{currentMeta.todo}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#73706A] shrink-0 text-xs sm:text-sm">
          <span>Next:</span>
          <span className="font-bold text-[#102A32]">{currentMeta.next}</span>
          <ChevronRight className="w-4 h-4 text-[#73706A]" />
        </div>
      </div>
    </div>
  );
};
