import { useState } from "react";

type DropDownProps = {
	optionsString: string[];
	funcDrop: (s: string) => void;
};
const DropDown = ({ optionsString, funcDrop }: DropDownProps) => {
	return (
		<select
			onChange={(e) => {
				funcDrop(e.target.value);
			}}
		>
			{optionsString.map((option) => {
				return (
					<option value={option} key={option}>
						{option}
					</option>
				);
			})}
		</select>
	);
};

export default DropDown;
