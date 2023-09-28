import React from "react"

function Filter( { setInput, } ) {

    function handleSelection(event) {
        setInput(event.target.value)
    }

    return (
        <select onChange={handleSelection}>
            <option value="All">All</option>
            <option value="Greased">Greased</option>
            <option value="Ungreased">Ungreased</option>
        </select>
    )
}

export default Filter
