import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Simulate authentication
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      setCurrentUser({
        name: 'John Doe',
        role: 'Admin',
        avatar: 'https://via.placeholder.com/40'
      });
      setLoading(false);
    }, 1000);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <Header 
        user={currentUser} 
        toggleSidebar={toggleSidebar} 
      />
      <div className="main-container">
        <Sidebar open={sidebarOpen} />
        <Dashboard sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}

export default App;
