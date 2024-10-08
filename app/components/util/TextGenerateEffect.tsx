"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
	delay,
	filter = true,
	duration = 0.5,
}: {
	words: string;
	className?: string;
	delay?: number;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			}
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{
								ease: "easeInOut",
								duration: 1,
								delay: delay,
							}}
							key={word + idx}
							className="dark:text-white text-black opacity-0"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn(className)}>
			<div className="mt-4">
				<div className=" dark:text-white text-black leading-none">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
