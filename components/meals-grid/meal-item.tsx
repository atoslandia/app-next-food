import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Meal from "./meal";

const MealItem: FC<Meal> = ({ title, slug, image, summary, creator }) => {
	let imagePath = "" + image;
	return (
		<article className="flex flex-col items-center justify-between">
			<div className="size-96 object-cover relative">
				<Image src={imagePath} alt={title} fill />
			</div>
			<div className="flex flex-col items-start">
				<h2>{title}</h2>
				<p>by {creator}</p>
				<p>{summary}</p>
				<Link href={"/meals/" + slug} className="bg-secundary-strong px-5 py-2 rounded-lg self-center">
					View details
				</Link>
			</div>
		</article>
	);
};

export default MealItem;
