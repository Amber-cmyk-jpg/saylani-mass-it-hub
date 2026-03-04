import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <nav className="sidebar">
      {user?.role === 'admin' && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            "sidebar-link" + (isActive ? " active" : "")
          }
        >
          📊 Dashboard
        </NavLink>
      )}
      <NavLink
        to="/lostfound"
        className={({ isActive }) =>
          "sidebar-link" + (isActive ? " active" : "")
        }
      >
        🔍 Lost & Found
      </NavLink>
      <NavLink
        to="/complaints"
        className={({ isActive }) =>
          "sidebar-link" + (isActive ? " active" : "")
        }
      >
        ⚠️ Complaints
      </NavLink>
      <NavLink
        to="/volunteers"
        className={({ isActive }) =>
          "sidebar-link" + (isActive ? " active" : "")
        }
      >
        🤝 Volunteers
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          "sidebar-link" + (isActive ? " active" : "")
        }
      >
        🔔 Notifications
      </NavLink>
    </nav>
  );
};

export default Sidebar;