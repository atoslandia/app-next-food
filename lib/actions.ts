"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(input: FormDataEntryValue | null) {
	if (input) {
		const text = input.toString();
		return !text || text.trim() === "";
	}
	return true;
}

export type PrevState = {
	message: string | null;
};

export async function shareMeal(prevState: PrevState, formData: FormData) {
	const meal = {
		title: formData.get("title"),
		image: formData.get("image"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email)
	) {
		return { message: "Input invalid" };
	}

	await saveMeal(meal);
	redirect("/meals");
}
