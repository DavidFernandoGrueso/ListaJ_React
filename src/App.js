import Detalle from './detalle';
import Filtro from './Filtro';
import Lista from './Listajugadores';
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  // Lista estática de jugadores
  const jugadores = [
    { id: 1, nombre: 'Lionel Messi', equipo: 'PSG', edad: 37 },
    { id: 2, nombre: 'Cristiano Ronaldo', equipo: 'Al Nassr', edad: 39 },
    { id: 3, nombre: 'Neymar Jr', equipo: 'Al Hilal', edad: 32 },
    { id: 4, nombre: 'Kylian Mbappé', equipo: 'PSG', edad: 25 },
    { id: 5, nombre: 'Robert Lewandowski', equipo: 'Barcelona', edad: 35 }
  ];

  const [search, setSearch] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Filtrar jugadores por nombre
  const filteredPlayers = jugadores.filter((jugador) =>
    jugador.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lista de Jugadores</h1>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar jugador"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Mostrar lista filtrada */}
      <Lista
        jugadores={filteredPlayers}
        seleccionarJugador={setSelectedPlayer}
      />

      {/* Mostrar detalles del jugador seleccionado */}
      {selectedPlayer && (
        <div>
          <h2>Detalles del Jugador:</h2>
          <p><strong>Nombre:</strong> {selectedPlayer.nombre}</p>
          <p><strong>Equipo:</strong> {selectedPlayer.equipo}</p>
          <p><strong>Edad:</strong> {selectedPlayer.edad}</p>
        </div>
      )}
    </div>
  );
}

export default App;