import React, { JSX } from "react";

type LoginFormProps = {
	type: "text" | "password";
	id: string;
	title: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginField = ({ type, id, title }: LoginFormProps): JSX.Element => {
	const [hideInput, setHideInput] = React.useState(type === "password" ? true : false);

	return (
		<>
			<label htmlFor={id}>{title}</label>
			<input type={hideInput ? "password" : "text"} id={id}></input>
			{type === "password" && (
				<button onClick={() => setHideInput(!hideInput)}>{hideInput ? "🙈" : "🙉"}</button>
			)}
		</>
	);
};

export default LoginField;
