"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";

type Props = {
	href: string;
	children: ReactNode;
};

const NavLink: FC<Props> = ({ href, children }) => {
	const path = usePathname();

	let varStyle = "px-5 py-1 rounded-lg";

	return (
		<Link href={href} className={path === href ? varStyle + " bg-primary" : varStyle}>
			{children}
		</Link>
	);
};

export default NavLink;
