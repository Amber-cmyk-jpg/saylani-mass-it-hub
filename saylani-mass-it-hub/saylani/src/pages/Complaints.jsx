import { useState } from 'react';

const Complaints = () => {
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaints, setComplaints] = useState([
    { id: 503, title: 'Wi-Fi Not Working', location: 'Dil Neset', status: 'Pending' },
    { id: 504, title: 'Leaky Pipe', location: 'City Park', status: 'Resolved' }
  ]);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Backpack',
    description: '',
    location: '',
    urgency: 'Low'
  });

  const [filterStatus, setFilterStatus] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Community Cleanup',
      date: 'Saturday, 29th June',
      location: 'City Park',
      image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=200&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Tech Workshop',
      date: 'June 5',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Health Camp',
      date: 'July 5',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop'
    }
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
    const newComplaint = {
      id: complaints.length + 503,
      title: formData.title,
      location: formData.location,
      status: 'Pending'
    };
    setComplaints([newComplaint, ...complaints]);
    setFormData({
      title: '',
      category: 'Backpack',
      description: '',
      location: '',
      urgency: 'Low'
    });
    setShowComplaintForm(false);
    alert('Complaint submitted successfully!');
  };

  const filteredComplaints = complaints.filter(complaint => {
    const statusMatch = filterStatus === 'All' || complaint.status === filterStatus;
    return statusMatch;
  });

  return (
    <div className="complaints-container">
      {/* Header */}
      <div className="complaints-header">
        <h1>🔒 Submit Complaint</h1>
      </div>

      {/* Events Section */}
      <div className="events-section">
        {/* Featured Event */}
        {events.find(e => e.featured) && (
          <div className="featured-event">
            <img src={events.find(e => e.featured).image} alt="Featured" />
            <div className="featured-content">
              <h3>{events.find(e => e.featured).title}</h3>
              <p>{events.find(e => e.featured).date}</p>
              <span className="location-badge">{events.find(e => e.featured).location}</span>
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="events-grid">
          {events.filter(e => !e.featured).map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h4>{event.title}</h4>
              <p className="event-date">{event.date}</p>
              <button className="btn-register">Register</button>
            </div>
          ))}
        </div>
      </div>

      {/* Complaint Form Section */}
      <div className="complaint-form-section">
        <div className="form-header">
          <h2>📋 File a Complaint</h2>
          {!showComplaintForm && (
            <button 
              className="btn-new-complaint"
              onClick={() => setShowComplaintForm(true)}
            >
              + New Complaint
            </button>
          )}
        </div>

        {showComplaintForm && (
          <form onSubmit={handleSubmit} className="complaint-form">
            {/* Complaint Title */}
            <div className="form-group-complaint">
              <label>Complaint Title</label>
              <input
                type="text"
                name="title"
                placeholder="Brief title of the complaint"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Category */}
            <div className="form-group-complaint">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option>Backpack</option>
                <option>Infrastructure</option>
                <option>Cleanliness</option>
                <option>Maintenance</option>
                <option>Services</option>
                <option>Security</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group-complaint">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe the complaint in detail..."
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Location */}
            <div className="form-group-complaint">
              <label>Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a location</option>
                <option value="Campus">Campus</option>
                <option value="Library">Library</option>
                <option value="Cafeteria">Cafeteria</option>
                <option value="Dil Neset">Dil Neset</option>
                <option value="City Park">City Park</option>
                <option value="Lab">Lab</option>
              </select>
            </div>

            {/* Urgency */}
            <div className="form-group-complaint">
              <label>Urgency</label>
              <div className="urgency-options-complaint">
                <label className="urgency-label-complaint">
                  <input
                    type="radio"
                    name="urgency"
                    value="Low"
                    checked={formData.urgency === 'Low'}
                    onChange={handleInputChange}
                  />
                  <span className="urgency-dot urgency-low"></span>
                  <span>Low</span>
                </label>
                <label className="urgency-label-complaint">
                  <input
                    type="radio"
                    name="urgency"
                    value="Medium"
                    checked={formData.urgency === 'Medium'}
                    onChange={handleInputChange}
                  />
                  <span className="urgency-dot urgency-medium"></span>
                  <span>Medium</span>
                </label>
                <label className="urgency-label-complaint">
                  <input
                    type="radio"
                    name="urgency"
                    value="High"
                    checked={formData.urgency === 'High'}
                    onChange={handleInputChange}
                  />
                  <span className="urgency-dot urgency-high"></span>
                  <span>High</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit-complaint-form">
              Submit Complaint
            </button>
          </form>
        )}
      </div>

      {/* My Complaints Section */}
      <div className="my-complaints-section">
        <div className="complaints-header-section">
          <h3>My Complaints</h3>
          <div className="complaint-filters">
            <label>Status:</label>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option>All</option>
              <option>Pending</option>
              <option>Resolved</option>
              <option>In Progress</option>
            </select>

            <label>Category:</label>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              <option>All</option>
              <option>Infrastructure</option>
              <option>Cleanliness</option>
              <option>Maintenance</option>
              <option>Services</option>
            </select>
          </div>
        </div>

        {filteredComplaints.length > 0 ? (
          <div className="complaints-table-wrapper">
            <table className="complaints-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Complaints</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredComplaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="complaint-id">{complaint.id}</td>
                    <td className="complaint-title">{complaint.title}</td>
                    <td className="complaint-location">
                      📍 {complaint.location}
                    </td>
                    <td>
                      <span className={`status-badge status-${complaint.status.toLowerCase()}`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className="complaint-actions">
                      <button className="btn-action">⋯</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-complaints">
            <p>No complaints found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Complaints;