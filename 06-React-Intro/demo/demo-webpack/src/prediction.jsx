import React from "react";
import DepartureBoard from "./departure-board";

// Componentes con clases

// class Prediction extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.stationName}</h1>
//             </div>
//         )
//     }
// }

// export default Prediction;

// Componentes con funciones

export default function Prediction({stationName}){
    return(
        <div>
            <h1>{stationName}</h1>
            <DepartureBoard platformNro="1"/>
            <DepartureBoard platformNro="2"/>
        </div>
    )
}