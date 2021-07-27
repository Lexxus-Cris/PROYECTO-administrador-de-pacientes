import React, { Fragment, useState } from 'react'

const Formulario = () => {
   // Crear state de citas
   const [cita, setCita] = useState({
      petName: '',
      petOwner: '',
      phone: '',
      date: '',
      time: '',
      symptoms:''
   })

   // Funcion que se ejecuta cad que el usuario escribe en un input

   const handleChange = (e) => {
      setCita({
         ...cita,
         [e.target.name] : e.target.value
      })
   }

   // Extraer los valores para despues resetear el formulario mas adelante.

   const { petName, petOwner, phone, date, time, symptoms } = cita

   return (
      <Fragment>
         <h2>Crear cita</h2>
         <form action="">
            <label htmlFor="">Nombre Mascota</label>
            <input
               type="text"
               name="petName"
               alt="Nombre de la mascota"
               placeholder="Nombre de la mascota"
               className="u-full-width"
               onChange={handleChange}
               value={petName}
            />
            <label htmlFor="">Nombre Dueño</label>
            <input
               type="text"
               name="petOwner"
               alt="Nombre del dueño"
               placeholder="Nombre del dueño"
               className="u-full-width"
               onChange={handleChange}
               value={petOwner}
            />
            <label htmlFor="">Número de contacto</label>
            <input
               type="tel"
               name="phone"
               alt="Número de contacto"
               placeholder="Numero de contacto"
               className="u-full-width"
               onChange={handleChange}
               value={phone}
            />
            <label htmlFor="">Fecha</label>
            <input
               type="date"
               name="date"
               alt="fecha de la cita"
               className="u-full-width"
               onChange={handleChange}
               value={date}
            />
            <label htmlFor="">Hora</label>
            <input
               type="time"
               name="time"
               alt="hora de la cita"
               className="u-full-width"
               onChange={handleChange}
               value={time}
            />
            <label htmlFor="">Sintomas</label>
            <textarea 
               name="symptoms"
               cols="30"
               rows="10"
               placeholder="Agregar sintomas del pacience: vomito, diarrea, etc."
               className="u-full-width"
               onChange={handleChange}
               value={symptoms}
            >
            </textarea>
            <button type="submit" className="u-full-width button-primary">Agregar cita</button>
         </form>
      </Fragment>
   )
}

export default Formulario
