import React, {Fragment, useState} from 'react';

const Formulario = () => {

    //Crear state para citas
    [citas, agregarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sitnomas:''
    })

    //Función manejadora de cambios en el input
    const handleChange = () =>{
        console.log('escribiendo...')
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                />

                <label>Nombre Del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                />
                
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                
                <label>hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;