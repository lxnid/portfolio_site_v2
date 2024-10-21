import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const WorkEntry = ({ title, description, coverImage }: any) => {
    const handleClick = () => {
        window.location.href = 'https://lxnid.github.io/portfolio_site_v2/';
      };
	return (
		<motion.div
			initial={{ opacity: 0, y: 200 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.01 }}
			transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-600 rounded-lg shadow-lg p-4 w-auto h-full flex flex-col justify-end items-end cursor-pointer"
            onClick={handleClick}
		>
			<Image
				src={coverImage}
				alt={title}
				layout="fill"
				objectFit="cover"
				className="object-cover object-center"
            />
            <div className="bg-black opacity-60 w-full h-full absolute top-0 left-0"></div>
			<div className="flex flex-col justify-end items-end relative bottom-10 right-10 gap-5 w-[30%] text-right">
				<h2 className="text-6xl font-dahlia uppercase">{title}</h2>
				<p className="text-sm opacity-55">{description}</p>
			</div>
		</motion.div>
	);
};

export default WorkEntry;
