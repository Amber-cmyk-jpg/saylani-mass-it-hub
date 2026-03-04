import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    
    const result = await signup(name, email, password);
    if (!result.success) {
      setError(result.message);
      setLoading(false);
    } else {
      setSuccess(result.message);
      // Clear form after success
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);
      // redirect to login page after short delay
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div className="login-page-container">
      {/* Left Section - Campus Portal Info */}
      <div className="login-left-section">
        {/* Saylani Logo */}
        <div className="left-logo-container">
          <img
            src="https://lms.saylanimit.com/assets/logo.6lrMPvRL.png"
            alt="Saylani Logo"
            className="left-logo"
          />
        </div>

        <div className="portal-content">
          <h1 className="portal-title">Campus Portal</h1>
          <p className="portal-description">
            Manage reports, complaints<br /> & events in one place.
          </p>
        </div>
        {/* Decorative Wave */}
        <svg className="wave-decoration" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="rgba(76, 175, 80, 0.3)"
          />
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(76, 175, 80, 0.2)"
          />
        </svg>
      </div>

      {/* Right Section - Signup Form */}
      <div className="login-right-section">
        {/* Logo */}
        <div className="login-logo-container">
          
        </div>

        {/* Form */}
        <div className="login-form-wrapper">
          <h2 className="login-heading">Create Account</h2>

          {error && <div className="login-error-message">{error}</div>}
          {success && <div className="login-success-message">{success}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            {/* Name Input */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Google Sign Up */}
          <div className="google-signin">
            <img
              src="https://www.gstatic.com/firebaseapp/v8.10.1/images/favicon.png"
              alt="Google"
              className="google-icon"
            />
            <span>Sign up with account</span>
          </div>

          {/* Login Link */}
          <p className="signup-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
