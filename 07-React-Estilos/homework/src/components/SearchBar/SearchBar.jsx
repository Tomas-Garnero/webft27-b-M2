import React from 'react';

export default function SearchBar(props) {
  return(
    <div>
      <input type="text" placeholder="Ciudad..."/>
      <button onClick={()=> props.onSearch("Buscando ciudad")}>Agregar</button>
    </div>
  )
};