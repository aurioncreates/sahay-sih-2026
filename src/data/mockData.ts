import { Scheme, ChannelPartner, ApplicationTrackerItem, UserProfile, ProjectRequirement } from '../types';

export const initialUserProfile: UserProfile = {
  fullName: 'Sunita Patil',
  category: 'SC',
  annualIncome: 180000,
  state: 'Maharashtra',
  district: 'Pune',
  gender: 'Female',
  differentlyAbled: false,
  residenceArea: 'Semi-Urban',
};

export const initialRequirement: ProjectRequirement = {
  purpose: 'Micro Business',
  estimatedCost: 400000,
  description: 'Setting up an automated tailoring and embroidery workstation to fulfill retail school uniform and apparel orders.',
  applicantEquity: 80000,
};

export const mockSchemes: Scheme[] = [
  {
    id: 'nsfdc-mahila',
    name: 'NSFDC Mahila Samriddhi Yojana',
    ministry: 'National Scheduled Castes Finance & Development Corporation',
    type: 'Central',
    shortDescription: 'Concessional micro-finance scheme providing capital assistance and interest subsidy for SC women entrepreneurs to set up income-generating micro enterprises.',
    fitReason: 'Directly aligns with your SC category, self-employment tailoring project, and annual income bracket (< ₹3.0 Lakhs).',
    maxFinancing: '₹ 1,40,000',
    maxFinancingValue: 140000,
    interestRate: '4.0% p.a.',
    subsidyRate: 'Up to 30%',
    processingTime: '~7–10 days',
    matchScore: 94,
    eligibilitySummary: [
      'Belong to Scheduled Caste (SC) category',
      'Annual family income below ₹3,00,000 in rural / urban areas',
      'Age between 18 and 55 years',
      'Viable micro-enterprise or service unit plan'
    ],
    requiredDocuments: [
      'Aadhaar Card (Identity & Address)',
      'Valid Caste Certificate issued by competent authority',
      'Income Certificate (Issued within last 6 months)',
      'Estimated Machinery Quotation / Project Cost Sheet',
      'Bank Account Passbook with IFSC'
    ],
    categoryEligibility: ['SC'],
    incomeLimit: 300000
  },
  {
    id: 'pm-mudra-sc',
    name: 'PMRDP - Mudra SC Entrepreneurship Mission',
    ministry: 'Ministry of Micro, Small & Medium Enterprises (MSME)',
    type: 'Credit Linked',
    shortDescription: 'Institutional credit support up to ₹10 Lakhs with special collateral-free credit guarantee and targeted margin subsidy for micro-manufacturing and retail.',
    fitReason: 'Fits your ₹4,00,000 project cost scale under Kishore category with no collateral requirement and streamlined bank sanctioning.',
    maxFinancing: '₹ 5,00,000',
    maxFinancingValue: 500000,
    interestRate: '7.8% p.a.',
    subsidyRate: 'Up to 25% Capital Subsidy',
    processingTime: '~14 days',
    matchScore: 88,
    eligibilitySummary: [
      'Non-farm micro or small business enterprise',
      'Applicant should not be a defaulter to any bank/financial institution',
      'Clear project requirement outline',
      'Valid identity and commercial premises registration'
    ],
    requiredDocuments: [
      'Aadhaar & PAN Card',
      'Udyam Registration / Trade License',
      'Project Business Plan & Quotations',
      'Past 6 months bank statement'
    ],
    categoryEligibility: ['General', 'SC', 'ST', 'OBC'],
    incomeLimit: 1000000
  },
  {
    id: 'maha-annasaheb',
    name: 'Maharashtra Annasaheb Patil Arthik Vikas',
    ministry: 'Department of Skill Development & Entrepreneurship, Govt. of Maharashtra',
    type: 'State',
    shortDescription: 'Interest subvention scheme for viable individual business units set up by residents of Maharashtra with direct commercial bank loan linkage.',
    fitReason: 'Available specifically for your location in Pune, Maharashtra. Offers 100% interest reimbursement up to 12% on regular repayments.',
    maxFinancing: '₹ 3,20,000',
    maxFinancingValue: 320000,
    interestRate: '12% Max Interest Rebate',
    subsidyRate: 'Full Interest Subvention',
    processingTime: '~10 days',
    matchScore: 82,
    eligibilitySummary: [
      'Resident of Maharashtra state',
      'Project cost up to ₹10–15 Lakhs from nationalized/scheduled banks',
      'Age between 18 and 50 years',
      'Regular repayment history unlocks quarterly interest cashback'
    ],
    requiredDocuments: [
      'Maharashtra Domicile Certificate',
      'Bank Sanction Letter & Disbursement Proof',
      'Project Feasibility Note',
      'Aadhaar and PAN Card'
    ],
    categoryEligibility: ['General', 'SC', 'ST', 'OBC'],
    incomeLimit: 800000
  },
  {
    id: 'pm-krishi-unnati',
    name: 'PM Krishi Unnati & Agri-Allied Subsidy',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    type: 'Central',
    shortDescription: 'Direct financial assistance for equipment procurement, small-scale processing tools, and rural value-addition equipment.',
    fitReason: 'Suitable if expanding into rural textile processing or allied agricultural commodity packaging.',
    maxFinancing: '₹ 2,00,000',
    maxFinancingValue: 200000,
    interestRate: '5.5% p.a.',
    subsidyRate: '35% Subsidy',
    processingTime: '~15 days',
    matchScore: 74,
    eligibilitySummary: [
      'Small and marginal entrepreneurs or allied agri workers',
      'Machinery purchased from certified empanelled vendors',
      'Valid bank account linked with Aadhaar DBT'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Proof of land / workplace possession',
      'Vendor Proforma Invoice'
    ],
    categoryEligibility: ['General', 'SC', 'ST', 'OBC'],
    incomeLimit: 500000
  }
];

