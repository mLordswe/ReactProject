import React, { useState } from "react";
import LoginField from "../../../components/LoginForm/LoginForm";
import MyButton from "../../../components/MyButton/MyButton";
import LoggedIn from "./LoggedIn";
export type testUsers = [
	{
		username: string;
		password: string;
		email: string;
	}
];

export const LoginForm = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [forgotPassword, SetForgotPassword] = useState(false);
	return (
		<>
			<LoginField id="LoginFormUsername" type="text" title="Username: " />
			<br></br>
			<LoginField id="LoginFormPassword" type="password" title="Password: " />
			<br></br>
			<MyButton title="Log in" handleClick={() => {}} />
			<MyButton title="Forgot Password" />
		</>
	);
};
