import React, { FC } from "react";
import Meal from "./meal";
import MealItem from "./meal-item";

type Props = {
	meals: Meal[];
};

const MealsGrid: FC<Props> = ({ meals }) => {
	return (
		<ul>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
