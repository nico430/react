import React, {Fragment, useState} from 'react';
import uuid from 'C:/Users/nicoc/Desktop/web-development/react/udemy/citas/node_modules/uuid/dist/v4.js';

const Formulario = ({crearCita}) => {

    //Crear state para citas
   const [cita, agregarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    // creando segundo state para los errores (si se puede poner mas de un state)

    const [error, actualizarError] = useState(false) 
    // aca se lo declara como booleano pero yo le pondria un json para declara cada error por separado y no un error global, mas que nada para mas detalles etc.


    //Función manejadora de cambios en el input
    const handleChange = (e) =>{ // e es el evento y se lo puede pasar sin los parentesis
        
        agregarCita({

            ...cita,  
            //se usa una copia del state con este operador para no sobreescribir el state definido al inicio

            [e.target.name] : e.target.value 
            //se hace array destructuring para asignar cada valor a su llave correspondiente

       })    
    }
    
        //estos valores se los pasa como values en los input para despues recetearlo
        // destructuring de cita:
        const {mascota,propietario,fecha,hora,sintomas} = cita;


            //submit del formulario
        const enviar = (e) => {
            e.preventDefault();

            //validar
            if( mascota.trim() === '' ||        //por si sos un yo del futuro y te olvidaste: || es un or 
             propietario.trim() === '' ||       // trim es un método que elimina los espacios en blanco
             fecha.trim() === '' ||
             hora.trim() === '' || 
             sintomas.trim() === '' ){ 
                
            actualizarError(true);
                
            return; 
            // el return es para que una vez detectado el error el codigo pegue un salto y deje de ejecutarse

            //si mascota quitando espacios accidentales es igual a un string vacio es que hay un error
            
            }
            //eliminar el mensaje de error previo(si existiera)
            actualizarError(false);
            //luego asignar un id
            cita.id = uuid();
            //crear la cita
            crearCita(cita); //le pasamos la cita con el id ya puesto, osea el formulario actual
            //reiniciar el form
            agregarCita(//es la misma funcion que se usaba para extraer los datos
                {//solo que ahora en ves de traer los datos aca se los volvemos a asignar a los values del form como strings vacios
                    mascota:'',
                    propietario:'',
                    fecha:'',
                    hora:'',
                    sintomas:''
                }
            )

        }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            
            {error ?  <p className="alerta-error">Todos los campos son obligatorios</p>  : null 
            //en el return no se puede usar el if entonces se usan ternarios
            }

            <form
                onSubmit={enviar}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre Del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                
                <label>hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
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