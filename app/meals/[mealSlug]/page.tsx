import Meal from "@/components/meals-grid/meal";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import React from "react";

const MealDetailsPage = ({ params }: { params: { mealSlug: string } }) => {
	const meal = getMeal(params.mealSlug);

	meal.instructions = meal.instructions.replace(/\n/g, "<br />");

	return (
		<div className="flex w-full flex-col items-center gap-2">
			<header className="flex w-full flex-col items-center gap-1">
				<div className="size-96 object-cover relative">
					<Image fill src={meal.image} alt={meal.title} />
				</div>
				<h2>{meal.title}</h2>
				<p>
					by <a href={"mailto:" + meal.creator_email}>{meal.creator}</a>
				</p>
				<p>{meal.summary}</p>
			</header>
			<main className="p-4 rounded-3xl w-1/3 bg-gray-900">
				<p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
			</main>
		</div>
	);
};

export default MealDetailsPage;
