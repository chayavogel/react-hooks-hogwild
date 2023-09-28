

import React, { useState } from "react"

function Card( {hog} ) {

    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div onClick={handleClick} className="ui eight wide column">
            <h1>{hog.name}</h1>
            <img src={hog.image} alt={hog.name} />
            { clicked ?
            <ul>
            <li>Weight: {hog.weight}</li>
            <li>Specialty: {hog.specialty}</li>
            <li>Greased: {hog.greased.toString()}</li>
            <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
            </ul>
            : null }
        </div>
    )
}

export default Card
