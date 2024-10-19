"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./components/util/TextGenerateEffect";
import Link from "next/link";
import FramerMagnetic from "./components/util/framerMagnetic";
import { motion } from "framer-motion";
import { Parisienne } from "next/font/google";
import { TransitionLink } from "./components/util/TransitionLink";

const fontParisienne = Parisienne({
	subsets: ["latin"],
	weight: "400",
});
// snap-y snap-mandatory 
export default function Home() {
	return (
		<main className="w-full h-screen overflow-y-scroll">
			<section className="sm:pt-0 w-full flex justify-center items-center min-h-[100vh] snap-start relative">
				<motion.video
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0.5 }}
					transition={{ ease: "easeInOut", duration: 1 }}
					autoPlay
					loop
					muted
					playsInline
					className="video absolute top-0 left-0 z-0 blur-lg opacity-45 w-screen"
				>
					<source
						src="https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</motion.video>{" "}
				<TextGenerateEffect
					words={
						"©’24DINIL RUBASINGHE COMPUTER SCIENCE STUDENT CREATIVE DESIGNER & HOBBYIST"
					}
					className="uppercase text-[58px] sm:text-[80px] md:text-[86px] lg:text-[100px] font-dahlia w-[90%] lg:w-[80%]"
				/>
				{/* <motion.span
					initial={{ x: 48, opacity: 0 }}
					whileInView={{ x: 0, opacity: 0.99 }}
					transition={{ ease: "easeInOut", duration: 2, delay: 0.2 }}
				>
					<Image
						src={"hero-img.svg"}
						alt={""}
						width={600}
						height={100}
						className="hidden lg:block w-auto opacity-0"
						priority={true}
					/>
				</motion.span> */}
			</section>
			<section className="snap-start relative max-w-screen h-screen bg-transparent">
				<div className="w-full h-80 bg-gradient-to-t from-black absolute"></div>
				<div className="absolute w-full min-h-[96vh] flex flex-col justify-center items-center gap-40 sm:gap-0">
					<motion.div
						initial={{ x: -48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[125px] sm:text-[250px] h-full overflow-hidden"
					>
						<FramerMagnetic className={undefined}>
							<TransitionLink
								href={"/about"}
								// className="opacity-20 hover:opacity-30 transition duration-200 ease-in"
								className="text-[rgb(53,53,53)] hover:text-[rgb(80,80,80)] transition duration-200 ease-in"
							>
								About
							</TransitionLink>
						</FramerMagnetic>
					</motion.div>
					<motion.div
						initial={{ x: 48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1.2 }}
						className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[125px] sm:text-[250px] h-full text-right overflow-hidden"
					>
						<FramerMagnetic className={undefined}>
							<TransitionLink
								href={"/work"}
								className="text-[rgb(53,53,53)] hover:text-[rgb(80,80,80)] transition duration-200 ease-in"
							>
								Work
							</TransitionLink>
						</FramerMagnetic>
					</motion.div>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-[75%] lg:w-[50%] xl:w-[30%] text-center text-[20px] sm:text-[30px] tracking-wider">
						<motion.p
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1.5 }}
						>
							From Imagination to Innovation: Coding the Future
							with Creative Solutions, blending the Art of Vision
							with the Science of Technology; since{" "}
							<span className={fontParisienne.className}>
								2019
							</span>
						</motion.p>
					</div>
				</div>
			</section>
		</main>
	);
}
