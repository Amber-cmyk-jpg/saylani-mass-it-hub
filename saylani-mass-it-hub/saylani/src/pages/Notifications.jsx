import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Notifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Complaint Marked as Resolved',
      code: '2315:5331',
      time: '42m',
      icon: '✅',
      color: '#2e7d32'
    },
    {
      id: 2,
      title: 'Laptop Found! Matches with Your Report!',
      code: '3312:0012 01:03:02',
      time: '45m',
      icon: '💻',
      color: '#2196f3'
    },
    {
      id: 3,
      title: 'Member: Event Tomorrow',
      code: '2115:8293',
      time: '45m',
      icon: '📅',
      color: '#7c3aed'
    },
    {
      id: 4,
      title: 'Stall Reset!',
      code: '3223:53',
      time: '39m',
      icon: '🔄',
      color: '#0ea5e9'
    }
  ]);

  const markAsRead = (notificationId) => {
    setNotifications(notifications.filter(n => n.id !== notificationId));
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>🔔 Notifications</h1>
        <span className="notification-count">{notifications.length}</span>
      </div>

      <div className="notifications-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div 
                className="notification-icon"
                style={{ backgroundColor: notification.color }}
              >
                {notification.icon}
              </div>
              <div className="notification-content">
                <h3>{notification.title}</h3>
                <div className="notification-meta">
                  <span className="notification-code">{notification.code}</span>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </div>
              <button 
                className="btn-close-notification"
                onClick={() => markAsRead(notification.id)}
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <div className="no-notifications">
            <p>No new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;