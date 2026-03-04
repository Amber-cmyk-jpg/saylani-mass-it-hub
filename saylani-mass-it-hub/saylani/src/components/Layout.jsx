import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <header className="app-header">
          <div className="header-user">
            Welcome, {user?.name}
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;