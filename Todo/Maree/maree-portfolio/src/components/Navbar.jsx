import React from "react";

export default function Navbar() {
  const menuItems = [];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        position: "sticky",
        top: 0,
        background: "#262626",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        fontSize: "12px",
        height: 54,
        lineHeight: "54px",
        marginBottom: "1px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          fontFamily: "'Playfair Display', serif",
          background: "url('https://public-assets.envato-static.com/assets/log…c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg') no-repeat center",
       width: "18px",
        height: "152px",
          backgroundSize: "152px 18px",
        }}
      >
      </div>

      {/* Buy Now Button */}
      <button
        style={{
          padding: "10px 25px",
          border: "1px solid #a8db7b",
          background: "#82b440",
          cursor: "pointer",
          borderRadius: "5px",
          fontWeight: "bold",
            color: "#ffffff",
        }}
      >
        Buy Now
      </button>
    </nav>
  );
}
