"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LinkAnimate from "../components/util/LinkAnimate";
import { Alumni_Sans, Poppins } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FramerMagnetic from "../components/util/framerMagnetic";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/util/TextGenerateEffect";
import FixedBackground from "../components/util/FixedBackground";

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
interface SectionStyles {
	[key: string]: {
		backgroundColor: string;
		textColor: string;
	};
}

// Define section styles
const sectionStyles: SectionStyles = {
	secBgBlack: {
		backgroundColor: "#000000",
		textColor: "#ffffff",
	},
	secBgWhite: {
		backgroundColor: "#ffffff",
		textColor: "#000000",
	},
};
export default function About() {
	const [backgroundColor, setBackgroundColor] = useState<string>("#000000");
	const [textColor, setTextColor] = useState<string>("#ffffff");

	const handleScroll = () => {
		const sections = document.querySelectorAll("section");
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			// Ensure sectionId is not null before using it
			if (sectionId && sectionStyles[sectionId]) {
				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionTop + sectionHeight
				) {
					setBackgroundColor(
						sectionStyles[sectionId].backgroundColor
					);
					setTextColor(sectionStyles[sectionId].textColor);
				}
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.div
			style={{ backgroundColor, color: textColor }}
			className="w-full h-full min-h-screen"
			transition={{ duration: 1.5, ease: "easeInOut" }}
		>
			<main className="w-full">
				<FixedBackground color={backgroundColor} />
				<section
					id="secBgBlack"
					className="w-full min-h-[100vh] h-auto flex flex-col-reverse lg:flex-row py-24 lg:py-0 justify-center items-center gap-10"
				>
					<motion.div
						initial={{ x: 48, opacity: 0 }}
						whileInView={{ x: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className="w-[90%] md:w-[70%] lg:w-[40%] space-y-10"
					>
						<div className="font-dahlia text-3xl hidden lg:block tracking-wider lg:tracking-normal md:text-4xl lg:text-6xl uppercase text-center lg:text-start ">
							<span>
								<TextGenerateEffect
									words={
										"computer science student based in Colombo."
									}
								/>
							</span>
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
						<div className="font-dahlia text-3xl lg:hidden tracking-wider lg:tracking-normal md:text-4xl lg:text-6xl uppercase text-center lg:text-start ">
							computer science student based in Colombo.{" "}
							<span className="opacity-40">
								I craft elegant solutions to intricate problems
								through imaginative and inventive approaches.
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
							className="block lg:hidden w-[80%] md:w-[60%] rounded-3xl"
							priority={true}
						/>
					</motion.div>
				</section>
				<section
					id="secBgBlack"
					className="w-full min-h-screen h-fit lg:h-screen flex justify-center items-center p-[8%]"
				>
					<div className="w-auto h-auto gap-32 lg:gap-4 px-0 sm:px-16 lg:px-0">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mb-20 lg:mb-0">
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
						<div className="grid grid-cols-1 lg:grid-cols-3 font-light lg:font-normal opacity-70 lg:opacity-100 text-lg lg:text-2xl text-center lg:text-start">
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 0.99 }}
								transition={{ ease: "easeInOut", duration: 1 }}
								className="flex justify-center items-center p-4"
							>
								<p className="lg:border-r-[1px] border-slate-500">
									Extensive experience and the deep
									understanding of the field, fuels my passion
									for building impactful user experiences. I
									thrive on transforming complex challenges
									into elegant, user-centric solutions.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 0.99 }}
								transition={{ ease: "easeInOut", duration: 1 }}
								className="flex justify-center items-center p-10"
							>
								<p>
									....into the bargain’ I’m a great musician
									and I enjoy music even when I’m working,
									which helps me to focus and concentrate on
									my work. Check out my work music playlist on
									Spotify.
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
				<section
					id="secBgWhite"
					className="w-full min-h-screen flex justify-center items-center"
				>
					<div className="w-full flex flex-col justify-center items-center gap-40 sm:gap-0">
						<motion.div
							initial={{ x: -48, opacity: 0 }}
							whileInView={{ x: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[145px] sm:text-[250px] text-center lg:text-start h-full overflow-hidden z-0"
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
							className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[145px] sm:text-[250px] h-full text-right overflow-hidden z-0"
						>
							<FramerMagnetic className={undefined}>
								<h1 className="opacity-20 transition duration-200 ease-in">
									Story
								</h1>
							</FramerMagnetic>
						</motion.div>
					</div>
					<div className="absolute w-[86%] md:w-[70%] lg:w-[60%] space-y-5 md:text-xl lg:text-2xl opacity-70 font-normal text-justify">
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1.5 }}
							className=""
						>
							My story began with a simple interest in graphic and
							web design which I started in early 2019, which soon
							led me to explore software development and computer
							science. The COVID-19 pandemic became a turning
							point, allowing me to dive deeper into the technical
							aspects of my interests. During this time, I
							mastered HTML, CSS, and JavaScript, which fuelled my
							passion for creating fully functional websites. My
							dedication led me to complete Harvard’s CS50X, where
							I gained proficiency in languages like C and Python,
							sparking a deeper interest in solving complex
							problems and developing innovative software
							solutions.
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1.5 }}
							className=""
						>
							Today, my academic journey has equipped me with a
							strong foundation in computer science, complemented
							by hands-on experience through platforms like
							GitHub, Stack Overflow, and LeetCode. I’ve developed
							personal projects and engaged with a vibrant tech
							community, preparing me to thrive in the world of
							technology. I am eager to push the boundaries of
							software engineering and further my understanding in
							a rigorous and innovative environment.
						</motion.p>
					</div>
				</section>
				<section
					id="secBgWhite"
					className="w-full min-h-screen flex justify-center items-center my-36 sm:my-0"
				>
					<div className="w-full flex flex-col justify-center items-center gap-40 sm:gap-0">
						<motion.div
							initial={{ x: -48, opacity: 0 }}
							whileInView={{ x: 0, opacity: 0.99 }}
							transition={{ ease: "easeInOut", duration: 1 }}
							className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[145px] sm:text-[250px] text-center lg:text-end h-full overflow-hidden z-0"
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
							className="w-[96%] md:w-[80%] lg:w-[70%] uppercase font-dahlia text-[145px] sm:text-[250px] h-full text-start overflow-hidden z-0"
						>
							<FramerMagnetic className={undefined}>
								<h1 className="opacity-20 transition duration-200 ease-in">
									Skills
								</h1>
							</FramerMagnetic>
						</motion.div>
					</div>
					<div className="absolute w-[86%] md:w-[70%] lg:w-[60%] sm:space-x-5 md:text-xl lg:text-2xl opacity-70 font-normal text-justify sm:flex">
						<div className="sm:w-[50%]">
							<LinkAnimate
								heading="Javascript"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/javascript.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="HTML / CSS"
								subheading=""
								imgSrc="https://img.icons8.com/ios-filled/240/html-5.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="Python"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/python.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="Next-JS"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/nextjs.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="React-JS"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/react-native.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
						</div>
						<div className="sm:w-[50%]">
							<LinkAnimate
								heading="Tailwind-CSS"
								subheading=""
								imgSrc="https://img.icons8.com/fluency/240/tailwind_css.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="Github"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/github.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="Linux"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/linux.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="Figma"
								subheading=""
								imgSrc="https://img.icons8.com/color/240/figma.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
							<LinkAnimate
								heading="Adobe CC"
								subheading=""
								imgSrc="https://img.icons8.com/fluency/240/adobe-creative-cloud.png"
								classNameHead=""
								classNameSub=""
								AnimDelay={0.2}
								classNameImgSize={"h-20 w-20"}
							/>
						</div>
					</div>
				</section>
			</main>
		</motion.div>
	);
}
