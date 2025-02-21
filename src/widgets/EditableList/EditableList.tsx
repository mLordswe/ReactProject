import { useState } from "react";
import React from "react";

export const EditableList = () => {
	const [groceries, setGroceries] = useState<string[]>([]);
	const [inputGrocery, SetInputGrocery] = useState("");
	const editGrocery = (grocery: string) => {
		setGroceries(groceries.map((g) => (g === grocery ? inputGrocery : g)));
	};
	const deleteGrocery = (grocery: string) => {
		setGroceries(groceries.filter((g) => g !== grocery));
	};
	const addGrocery = () => {
		setGroceries([...groceries, inputGrocery]);
	};
	return (
		<>
			<h1>Grocery List</h1>
			<input
				type="text"
				placeholder="Grocery..."
				value={inputGrocery}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					SetInputGrocery(e.target.value);
				}}
			/>
			<button onClick={() => addGrocery()}>Add groceries</button>
			<ul>
				{groceries.map((grocery) => (
					<li key={grocery}>
						{grocery}
						<button onClick={() => deleteGrocery(grocery)}>Remove</button>
						<button onClick={() => editGrocery(grocery)}>Edit</button>
					</li>
				))}
			</ul>
		</>
	);
};
