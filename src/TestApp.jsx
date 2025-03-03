import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function TestApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const user = {
    name: 'John Doe',
    role: 'Admin',
    avatar: 'https://via.placeholder.com/40'
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Header 
        user={user} 
        toggleSidebar={toggleSidebar} 
      />
      <div className="main-container">
        <Sidebar open={sidebarOpen} />
        <Dashboard sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}

export default TestApp;