"use client";

import { FC, useRef } from "react";

type Props = {
	label: string;
	name: string;
};

const ImagePicker: FC<Props> = ({ label, name }) => {
	const imageInputRef = useRef<HTMLInputElement>(null);

	function pickImage() {
		imageInputRef.current?.click();
	}

	return (
		<>
			<div>
				<label htmlFor={name}>{label}</label>
				<div className="hidden">
					<input type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInputRef} />
				</div>
				<button type="button" onClick={pickImage} className="rounded-lg px-4 py-2 bg-secundary-strong">
					Pick an image
				</button>
			</div>
		</>
	);
};

export default ImagePicker;
