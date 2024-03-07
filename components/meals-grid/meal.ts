export default interface Meal {
	title: string;
	slug: string;
	image: File | undefined;
	summary: string;
	creator: string;
	creator_email: string;
	instructions: string;
}
