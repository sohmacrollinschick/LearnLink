import { ChevronDown } from 'lucide-react';
import React from 'react';

function Header({ onToggleSidebar }) {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-4 md:px-6 py-4 shadow-md">
      <div className="flex flex-wrap justify-between items-center gap-4">

        {/* Left: Menu + Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {/* <img src="/src/assets/image/menu-line.png" alt="menu" className="w-5 h-5" /> */}
          </button>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
              Welcome back, Mac Tech. Here's what's happening today
            </p>
          </div>
        </div>

        {/* Center: Search (hidden on small screens) */}
        <div className="hidden md:block flex-1 max-w-md mx-auto w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <img src="/src/assets/image/search-line.png" alt="search" className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Right: Buttons and Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden lg:flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <span className="text-xl font-bold">+</span>
            <span className="text-sm font-medium">New</span>
          </button>

          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <img src="/src/assets/image/notification-line.png" alt="notification" className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">+15</span>
          </button>

          <button className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <img src="/src/assets/settings-5-line.png" alt="settings" className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src="/src/assets/image/orca-image-1332849900.jpeg"
              alt="profile"
              className="w-8 h-8 rounded-lg ring-2 ring-blue-500"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Mac Tech</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;




