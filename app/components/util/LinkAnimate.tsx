import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Aclonica } from "next/font/google";

const aclonica = Aclonica({
	weight: "400", // Specify the weights you need
	subsets: ["latin"], // Choose the appropriate subsets you need
});

interface LinkProps {
	heading: string;
	imgSrc: string;
	subheading: string;
	href?: string;
	AnimDelay: number | undefined;
	classNameHead: string;
	classNameSub: string;
	classNameImgSize: string;
}

const LinkAnimate: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href, AnimDelay, classNameHead, classNameSub, classNameImgSize }) => {
    const ref = useRef<HTMLAnchorElement | null>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
	const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

	const handleMouseMove = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const rect = ref.current!.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};
	const variants = {
		initial: { x: 148, opacity: 0 },
		whileHover: { scale: 1.05, x: 0, opacity: 0.99 },
		whileInView: { x: 0, opacity: 1 }, // Set the final position and opacity when in view
	};
	return (
		<motion.a
			href={href}
			ref={ref}
			onMouseMove={handleMouseMove}
			initial="initial"
			whileHover="whileHover"
			whileInView="whileInView"
			variants={variants}
			transition={{
				ease: "easeInOut",
				duration: 0.75,
				delay: AnimDelay,
			}}
			className="group relative flex items-center justify-between border-b-[1px] border-neutral-500 py-2 transition-colors duration-500 hover:border-neutral-300"
		>
			<div
			>
				<span
					className={`${aclonica.className} ${classNameSub} relative z-10 mt-2 block text-base transition-colors duration-500`}
				>
					{subheading}
				</span>
				<motion.span
					variants={{
						initial: { x: 0 },
						whileHover: { x: -16 },
					}}
					transition={{
						type: "spring",
						staggerChildren: 0.075,
						delayChildren: 0.25,
					}}
					className={`${classNameHead} relative z-10 block font-dahlia font-medium uppercase transition-colors duration-500 `}
				>
					{heading.split("").map((l, i) => (
						<motion.span
							variants={{
								initial: { x: 0 },
								whileHover: { x: 16 },
							}}
							transition={{ type: "spring" }}
							className="inline-block"
							key={i}
						>
							{l}
						</motion.span>
					))}
				</motion.span>
			</div>

			<motion.img
				style={{
					top,
					left,
					translateX: "-50%",
					translateY: "-50%",
				}}
				variants={{
					initial: { scale: 0, rotate: "-12.5deg" },
					whileHover: { scale: 1, rotate: "12.5deg" },
				}}
				transition={{ type: "spring" }}
				src={imgSrc}
				className={`${classNameImgSize} absolute z-0 rounded-lg object-cover`}
			/>

			<motion.div
				variants={{
					initial: {
						x: "25%",
						opacity: 0,
					},
					whileHover: {
						x: "0%",
						opacity: 1,
					},
				}}
				transition={{ type: "spring" }}
				className="relative z-10 p-4"
			>
				<FiArrowRight className="text-5xl text-neutral-50" />
			</motion.div>
		</motion.a>
	);
}

export default LinkAnimate