import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle navigation after successful login
  useEffect(() => {
    if (user) {
      const role = user.role;
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/lostfound");
      }
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log('🚧 handleLogin submitting', email);
    const result = await login(email, password);
    console.log('🚧 handleLogin result', result);
    setLoading(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Navigate based on role
    const role = result.user?.role;
    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/lostfound");
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

      {/* Right Section - Login Form */}
      <div className="login-right-section">
        {/* Logo */}
        <div className="login-logo-container">
          
        </div>

        {/* Form */}
        <div className="login-form-wrapper">
          <h2 className="login-heading">Login</h2>

          {error && <div className="login-error-message">{error}</div>}

          <form onSubmit={handleLogin} className="login-form">
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
                placeholder="Enter your password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>



            {/* Login Button */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Google Sign In */}
          <div className="google-signin">
            <img
              src="https://www.gstatic.com/firebaseapp/v8.10.1/images/favicon.png"
              alt="Google"
              className="google-icon"
            />
            <span>Sign in with account</span>
          </div>

          {/* Sign Up Link */}
          <p className="signup-link">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;