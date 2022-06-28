import React from "react";
import Trains from "./trains"

function DepartureBoard({platformNro}){
    let trains = ["Constitucion", "Hospitales", "Retiro", "Alem"];
    return(
        <div>
            <h1>Platform {platformNro}</h1>
            <Trains trains={trains}/>
        </div>
    )
}

export default DepartureBoard;