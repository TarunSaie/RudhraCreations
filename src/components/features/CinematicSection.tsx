import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface CinematicSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

export default function CinematicSection({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: CinematicSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Curtain wipe direction
  const curtainVariants = {
    hidden: {
      left: direction === "right" ? "auto" : "0%",
      right: direction === "right" ? "0%" : "auto",
      width: "100%",
    },
    visible: {
      width: "0%",
      transition: {
        duration: 0.9,
        delay: delay,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01, delay: delay + 0.15 },
    },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>

      {/* Cinematic curtain overlay */}
      <motion.div
        variants={curtainVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(${direction === "left" ? "90deg" : direction === "right" ? "270deg" : "180deg"}, 
            #000000 0%, 
            #000000 40%,
            rgba(0,212,232,0.08) 70%,
            rgba(212,175,55,0.05) 85%,
            transparent 100%)`,
        }}
      />

      {/* Gold-teal leading edge shimmer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 1, 0] } : {}}
        transition={{ duration: 0.8, delay: delay + 0.05 }}
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{
          [direction === "right" ? "left" : "right"]: 0,
          width: 3,
          background: "linear-gradient(180deg, transparent, #00D4E8, #D4AF37, #00D4E8, transparent)",
        }}
      />
    </div>
  );
}
