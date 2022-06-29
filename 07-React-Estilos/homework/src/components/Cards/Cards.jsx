import React from 'react';
import Card from "./Card";

export default function Cards(props) {
  // props = {cities}
  // cities = [{}, {}, {}]
  if (!props.cities){
    return <h1>No hay ciudades disponibles</h1>;
  }

  return(
    <div>
      {
        props.cities && props.cities.map(city => (
          <Card 
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
            key={city.id}
          />
        ))
      }
    </div>
  ) 
};