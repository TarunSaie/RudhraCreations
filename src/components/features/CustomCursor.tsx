import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const isDesktop = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Main cursor — snappy
  const cursorX = useSpring(mouseX, { stiffness: 800, damping: 50, mass: 0.3 });
  const cursorY = useSpring(mouseY, { stiffness: 800, damping: 50, mass: 0.3 });

  // Trail cursor — lagging behind
  const trailX = useSpring(mouseX, { stiffness: 120, damping: 28, mass: 0.6 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Only enable on non-touch desktop devices
    isDesktop.current = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop.current) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverStart);

    // Hide native cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverStart);
      document.body.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Trailing aura ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: hovering ? 48 : clicking ? 20 : 36,
            height: hovering ? 48 : clicking ? 20 : 36,
            borderColor: hovering ? "#D4AF37" : "#00D4E8",
            opacity: hovering ? 0.9 : 0.45,
          }}
          transition={{ duration: 0.2 }}
          style={{
            borderRadius: "50%",
            border: "1px solid #00D4E8",
            background: hovering ? "rgba(212,175,55,0.06)" : "rgba(0,212,232,0.04)",
          }}
        />
      </motion.div>

      {/* Main cursor dot — trishul crosshair design */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: clicking ? 0.6 : hovering ? 1.4 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="relative flex items-center justify-center"
          style={{ width: 12, height: 12 }}
        >
          {/* Center dot */}
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: hovering
                ? "linear-gradient(135deg, #D4AF37, #F5C518)"
                : "linear-gradient(135deg, #00D4E8, #80ECF9)",
              boxShadow: hovering
                ? "0 0 8px rgba(212,175,55,0.8)"
                : "0 0 8px rgba(0,212,232,0.8)",
            }}
          />

          {/* Crosshair lines — teal when normal, gold when hovering */}
          {/* Top */}
          <div className="absolute"
            style={{
              top: -7, left: "50%", transform: "translateX(-50%)",
              width: 1, height: 5,
              background: hovering ? "#D4AF37" : "#00D4E8",
              opacity: 0.8,
            }} />
          {/* Bottom */}
          <div className="absolute"
            style={{
              bottom: -7, left: "50%", transform: "translateX(-50%)",
              width: 1, height: 5,
              background: hovering ? "#D4AF37" : "#00D4E8",
              opacity: 0.8,
            }} />
          {/* Left */}
          <div className="absolute"
            style={{
              left: -7, top: "50%", transform: "translateY(-50%)",
              width: 5, height: 1,
              background: hovering ? "#D4AF37" : "#00D4E8",
              opacity: 0.8,
            }} />
          {/* Right */}
          <div className="absolute"
            style={{
              right: -7, top: "50%", transform: "translateY(-50%)",
              width: 5, height: 1,
              background: hovering ? "#D4AF37" : "#00D4E8",
              opacity: 0.8,
            }} />
        </motion.div>
      </motion.div>
    </>
  );
}
