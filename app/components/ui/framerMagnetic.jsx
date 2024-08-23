'use client'
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FramerMagnetic({ children, className }) {
	const ref = useRef(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e) => {
		const { clientX, clientY } = e;
		const { height, width, left, top } =
			ref.current.getBoundingClientRect();

		// Adjust these factors to control the range of the magnetic effect
		const effectStrength = 0.05; // Lower value for a more subtle effect

		const middleX = (clientX - (left + width / 1.8)) * effectStrength;
		const middleY = (clientY - (top + height / 1.8)) * effectStrength;

		setPosition({ x: middleX, y: middleY });
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
				type: "spring",
				stiffness: 500,
				damping: 60,
				mass: 1,
			}}
		>
			{children}
		</motion.div>
	);
}
