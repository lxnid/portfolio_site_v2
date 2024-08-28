'use client'
import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

// Define the types for the component props
interface FramerMagneticProps {
  children: ReactNode;
  className?: string;
}

export default function FramerMagnetic({ children, className }: FramerMagneticProps) {
  // Specify the type for the ref
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();

      // Adjust these factors to control the range of the magnetic effect
      const effectStrength = 0.05; // Lower value for a more subtle effect

      const middleX = (clientX - (left + width / 1.8)) * effectStrength;
      const middleY = (clientY - (top + height / 1.8)) * effectStrength;

      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{
        position: "relative",
        cursor: "pointer",
        display: "inline-block",
        height: "100%",
      }}
      className={className}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        duration: 0.1, // Adjust the duration as needed
        ease: "linear", // Use easeIn, easeOut, easeInOut, or linear based on your needs
      }}
    >
      {children}
    </motion.div>
  );
}