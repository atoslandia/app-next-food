import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import fs from "node:fs";

import Meal from "@/components/meals-grid/meal";

const db = sql("meals.db");

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare<Meal[]>("SELECT * FROM meals").all() as Meal[];
}

export function getMeal(slug: string) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}

export async function saveMeal(meal: Meal) {
	const slug = slugify(meal.title, { lower: true });

	const instructions = xss(meal.instructions);
	meal.instructions = instructions;

	const extension = meal.image?.name.split(".").pop();
	const fileName = slug + "." + extension;

	const stream = fs.createWriteStream("public/images/" + fileName);
	const bufferedImage = await meal.image?.arrayBuffer();
	if (bufferedImage) {
		stream.write(Buffer.from(bufferedImage), (error) => {
			if (error) {
				throw new Error("Saving image failed");
			}
		});
	}

	db.prepare(
		`
		INSERT INTO meals
			(title, summary, instructions, creator, creator_email, image, slug)
		VALUES (
			@title,
			@summary,
			@instructions,
			@creator,
			@creator_email,
			@image,
			@slug
		)
		`
	).run(meal, slug);
}
