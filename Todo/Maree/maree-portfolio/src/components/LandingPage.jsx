import { useEffect, useState } from "react";
import MareePortfolio from "./MareePortfolio";

const LandingPage = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowTitle(true);
  }, 1200); // not too long

  return () => clearTimeout(timer);
}, []);



  return (
    <>
      <section
  className="hero"
  style={{
    position: "relative",
    textAlign: "center",
    padding: "120px 20px 120px 20px",
    minHeight: "auto",   
    overflow: "visible", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,247,1) 100%)",
  }}
>

      {/* Animated - Fall then stay */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <div style={{ position: "absolute", bottom: "15%", right: "10%", fontSize: "3rem", animation: "leafFall 3.5s ease-in forwards", animationDelay: "0.3s", color: "#d8a7a7" }}>
        </div>

        <div style={{ position: "absolute", bottom: "25%", right: "15%", fontSize: "3rem", animation: "leafFall 3.8s ease-in forwards", animationDelay: "0.2s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-12.png" alt="" />
        </div>
        <div style={{ position: "absolute", bottom: "65%", right: "35%", fontSize: "3rem", animation: "leafFall 3.8s ease-in forwards", animationDelay: "0.2s", color: "#d8a7a7" }}>
          <img src="	https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-5.png" alt="" />
        </div>

        <div style={{ position: "absolute", bottom: "75%", right: "25%", animation: "leafFall 3.8s ease-in forwards", animationDelay: "0.2s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-6.png" alt="" width={128} height={75} />
        </div>

        <div style={{ position: "absolute", bottom: "75%", left: "35%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png" alt="" />
        </div>
        
         <div style={{ position: "absolute", bottom: "75%", left: "22%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-4.png" alt="" />
        </div>
        <div style={{ position: "absolute", bottom: "75%", left: "20%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-3.png" alt="" />
        </div>

        <div style={{ position: "absolute", bottom: "65%", left: "15%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png" alt="" />
        </div>
        <div style={{ position: "absolute", bottom: "55%", left: "20%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-5.png" alt="" />
        </div>

        <div style={{ position: "absolute", bottom: "75%", right: "35%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png" alt="" />
        </div>
         <div style={{ position: "absolute", bottom: "65%", right: "15%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png" alt="" />
        </div>
         <div style={{ position: "absolute", bottom: "25%", right: "35%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-9.png" alt="" />
        </div>
        <div style={{ position: "absolute", bottom: "25%", right: "28%", width: "94px", height: "203px", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-10.png" alt="" />
        </div>

         <div style={{ position: "absolute", bottom: "25%", right: "22%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-11.png" alt="" />
        </div>
         <div style={{ position: "absolute", bottom: "35%", left: "40%", fontSize: "2.8rem", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png" alt="" />
        </div>

        <div style={{ position: "absolute", bottom: "30%", left: "20%", width: "199px", height: "214px", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-7.png" alt="" />
        </div>
        <div style={{ position: "absolute", bottom: "10%", left: "33%", width: "199px", height: "214px", animation: "leafFall 3.3s ease-in forwards", animationDelay: "0.4s", color: "#d8a7a7" }}>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-8.png" alt="" />
        </div>
      </div>

      {/* Logo and Title */}
      <h1 style={{
        margin: "0px 0",
        opacity: showTitle ? 1 : 0,
        transform: showTitle ? "scale(1)" : "scale(0.8)",
        transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        position: "relative",
        zIndex: 10,
      }}>
        <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/07/landing-slider-img-1.png" alt="" />
      </h1>
      
      <p style={{
        fontSize: "1.1rem",
        marginTop: "30px",
        color: "#888",
        maxWidth: "600px",
        lineHeight: "1.6",
        opacity: showTitle ? 1 : 0,
        transition: "opacity 0.8s ease-in 0.2s",
        position: "relative",
        zIndex: 10,
      }}>
        Welcome to Marée, a brand new illustration & design portfolio just waiting for your work to start populating its templates!
      </p>
      
      <button style={{
        marginTop: "40px",
        padding: "14px 40px",
        border: "2px solid #d8a7a7",
        background: "transparent",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#333",
        borderRadius: "3px",
        transition: "all 0.3s ease",
        opacity: showTitle ? 1 : 0,
        position: "relative",
        zIndex: 10,
      }} onMouseOver={(e) => e.target.style.background = "#d8a7a7"} onMouseOut={(e) => e.target.style.background = "transparent"}>
        PURCHASE
      </button>

      {/* Keyframe animations */}
      <style>{`
        @keyframes leafFall {
          0% {
            transform: translateY(-150px) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0px) translateX(20px) rotate(360deg);
            opacity: 1;
          }
        }
      `}</style>
      </section>
      <MareePortfolio />
    </>
  );
};

export default LandingPage;

