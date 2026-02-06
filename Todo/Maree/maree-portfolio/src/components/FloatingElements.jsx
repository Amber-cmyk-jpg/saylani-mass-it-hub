import { motion } from "framer-motion";

const FloatingElements = ({ items }) => {
  return (
    <div className="floating-elements">
      {items.map((item, index) => (
        <motion.img
          key={index}
          src={item.img}
          alt=""
          className="floating-item"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: index * 0.3,
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            width: item.size || 100,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
