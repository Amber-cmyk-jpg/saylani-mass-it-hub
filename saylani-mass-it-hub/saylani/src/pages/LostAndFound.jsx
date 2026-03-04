import { useState } from 'react';

const LostAndFound = () => {
  const [showReportForm, setShowReportForm] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'Mature',
    description: '',
    location: '',
    urgency: 'Low'
  });

  const stats = [
    { label: 'Total Reports', value: 128, icon: '📋' },
    { label: 'Active Complaints', value: 5, icon: '🚨' },
    { label: 'Items Matched', value: 12, icon: '✓', color: 'green' },
    { label: 'Events Registered', value: 8, icon: '📅' }
  ];

  const recentActivity = [
    { id: 1, item: 'Phone', status: 'Discussed', badge: 'Pending' },
    { id: 2, item: 'Backpack', status: 'Discussed', badge: 'Rending' },
    { id: 3, item: 'Wallet', status: 'Discussed', badge: 'Matching' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Report submitted successfully!');
    setFormData({
      itemName: '',
      category: 'Mature',
      description: '',
      location: '',
      urgency: 'Low'
    });
    setShowReportForm(false);
  };

  return (
    <div className="lost-found-container">
      {/* Header */}
      <div className="lost-found-header">
        <h1>📦 Lost & Found Report</h1>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid-lost">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card-lost">
            <div className="stat-icon">{stat.icon}</div>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity-lost">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">📍</div>
              <span className="activity-name">{activity.item}</span>
              <span className="activity-status">📄 {activity.status}</span>
              <span className={`badge badge-${activity.badge.toLowerCase()}`}>
                {activity.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons-lost">
        <button 
          className="btn-report-item"
          onClick={() => setShowReportForm(true)}
        >
          📝 Report Lost Item
        </button>
        <button className="btn-submit-complaint">
          ✓ Submit Complaint
        </button>
        <button className="btn-register-event">
          🎯 Register for Event
        </button>
      </div>

      {/* Report Lost Item Modal/Form */}
      {showReportForm && (
        <div className="modal-overlay" onClick={() => setShowReportForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowReportForm(false)}
            >
              ✕
            </button>

            <h2>📦 Lost Found Report</h2>

            <form onSubmit={handleSubmit} className="report-form">
              {/* Item Name */}
              <div className="form-group-lost">
                <label>Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  placeholder="e.g., Car Keys, Wallet, Phone"
                  value={formData.itemName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Category & Type */}
              <div className="form-row">
                <div className="form-group-lost">
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option>Mature</option>
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>Documents</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group-lost">
                  <label>Type</label>
                  <select defaultValue="Electronics">
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Jewelry</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="form-group-lost">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Describe the item in detail..."
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Location */}
              <div className="form-group-lost">
                <label>Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a location</option>
                  <option value="campus">Campus</option>
                  <option value="library">Library</option>
                  <option value="cafeteria">Cafeteria</option>
                  <option value="parking">Parking Area</option>
                  <option value="classroom">Classroom</option>
                </select>
              </div>

              {/* Urgency */}
              <div className="form-group-lost">
                <label>Urgency</label>
                <div className="urgency-options">
                  <label className="urgency-label">
                    <input
                      type="radio"
                      name="urgency"
                      value="Low"
                      checked={formData.urgency === 'Low'}
                      onChange={handleInputChange}
                    />
                    <span className="urgency-low">● Low</span>
                  </label>
                  <label className="urgency-label">
                    <input
                      type="radio"
                      name="urgency"
                      value="Medium"
                      checked={formData.urgency === 'Medium'}
                      onChange={handleInputChange}
                    />
                    <span className="urgency-medium">● Medium</span>
                  </label>
                  <label className="urgency-label">
                    <input
                      type="radio"
                      name="urgency"
                      value="High"
                      checked={formData.urgency === 'High'}
                      onChange={handleInputChange}
                    />
                    <span className="urgency-high">● High</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-submit-form">
                Submit Report
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LostAndFound;