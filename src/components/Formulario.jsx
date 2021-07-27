import React, { Fragment } from 'react'

const Formulario = () => {
   return (
      <Fragment>
         <h2>Crear cita</h2>
         <form action="">
            <label htmlFor="">Nombre Mascota</label>
            <input
               type="text"
               name="mascota"
               alt="Nombre de la mascota"
               placeholder="Nombre de la mascota"
               className="u-full-width"
            />
            <label htmlFor="">Nombre Dueño</label>
            <input
               type="text"
               name="propietario"
               alt="Nombre del dueño"
               placeholder="Nombre del dueño"
               className="u-full-width"
            />
            <label htmlFor="">Número de contacto</label>
            <input
               type="tel"
               name="phone"
               alt="Número de contacto"
               placeholder="Numero de contacto"
               className="u-full-width"
            />
            <label htmlFor="">Fecha</label>
            <input
               type="date"
               name="date"
               alt="fecha de la cita"
               className="u-full-width"
            />
            <label htmlFor="">Hora</label>
            <input
               type="time"
               name="time"
               alt="hora de la cita"
               className="u-full-width"
            />
            <label htmlFor="">Sintomas</label>
            <textarea 
               name="sintomas"
               cols="30"
               rows="10"
               placeholder="Agregar sintomas del pacience: vomito, diarrea, etc."
               className="u-full-width"
            >
            </textarea>
            <button type="submit" className="u-full-width button-primary">Agregar cita</button>
         </form>
      </Fragment>
   )
}

export default Formulario
