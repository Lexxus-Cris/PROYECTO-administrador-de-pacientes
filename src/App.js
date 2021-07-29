import React, { Fragment, useState } from 'react'

import Formulario from './components/Formulario.jsx';
import DateItem from './components/DateItem.jsx';

function App() {

  // Arreglo de citas
  const [saveCitas, setSaveCitas] = useState([]);

  // Funcio que guarde las citas en el state
  const crearCita = cita => {
    setSaveCitas([
      ...saveCitas,
      cita
    ])
  }
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Lista de citas</h2>
            {saveCitas.map(cita => (
              <DateItem
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
