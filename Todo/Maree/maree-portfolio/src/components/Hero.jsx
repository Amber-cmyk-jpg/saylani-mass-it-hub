import FloatingElements from "./FloatingElements";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300); // smooth entrance
  }, []);

  const heroItems = [
    {
      src: "/assets/bike.png",
      style: { bottom: "20px", left: "10%", width: "150px" },
      duration: 4,
    },
    {
      src: "/assets/bird.png",
      style: { top: "20px", right: "10%", width: "80px" },
      duration: 6,
    },
    {
      src: "/assets/leaf.png",
      style: { top: "50%", left: "50%", width: "50px" },
      duration: 5,
    },
  ];

  return (
    <section className={`hero-section ${show ? "show-hero" : ""}`}>
      <img
        src="https://maree.qodeinteractive.com/wp-content/uploads/2019/07/landing-slider-img-1.png"
        alt=""
        className="hero-logo"
      />

      <p className="hero-text">
        Welcome to Marée, a brand new illustration & design portfolio just
        waiting for your work to start populating its templates!
      </p>

      <button className="hero-btn">PURCHASE</button>

      <FloatingElements items={heroItems} />
    </section>
  );
}
