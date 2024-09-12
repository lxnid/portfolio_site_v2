'use client'
import { motion } from "framer-motion";
import React from "react";
import NavbarWithProgress from "./components/NavProgress";

export default function Home() {
	return (
		<main className="w-full snap-y snap-mandatory overflow-y-scroll h-full">
            <NavbarWithProgress />
            <section id="project-1" className="h-screen snap-start"></section>
            <section id="project-2" className="h-screen snap-start"></section>
		</main>
	);
}
