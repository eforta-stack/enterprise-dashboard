import React from 'react';

const StatCard = ({ title, value, change, icon, color, negative }) => {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-info">
        <h4>{title}</h4>
        <div className="stat-value">{value}</div>
        <div className={`stat-change ${negative ? 'negative' : 'positive'}`}>
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatCard;