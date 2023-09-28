import React from "react";

function Sorter( { setSorter } ) {

    function handleSorter(event) {
        setSorter(event.target.value)
    }

    return (
        <>
        <label>Sort Hogs: </label>
        <select id="sorter" onChange={handleSorter}>
            <option value="random">Random</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
        </>
    )
}

export default Sorter;
