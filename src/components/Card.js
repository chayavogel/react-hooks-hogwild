

import React, { useState } from "react"

function Card( {hog} ) {

    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div className="ui card" onClick={handleClick}>
            <div className="image">
                <img src={hog.image} alt={hog.name} />
            </div>

            { clicked ?

            <div className="content">
                <a className="header">Greased: {hog.greased.toString()}</a>
                <div className="meta">
                    <span className="date">Weight: {hog.weight}</span>
                </div>
                <div className="description">
                Specialty: {hog.specialty}
                </div>
            </div>

            : null }

            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {hog.name}
                </a>
            </div>
        </div>
    )
}

export default Card
