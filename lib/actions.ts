"use server";

import Meal from "@/components/meals-grid/meal";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
	const meal: Meal = {
		title: formData.get("title")?.toString() as string,
		image: formData.get("image")?.toString() as File | undefined,
		slug: "",
		summary: formData.get("summary")?.toString() as string,
		instructions: formData.get("instructions")?.toString() as string,
		creator: formData.get("name")?.toString() as string,
		creator_email: formData.get("email")?.toString() as string,
	};
	await saveMeal(meal);
}
