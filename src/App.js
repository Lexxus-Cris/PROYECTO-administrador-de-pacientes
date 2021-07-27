import React from 'react'

import Formulario from './components/Formulario.jsx';

function App() {
  return (
    <div className="container">
      <h1>Administrador de pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column">
          2
        </div>
      </div>
    </div>
  );
}

export default App;
