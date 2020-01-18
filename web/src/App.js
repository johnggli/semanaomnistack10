import React,  { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Conceitos principais do react: Componente, Propriedade e Estado
// fragment: tag sem nomenclatura: <></>
// desestruturação: "vou pegar um obj/vetor e vou dividir ele em variaveis"
// imutabilidade: "nunca vou alterar o valor de um dado, e sim criar um novo dado a partir do valor anterior que eu tinha dele"

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {  // serve pra disparar uma função toda vez que uma informação for alterada
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;  // pega a latitude e longitude de dentro do objeto, no atributo coords

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude"
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>

          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/43749971?s=460&v=4" alt="John Emerson"/>

              <div className="user-info">
                <strong>John Emerson</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p>Student of Systems Analysis and Development at IFPI - Federal Institute of Piauí.</p>
            <a href="https://github.com/JohnEmerson1406">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>

    </div>
  );
}

export default App;
