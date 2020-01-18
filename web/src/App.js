import React, { useState } from 'react';

// Conceitos principais do react: Componente, Propriedade e Estado
// fragment: tag sem nomenclatura: <></>
// desestruturação: "vou pegar um obj/vetor e vou dividir ele em variaveis"
// imutabilidade: "nunca vou alterar o valor de um dado, e sim criar um novo dado a partir do valor anterior que eu tinha dele"

function App() {
  const [counter, setCounter] = useState(0);  // desestruturação

  function incrementCounter() {
    setCounter(counter + 1);  // imutabilidade
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
