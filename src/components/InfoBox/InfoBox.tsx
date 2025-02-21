import { useState } from "react";
import DropDown from "../DropDown/DropDown";

const options = ["a", "b", "c"];
const InfoBox = () => {
	const [info, showInfo] = useState(options[0]);
	return (
		<article>
			<p>{info}</p>
			<DropDown funcDrop={showInfo} optionsString={options} />
		</article>
	);
};

export default InfoBox;
