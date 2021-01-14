import React, {useState} from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";



function Hog({name, specialty, greased, weight}){

    
    const [clickedState, setClickedState] = useState(false)

    function changeState (){
        setClickedState(!clickedState)
        
    }


    const pigImagesObject = 
    {
        "Augustus Gloop" : augustus_gloop,
        "Babe" : babe,
        "Bailey" : bailey,
        "Cherub" : cherub, 
        "Galaxy Note" : galaxy_note,
        "Leggo My Eggo" : leggo_my_eggo,
        "Peppa" :  peppa, 
        "Piggy smalls" : piggy_smalls,
        "Piglet": piglet,
        "Porkchop" : porkchop,
        "Trouble" : trouble,
        "Truffle Shuffle" : truffle_shuffle 
    }

    return(

        <div className = "ui eight wide column" onClick={changeState} key={name}>
            <img src={pigImagesObject[name]} width= '300px' alt={name}></img>
            <p>Name: {name} </p>
            {clickedState ? 
            <ul>
                <li>
                    Specialty: {specialty}
                </li>
                <li>
                    Greased: {greased ? "Yup": "Nope"}
                </li>
                <li>
                    Weight: {weight}
                </li>
            </ul>
            :null}
        </div>

    )
}

export default Hog



