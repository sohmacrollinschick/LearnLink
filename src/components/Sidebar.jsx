import React from 'react';
import { LayoutDashboard, BarChart3, Users, Settings,LogOutIcon, Banknote } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-56 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-between h-screen relative z-10">
      <div>
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">LearnLink</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
        {/* Sidebar menu with icons */}
        <nav className="mt-8 flex flex-col space-y-4">
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <LayoutDashboard className="w-5 h-5 text-blue-500" />
            <span className="text-slate-700 dark:text-slate-200">Dashboard</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <BarChart3 className="w-5 h-5 text-purple-500" />
            <span className="text-slate-700 dark:text-slate-200">Analytics</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-slate-700 dark:text-slate-200">Users</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5 text-gray-500" />
            <span className="text-slate-700 dark:text-slate-200">Settings</span>
          </button>
            <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <LogOutIcon className="w-5 h-5 text-gray-500" />
            <span className="text-slate-700 dark:text-slate-200">Logout</span>
          </button>
            <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Banknote className="w-5 h-5 text-gray-500" />
            <span className="text-slate-700 dark:text-slate-200">Finance</span>
          </button>
        </nav>
      </div>
      <div className="flex items-center space-x-3 p-3 m-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
        <img src="/src/assets/image/orca-image-1332849900.jpeg" alt="user" className="w-10 h-10 rounded-full ring-2 ring-blue-500" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Mac Tech</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
