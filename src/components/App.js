import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Cards from "./Cards";
import Sorter from "./Sorter";

import hogs from "../porkers_data";

function App() {

	const [pigs, setHogs] = useState(hogs)
	const [filter, setFilter] = useState("All")
	const [sorter, setSorter] = useState("Random")

	let filteredHogs = pigs

	filteredHogs = hogs.filter((hog) => {
		if (filter === "All") {
			return hog
		} else if (filter === "Greased") {
			return hog.greased === true
		} else {
			return hog.greased === false
		}
	}).sort((hogA, hogB) => {
		if (sorter === "name") {
			return hogA.name.localeCompare(hogB.name)
		} else if (sorter === "weight") {
			return hogA.weight - hogB.weight
		}
	})

	return (
		<div className="App">
			<Nav />
			<Filter setFilter={setFilter}/>
			<Sorter setSorter={setSorter}/>
			<Cards filteredHogs={filteredHogs} setHogs={setHogs}/>
		</div>
	);
}

export default App;
