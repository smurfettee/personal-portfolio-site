import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, label";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const supported = pointerQuery.matches && !motionQuery.matches;
    setIsSupported(supported);
    if (!supported) return undefined;

    const handleMove = (event) => {
      setIsVisible(true);
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleOver = (event) => {
      setIsHovering(Boolean(event.target.closest(INTERACTIVE_SELECTOR)));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  if (!isSupported) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-accent-cyan shadow-glow-cyan mix-blend-difference"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: isHovering ? 40 : 8,
        height: isHovering ? 40 : 8,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
}
