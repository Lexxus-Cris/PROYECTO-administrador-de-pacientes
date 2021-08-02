import React from 'react'
import PropTypes from 'prop-types'

const DateItem = ({ cita, eliminarCita }) => {

   const { petName, petOwner, phone, date, time, symptoms, id } = cita;


   return(
      <div className='cita'>

         <p>Mascota: <span>{ petName }</span></p>
         <p>Dueño: <span>{ petOwner }</span></p>
         <p>Numero de contacto: <span>{ phone}</span></p>
         <p>Fecha: <span>{ date }</span></p>
         <p>Hora: <span>{ time }</span></p>
         <p>Sintomas: <span>{ symptoms }</span></p>
         <button
            className="button eliminar u-full-width"
            type="button"
            onClick={() => eliminarCita(id)}
            >Eliminar &times;</button>
      </div>
   )
}

DateItem.propTypes = {
   cita : PropTypes.object.isRequired,
   eliminarCita: PropTypes.func.isRequired
}

export default DateItem
