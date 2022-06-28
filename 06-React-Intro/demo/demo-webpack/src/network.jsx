import React from "react";
import Line from "./lines";

export default function Network({lines}){    // function Network({props}){
    return(
        <div>
            {
                lines.map(l => <Line name={l.name} station={l.station}/>)
            }
        </div>
    )
}