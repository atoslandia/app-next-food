import MealsGrid from "@/components/meals-grid/meals-grid";
import Link from "next/link";

const MealsPage = () => {
	return (
		<>
			<header>
				<h1>
					Delicious meals, created <span>by you</span>
				</h1>
				<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
				<p>
					<Link href="/meals/share">Share your favorite recipe</Link>
				</p>
			</header>
			<main>
				<MealsGrid meals={[]} />
			</main>
		</>
	);
};

export default MealsPage;
