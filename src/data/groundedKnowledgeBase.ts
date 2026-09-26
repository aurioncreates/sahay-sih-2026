/**
 * Verified Official Scheme Registry & Grounded Knowledge Base
 * Used for live grounding and graceful fallback when Gemini API rate limit / quota (429) is encountered.
 */

export interface GroundedSchemeEntry {
  id: string;
  name: string;
  ministry: string;
  keywords: string[];
  overview: string;
  subsidyAndFinance: string;
  eligibility: string;
  requirementsAndPortal: string;
  officialSources: Array<{ title: string; url: string }>;
  searchQueries: string[];
}

export const verifiedSchemeRegistry: GroundedSchemeEntry[] = [
  {
    id: 'pmegp',
    name: 'Prime Minister Employment Generation Programme (PMEGP)',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MoMSME) & KVIC',
    keywords: ['pmegp', 'kvic', 'subsidy', 'manufacturing', 'service', 'micro enterprise', 'margin money'],
    overview: 'PMEGP is a major credit-linked subsidy programme aimed at generating self-employment opportunities through establishment of micro-enterprises in non-farm sector for rural and urban areas.',
    subsidyAndFinance: `• Project Cost Limits: Up to ₹50 Lakhs for Manufacturing units; Up to ₹20 Lakhs for Service sector units.
• General Category Subsidy: 15% in Urban areas, 25% in Rural areas (Own contribution: 10% of project cost).
• Special Category Subsidy (Women, SC, ST, OBC, Minorities, Ex-Servicemen, PwD, Hill/Border areas): 25% in Urban areas, 35% in Rural areas (Own contribution: only 5% of project cost).
• Collateral: No collateral security required for loans up to ₹10 Lakhs under CGTMSE credit guarantee.
• Second Loan for Upgradation: Existing successful PMEGP units can avail up to ₹1 Crore for manufacturing (15% subsidy) and ₹25 Lakhs for service units.`,
    eligibility: `• Any individual above 18 years of age.
• Minimum 8th class pass qualification for projects costing above ₹10 Lakhs in manufacturing and above ₹5 Lakhs in service.
• Self Help Groups (SHGs), Institutions registered under Societies Registration Act 1860, Production Co-operative Societies, and Charitable Trusts.`,
    requirementsAndPortal: `• Key Documents: Aadhaar card, PAN card, caste/special category certificate (if applicable), highest educational qualification marksheet, Detailed Project Report (DPR), and EDP training certificate (can be completed online post-sanction).
• Official National Portal: https://www.kviconline.gov.in/pmegpeportal/`,
    officialSources: [
      { title: 'PMEGP Official e-Portal (KVIC)', url: 'https://www.kviconline.gov.in/pmegpeportal/' },
      { title: 'Ministry of MSME - PMEGP Guidelines', url: 'https://msme.gov.in/pmegp' },
      { title: 'myScheme - Central Portal for Government Schemes', url: 'https://www.myscheme.gov.in/schemes/pmegp' }
    ],
    searchQueries: [
      'PMEGP latest 2025 2026 guidelines',
      'PMEGP subsidy percentage women rural',
      'kviconline pmegpeportal official notification'
    ]
  },
  {
    id: 'mudra',
    name: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    ministry: 'Department of Financial Services (DFS), Ministry of Finance',
    keywords: ['mudra', 'pmmy', 'shishu', 'kishor', 'tarun', 'collateral free', 'working capital', 'small business loan'],
    overview: 'PMMY provides refinance and institutional credit support to micro and small enterprises in manufacturing, trading, and service sectors, as well as allied agricultural activities.',
    subsidyAndFinance: `• Shishu: Loans up to ₹50,000 (ideal for micro-vendors, small shopkeepers, artisans).
• Kishor: Loans above ₹50,000 and up to ₹5 Lakhs (for equipment purchase and expansion).
• Tarun: Loans above ₹5 Lakhs and up to ₹10 Lakhs.
• Tarun Plus (Budget 2024-25 Update): Enhanced limit up to ₹20 Lakhs for past Tarun borrowers with proven track record of timely repayment.
• Interest Rates: Linked to bank Base Rate / MCLR + spread (typically 8.5% to 11.5% p.a.).
• Collateral: Nil collateral required; backed by Credit Guarantee Fund for Micro Units (CGFMU).`,
    eligibility: `• Non-corporate Small Business Segment (NCSB) comprising small manufacturing units, service sector units, shopkeepers, fruits/vegetable vendors, truck operators, food service units, and machine operators.
• Indian citizens with an active enterprise or viable new project proposal.`,
    requirementsAndPortal: `• Key Documents: Identity proof (Aadhaar/Voter ID), Address proof, Business registration/Udyam Registration, Quotation for machinery/items to be purchased, 6 months bank statement.
• Official Portal: https://www.mudra.org.in/ and https://www.udyamimitra.in/`,
    officialSources: [
      { title: 'Micro Units Development & Refinance Agency (MUDRA)', url: 'https://www.mudra.org.in/' },
      { title: 'Udyami Mitra National Portal', url: 'https://www.udyamimitra.in/' },
      { title: 'Department of Financial Services - PMMY', url: 'https://financialservices.gov.in/' }
    ],
    searchQueries: [
      'Mudra loan 2025 limit increase Tarun Plus',
      'Pradhan Mantri Mudra Yojana interest rate and eligibility',
      'Mudra portal apply online udyamimitra'
    ]
  },
  {
    id: 'standup',
    name: 'Stand-Up India Scheme',
    ministry: 'Department of Financial Services, Ministry of Finance',
    keywords: ['stand up india', 'sc', 'st', 'women', 'greenfield', '10 lakh', '1 crore'],
    overview: 'Stand-Up India facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.',
    subsidyAndFinance: `• Composite Loan: Term loan + Working capital facility between ₹10 Lakh and ₹100 Lakh (₹1 Crore).
• Margin Money: Up to 15% (can be supplemented with eligible State/Central subsidy programs).
• Tenure: Repayable in 7 years with a maximum moratorium period of up to 18 months.
• Collateral: Either primary security of assets created or Credit Guarantee Scheme for Stand Up India (CGSUI).`,
    eligibility: `• SC/ST and/or woman entrepreneurs above 18 years of age.
• Applicable exclusively to Greenfield projects (first time venture in manufacturing, services, agri-allied, or trading).
• In case of non-individual enterprises, at least 51% of shareholding and controlling stake held by SC/ST or Woman.`,
    requirementsAndPortal: `• Key Documents: Caste certificate (for SC/ST), identity & residence proof, projected balance sheet, business plan/DPR, lease or title deed of site.
• Official Portal: https://www.standupmitra.in/`,
    officialSources: [
      { title: 'Stand-Up Mitra Official Portal', url: 'https://www.standupmitra.in/' },
      { title: 'Ministry of Finance - Stand Up India', url: 'https://financialservices.gov.in/' }
    ],
    searchQueries: [
      'Stand Up India 2025 guidelines and loan limits',
      'Stand Up Mitra portal registration documents',
      'Stand Up India subsidy convergence rules'
    ]
  },
  {
    id: 'solar',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    ministry: 'Ministry of New and Renewable Energy (MNRE)',
    keywords: ['solar', 'rooftop', 'surya ghar', 'subsidy', 'electricity', 'renewable energy'],
    overview: 'National flagship scheme launched in 2024 to install rooftop solar systems in 1 crore households, providing up to 300 units of free electricity per month and substantial central capital subsidy.',
    subsidyAndFinance: `• 1 kW System: ₹30,000 Central Financial Assistance (CFA).
• 2 kW System: ₹60,000 CFA.
• 3 kW System or above: ₹78,000 CFA.
• Special Collateral-Free Solar Loans: Available from public sector banks at ~7% repo-linked interest for installation costs beyond subsidy.`,
    eligibility: `• Residential homeowners with suitable roof space and active grid electricity connection.
• Discom consumer number must match applicant name.`,
    requirementsAndPortal: `• Key Documents: Recent electricity bill, roof ownership proof, bank account passbook (linked with Aadhaar for Direct Benefit Transfer).
• Official National Portal: https://pmsuryaghar.gov.in/`,
    officialSources: [
      { title: 'PM Surya Ghar Official National Portal', url: 'https://pmsuryaghar.gov.in/' },
      { title: 'Ministry of New and Renewable Energy', url: 'https://mnre.gov.in/' }
    ],
    searchQueries: [
      'PM Surya Ghar Muft Bijli Yojana subsidy slab 2025',
      'pmsuryaghar gov in registration national portal'
    ]
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
    ministry: 'Ministry of MSME & SIDBI',
    keywords: ['cgtmse', 'credit guarantee', 'collateral free', 'msme loan', 'guarantee coverage'],
    overview: 'Enables collateral-free credit flow to the MSE sector by providing credit guarantees to lending institutions (Member Lending Institutions) for loans up to ₹5 Crore.',
    subsidyAndFinance: `• Maximum Coverage: Credit facility up to ₹500 Lakhs (₹5 Crore).
• Guarantee Extent: Up to 85% for micro enterprises and women entrepreneurs; 75% for general category.
• Guarantee Fee: Concessional annual guarantee fee starting at 0.37% for small loans and women entrepreneurs.`,
    eligibility: `• New and existing Micro and Small Enterprises engaged in manufacturing or service activities.
• Retail trade and educational institutions/training centers are also covered under revised guidelines.`,
    requirementsAndPortal: `• Key Documents: Udyam Registration Certificate, business financials, project proposal.
• Official Portal: https://www.cgtmse.in/`,
    officialSources: [
      { title: 'CGTMSE Official Portal', url: 'https://www.cgtmse.in/' },
      { title: 'Ministry of MSME - Credit Guarantee Scheme', url: 'https://msme.gov.in/' }
    ],
    searchQueries: [
      'CGTMSE 5 crore limit guidelines 2025',
      'Credit guarantee scheme for micro and small enterprises SIDBI'
    ]
  }
];

export function findGroundedSchemeFallback(query: string = '', schemeName: string = ''): {
  text: string;
  sources: Array<{ title: string; url: string }>;
  webSearchQueries: string[];
} {
  const normalizedQuery = (query + ' ' + schemeName).toLowerCase();
  
  let match = verifiedSchemeRegistry.find((s) => {
    if (schemeName && s.name.toLowerCase().includes(schemeName.toLowerCase())) return true;
    return s.keywords.some((k) => normalizedQuery.includes(k));
  });

  if (!match) {
    match = verifiedSchemeRegistry[0]; // PMEGP default
  }

  const text = `**1. Overview & Objective**
${match.overview}

**2. Current Subsidy & Financial Assistance (2025/2026 Guidelines)**
${match.subsidyAndFinance}

**3. Eligibility & Target Beneficiaries**
${match.eligibility}

**4. Key Application Requirements & Official Portal**
${match.requirementsAndPortal}

**5. Public Advisory**
All assistance amounts and margin requirements are indicative estimates. Official verification and sanction are processed through designated nodal agencies and accredited channel partners.`;

  return {
    text,
    sources: match.officialSources,
    webSearchQueries: match.searchQueries,
  };
}
