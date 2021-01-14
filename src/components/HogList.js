import React from "react";
import Hog from "./Hog"



function HogList ({setHogListState, hogListState}){

    const hogsMapped = hogListState.map((hog)=>{
        return(
        <Hog 
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        greased= {hog.greased}
        weight={hog.weight}
        className="ui eight wide column"
        />)
    })

    return (
        <div className= "ui grid container">
            {hogsMapped}
        </div>
    )
}

export default HogList