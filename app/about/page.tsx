"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Alumni_Sans, Poppins } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FramerMagnetic from "../components/util/framerMagnetic";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/util/TextGenerateEffect";

const AlumniSans = Alumni_Sans({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	style: ["normal", "italic"],
	display: "swap",
	preload: true,
});
const FontPoppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	style: ["normal", "italic"],
	display: "swap",
	preload: true,
});

export default function About() {
	return (
		<main className="w-full">
			<section className="w-full min-h-[100vh] h-auto flex flex-col-reverse lg:flex-row py-24 lg:py-0 justify-center items-center gap-10">
				<motion.div
					initial={{ x: 48, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ ease: "easeInOut", duration: 1 }}
					className="w-[90%] md:w-[70%] lg:w-[40%] space-y-10"
				>
					<div className="font-dahlia text-3xl tracking-wider lg:tracking-normal md:text-4xl lg:text-6xl uppercase text-center lg:text-start ">
						<span>
							<TextGenerateEffect
								words={
									"computer science student based in Colombo."
								}
							/>
						</span>
						{/* computer science student based in Colombo.{" "} */}
						{/* <span className="opacity-40">
							I craft elegant solutions to intricate problems
							through imaginative and inventive approaches.
						</span> */}
						<span>
							<TextGenerateEffect
								delay={0.3}
								words={
									"I craft elegant solutions to intricate problems through imaginative and inventive approaches."
								}
								className="opacity-40"
							/>
						</span>
					</div>
					<div className="flex gap-5 md:gap-8 justify-center lg:justify-start">
						<Link
							href={""}
							className="opacity-70 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaGithub className="text-2xl md:text-4xl" />
						</Link>
						<Link
							href={""}
							className="opacity-70 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaInstagram className="text-2xl md:text-4xl" />
						</Link>
						<Link
							href={""}
							className="opacity-70 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaLinkedin className="text-2xl md:text-4xl" />
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 148, opacity: 0 }}
					whileInView={{ y: 0, opacity: 0.99 }}
					transition={{ ease: "easeInOut", duration: 1 }}
					className="w-[80%] lg:w-[40%] flex justify-center items-center"
				>
					<FramerMagnetic>
						<Image
							src={"/profile-img.jpg"}
							alt={""}
							width={1}
							height={1}
							className="hidden lg:block w-[90%] rounded-3xl"
							priority={true}
						/>
					</FramerMagnetic>
					<Image
						src={"/profile-img.jpg"}
						alt={""}
						width={1}
						height={1}
						className="block lg:hidden w-full md:w-[60%] rounded-3xl"
						priority={true}
					/>
				</motion.div>
			</section>
			<section className="w-full min-h-screen h-screen flex justify-center items-center p-[8%]">
				<div className="w-auto h-auto gap-4">
					<div className="grid grid-cols-4">
						<motion.div
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex justify-center items-center overflow-hidden select-none cursor-pointer hover:scale-105 transition ease-out duration-300"
						>
							<FramerMagnetic className="w-full">
								<Image
									src={"/gradient-purple.jpg"}
									width={1000}
									height={1000}
									alt={""}
									className="w-full select-none"
								/>
							</FramerMagnetic>
						</motion.div>
						<motion.div
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex flex-col justify-center items-center"
						>
							<h1
								className={`text-9xl font-medium ${AlumniSans.className} cursor-pointer hover:scale-105 transition ease-out duration-300`}
							>
								3+
							</h1>
							<p className="uppercase font-light tracking-widest">
								Projects
							</p>
						</motion.div>
						<motion.div
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex flex-col justify-center items-center"
						>
							<h1
								className={`text-9xl font-medium ${AlumniSans.className} cursor-pointer hover:scale-105 transition ease-out duration-300`}
							>
								5<span className="text-xl">years</span>
							</h1>
							<p className="uppercase font-light tracking-widest">
								Experience
							</p>
						</motion.div>
						<motion.div
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex flex-col justify-center items-center"
						>
							<h1
								className={`text-9xl font-medium ${AlumniSans.className} cursor-pointer hover:scale-105 transition ease-out duration-300`}
							>
								100
								<span
									className={`text-xl ${FontPoppins.className}`}
								>
									%
								</span>
							</h1>
							<p className="uppercase font-light tracking-widest">
								Passion
							</p>
						</motion.div>
					</div>
					<div className="grid grid-cols-3 h-[50%]">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex justify-center items-center text-2xl p-4"
						>
							<p>
								Extensive experience and the deep understanding
								of the field, fuels my passion for building
								impactful user experiences. I thrive on
								transforming complex challenges into
								elegant, user-centric solutions.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex justify-center items-center text-2xl p-10"
						>
							<p>
								....into the bargain’ I’m a great musician and I
								enjoy music even when I’m working, which helps
								me to focus and concentrate on my work. Check
								out my work music playlist on Spotify.
							</p>
						</motion.div>
						<motion.div
							initial={{ y: 48, opacity: 0 }}
							whileInView={{ y: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="flex justify-center items-center p-8 "
						>
							<FramerMagnetic>
								<div className="overflow-hidden rounded-[6rem] cursor-pointer hover:scale-105 transition ease-out duration-300">
									<Link href={""}>
										<Image
											src={"/spotify-badge.jpg"}
											width={1000}
											height={1000}
											alt={""}
										/>
									</Link>
								</div>
							</FramerMagnetic>
						</motion.div>
					</div>
				</div>
			</section>
			<section className="w-full min-h-screen flex justify-center items-center">
				<div className="w-full flex flex-col justify-center items-center gap-40 sm:gap-0">
					<motion.div
						initial={{ x: -48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[125px] sm:text-[250px] h-full overflow-hidden z-0"
					>
						<FramerMagnetic className={undefined}>
							<h1 className="opacity-20 transition duration-200 ease-in">
								My
							</h1>
						</FramerMagnetic>
					</motion.div>
					<motion.div
						initial={{ x: 48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1.2 }}
						className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[125px] sm:text-[250px] h-full text-right overflow-hidden z-0"
					>
						<FramerMagnetic className={undefined}>
							<h1 className="opacity-20 transition duration-200 ease-in">
								Story
							</h1>
						</FramerMagnetic>
					</motion.div>
				</div>
				<div className="absolute w-[86%] md:w-[70%] lg:w-[60%] space-y-5 text-2xl text-justify">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1.5 }}
						className=""
					>
						My story began with a simple interest in graphic and web
						design which I started in early 2019, which soon led me
						to explore software development and computer science.
						The COVID-19 pandemic became a turning point, allowing
						me to dive deeper into the technical aspects of my
						interests. During this time, I mastered HTML, CSS, and
						JavaScript, which fuelled my passion for creating fully
						functional websites. My dedication led me to complete
						Harvard’s CS50X, where I gained proficiency in languages
						like C and Python, sparking a deeper interest in solving
						complex problems and developing innovative software
						solutions.
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1.5 }}
						className=""
					>
						Today, my academic journey has equipped me with a strong
						foundation in computer science, complemented by hands-on
						experience through platforms like GitHub, Stack
						Overflow, and LeetCode. I’ve developed personal projects
						and engaged with a vibrant tech community, preparing me
						to thrive in the world of technology. I am eager to push
						the boundaries of software engineering and further my
						understanding in a rigorous and innovative environment.
					</motion.p>
				</div>
			</section>
		</main>
	);
}
