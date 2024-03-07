"use client";

import Image from "next/image";
import { ChangeEvent, FC, useRef, useState } from "react";

type Props = {
	label: string;
	name: string;
};

const ImagePicker: FC<Props> = ({ label, name }) => {
	const [pickedImage, setPickedImage] = useState<string>();

	function imageChange(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.item(0);

		if (!file) {
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result as string);
		};

		fileReader.readAsDataURL(file);
	}

	const imageInputRef = useRef<HTMLInputElement>(null);

	function pickImage() {
		imageInputRef.current?.click();
	}

	return (
		<>
			<div>
				<label htmlFor={name}>{label}</label>
				{pickedImage && (
					<div className="size-96 object-cover relative">
						<Image src={pickedImage} alt="image" fill />
					</div>
				)}
				<div className="hidden">
					<input
						type="file"
						id={name}
						accept="image/png, image/jpeg"
						name={name}
						ref={imageInputRef}
						onChange={imageChange}
					/>
				</div>
				<button type="button" onClick={pickImage} className="rounded-lg px-4 py-2 bg-secundary-strong">
					Pick an image
				</button>
			</div>
		</>
	);
};

export default ImagePicker;
