import MealsGrid from "@/components/meals-grid/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

const MealsPage = async () => {
	const meals = await getMeals();

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
			<main>
				<MealsGrid meals={meals} />
			</main>
		</>
	);
};

export default MealsPage;
