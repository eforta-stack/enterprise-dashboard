import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

const Header = ({ user, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button onClick={toggleSidebar} className="menu-button">
          <Menu />
        </button>
        <h1>Enterprise Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="notification-icon">
          <Bell />
          <span className="badge">3</span>
        </div>
        <div className="user-profile">
          <span>{user.name}</span>
          <div className="avatar">
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;