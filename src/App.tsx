import "./App.scss";
import Button from "./components/MyButton/MyButton";
import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";

import List from "./components/List/List";
import NumberDisplay from "./components/NumberDisplay/NumberDisplay";
import { EditableList } from "./widgets/EditableList/EditableList";

import { LoginHandler } from "./widgets/EditableList/LoginHandler/LoginHandler";

function App() {
	const showCaseList = ["Apple", "Elephant", "Mac&Cheese", "Airplane"];

	return (
		<>
			<Header title="Header" />

			<List items={showCaseList} />
			<InfoBox />

			<NumberDisplay index={1} />
			<EditableList />
			<LoginHandler />
		</>
	);
}

export default App;
