import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import "@/app/style.css";
import Navbar from "./components/Navbar/Navbar";
import FramerMagnetic from "@/app/components/util/framerMagnetic";
import { TransitionLink } from "./components/util/TransitionLink";

const fontPop = Poppins({
	subsets: ["latin"],
	weight: ["200", "400", "500", "700"],
	style: ["normal", "italic"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "Dinil Rubasinghe",
	description: "Computer science student based in Colombo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-black">
			<body className={`${fontPop.className} `}>
				{/* <div className="w-full flex justify-center items-center h-10 fixed top-10 bg-slate-500">
					STILL UNDER CONSTRUCTION. DONT MIND THE DETAILS
				</div> */}
				<div className="drawer drawer-end overflow-hidden">
					<input
						id="my-drawer-4"
						type="checkbox"
						className="drawer-toggle"
					/>

					<div className="drawer-content">
						<nav className="navbar p-4 sm:px-8 fixed top-0 bg-gradient-to-b z-50 h-40 items-start">
							{/* Left side: Logo */}
							<div className="flex-1">
								<FramerMagnetic className={""}>
									<TransitionLink className={""} href={"/"}>
										<Image
											src={"logo.svg"}
											alt={"logo"}
											width={56}
											height={56}
											className="h-auto"
											priority={true}
										/>
									</TransitionLink>
								</FramerMagnetic>
							</div>

							{/* Right side: Menu button */}
							<div className="flex-none">
								<label
									htmlFor="my-drawer-4"
									className="drawer-button"
								>
									<FramerMagnetic className={""}>
										<Image
											src={"menu.svg"}
											alt={"menu"}
											width={42}
											height={42}
											className="h-auto w-auto"
											priority={true}
										/>
									</FramerMagnetic>
								</label>
							</div>
						</nav>

						{children}
					</div>

					<div className="drawer-side-custom">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<Navbar />
					</div>
				</div>
			</body>
		</html>
	);
}
