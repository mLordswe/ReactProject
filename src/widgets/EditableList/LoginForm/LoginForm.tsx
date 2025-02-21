import React, { useState } from "react";
import LoginForm from "../../../components/LoginForm/LoginForm";
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
			<LoginForm id="LoginFormUsername" type="text" title="Username: " />
			<br></br>
			<LoginForm id="LoginFormPassword" type="password" title="Password: " />
			<br></br>
			<MyButton title="Log in" handleClick={() => {}} />
			<MyButton title="Forgot Password" />
		</>
	);
};
