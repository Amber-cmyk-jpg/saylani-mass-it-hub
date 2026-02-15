// ----------------------
// Functions
// ----------------------

// Mark active sidebar button
function setActiveButton(button) {
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Load Dashboard content
function loadDashboard() {
    setActiveButton(document.getElementById('btnDashboard'));
    document.getElementById('mainContent').innerHTML = `
        <h4 class="mb-4">Dashboard</h4>

        <div class="row g-3 mb-4">
          <div class="col-md-3">
            <div class="stat-card">
              <p>Total Reports</p>
              <h3>128</h3>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <p>Active Complaints</p>
              <h3>5</h3>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <p>Items Matched</p>
              <h3>12</h3>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <p>Events Registered</p>
              <h3>8</h3>
            </div>
          </div>
        </div>

        <div class="card p-3 shadow-sm mb-4">
          <h5>Recent Activity</h5>
          <div class="activity-item"><span>📱 Phone</span><span class="badge bg-warning">Pending</span></div>
          <div class="activity-item"><span>🎒 Backpack</span><span class="badge bg-success">Resolved</span></div>
          <div class="activity-item"><span>👛 Wallet</span><span class="badge bg-info">Matching</span></div>
        </div>

        <div class="d-flex gap-3">
          <button id="btnReportLost" class="btn btn-success">Report Lost Item</button>
          <button class="btn btn-primary">Submit Complaint</button>
          <button class="btn btn-warning text-white">Register For Event</button>
        </div>
    `;

    // Attach event to open modal after rendering
    document.getElementById('btnReportLost').addEventListener('click', () => {
        const lostItemModal = new bootstrap.Modal(document.getElementById('lostItemModal'));
        lostItemModal.show();
    });
}

// Load Lost & Found
function loadLost() {
    setActiveButton(document.getElementById('btnLost'));
    document.getElementById('mainContent').innerHTML = `
        <h4 class="mb-4">Lost & Found</h4>
        <p>Here you can see lost and found reports...</p>
    `;
}

// Load Complaints
function loadComplaints() {
    setActiveButton(document.getElementById('btnComplaints'));
    document.getElementById('mainContent').innerHTML = `
        <h4 class="mb-4">Complaints</h4>
        <p>Here you can see complaints submitted by users...</p>
    `;
}

// Load Volunteers
function loadVolunteers() {
    setActiveButton(document.getElementById('btnVolunteers'));
    document.getElementById('mainContent').innerHTML = `
        <h4 class="mb-4">Volunteers</h4>
        <p>Here you can manage volunteers...</p>
    `;
}

// Logout
function logout() {
    alert("You are logged out!");
    // Add real logout logic here
}

// ----------------------
// Attach events
// ----------------------
document.getElementById("btnDashboard").addEventListener("click", loadDashboard);
document.getElementById("btnLost").addEventListener("click", loadLost);
document.getElementById("btnComplaints").addEventListener("click", loadComplaints);
document.getElementById("btnVolunteers").addEventListener("click", loadVolunteers);
document.getElementById("btnLogout").addEventListener("click", logout);

// Handle Lost Item Form submission
document.getElementById('lostItemForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        itemName: document.getElementById('itemName').value,
        category: document.getElementById('category').value,
        subcategory: document.getElementById('subcategory').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
        urgency: document.querySelector('input[name="urgency"]:checked').value
    };

    console.log("Lost item submitted:", data);
    alert("Lost item reported successfully!");

    // Close modal after submit
    const lostItemModal = bootstrap.Modal.getInstance(document.getElementById('lostItemModal'));
    lostItemModal.hide();

    // Reset form
    document.getElementById('lostItemForm').reset();
});

// Load dashboard by default
loadDashboard();
