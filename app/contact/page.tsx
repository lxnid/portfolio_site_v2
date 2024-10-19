import React from "react";
import BubbleText from "./components/BubbleText";
import Link from "next/link";
import FramerMagnetic from "../components/util/framerMagnetic";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
	return (
		<main className="w-full min-h-screen h-screen flex justify-center items-center">
			<div className="w-[80%] h-20 absolute bottom-10 opacity-40 flex items-center justify-center md:text-base text-xs">
				<p>Handcrafted with ❤️ using NextJS~Tailwind~FramerMotion</p>
			</div>
			<div className="w-[80%] h-20 absolute bottom-36 flex justify-center items-center">
				<div className="flex gap-5 md:gap-6 justify-start flex-grow">
					<Link
						href={"https://github.com/lxnid"}
						className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
					>
						<FaGithub className="text-xl md:text-3xl" />
					</Link>
					<Link
						href={"https://www.instagram.com/linid.hr/"}
						className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
					>
						<FaInstagram className="text-xl md:text-3xl" />
					</Link>
					<Link
						href={
							"https://www.linkedin.com/in/hirusha-rubasinghe-66bbba313"
						}
						className="opacity-50 hover:opacity-100 transition duration-200 ease-in"
					>
						<FaLinkedin className="text-xl md:text-3xl" />
					</Link>
				</div>
				<div>
					<p className="text-lgtracking-wider">
						&copy;2024
					</p>
				</div>
			</div>
			<div>
				<FramerMagnetic>
					<Link
						href={"mailto:hirushadr28@gmail.com"}
						className="font-dahlia text-3xl sm:text-5xl md:text-8xl lg:text-[10rem] hover:opacity-45 transition duration-200 ease-in"
					>
						{/* <BubbleText text={"hello@dinil.co.lk"} /> */}
						hello@dinil.co.lk
					</Link>
				</FramerMagnetic>
			</div>
		</main>
	);
}
