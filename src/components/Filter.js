import React from "react"

function Filter( { setFilter } ) {

    function handleFilter(event) {
        setFilter(event.target.value)
    }

    return (
        <>
        <label>Filter Hogs: </label>
        <select id="greased" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Greased">Greased</option>
            <option value="Ungreased">Ungreased</option>
        </select>
        </>
    )
}

export default Filter
