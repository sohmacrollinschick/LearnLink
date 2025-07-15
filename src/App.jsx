import React from "react";
import Sidebar from "./components/sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Statsgrid.jsx";
import { LogIn } from "lucide-react";
import { BrowserRouter as Router, Routes, Route }   from 'react-router-dom' ;

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <Routes>
        <Header />
       <Route path="/components/Header.jsx" element={<Dashboard />} />
         <Route path="/components/login.jsx" element={<LogIn />} />
            <Route path="/components/Statsgrid.jsx" element={<Dashboard />} />
            <Route path="/components/sidebar.jsx" element={<Sidebar />} />
            <Route path="/components/Header.jsx" element={<Header />} />
            
        </Routes>
        </div>
     </div> 
    </div>
    </Router>
  );
}

export default App; 






