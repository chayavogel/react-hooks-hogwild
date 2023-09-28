import React from "react"
import Card from "./Card"

function Cards( { filteredHogs } ) {

    const hogCard = filteredHogs.map((hog) => <Card hog={hog} key={hog.id}/>)

    return (
        <div className="ui grid container">
            {hogCard}
        </div>
    )

}

export default Cards
