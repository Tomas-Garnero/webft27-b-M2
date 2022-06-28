import React from "react";

function Trains({trains}){
    return(
        trains.map(t => <p>{t}</p>)
    )
}

export default Trains;