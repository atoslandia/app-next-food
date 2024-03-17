import React, { FC } from "react";
import Meal from "./meal";
import MealItem from "./meal-item";

type Props = {
	meals: Meal[];
};

const MealsGrid: FC<Props> = ({ meals }) => {
	return (
		<ul className="grid grid-cols-3 gap-5 p-5">
			{meals.map((meal) => (
				<li key={meal.title + meal.image.name}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
