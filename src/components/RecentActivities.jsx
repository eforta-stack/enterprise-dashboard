import React from 'react';

const RecentActivities = ({ activities }) => {
  return (
    <div className="activities-list">
      {activities.map(activity => (
        <div key={activity.id} className="activity-item">
          <div className="activity-avatar">{activity.user.charAt(0)}</div>
          <div className="activity-details">
            <div className="activity-user">{activity.user}</div>
            <div className="activity-action">{activity.action}</div>
            <div className="activity-time">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;