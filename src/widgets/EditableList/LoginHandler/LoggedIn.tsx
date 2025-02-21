import React from "react";
import { testUsers } from "./LoginHandler";

const LoggedIn = (username: string) => {
	return <h2>Welcome, {username}</h2>;
};
export default LoggedIn;
