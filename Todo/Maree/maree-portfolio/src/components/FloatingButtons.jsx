import { FaShoppingCart, FaCircle } from "react-icons/fa";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <div className="btn related">
        <FaCircle className="icon" />
        <span>RELATED</span>
      </div>

      <div className="btn buy">
        <FaShoppingCart className="icon" />
        <span>BUY NOW</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
