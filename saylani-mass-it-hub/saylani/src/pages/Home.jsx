import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="student-page">
      <h2>Welcome, {user?.name}</h2>
      <p>Select an option from the sidebar to continue.</p>
    </div>
  );
};

export default Home;
