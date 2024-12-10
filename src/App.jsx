import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lista from './components/Lista';
import Filtro from './components/Filtro';
import Detalle from './components/Detalle';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setData(response.data.entries))
      .catch(error => console.error('Error al cargar datos:', error));
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        item.API.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  return (
    <div>
      <Filtro search={search} setSearch={setSearch} />
      <Lista data={filteredData} setSelectedItem={setSelectedItem} />
      {selectedItem && <Detalle item={selectedItem} />}
    </div>
  );
};

export default App;
