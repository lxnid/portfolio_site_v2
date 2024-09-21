'use client'
import React, { useEffect } from "react";

interface CustomText {
	text: string;
}

const BubbleText: React.FC<CustomText> = ({ text }) => {
	useEffect(() => {
		const spans = document.querySelectorAll(
			".hover-text span"
		) as NodeListOf<HTMLSpanElement>;

		spans.forEach((span) => {
			span.addEventListener("mouseenter", function (this: typeof span) {
				this.style.fontWeight = "900";
				this.style.color = "rgb(255, 255, 255)";

				const leftNeighbor = this
					.previousElementSibling as HTMLSpanElement;
				const rightNeighbor = this
					.nextElementSibling as HTMLSpanElement;

				if (leftNeighbor) {
					leftNeighbor.style.fontWeight = "500";
					leftNeighbor.style.color = "rgb(230, 230, 230)";
				}
				if (rightNeighbor) {
					rightNeighbor.style.fontWeight = "500";
					rightNeighbor.style.color = "rgb(215, 224, 230)";
				}
			});

			span.addEventListener("mouseleave", function (this: typeof span) {
				this.style.fontWeight = "300";
				this.style.color = "rgb(209, 213, 219)";

				const leftNeighbor = this
					.previousElementSibling as HTMLSpanElement;
				const rightNeighbor = this
					.nextElementSibling as HTMLSpanElement;

				if (leftNeighbor) {
					leftNeighbor.style.fontWeight = "300";
					leftNeighbor.style.color = "rgb(209, 213, 219)";
				}

				if (rightNeighbor) {
					rightNeighbor.style.fontWeight = "300";
					rightNeighbor.style.color = "rgb(209, 213, 219)";
				}
			});
		});
	}, []);

	return (
		<h2 className="hover-text text-center text-3xl sm:text-5xl md:text-8xl lg:text-[10rem] font-light text-gray-300 cursor-pointer">
			<Text>{text}</Text>
		</h2>
	);
};

const Text = ({ children }: { children: string }) => {
	return (
		<>
			{children.split("").map((child, idx) => (
				<span
					style={{
						transition: "0.35s font-weight, 0.35s color",
					}}
					key={idx}
				>
					{child}
				</span>
			))}
		</>
	);
};

export default BubbleText;
