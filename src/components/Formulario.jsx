import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
   // Crear state de citas
   const [cita, setCita] = useState({
      petName: '',
      petOwner: '',
      phone: '',
      date: '',
      time: '',
      symptoms:''
   })

   const [ error, setError ] = useState(false);


   // Funcion que se ejecuta cad que el usuario escribe en un input

   const handleChange = (e) => {
      setCita({
         ...cita,
         [e.target.name] : e.target.value
      })
   }

   // Extraer los valores para despues resetear el formulario mas adelante.

   const { petName, petOwner, phone, date, time, symptoms } = cita

   // Funcion que envia los datos del usuario cuando haga click en agregar cita

   const submitCita = e => {
      e.preventDefault();

      // Validar
      const validate = Object.values(cita);
      for (let i = 0; i < validate.length; i++) {
         validate[i].trim() === ''
            ? setError(true)
            : setError(false)
      }

      // Asignar un ID
      cita.id = uuidv4();

      // Crear la cita
      crearCita(cita)

      // Reiniciar el form
      setCita({
         petName: '',
         petOwner: '',
         phone: '',
         date: '',
         time: '',
         symptoms: ''
      })
   }

   return (
      <Fragment>
         <h2>Crear cita</h2>
         { error 
            ?  <p className="alerta-error">Todos los campos son obligatorios</p>
            : null
         }
         <form 
            onSubmit={submitCita}
         >
            <label htmlFor="">Nombre Mascota</label>
            <input
               type="text"
               name="petName"
               alt="Nombre de la mascota"
               placeholder="Nombre de la mascota"
               className="u-full-width"
               onChange={handleChange}
               value={petName}
               required
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
               required
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
               required
            />
            <label htmlFor="">Fecha</label>
            <input
               type="date"
               name="date"
               alt="fecha de la cita"
               className="u-full-width"
               onChange={handleChange}
               value={date}
               required
            />
            <label htmlFor="">Hora</label>
            <input
               type="time"
               name="time"
               alt="hora de la cita"
               className="u-full-width"
               onChange={handleChange}
               value={time}
               required
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
               required
            >
            </textarea>
            <button type="submit" className="u-full-width button-primary">Agregar cita</button>
         </form>
      </Fragment>
   )
}

export default Formulario
