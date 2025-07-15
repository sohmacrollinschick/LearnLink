import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  LogOutIcon,
  Banknote,
  Circle,
  BookA,
  BookDashed,
  TimerResetIcon,
  LogInIcon,
  ChevronDown,
  ChevronUp,
  Menu,
  Moon,
  Sun,
} from 'lucide-react';

function Sidebar() {
  const [showResultsSubmenu, setShowResultsSubmenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load dark mode state from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleResults = () => setShowResultsSubmenu(!showResultsSubmenu);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5 text-blue-500" />, label: 'Dashboard' },
    { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, label: 'Analytics' },
    { icon: <Users className="w-5 h-5 text-green-500" />, label: 'Users' },
    { icon: <Settings className="w-5 h-5 text-gray-500" />, label: 'Settings' },
    { icon: <LogInIcon className="w-5 h-5 text-green-500" />, label: 'Login' },
    { icon: <Banknote className="w-5 h-5 text-violet-500" />, label: 'Finance' },
    { icon: <BookA className="w-5 h-5 text-pink-500" />, label: 'Courses' },
    { icon: <BookDashed className="w-5 h-5 text-yellow-600" />, label: 'Assignment' },
    { icon: <TimerResetIcon className="w-5 h-5 text-yellow-500" />, label: 'Reset Password' },
    { icon: <LogOutIcon className="w-5 h-5 text-red-500" />, label: 'Logout' },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out h-screen flex flex-col justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 p-4 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Top: Toggle & Branding */}
      <div>
        <div className="flex justify-end mb-4">
          <button onClick={toggleSidebar} className="text-slate-700 dark:text-white">
            <Menu size={20} />
          </button>
        </div>

        {!isCollapsed && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">LearnLink</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          {navItems.map(({ icon, label }) => (
            <button
              key={label}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {icon}
              {!isCollapsed && (
                <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">{label}</span>
              )}
            </button>
          ))}

          {/* Results Dropdown */}
          <button
            onClick={toggleResults}
            className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Circle className="w-5 h-5 text-blue-500" />
              {!isCollapsed && (
                <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">Results</span>
              )}
            </div>
            {!isCollapsed &&
              (showResultsSubmenu ? (
                <ChevronUp className="w-4 h-4 text-slate-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-500" />
              ))}
          </button>

          {!isCollapsed && showResultsSubmenu && (
            <div className="ml-8 mt-1 flex flex-col space-y-2">
              <button className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Upload Results
              </button>
              <button className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                View Results
              </button>
              <button className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Analytics
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          {!isCollapsed && (
            <span className="text-sm font-medium text-gray-800 dark:text-white">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </button>

        {/* User Profile */}
        {!isCollapsed && (
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="/src/assets/image/orca-image-1332849900.jpeg"
              alt="User"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Mac Tech</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;




