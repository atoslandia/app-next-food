import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
};

const MealItem: FC<Props> = ({ title, slug, image, summary, creator }) => {
	return (
		<article>
			<header>
				<Image src={image} alt={title} fill></Image>
				<div>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</header>
			<div>
				<p>{summary}</p>
				<Link href={"/meals/" + slug}>View details</Link>
			</div>
		</article>
	);
};

export default MealItem;
