import React from 'react';
import { Home, BarChart2, Users, Settings, HelpCircle, FileText } from 'lucide-react';

const Sidebar = ({ open }) => {
  const menuItems = [
    { icon: <Home />, label: 'Dashboard', active: true },
    { icon: <BarChart2 />, label: 'Analytics' },
    { icon: <Users />, label: 'Team' },
    { icon: <FileText />, label: 'Reports' },
    { icon: <Settings />, label: 'Settings' },
    { icon: <HelpCircle />, label: 'Help' }
  ];

  return (
    <aside className={`sidebar ${open ? 'open' : 'closed'}`}>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              <a href="#">
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;