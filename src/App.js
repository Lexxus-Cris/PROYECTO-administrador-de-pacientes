import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import Formulario from './components/Formulario.jsx';
import DateItem from './components/DateItem.jsx';

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [saveCitas, setSaveCitas] = useState(citasIniciales ? citasIniciales : []);

  // useEffect para realizar ciertas operaciones cuando el state cambia

  // Con esta funcion haremos que cada vez que haya nuevas citas o el state de citas cambie, estas se almacenen en el local storage
  useEffect(() => {
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(saveCitas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [saveCitas, citasIniciales]) 

  // Funcion que guarde las citas en el state
  const crearCita = cita => {
    setSaveCitas([
      ...saveCitas,
      cita
    ])
  }

  // Funcion que elimina una cita por su id
  const eliminarCita = id => {
      const citas = saveCitas.filter(cita => cita.id !== id);
      setSaveCitas(citas);
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
            {saveCitas.length === 0 
              ? <h2>Agrega una nueva cita</h2>
              : <h2>Lista de citas</h2>
            }
            {saveCitas.map(cita => (
              <DateItem
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// Documentacion de los componentes
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;
