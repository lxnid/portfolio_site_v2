"use client";
import { motion } from "framer-motion";
import React from "react";
import NavbarWithProgress from "./components/NavProgress";
import WorkEntry from "./components/WorkEntry";

export default function Home() {
	return (
		<main className="w-full snap-y snap-mandatory overflow-y-scroll h-full">
			<NavbarWithProgress />
			<section
				id="project-1"
				className="min-h-[78vh] h-[78vh] w-auto relative ml-28 mr-8 top-32 snap-start"
			>
				<WorkEntry
					title="Portfolio"
					description="Personal portfolio Website deveolped using NextJS and FramerMotion showcasing my skills and projects"
					coverImage="project-img-1.png"
				/>
			</section>
			<section id="project-2" className="h-screen snap-start"></section>
		</main>
	);
}
