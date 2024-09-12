"use client";
import React from "react";
import LinkAnimate from "../util/LinkAnimate";

export const HoverImageLinks = () => {
	return (
		<div className="mx-[10%] max-w-[90%] h-fit border-t-2 border-neutral-700">
			<LinkAnimate
				heading="Home"
				subheading="01/"
				imgSrc="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="/portfolio_site_v2/"
				AnimDelay={0.2}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={"h-24 w-32 md:h-48 md:w-64"}
			/>
			<LinkAnimate
				heading="About"
				subheading="02/"
				imgSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="/portfolio_site_v2/about"
				AnimDelay={0.4}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={"h-24 w-32 md:h-48 md:w-64"}
			/>
			<LinkAnimate
				heading="Work"
				subheading="03/"
				imgSrc="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="/portfolio_site_v2/work"
				AnimDelay={0.6}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={"h-24 w-32 md:h-48 md:w-64"}
			/>
			<LinkAnimate
				heading="Contact"
				subheading="04/"
				imgSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				href="/portfolio_site_v2/contact"
				AnimDelay={0.8}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={"h-24 w-32 md:h-48 md:w-64"}
			/>
		</div>
	);
};
