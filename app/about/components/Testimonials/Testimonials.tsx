"use client";

import { color, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
	{
		rating: 5,
		text: "",
        name: "",
		description: "",
	},
	{
		rating: 4.5,
		text: "",
		name: "",
		description: "",
	},
	{
		rating: 4.5,
		text: "",
		name: "",
		description: "",
	},
];

const marqueeVariants = {
	animate: {
		x: [0, -1000], // Adjust this value to the total width of your items (ensure it is a multiple of the container width)
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "loop",
				ease: "linear",
				duration: 20, // Adjust the speed of the animation
			},
		},
	},
};

export default function InfiniteScrollMarquee() {
	return (
		<div className="antialiased overflow-hidden relative">
			<motion.div
				className="flex"
				variants={marqueeVariants}
				animate="animate"
			>
				{/* Repeat the testimonials twice to create the seamless effect */}
				{testimonials.concat(testimonials).map((testimonial, index) => (
					<div
						key={index}
						className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]"
					>
						<blockquote>
							<div className="py-2">
								{[...Array(Math.floor(testimonial.rating))].map(
									(_, i) => (
										<FaStar
											key={i}
											className="text-yellow-500 text-xl inline-block"
										/>
									)
								)}
								{testimonial.rating % 1 !== 0 && (
									<FaStar className="text-yellow-50 opacity-40 text-xl inline-block" />
								)}
							</div>
							<span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
								{testimonial.text}
							</span>
							<div className="relative z-20 mt-6 flex flex-row items-center gap-4">
								<span className="w-14 h-14 bg-pink-500 rounded-full"></span>
								<span className="flex flex-col gap-1">
									<span className="text-base leading-none text-gray-400 font-bold">
										{testimonial.name}
									</span>
									<span className="text-sm text-gray-400 font-normal">
										{testimonial.description}
									</span>
								</span>
							</div>
						</blockquote>
					</div>
				))}
			</motion.div>
		</div>
	);
}
