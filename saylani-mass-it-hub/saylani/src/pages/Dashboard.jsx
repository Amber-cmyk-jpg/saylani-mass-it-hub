import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const stats = [
    { label: 'Total Users', value: 540, icon: '👥' },
    { label: 'Open Complaints', value: 12, icon: '⚠️' },
    { label: 'Lost Items Pending', value: 6, icon: '📦' },
    { label: 'Active Volunteers', value: 24, icon: '🤝' }
  ];

  const complaints = [
    { id: 506, item: 'Doss Mahler', category: 'Complaints', location: 'Di Dommek', status: 'Resolved' },
    { id: 502, item: 'Mona Nighlen', category: 'Dotaion', location: 'City Park', status: 'Pending' },
    { id: 505, item: 'Wara Family', category: 'PlanKit', location: 'Library', status: 'Backlog' },
    { id: 508, item: 'Hara Heaks', category: 'Lost & Found', location: 'Campus', status: 'Saveup' }
  ];

  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'Resolved':
        return '#2e7d32';
      case 'Pending':
        return '#ff9800';
      case 'Backlog':
        return '#7c3aed';
      case 'Saveup':
        return '#0ea5e9';
      default:
        return '#999';
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>📊 Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>

      <div className="admin-content">
        {/* Stats Cards */}
        <div className="admin-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="admin-stat-card">
              <div className="stat-icon-admin">{stat.icon}</div>
              <p className="stat-label-admin">{stat.label}</p>
              <p className="stat-value-admin">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Complaints Management */}
        <div className="complaints-management">
          <h2>Complaints Management</h2>
          <div className="complaints-table-admin">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="complaint-id-admin">{complaint.id}</td>
                    <td className="complaint-item-admin">{complaint.item}</td>
                    <td className="complaint-category-admin">{complaint.category}</td>
                    <td className="complaint-location-admin">{complaint.location}</td>
                    <td>
                      <span 
                        className="status-badge-admin"
                        style={{ backgroundColor: getStatusBadgeColor(complaint.status) }}
                      >
                        {complaint.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
