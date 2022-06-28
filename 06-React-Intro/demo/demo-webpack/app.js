import React from 'react';
import ReactDOM from 'react-dom';
import Musicos from './src/Musicos.jsx';
import Saludo from './src/Saludo.jsx';
import SaludoFuncional from './src/SaludoFuncional.jsx';

const musicos = [
  {
    name: 'John',
    lastname: 'Lennon',
    band: 'The Beatles'
  },
  {
    name: 'David',
    lastname: 'Gilmour',
    band: 'Pink Floyd'
  },
  {
    name: 'Tom',
    lastname: 'Yorke',
    band: 'Radiohead'
  }
];

function App() {
  return (
    <div>
      <Saludo nombre='Soy Henry' lang='en'/>
      <SaludoFuncional nombre='Soy Henry' lang='es'/>
      <Musicos musicos={musicos} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));


// import React from "react";
// import ReactDOM from "react-dom";
// import Network from "./src/network";
// import Prediction from "./src/prediction";

// const lines = [
//   {
//     name: "Linea A",
//     station: "Retiro",
//     time: [0, 1, 2]
//   },
//   {
//     name: "Linea H",
//     station: "Hospitales",
//     time: [3, 4, 5]
//   },
//   {
//     name: "Linea B",
//     station: "Alem",
//     time: [6, 7, 8]
//   },
//   {
//     name: "Linea C",
//     station: "Constitucion",
//     time: [9, 10 , 11]
//   }
// ]

// function App(){
//   return (
//     <div>
//       <Network lines={lines}/>
//       <Prediction stationName="La estacion de Garner"/>
//     </div>  
//   )
// }

// ReactDOM.render(<App/>, document.getElementById("app"));
