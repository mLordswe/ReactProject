import React, { JSX } from "react";

type LoginFormProps = {
	type: string;
	id: string;
	title: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginField = ({ type, id, title }: LoginFormProps): JSX.Element => {
	return (
		<>
			<label htmlFor={id}>{title}</label>
			<input type={type} id={id}></input>
		</>
	);
};

export default LoginField;
