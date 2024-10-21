"use client";
import React from "react";
import LinkAnimate from "../util/LinkAnimate";

export const HoverImageLinks = () => {
	return (
		<div className="mx-[10%] max-w-[90%] h-fit border-t-2 border-neutral-700">
			<LinkAnimate
				heading="Home"
				subheading="01/"
				imgSrc=""
				href="/portfolio_site_v2/"
				AnimDelay={0.2}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={""}
			/>
			<LinkAnimate
				heading="About"
				subheading="02/"
				imgSrc=""
				href="/portfolio_site_v2/about"
				AnimDelay={0.4}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={""}
			/>
			<LinkAnimate
				heading="Work"
				subheading="03/"
				imgSrc=""
				href="/portfolio_site_v2/work"
				AnimDelay={0.6}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={""}
			/>
			<LinkAnimate
				heading="Contact"
				subheading="04/"
				imgSrc=""
				href="/portfolio_site_v2/contact"
				AnimDelay={0.8}
				classNameSub={
					"text-base group-hover:text-neutral-200 text-neutral-500"
				}
				classNameHead={
					"text-4xl md:text-8xl group-hover:text-neutral-200 text-neutral-500"
				}
				classNameImgSize={""}
			/>
		</div>
	);
};
