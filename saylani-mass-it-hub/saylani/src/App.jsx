import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import LostAndFound from "./pages/LostAndFound";
import Complaints from "./pages/Complaints";
import Volunteers from "./pages/Volunteers";
import Notifications from "./pages/Notifications";
import ProtectedRoute from "./pages/ProtectedRoute";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* public auth routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* all authenticated routes share layout */}
          <Route element={<ProtectedRoute />}> 
            <Route element={<Layout />}>
              {/*
                Student-accessible pages (no home link)
                Landing after login will go to lostfound
              */}
              <Route path="/lostfound" element={<LostAndFound />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/volunteers" element={<Volunteers />} />
              <Route path="/notifications" element={<Notifications />} />

              {/* admin only */}
              <Route element={<ProtectedRoute adminOnly={true} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;