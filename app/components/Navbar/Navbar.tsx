"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HoverImageLinks } from "./HoverImageLinks";

const Navbar = () => {
	return (
		<div className="absolute menu bg-none text-base-content h-screen overflow-hidden min-h-[90vh] pt-36 w-full p-4 backdrop-blur-3xl">
			<HoverImageLinks />
			<div className="mx-[1%] sm:mx-[10%] mt-[2%] bottom-10 absolute w-[80%] flex justify-center items-center">
				<motion.div
					initial={{ y: 48, opacity: 0 }}
					whileInView={{ y: 0, opacity: 0.99 }}
					transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
					viewport={{ amount: 0 }}
					className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 h-auto"
				>
					<div className="flex flex-grow gap-8 items-center uppercase font-dahlia text-sm md:text-xl tracking-widest">
						<h1>archived</h1>
						<span className="w-1 h-1 bg-white rounded-full"></span>
						<Link
							href={"https://lxnid.github.io/portfolio/"}
							className="opacity-50 hover:opacity-100 transition duration-300 ease-in"
						>
							2020 portfolio
						</Link>
						<span className="w-1 h-1 bg-white rounded-full"></span>
						<Link
							href={"https://lxnid.github.io/portfolio_site/"}
							className="opacity-50 hover:opacity-100 transition duration-300 ease-in"
						>
							2023 portfolio
						</Link>
					</div>
					<div className="flex gap-8 items-center">
						<Link
							href={"https://github.com/lxnid"}
							className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaGithub className="text-2xl" />
						</Link>
						<Link
							href={"https://www.instagram.com/linid.hr/"}
							className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaInstagram className="text-2xl" />
						</Link>
						<Link
							href={
								"https://www.linkedin.com/in/hirusha-rubasinghe-66bbba313"
							}
							className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
						>
							<FaLinkedin className="text-2xl" />
						</Link>
						<Link
							href={"CV.pdf"}
							download={"CV.pdf"}
							className="btn bg-white hover:bg-opacity-80 text-black hover:text-gray-300 transition duration-500 ease-in-out py-2 px-4 rounded-full"
						>
							School Resume
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Navbar;
