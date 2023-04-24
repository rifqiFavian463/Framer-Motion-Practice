import "./styles.css";
import { motion } from "framer-motion";

const ballAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.2, y: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 }
  },
  bounce: {
    y: 40,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      type: "tween",
      delay: 0.6
    }
  }
};

export default function App() {
  return (
    <motion.div
      className="box"
      variants={ballAnimation}
      initial="hidden"
      animate={["visible", "bounce"]}
    />
  );
}
