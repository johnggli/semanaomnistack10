import React,  { useState, useEffect } from 'react';
import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css';
import './Sidebar.css';
import './Main.css';
import './App.css';


// Conceitos principais do react: Componente, Propriedade e Estado
// fragment: tag sem nomenclatura: <></>
// desestruturação: "vou pegar um obj/vetor e vou dividir ele em variaveis"
// imutabilidade: "nunca vou alterar o valor de um dado, e sim criar um novo dado a partir do valor anterior que eu tinha dele"

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev =>
            <DevItem key={dev._id} dev={dev} />
          )}
        </ul>
      </main>

    </div>
  );
}

export default App;
