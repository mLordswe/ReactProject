import React from "react";
import { testUsers } from "./LoginForm";

const LoggedIn = (username: string) => {
	return <h2>Welcome, {username}</h2>;
};
export default LoggedIn;
