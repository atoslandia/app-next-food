import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "../nav-link/nav-link";

const MainHeader = () => {
	return (
		<header className="p-7 w-full px-10 flex flex-col items-center justify-center bg-gradient-to-b from-primary-strong to-transparent sm:flex-row  sm:justify-between">
			<Link href="/" className="flex items-center gap-6">
				<Image src={logo} alt="logo" className="w-12" />
				<h2 className="uppercase -tracking-tighter">NextLevel Food</h2>
			</Link>
			<nav className="flex gap-5 p-2">
				<NavLink href="/meals">Meals</NavLink>
				<NavLink href="/community">Community</NavLink>
			</nav>
		</header>
	);
};

export default MainHeader;
