import React, { useState } from 'react';
import { ShieldCheck, FileText, Handshake, Compass, Clock, CheckCircle2, Plus, MoreVertical, X } from 'lucide-react';
import { adminMetrics, adminSchemesList, adminApplicationsList, mockChannelPartners } from '../data/mockData';

export const AdminScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schemes' | 'partners' | 'applications'>('schemes');
  const [showAddScheme, setShowAddScheme] = useState(false);
  const [schemes, setSchemes] = useState(adminSchemesList);
  const [applications, setApplications] = useState(adminApplicationsList);

  const [newSchemeName, setNewSchemeName] = useState('');
  const [newSchemeCategory, setNewSchemeCategory] = useState('');
  const [newSchemeAmount, setNewSchemeAmount] = useState('');
  const [auditNotice, setAuditNotice] = useState<string | null>(null);

  const handleAddScheme = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSchemeName) return;
    setSchemes([
      ...schemes,
      {
        id: `SCH-${100 + schemes.length + 1}`,
        name: newSchemeName,
        category: newSchemeCategory || 'General Assistance',
        beneficiaries: 0,
        status: 'Active',
        maxAid: newSchemeAmount || '₹ 2,00,000'
      }
    ]);
    setShowAddScheme(false);
    setNewSchemeName('');
    setNewSchemeCategory('');
    setNewSchemeAmount('');
  };

  const handleApproveApplication = (id: string) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: 'Ready to Disburse', statusBadge: 'success' } : app
      )
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs uppercase font-bold tracking-wider text-[#73706A]">
              ADMIN CONSOLE
            </span>
            <span className="text-xs text-[#34745A] font-bold flex items-center gap-1">
              · <ShieldCheck className="w-4 h-4" />
              <span>Secured Session</span>
            </span>
            <span className="text-sm font-black text-red-600 uppercase">
              · DEMO PORTAL
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A32] mt-1">
            Overview & Control
          </h1>
          <p className="text-sm text-[#73706A] mt-1">
            Manage welfare schemes, verify partners, and process citizen applications.
          </p>
        </div>

        <div className="text-xs sm:text-sm text-[#73706A] self-start sm:self-auto bg-[#FAF8F3] px-3.5 py-2 rounded-lg border border-[#E5E0D6]">
          Portal Version: <strong className="text-[#102A32]">Sahay MVP v2.4</strong>
        </div>
      </div>

      {/* 4 Simple Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Total Schemes */}
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-[#34745A]">
              +4 new
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#102A32] pt-1">{adminMetrics.totalSchemes}</div>
          <div className="text-xs sm:text-sm font-medium text-[#73706A]">Total Schemes</div>
        </div>

        {/* Active Partners */}
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] border border-[#E5E0D6] text-[#D99A32] flex items-center justify-center">
              <Handshake className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-[#102A32]">
              100% active
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#102A32] pt-1">{adminMetrics.activePartners}</div>
          <div className="text-xs sm:text-sm font-medium text-[#73706A]">Active Partners</div>
        </div>

        {/* Total Applications */}
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#E6F0F0] text-[#124C5F] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-[#124C5F]">
              This Month
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#102A32] pt-1">
            {adminMetrics.totalApplications.toLocaleString('en-IN')}
          </div>
          <div className="text-xs sm:text-sm font-medium text-[#73706A]">Applications</div>
        </div>

        {/* Pending Review */}
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] text-[#D99A32] border border-[#E5E0D6] flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-[#D99A32]">
              Action Req.
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#102A32] pt-1">{adminMetrics.pendingReview}</div>
          <div className="text-xs sm:text-sm font-medium text-[#73706A]">Pending Review</div>
        </div>
      </div>

      {/* 3 Simple Tab Switcher */}
      <div className="flex bg-[#FAF8F3] p-1.5 rounded-xl border border-[#E5E0D6]">
        {(['schemes', 'partners', 'applications'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors capitalize ${
              activeTab === tab
                ? 'bg-white text-[#124C5F] shadow-xs border border-[#E5E0D6]'
                : 'text-[#73706A] hover:text-[#102A32]'
            }`}
          >
            Manage {tab}
          </button>
        ))}
      </div>

      {/* SECTION 1: Manage Schemes */}
      {activeTab === 'schemes' && (
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#102A32]">Manage Welfare Schemes</h2>
              <p className="text-xs sm:text-sm text-[#73706A]">Active government financial programs and grant rules</p>
            </div>
            <button
              onClick={() => setShowAddScheme(true)}
              className="bg-[#124C5F] text-white hover:bg-[#102A32] text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Scheme</span>
            </button>
          </div>

          <div className="space-y-3">
            {schemes.map((sch) => (
              <div
                key={sch.id}
                className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 flex items-center justify-between gap-3 text-sm"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#102A32] text-sm sm:text-base">{sch.name}</span>
                    <span className="text-xs text-[#34745A] font-bold">
                      · {sch.status}
                    </span>
                  </div>
                  <div className="text-[#73706A] mt-1 text-xs sm:text-sm">
                    Category: {sch.category} · Max Aid: <strong className="text-[#102A32]">{sch.maxAid}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-xs sm:text-sm text-[#73706A] hidden sm:inline">
                    {sch.beneficiaries} enrolled
                  </span>
                  <button className="w-9 h-9 rounded-lg bg-white border border-[#E5E0D6] text-[#73706A] hover:text-[#102A32] flex items-center justify-center">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Manage Partners */}
      {activeTab === 'partners' && (
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#102A32]">Manage Channel Partners</h2>
              <p className="text-xs sm:text-sm text-[#73706A]">Authorized Facilitation Centers, CSCs, and Banking Hubs</p>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#73706A]">
              {mockChannelPartners.length} Empanelled
            </span>
          </div>

          {auditNotice && (
            <div className="p-3 bg-[#E6F0F0] border border-[#124C5F]/20 rounded-lg text-sm font-semibold text-[#124C5F]">
              {auditNotice}
            </div>
          )}

          <div className="space-y-3">
            {mockChannelPartners.map((p) => (
              <div
                key={p.id}
                className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 flex items-center justify-between gap-3 text-sm"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#102A32] text-sm sm:text-base">{p.name}</span>
                    <span
                      className={`text-xs font-bold ${
                        p.status === 'Active' ? 'text-[#34745A]' : 'text-[#73706A]'
                      }`}
                    >
                      · {p.status}
                    </span>
                  </div>
                  <div className="text-[#73706A] mt-1 text-xs sm:text-sm">
                    {p.type} · {p.city}, {p.state} · Verified: {p.verifiedDate}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setAuditNotice(`✓ Reviewing partner compliance dossier: ${p.name} (${p.city})`)}
                    className="px-3.5 py-2 bg-white border border-[#E5E0D6] text-[#124C5F] hover:bg-[#E6F0F0] rounded-lg font-bold text-xs sm:text-sm transition-colors"
                  >
                    Audit Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: Manage Applications */}
      {activeTab === 'applications' && (
        <div className="bg-white border border-[#E5E0D6] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#102A32]">Manage Citizen Applications</h2>
              <p className="text-xs sm:text-sm text-[#73706A]">Incoming scheme dossiers and verification queue</p>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#73706A]">
              District Queue
            </span>
          </div>

          <div className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#102A32] text-sm sm:text-base">{app.applicant}</span>
                    <span className="text-xs text-[#73706A]">
                      · #{app.id}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        app.status === 'Ready to Disburse'
                          ? 'text-[#34745A]'
                          : app.status === 'Pending Docs'
                          ? 'text-[#D99A32]'
                          : 'text-[#124C5F]'
                      }`}
                    >
                      · {app.status}
                    </span>
                  </div>
                  <div className="text-[#73706A] mt-1 text-xs sm:text-sm">
                    Scheme: <strong className="text-[#263238]">{app.scheme}</strong> · {app.district} · Proposed Aid: {app.amount}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  {app.status !== 'Ready to Disburse' && (
                    <button
                      onClick={() => handleApproveApplication(app.id)}
                      className="px-4 py-2 bg-[#124C5F] text-white hover:bg-[#102A32] rounded-lg font-bold text-xs sm:text-sm transition-colors shadow-xs"
                    >
                      Approve & Forward
                    </button>
                  )}
                  {app.status === 'Ready to Disburse' && (
                    <span className="text-xs sm:text-sm font-bold text-[#34745A] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Ready</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Scheme Modal */}
      {showAddScheme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#E5E0D6] shadow-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E0D6]">
              <h3 className="text-lg font-bold text-[#102A32]">Register New Welfare Scheme</h3>
              <button
                onClick={() => setShowAddScheme(false)}
                className="w-9 h-9 rounded-lg border border-[#E5E0D6] text-[#73706A] hover:text-[#102A32] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddScheme} className="space-y-3.5 text-sm">
              <div>
                <label className="block font-bold text-[#102A32] mb-1.5">Scheme Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Urban Livelihoods Mission"
                  value={newSchemeName}
                  onChange={(e) => setNewSchemeName(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-[#102A32] mb-1.5">Target Sector / Category</label>
                <input
                  type="text"
                  placeholder="e.g. Micro Enterprise / Women Welfare"
                  value={newSchemeCategory}
                  onChange={(e) => setNewSchemeCategory(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-[#102A32] mb-1.5">Max Financial Assistance</label>
                <input
                  type="text"
                  placeholder="e.g. ₹ 3,00,000"
                  value={newSchemeAmount}
                  onChange={(e) => setNewSchemeAmount(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F3] border border-[#E5E0D6] rounded-lg text-sm"
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddScheme(false)}
                  className="w-1/2 py-2.5 text-sm font-bold text-[#263238] bg-white border border-[#E5E0D6] rounded-lg hover:bg-[#FAF8F3]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 text-sm font-bold text-white bg-[#124C5F] rounded-lg hover:bg-[#102A32] shadow-xs"
                >
                  Save Scheme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
