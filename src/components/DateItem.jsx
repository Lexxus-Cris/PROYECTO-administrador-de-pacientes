import React from 'react'

const DateItem = ({cita}) => {

   const { petName, petOwner, phone, date, time, symptoms } = cita
   return(
      <div className='cita'>

         <p>Mascota: <span>{ petName }</span></p>
         <p>Dueño: <span>{ petOwner }</span></p>
         <p>Numero de contacto: <span>{ phone}</span></p>
         <p>Fecha: <span>{ date }</span></p>
         <p>Hora: <span>{ time }</span></p>
         <p>Sintomas: <span>{ symptoms }</span></p>

      </div>
   )
}

export default DateItem
