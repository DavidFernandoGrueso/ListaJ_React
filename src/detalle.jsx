import React from 'react';

const Detalle = ({ item }) => {
  return (
    <div>
      <h2>{item.API}</h2>
      <p>{item.Description}</p>
      <a href={item.Link} target="_blank" rel="noopener noreferrer">Visitar</a>
    </div>
  );
};

export default Detalle;
