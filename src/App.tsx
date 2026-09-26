/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mic, Sparkles } from 'lucide-react';
import { NavTab, FlowStep, UserProfile, ProjectRequirement, Scheme, ChannelPartner } from './types';
import { initialUserProfile, initialRequirement, mockSchemes, mockChannelPartners } from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { FlowProgressHeader } from './components/FlowProgressHeader';
import { LiveVoiceModal } from './components/LiveVoiceModal';
import { GroundedSearchModal } from './components/GroundedSearchModal';
import { HomeScreen } from './screens/HomeScreen';
import { UserDetailsScreen } from './screens/UserDetailsScreen';
import { RequirementScreen } from './screens/RequirementScreen';
import { SchemesScreen } from './screens/SchemesScreen';
import { FinancingEstimateScreen } from './screens/FinancingEstimateScreen';
import { ChannelPartnerScreen } from './screens/ChannelPartnerScreen';
import { ApplicationAssistanceScreen } from './screens/ApplicationAssistanceScreen';
import { TrackingScreen } from './screens/TrackingScreen';
import { AdminScreen } from './screens/AdminScreen';

export default function App() {
  const [currentStep, setCurrentStep] = useState<FlowStep>('home');
  const [activeNavTab, setActiveNavTab] = useState<NavTab>('home');

  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);
  const [requirement, setRequirement] = useState<ProjectRequirement>(initialRequirement);
  const [selectedScheme, setSelectedScheme] = useState<Scheme>(mockSchemes[0]);
  const [selectedPartner, setSelectedPartner] = useState<ChannelPartner | null>(null);

  // Live Voice & Grounded Search Modals
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [voiceInitialQuery, setVoiceInitialQuery] = useState<string | undefined>(undefined);

  const [isGroundedSearchOpen, setIsGroundedSearchOpen] = useState(false);
  const [groundedSearchSchemeName, setGroundedSearchSchemeName] = useState<string | undefined>(undefined);
  const [groundedSearchQuery, setGroundedSearchQuery] = useState<string | undefined>(undefined);

  const handleOpenVoiceMitra = (prompt?: string) => {
    setVoiceInitialQuery(prompt);
    setIsVoiceModalOpen(true);
  };

  const handleOpenGroundedSearch = (schemeName?: string, query?: string) => {
    setGroundedSearchSchemeName(schemeName);
    setGroundedSearchQuery(query);
    setIsGroundedSearchOpen(true);
  };

  // Sync BottomNav tab with current step
  const handleNavTabChange = (tab: NavTab) => {
    setActiveNavTab(tab);
    if (tab === 'home') {
      setCurrentStep('home');
    } else if (tab === 'schemes') {
      setCurrentStep('schemes');
    } else if (tab === 'partners') {
      setCurrentStep('channel-partners');
    } else if (tab === 'tracking') {
      setCurrentStep('tracking');
    } else if (tab === 'admin') {
      // admin has special screen
    }
  };

  // Profile update handler
  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...updated }));
  };

  // Requirement update handler
  const handleUpdateRequirement = (updated: Partial<ProjectRequirement>) => {
    setRequirement((prev) => ({ ...prev, ...updated }));
  };

  // Step transition helpers
  const handleStartDiscovery = () => {
    setCurrentStep('user-details');
    setActiveNavTab('schemes');
  };

  const handleUserDetailsContinue = () => {
    setCurrentStep('requirement');
  };

  const handleRequirementBack = () => {
    setCurrentStep('user-details');
  };

  const handleRequirementFindSchemes = () => {
    setCurrentStep('schemes');
  };

  const handleSelectSchemeForFinancing = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setCurrentStep('financing-estimate');
  };

  const handleFinancingBack = () => {
    setCurrentStep('schemes');
  };

  const handleFinancingProceedToPartner = () => {
    setCurrentStep('channel-partners');
    setActiveNavTab('partners');
  };

  const handleSelectPartner = (partner: ChannelPartner) => {
    setSelectedPartner(partner);
    setCurrentStep('application-assistance');
  };

  const handleConfirmAssistance = () => {
    setCurrentStep('tracking');
    setActiveNavTab('tracking');
  };

  // FlowProgressHeader back button logic
  const handleFlowBack = () => {
    if (currentStep === 'requirement') {
      setCurrentStep('user-details');
    } else if (currentStep === 'schemes') {
      setCurrentStep('requirement');
    } else if (currentStep === 'financing-estimate') {
      setCurrentStep('schemes');
    } else if (currentStep === 'channel-partners') {
      setCurrentStep('financing-estimate');
    } else if (currentStep === 'application-assistance') {
      setCurrentStep('channel-partners');
    } else if (currentStep === 'user-details') {
      setCurrentStep('home');
      setActiveNavTab('home');
    }
  };

  // Check if we are inside the 6-step assisted discovery flow
  const isAssistedFlow = [
    'user-details',
    'requirement',
    'schemes',
    'financing-estimate',
    'channel-partners',
    'application-assistance'
  ].includes(currentStep) && activeNavTab !== 'admin';

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#263238] flex flex-col font-body">
      {/* Top Header */}
      <Header
        userProfile={userProfile}
        onNavigateHome={() => {
          setCurrentStep('home');
          setActiveNavTab('home');
        }}
        onOpenTracking={() => {
          setCurrentStep('tracking');
          setActiveNavTab('tracking');
        }}
        onOpenVoiceMitra={() => handleOpenVoiceMitra()}
        onOpenGroundedSearch={() => handleOpenGroundedSearch()}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28">
        {/* If inside the assisted flow, show the progress header */}
        {isAssistedFlow && (
          <FlowProgressHeader
            currentStep={currentStep}
            onBack={handleFlowBack}
            onJumpToStep={(step) => setCurrentStep(step)}
          />
        )}

        {/* Tab / Step Route Switcher */}
        {activeNavTab === 'admin' ? (
          <AdminScreen />
        ) : currentStep === 'home' ? (
          <HomeScreen
            onStartDiscovery={handleStartDiscovery}
            onBrowseSchemes={() => {
              setCurrentStep('schemes');
              setActiveNavTab('schemes');
            }}
            onLaunchCalculator={() => {
              setCurrentStep('financing-estimate');
              setActiveNavTab('schemes');
            }}
            onLocatePartner={() => {
              setCurrentStep('channel-partners');
              setActiveNavTab('partners');
            }}
            onGoToTracking={() => {
              setCurrentStep('tracking');
              setActiveNavTab('tracking');
            }}
            onOpenVoiceMitra={() => handleOpenVoiceMitra()}
            onOpenGroundedSearch={() => handleOpenGroundedSearch()}
          />
        ) : currentStep === 'user-details' ? (
          <UserDetailsScreen
            userProfile={userProfile}
            onChangeProfile={handleUpdateProfile}
            onContinue={handleUserDetailsContinue}
          />
        ) : currentStep === 'requirement' ? (
          <RequirementScreen
            requirement={requirement}
            onChangeRequirement={handleUpdateRequirement}
            onBack={handleRequirementBack}
            onFindSchemes={handleRequirementFindSchemes}
          />
        ) : currentStep === 'schemes' ? (
          <SchemesScreen
            userProfile={userProfile}
            requirement={requirement}
            onEditQuery={() => setCurrentStep('user-details')}
            onSelectSchemeForFinancing={handleSelectSchemeForFinancing}
            onOpenGroundedSearch={(schemeName) => handleOpenGroundedSearch(schemeName)}
            onOpenVoiceMitra={(prompt) => handleOpenVoiceMitra(prompt)}
          />
        ) : currentStep === 'financing-estimate' ? (
          <FinancingEstimateScreen
            selectedScheme={selectedScheme}
            requirement={requirement}
            onBack={handleFinancingBack}
            onProceedToPartner={handleFinancingProceedToPartner}
          />
        ) : currentStep === 'channel-partners' ? (
          <ChannelPartnerScreen
            onSelectPartnerForAssistance={handleSelectPartner}
          />
        ) : currentStep === 'application-assistance' ? (
          <ApplicationAssistanceScreen
            selectedScheme={selectedScheme}
            selectedPartner={selectedPartner || mockChannelPartners[0]}
            userProfile={userProfile}
            requirement={requirement}
            onBack={() => setCurrentStep('channel-partners')}
            onConfirmAssistance={handleConfirmAssistance}
          />
        ) : currentStep === 'tracking' ? (
          <TrackingScreen
            onStartNewApplication={() => {
              setCurrentStep('home');
              setActiveNavTab('home');
            }}
            activeSchemeName={selectedScheme?.name}
            assignedPartnerName={selectedPartner?.name}
          />
        ) : null}
      </main>

      {/* Floating Quick Action Button for Voice Mitra */}
      {!isVoiceModalOpen && !isGroundedSearchOpen && (
        <aside aria-label="Voice assistance launcher" className="fixed bottom-24 right-4 sm:right-6 z-30">
          <button
            onClick={() => handleOpenVoiceMitra()}
            className="flex items-center gap-2.5 bg-[#124C5F] hover:bg-[#102A32] text-white px-4 py-3 rounded-full shadow-lg border border-white/20 transition-all hover:scale-105 active:scale-95 group"
            title="Open Sahay Voice & Text Mitra"
          >
            <div className="relative flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#34745A] animate-ping" />
            </div>
            <span className="text-sm font-bold pr-1 hidden sm:inline">Voice & Text Mitra</span>
          </button>
        </aside>
      )}

      {/* Live Voice Conversation Modal (Gemini 3.8 Live API) */}
      <LiveVoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        initialQuery={voiceInitialQuery}
      />

      {/* Google Search Grounding Modal (Gemini 3.8 Flash + googleSearch) */}
      <GroundedSearchModal
        isOpen={isGroundedSearchOpen}
        onClose={() => setIsGroundedSearchOpen(false)}
        schemeName={groundedSearchSchemeName}
        initialQuery={groundedSearchQuery}
      />

      {/* Fixed Bottom Navigation */}
      <BottomNav
        activeTab={activeNavTab}
        onTabChange={handleNavTabChange}
      />
    </div>
  );
}
