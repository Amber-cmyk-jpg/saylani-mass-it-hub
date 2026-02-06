import "./FooterSection.css";
import { motion } from "framer-motion";
import FloatingElements from "./FloatingElements";
import useScrollReveal from "./useScrollReveal";
import { img } from "framer-motion/client";

const FooterSection = () => {
  const { ref, visible } = useScrollReveal(0.3);

  const footerItems = [
    {
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/04/short-slider-rev-1-img-3.png",
    x: "50%",   // horizontal position
    y: "55%",   // vertical position
    size: 320,  // image size
  },

  {
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-1.png",
    x: "10%",
    y: "60%",
      size: 150,
  },

  {
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-2-1.png",
    x: "25%",
    y: "70%",
      size: 280,
  },

  {
    img: "	https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-3.png",
    x: "35%",
    y: "65%",
      size: 50,
  },

  {
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-4.png",
    x: "42%",
    y: "80%",
      size: 80,
  },

  {
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-5.png",
    x: "45%",
    y: "60%",
      size: 50,
  },

  {
    img: "https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-7.png",
    x: "75%",
    y: "55%",
      size: 120,
  },

  {
    img: "	https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png",
    x: "20%",
    y: "45%",
      size: 20,
  },

  {
    img: "	https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png",
    x: "75%",
    y: "60%",
      size: 20,
  }
  ];

  // Animation container (text + button)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4, // text starts after floating elements
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer ref={ref} className="footer-section">
      {/* Floating illustrations */}
      {visible && <FloatingElements items={footerItems} />}

      {/* Text + Button */}
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants}>
          Your brand new folio with a professional layout <br />
          collection and quite a cheerful <span>personality!</span>
        </motion.h2>

        <motion.button
          className="footer-btn"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PURCHASE
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