export const mockChannelPartners: ChannelPartner[] = [
  {
    id: 'part-01',
    name: 'Sahay Kendra - Connaught Place Hub',
    type: 'Sahay Kendra',
    address: 'Block C, Radial Road 3, Near Metro Gate 5, Rajiv Chowk',
    city: 'New Delhi',
    state: 'Delhi',
    distanceKm: 1.2,
    supportedSchemes: ['NSFDC Schemes', 'PM-KISAN Direct', 'PMRDP Mudra', 'Housing Subsidy'],
    status: 'Active',
    contactNumber: '+91 11 2341 8920',
    operatingHours: '9:30 AM – 6:00 PM (Mon–Sat)',
    verifiedDate: '12 Jan 2026'
  },
  {
    id: 'part-02',
    name: 'Daryaganj Citizen Help Desk & CSC',
    type: 'CSC Center',
    address: 'Shop 14, Netaji Subhash Marg, Opposite Golcha Cinema',
    city: 'New Delhi',
    state: 'Delhi',
    distanceKm: 3.5,
    supportedSchemes: ['Pension Schemes', 'Skill India Loan', 'NSFDC Mahila'],
    status: 'Unavailable',
    statusReason: 'Temporarily closed for biometric hardware calibration (Opens Thursday)',
    contactNumber: '+91 11 2327 4100',
    operatingHours: '10:00 AM – 5:00 PM',
    verifiedDate: '04 Feb 2026'
  },
  {
    id: 'part-03',
    name: 'Paharganj Trust Facilitation Center',
    type: 'Facilitation Center',
    address: 'Building 82, Main Bazar Road, Near Railway Station Area',
    city: 'New Delhi',
    state: 'Delhi',
    distanceKm: 4.8,
    supportedSchemes: ['Education Grants', 'Women Welfare Aid', 'MSME Seed Support'],
    status: 'Active',
    contactNumber: '+91 11 2356 1122',
    operatingHours: '10:00 AM – 6:30 PM (Mon–Sat)',
    verifiedDate: '20 Feb 2026'
  },
  {
    id: 'part-04',
    name: 'Pune District Sahay Kendra (Shivajinagar)',
    type: 'Sahay Kendra',
    address: 'Ground Floor, Revenue Colony, Near District Collectorate, JM Road',
    city: 'Pune',
    state: 'Maharashtra',
    distanceKm: 2.1,
    supportedSchemes: ['NSFDC Mahila Samriddhi', 'Maharashtra Annasaheb Patil', 'PMRDP Mudra'],
    status: 'Active',
    contactNumber: '+91 20 2553 4410',
    operatingHours: '9:30 AM – 5:30 PM (Mon–Fri)',
    verifiedDate: '18 Jan 2026'
  },
  {
    id: 'part-05',
    name: 'Kothrud Gramin Banking Correspondent Hub',
    type: 'Banking Correspondent',
    address: 'Branch Complex, Karve Road, Kothrud',
    city: 'Pune',
    state: 'Maharashtra',
    distanceKm: 6.4,
    supportedSchemes: ['PM Mudra Scheme', 'NSFDC Loan Facility', 'Stand-Up India'],
    status: 'Active',
    contactNumber: '+91 20 2544 9912',
    operatingHours: '10:00 AM – 5:00 PM (Mon–Sat)',
    verifiedDate: '01 Mar 2026'
  }
];

