import React from 'react';
import { Home, FileText, Handshake, Compass, Shield } from 'lucide-react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'schemes', label: 'Schemes', icon: <FileText className="w-5 h-5" /> },
    { id: 'partners', label: 'Partners', icon: <Handshake className="w-5 h-5" /> },
    { id: 'tracking', label: 'Tracking', icon: <Compass className="w-5 h-5" /> },
    { id: 'admin', label: 'Admin', icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#E5E0D6] shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-xl mx-auto px-4 flex items-center justify-between py-2 min-h-[4.25rem]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center gap-1 w-20 sm:w-24 py-1.5 transition-colors rounded-lg ${
                isActive
                  ? 'text-[#124C5F] font-bold'
                  : 'text-[#73706A] hover:text-[#102A32]'
              }`}
            >
              <div
                className={`p-1.5 rounded-md transition-colors ${
                  isActive ? 'bg-[#E6F0F0]' : 'bg-transparent'
                }`}
              >
                {item.icon}
              </div>
              <span className={`text-xs sm:text-sm leading-none ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
