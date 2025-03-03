import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import RecentActivities from './RecentActivities';
import Chart from './Chart';
import { Activity, DollarSign, Users, ShoppingCart } from 'lucide-react';

const Dashboard = ({ sidebarOpen }) => {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Simulate API calls
  useEffect(() => {
    // In a real app, these would be actual API endpoints
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data that would come from an API
        setStats([
          { id: 1, title: 'Revenue', value: '$24,560', change: '+12.5%', icon: <DollarSign />, color: 'blue' },
          { id: 2, title: 'Active Users', value: '1,243', change: '+18.2%', icon: <Users />, color: 'green' },
          { id: 3, title: 'New Orders', value: '567', change: '+5.3%', icon: <ShoppingCart />, color: 'purple' },
          { id: 4, title: 'Activity', value: '432', change: '-3.7%', icon: <Activity />, color: 'orange', negative: true }
        ]);
        
        setChartData([
          { name: 'Jan', revenue: 4000, users: 2400 },
          { name: 'Feb', revenue: 3000, users: 1398 },
          { name: 'Mar', revenue: 2000, users: 9800 },
          { name: 'Apr', revenue: 2780, users: 3908 },
          { name: 'May', revenue: 1890, users: 4800 },
          { name: 'Jun', revenue: 2390, users: 3800 },
          { name: 'Jul', revenue: 3490, users: 4300 }
        ]);
        
        setActivities([
          { id: 1, user: 'John Smith', action: 'Created new account', time: '4 minutes ago' },
          { id: 2, user: 'Sara Johnson', action: 'Completed order #45692', time: '12 minutes ago' },
          { id: 3, user: 'Mike Wilson', action: 'Added new product', time: '1 hour ago' },
          { id: 4, user: 'Emily Brown', action: 'Updated profile information', time: '3 hours ago' },
          { id: 5, user: 'Alex Turner', action: 'Submitted review', time: '5 hours ago' }
        ]);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div className="dashboard-loading">Loading dashboard data...</div>;
  }

  return (
    <main className={`dashboard ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <div className="dashboard-actions">
          <select className="time-range-select">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last quarter</option>
            <option>Year to date</option>
          </select>
          <button className="refresh-button">Refresh</button>
          <button className="export-button">Export</button>
        </div>
      </div>
      
      <div className="stats-grid">
        {stats.map(stat => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
      
      <div className="dashboard-grid">
        <div className="chart-container">
          <h3>Performance Metrics</h3>
          <Chart data={chartData} />
        </div>
        <div className="activities-container">
          <h3>Recent Activities</h3>
          <RecentActivities activities={activities} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;