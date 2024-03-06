"use client";

const Error = ({ error }: { error: Error & { digest?: string } }) => {
	return (
		<>
			<h2>Error catched</h2>
			<div>{error.message}</div>
		</>
	);
};

export default Error;
