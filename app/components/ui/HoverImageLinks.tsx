"use client";
import {
	useMotionValue,
	motion,
	useSpring,
	useTransform,
	delay,
} from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Aclonica } from "next/font/google";

const aclonica = Aclonica({
	weight: "400", // Specify the weights you need
	subsets: ["latin"], // Choose the appropriate subsets you need
});

export const HoverImageLinks = () => {
	return (
		<div className="mx-[10%] max-w-[90%] h-fit border-t-2 border-neutral-700">
			<Link
				heading="Home"
				subheading="01/"
				imgSrc="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="#"
				AnimDelay={0.2}
			/>
			<Link
				heading="About"
				subheading="02/"
				imgSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="#"
				AnimDelay={0.4}
			/>
			<Link
				heading="Work"
				subheading="03/"
				imgSrc="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="#"
				AnimDelay={0.6}
			/>
			<Link
				heading="Contact"
				subheading="04/"
				imgSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="#"
				AnimDelay={0.8}
			/>
		</div>
	);
};

interface LinkProps {
	heading: string;
	imgSrc: string;
	subheading: string;
	href: string;
	AnimDelay: number | undefined;
}

const Link = ({ heading, imgSrc, subheading, href, AnimDelay }: LinkProps) => {
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
			}} // Ensure the delay and transition timing are correct
			className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-6"
		>
			<div
			>
				<span
					className={`${aclonica.className} relative z-10 mt-2 block text-base transition-colors duration-500 group-hover:text-neutral-50 text-neutral-400`}
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
					className="relative z-10 block text-4xl font-dahlia font-medium uppercase transition-colors duration-500 group-hover:text-neutral-50 text-neutral-400 md:text-8xl"
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
				className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
				alt={`Image representing a link for ${heading}`}
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
};
