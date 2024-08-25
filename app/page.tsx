"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";
import Link from "next/link";
import FramerMagnetic from "./components/ui/framerMagnetic";
import { motion } from "framer-motion";
import { Parisienne } from "next/font/google";


const fontParisienne = Parisienne({
  subsets: ["latin"],
	weight: "400",
});

export default function Home() {
	return (
		<main className="w-full">
			<section className="pt-12 sm:pt-0 w-full flex justify-center min-h-[100vh]">
				<TextGenerateEffect
					words={
						"©’24DINIL RUBASINGHE COMPUTER SCIENCE STUDENT CREATIVE DESIGNER & HOBBYIST"
					}
					className="uppercase text-[58px] sm:text-[80px] md:text-[86px] lg:text-[100px] font-dahlia w-[90%] lg:w-[50%]"
				/>
				<Image
					src={"hero-img.svg"}
					alt={""}
					width={600}
					height={100}
					className="hidden lg:block"
				/>
			</section>
			<section className="max-w-screen h-screen">
				<div className="absolute w-full min-h-[96vh] flex flex-col justify-center items-center gap-40 sm:gap-0">
					<motion.div
						initial={{ x: -48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[125px] sm:text-[250px] h-full overflow-hidden"
					>
						<FramerMagnetic className={undefined}>
							<Link
								href={"/about"}
								className="opacity-20 hover:opacity-30 transition duration-200 ease-in"
							>
								About
							</Link>
						</FramerMagnetic>
					</motion.div>
					<motion.div
						initial={{ x: 48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1.2 }}
						className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[125px] sm:text-[250px] h-full text-right overflow-hidden"
					>
						<FramerMagnetic className={undefined}>
							<Link
								href={""}
								className="opacity-20 hover:opacity-30 transition duration-200 ease-in"
							>
								Work
							</Link>
						</FramerMagnetic>
					</motion.div>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-[75%] lg:w-[50%] xl:w-[30%] text-center text-[25px] sm:text-[32px] tracking-wider">
						<motion.p
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1.5 }}
						>
							From Imagination to Innovation: Coding the Future
							with Creative Solutions, blending the Art of Vision
							with the Science of Technology; since <span className={fontParisienne.className}>2019</span>
						</motion.p>
					</div>
				</div>
			</section>
		</main>
	);
}
