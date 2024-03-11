import ImagePicker from "@/components/image-picker/image-picker";
import { shareMeal } from "@/lib/actions";
import React from "react";

const MealSharePage = () => {
	return (
		<>
			<header className="">
				<h1>
					Share your <span className="">favorite meal</span>
				</h1>
				<h2>Or any other meal you feel needs sharing!</h2>
			</header>
			<main className="w-full">
				<form action={shareMeal} className="items-center flex flex-col gap-5">
					<label htmlFor="name">
						<p>Your name</p>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="bg-gray-900 w-96 px-4 py-2 rounded-md"
						/>
					</label>
					<label htmlFor="email">
						<p>Your email</p>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="bg-gray-900 w-96 px-4 py-2 rounded-md"
						/>
					</label>
					<label htmlFor="title">
						<p>Title</p>
						<input
							type="text"
							id="title"
							name="title"
							required
							className="bg-gray-900 w-96 px-4 py-2 rounded-md"
						/>
					</label>
					<label htmlFor="summary">
						<p>Short Summary</p>
						<input
							type="text"
							id="summary"
							name="summary"
							required
							className="bg-gray-900 w-96 px-4 py-2 rounded-md"
						/>
					</label>
					<label htmlFor="instructions">
						<p>Instructions</p>
						<textarea
							id="instructions"
							name="instructions"
							rows={10}
							required
							className="bg-gray-900 w-96 px-4 py-2 rounded-md"></textarea>
					</label>
					<ImagePicker label="Your image" name="image" />
					<button type="submit">Share Meal</button>
				</form>
			</main>
		</>
	);
};

export default MealSharePage;
