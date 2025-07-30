import React from 'react';
import { Home, Compass, Map, Plus, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'feed', label: 'Ana Akış', icon: Home },
    { id: 'discover', label: 'Keşif', icon: Compass },
    { id: 'map', label: 'Harita', icon: Map },
    { id: 'share', label: 'Paylaş', icon: Plus, isSpecial: true },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                  item.isSpecial
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : isActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.isSpecial ? 'w-6 h-6' : ''}`} />
                <span className={`text-xs mt-1 font-medium ${item.isSpecial ? 'text-white' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;