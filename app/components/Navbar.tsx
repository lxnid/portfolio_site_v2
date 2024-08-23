"use client";
import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HoverImageLinks } from "./ui/HoverImageLinks";

const Navbar = () => {
	return (
		<div className="menu bg-none text-base-content h-auto min-h-[90vh] mt-24 w-full p-4 backdrop-blur-3xl">
			<HoverImageLinks />
			<div className="mx-[1%] sm:mx-[10%] mt-[3%] bottom-40 md:bottom-auto absolute md:relative md:h-16 flex justify-center items-center">
				<motion.div
					initial={{ y: 48, opacity: 0 }}
					whileInView={{ y: 0, opacity: 0.99 }}
					transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
					className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0"
				>
					<div className="md:flex-grow flex gap-8 items-center uppercase font-dahlia text-sm md:text-xl tracking-widest">
						<h1>archived</h1>
						<span className="w-1 h-1 bg-white rounded-full"></span>
						<Link
							href={""}
							className="opacity-50 hover:opacity-100 transition duration-300 ease-in"
						>
							2020 portfolio
						</Link>
						<span className="w-1 h-1 bg-white rounded-full"></span>
						<Link
							href={""}
							className="opacity-50 hover:opacity-100 transition duration-300 ease-in"
						>
							2023 portfolio
						</Link>
					</div>
					<div className="flex gap-8 justify-center">
						<Link
							href={""}
							className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaGithub className="text-2xl" />
						</Link>
						<Link
							href={""}
							className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaInstagram className="text-2xl" />
						</Link>
						<Link
							href={""}
							className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaLinkedin className="text-2xl" />
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Navbar;
