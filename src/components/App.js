import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Cards from "./Cards";

import hogs from "../porkers_data";

function App() {

	const [pigs, setHogs] = useState(hogs)
	const [input, setInput] = useState("All")

	let filteredHogs = pigs


	filteredHogs = hogs.filter((hog) => {
		if (input === "All") {
			return hog
		} else if (input === "Greased") {
			return hog.greased === true
		} else {
			return hog.greased === false
		}
	})

	return (
		<div className="App">
			<Nav />
			<Filter setInput={setInput}/>
			<Cards filteredHogs={filteredHogs} setHogs={setHogs}/>
		</div>
	);
}

export default App;