export const mockTrackingApplication: ApplicationTrackerItem = {
  id: 'SHY-2024-8921',
  schemeId: 'pm-kisan-direct',
  schemeName: 'Prime Minister Kisan Samman Nidhi (Allied Micro Grant)',
  applicantName: 'Sunita Patil',
  submittedDate: '18 Sep 2026',
  currentPhase: 'Under Review',
  phaseDescription: 'Your documentation is undergoing verification by the designated District Nodal Officer. An indicative decision is expected within 3 business days.',
  estimatedDecisionDays: 3,
  partnerAssigned: 'Pune District Sahay Kendra (Shivajinagar)',
  steps: [
    { name: 'Submitted', status: 'completed', date: '18 Sep 2026' },
    { name: 'Desk Verified', status: 'completed', date: '20 Sep 2026' },
    { name: 'Nodal Review', status: 'active', date: 'In Progress' },
    { name: 'Sanction & Disbursal', status: 'upcoming' }
  ],
  actionRequiredItems: [
    {
      id: 'act-01',
      title: 'Aadhaar Biometric Authentication',
      description: 'Completed successfully at certified Sahay Kendra on 19 Sep 2026.',
      actionLabel: 'Completed',
      status: 'resolved'
    },
    {
      id: 'act-02',
      title: 'Workplace Electricity / Rent Verification',
      description: 'Additional surveyor confirmation or local premises utility bill needed to finalize grant disbursal.',
      actionLabel: 'Resolve Now',
      status: 'pending'
    }
  ],
  documents: [
    {
      id: 'doc-1',
      name: 'Identity Proof (Aadhaar Card)',
      meta: 'Verified digitally via UIDAI e-KYC',
      status: 'Approved'
    },
    {
      id: 'doc-2',
      name: 'Bank Passbook / Cancelled Cheque',
      meta: 'IFSC: SBIN0001234 • Sunita Patil',
      status: 'Approved'
    },
    {
      id: 'doc-3',
      name: 'Machinery Proforma Invoice / Quotation',
      meta: 'Action Required: Re-upload signed quotation from vendor',
      status: 'Action Required'
    }
  ]
};

export const adminMetrics = {
  totalSchemes: 28,
  activePartners: 142,
  totalApplications: 8450,
  pendingReview: 324
};

export const adminSchemesList = [
  {
    id: 'SCH-101',
    name: 'PM Krishi Unnati Yojana',
    category: 'Agriculture & Allied',
    beneficiaries: 1840,
    status: 'Active',
    maxAid: '₹ 2,00,000'
  },
  {
    id: 'SCH-102',
    name: 'Vidya Lakshmi Higher Ed Loan',
    category: 'Education',
    beneficiaries: 3410,
    status: 'Active',
    maxAid: '₹ 7,50,000'
  },
  {
    id: 'SCH-103',
    name: 'NSFDC Mahila Samriddhi Yojana',
    category: 'Women & SC Welfare',
    beneficiaries: 980,
    status: 'Active',
    maxAid: '₹ 1,40,000'
  },
  {
    id: 'SCH-104',
    name: 'PMRDP Mudra SC Enterprise',
    category: 'Micro Business / MSME',
    beneficiaries: 2220,
    status: 'Active',
    maxAid: '₹ 5,00,000'
  }
];

export const adminApplicationsList = [
  {
    id: 'SH-2023-9021',
    applicant: 'Ramesh Kumar',
    scheme: 'PM Krishi Unnati Yojana',
    district: 'Nagpur, MH',
    status: 'Pending Docs',
    statusBadge: 'warning',
    amount: '₹ 1,80,000',
    date: '22 Sep 2026'
  },
  {
    id: 'SH-2023-8834',
    applicant: 'Ananya Sharma',
    scheme: 'Vidya Lakshmi Higher Ed',
    district: 'Pune, MH',
    status: 'Ready to Disburse',
    statusBadge: 'success',
    amount: '₹ 4,00,000',
    date: '21 Sep 2026'
  },
  {
    id: 'SH-2023-8790',
    applicant: 'Sunita Patil',
    scheme: 'NSFDC Mahila Samriddhi',
    district: 'Pune, MH',
    status: 'Under Review',
    statusBadge: 'info',
    amount: '₹ 1,40,000',
    date: '18 Sep 2026'
  },
  {
    id: 'SH-2023-8512',
    applicant: 'Mohammed Irfan',
    scheme: 'PMRDP Mudra SC Enterprise',
    district: 'Thane, MH',
    status: 'Under Review',
    statusBadge: 'info',
    amount: '₹ 3,20,000',
    date: '17 Sep 2026'
  }
];
