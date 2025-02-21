import { useState } from "react";
import Button from "../MyButton/MyButton";

type NumberDisplayProps = {
	index: number;
	data?: number[];
};
const current = [1, 2, 3, 4, 5];
const NumberDisplay = ({}: NumberDisplayProps) => {
	const [index, setIndex] = useState(current[0]);

	return (
		<>
			<p>{index}</p>
			<Button
				title="<--"
				clickFunction={() => {
					setIndex(index - 1);
				}}
			/>
			<Button
				title="-->"
				clickFunction={() => {
					setIndex(index + 1);
				}}
			/>
		</>
	);
};

export default NumberDisplay;
