import React from "react"
import Card from "./Card"

function Cards( { filteredHogs } ) {

    const hogCard = filteredHogs.map((hog) => <Card hog={hog} key={hog.name}/>)

    return (
        <div className="ui grid container">
            {hogCard}
        </div>
    )

}

export default Cards
