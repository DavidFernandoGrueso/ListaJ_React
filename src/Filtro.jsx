import React from 'react';

const Filtro = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filtro;
