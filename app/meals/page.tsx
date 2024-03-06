import MealsGrid from "@/components/meals-grid/meals-grid";
import { getMeals } from "@/lib/meals";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function Meals() {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
}

import iconLoading from "@/assets/loading.svg";
function LoadingMeals() {
	return (
		<main className="flex w-full h-52 justify-center items-center">
			<Image className="animate-spin size-10 mr-10" src={iconLoading} alt="icon loading" />
			<h2 className="">Loading meals</h2>
		</main>
	);
}

const MealsPage = async () => {
	return (
		<>
			<header className="flex flex-col items-start gap-5">
				<h1>
					Delicious meals, created <span>by you</span>
				</h1>
				<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
				<Link href="/meals/share" className="bg-secundary-strong px-5 py-2 rounded-lg">
					Share your favorite recipe
				</Link>
			</header>
			<Suspense fallback={<LoadingMeals />}>
				<Meals />
			</Suspense>
		</>
	);
};

export default MealsPage;
