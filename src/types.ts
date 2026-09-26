export type NavTab = 'home' | 'schemes' | 'partners' | 'tracking' | 'admin';

export type FlowStep = 
  | 'home'
  | 'user-details'
  | 'requirement'
  | 'schemes'
  | 'financing-estimate'
  | 'channel-partners'
  | 'application-assistance'
  | 'tracking';

export interface UserProfile {
  fullName: string;
  category: 'General' | 'SC' | 'ST' | 'OBC';
  annualIncome: number;
  state: string;
  district: string;
  gender: 'Female' | 'Male' | 'Other';
  differentlyAbled: boolean;
  residenceArea: 'Rural' | 'Semi-Urban' | 'Urban';
}

export interface ProjectRequirement {
  purpose: 'Micro Business' | 'Skill Training' | 'Agriculture' | 'Higher Education' | 'Housing Assistance';
  estimatedCost: number;
  description: string;
  applicantEquity: number;
}

export interface Scheme {
  id: string;
  name: string;
  ministry: string;
  type: 'Central' | 'State' | 'Credit Linked' | 'Direct Benefit';
  shortDescription: string;
  fitReason: string;
  maxFinancing: string;
  maxFinancingValue: number;
  interestRate: string;
  subsidyRate: string;
  processingTime: string;
  matchScore: number;
  eligibilitySummary: string[];
  requiredDocuments: string[];
  categoryEligibility: string[];
  incomeLimit: number;
}

export interface ChannelPartner {
  id: string;
  name: string;
  type: 'Sahay Kendra' | 'CSC Center' | 'Banking Correspondent' | 'Facilitation Center';
  address: string;
  city: string;
  state: string;
  distanceKm: number;
  supportedSchemes: string[];
  status: 'Active' | 'Unavailable';
  statusReason?: string;
  contactNumber: string;
  operatingHours: string;
  verifiedDate: string;
}

export interface ApplicationTrackerItem {
  id: string;
  schemeId: string;
  schemeName: string;
  applicantName: string;
  submittedDate: string;
  currentPhase: 'Submitted' | 'Document Verification' | 'Under Review' | 'Approved' | 'Disbursed';
  phaseDescription: string;
  estimatedDecisionDays: number;
  partnerAssigned: string;
  steps: {
    name: string;
    status: 'completed' | 'active' | 'upcoming';
    date?: string;
  }[];
  actionRequiredItems: {
    id: string;
    title: string;
    description: string;
    actionLabel: string;
    status: 'pending' | 'resolved';
  }[];
  documents: {
    id: string;
    name: string;
    meta: string;
    status: 'Approved' | 'Action Required' | 'Under Review';
  }[];
}
