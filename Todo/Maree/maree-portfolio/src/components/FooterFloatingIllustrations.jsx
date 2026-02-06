import useScrollReveal from "./useScrollReveal";  // Assuming you have this

export default function FooterFloatingIllustrations() {
  const { ref, visible } = useScrollReveal(0.3);  // Trigger when 30% visible

  const images = [
    {
      src: "https://maree.qodeinteractive.com/wp-content/uploads/2019/04/short-slider-rev-1-img-3.png",
      style: { position: "absolute", bottom: "0", left: "70%", width: "200px" },
      duration: 5,
    },
    // ... add the rest of your images here as objects
  ];

  return (
    <div ref={ref} className="floating-illustrations">
      {visible && images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          style={{
            ...img.style,
            animation: `float ${img.duration}s ease-in-out infinite`,
            opacity: visible ? 1 : 0,  // Fade in on visibility
            transition: 'opacity 1s ease-in-out',  // Smooth fade
          }}
          alt=""
        />
      ))}

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}