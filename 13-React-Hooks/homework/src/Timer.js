import React from 'react';

import "./Timer.css";

const Timer = () => {

  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState("contador");

  const myRef = React.useRef(null);

  function agregaSegundos() {
    let ref = myRef.current.value;         // viene a remplazar e.target.value
    setSegundos(ref);
  }

  function toggle(){
    setActivo(!activo);
  }

  function reset(){
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo(){
    tipo === "Contador" ? setTipo("Cuenta Regresiva") : setTipo("Contador");
  }
  // function cambioTipo(){
  //   if (tipo === "Contador") {
  //     setTipo("Cuenta Regresiva");
  //   } else {
  //     setTipo("Contador");
  //   }
  // }

  React.useEffect(()=> {
    let intervalo = null;
    if (activo && tipo === "Contador") {
      intervalo = setInterval(()=> {
        setSegundos(prevState => prevState + 1);
      }, 1000);
    }
    if (activo && tipo === "Cuenta Regresiva") {
      intervalo = setInterval(()=> {
        setSegundos(prevState => prevState - 1)
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === "Contador") {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === "Cuenta Regresiva") {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  return (
    <div className="app">
      Componente Timer
      <div className="time">
        {segundos}
      </div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {activo ? "Pausa" : "Inicio"} 
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === "Cuenta Regresiva" && <input type="number" ref={myRef} onChange={agregaSegundos}placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;

/*
if (condicion){
  do something
} else{
  do something else
}

si es true    hace esto   sino   hace esto otro
condicion ? do something   :   do something else
*/