import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.css";
import FooterSection from "./components/FooterSection";
import FloatingButtons from "./components/FloatingButtons";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? null : <LandingPage />}
      <FooterSection />
      <FloatingButtons />
    </>
  );
}
export default App;