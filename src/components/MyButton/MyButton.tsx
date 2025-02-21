import "./MyButton.scss";

type ButtonProps = {
	title: string;
	clickFunction: () => void;
};

const MyButton = ({ title, clickFunction }: ButtonProps) => {
	const handleClick = () => {
		clickFunction();
	};
	console.log("clicked");
	return <button onClick={handleClick}>{title}</button>;
};
export default MyButton;
