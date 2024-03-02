import sql from "better-sqlite3";
import Meal from "@/components/meals-grid/meal";

const db = sql("meals.db");

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare<Meal[]>("SELECT * FROM meals").all() as Meal[];
}
