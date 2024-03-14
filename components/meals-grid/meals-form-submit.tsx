"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
	const { pending } = useFormStatus();
	return (
		<button type="submit" disabled={pending}>
			{pending ? "Submitting..." : "Share meal"}
		</button>
	);
};

export default MealsFormSubmit;
