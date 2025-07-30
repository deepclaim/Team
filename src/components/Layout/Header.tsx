import React from 'react';
import { Search, Bell, MessageCircle } from 'lucide-react';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  showNotifications?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showSearch = true, 
  showNotifications = true 
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>
        
        {(showSearch || showNotifications) && (
          <div className="flex items-center space-x-3">
            {showSearch && (
              <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            )}
            {showNotifications && (
              <>
                <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors relative">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;