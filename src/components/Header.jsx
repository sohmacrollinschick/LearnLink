
import { ChevronDown } from 'lucide-react';
import React from 'react';

function Header() {
    return (
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 flex justify-between items-center shadow-md'>
         <div className='flex items-center space-x-6'>
      <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
        <img src="/src/assets/image/menu-line.png" alt="toggle" />
      </button>
     
        <div className='flex items-center justify-between'>
          <div className='text-left'>
            <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>Dashboard</h1>
            <p>Welcome back, Mac Tech here's what's happening today</p>
          </div>
          <div className='max-w-md w-full'>
            <div className='relative'>
              <input
                type='text'
                placeholder='search'
                className='w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              />
              <span className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'>
                <img src="/src/assets/image/search-line.png" alt="img" />
              </span>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all rounded-lg'>
            
              <span className="w-4 h-4">+</span>
              <span className='text-sm font-medium space-x-8'>New</span>
            </button>
          
            <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <img src="src\assets\image\notification-line.png" alt="notification" />
              <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>+15</span>
            </button>
            <button className='p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <img src="/src/assets/settings-5-line.png" alt="setting" />
            </button>
            <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700'>
              <img src="/src/assets/image/orca-image-1332849900.jpeg" alt="profile" className='w-8 h-8 rounded-lg ring-2 ring-blue-500'/>
              <div className='hidden md:block'>
                <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>Mac Tech</p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
              </div>
              <ChevronDown className='w-4 h-4 text-slate-400'/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Header;