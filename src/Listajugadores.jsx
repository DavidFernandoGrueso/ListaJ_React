import React from 'react';

function Lista({ jugadores, seleccionarJugador }) {
  if (jugadores.length === 0) {
    return <p>No se encontraron jugadores.</p>;
  }

  return (
    <ul>
      {jugadores.map((jugador) => (
        <li
          key={jugador.id}
          onClick={() => seleccionarJugador(jugador)} // Seleccionar jugador al hacer clic
          style={{ cursor: 'pointer', margin: '5px 0' }}
        >
          {jugador.nombre} - {jugador.equipo}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
