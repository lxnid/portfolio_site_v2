import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarWithProgress = () => {
	const [gliderPosition, setGliderPosition] = useState(0);
	const totalSections = 2; // Change the number of sections

	useEffect(() => {
		const handleScroll = () => {
			const sectionHeight =
				document.documentElement.scrollHeight / totalSections;
			const scrollPosition = window.scrollY;
			const currentSection = Math.floor(scrollPosition / sectionHeight);

			// Calculate the glider's new position
			const newGliderPosition =
				(currentSection / (totalSections - 1)) * 100;
			setGliderPosition(newGliderPosition);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<motion.nav
			initial={{ x: -48, opacity: 0 }}
			whileInView={{ x: 0, opacity: 0.99 }}
			transition={{ ease: "easeInOut" }}
			className="w-20 h-screen fixed left-0 flex flex-col justify-center items-center overflow-hidden"
		>
			<div className="relative w-[300%] rotate-90 h-auto">
				<div className="absolute top-0 left-0 w-[100%] h-[1.2px] bg-gray-600 rounded-full flex justify-between">
					{/* Creating segments based on sections */}
					{Array.from({ length: totalSections }).map((_, index) => (
						<div
							key={index}
							className="w-[100%] h-[1.2px] bg-gray-600"
						></div>
					))}
				</div>
				<div
					className="absolute top-0 left-0 h-[1.5px] bg-gray-300 transition-all duration-300"
					style={{
						width: `${100 / totalSections}%`, // Width of the glider relative to sections
						transform: `translateX(${gliderPosition}%)`,
					}}
				></div>
            </div>
            <div className="flex flex-col relative h-auto gap-24 translate-y-80">
                <Link href={"#project-1"} className="font-bold tracking-widest text-xs -rotate-90 hover:opacity-45 transition-opacity ease-in duration-100">Portfolio</Link>
                <Link href={"#project-2"} className="font-bold tracking-widest text-xs -rotate-90 opacity-45 transition-opacity ease-in duration-100">Melodine</Link>
            </div>
		</motion.nav>
	);
};

export default NavbarWithProgress;
