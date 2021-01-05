import React,{Fragment, useState , useEffect} from 'react';
import Formulario from './components/Formulario.js';
import Cita from './components/Cita.js';
import PropTypes from 'prop-types';//son una forma de documentar y verificar el código esto se hace abajo de todo antes del export

function App() {

  //citas en el localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //Almacenamiento de las citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // usando useEffect para operar segun cambios del state [useffect siempre es un arrow function]
  useEffect( () =>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  }, [citas]);
  // se le pasa un array vacio para que la funcion no se repita infinitamente por cualquier cosa
  //aparte entre los corchetes se le pasa la dependencia de este el cual será citas lo que quiere decir que si citas inicia se genera o se actualiza se va a ejecutar esta funcion
  
  
  //Función para listar las citas

  const crearCita = cita =>{
    guardarCitas([...citas, cita])
    //Se pasa dentro de un array
  }

  //Funcion para eliminar las citas
  const eliminarCita = id =>{ // filter con el operador !== para que deje pasar todo lo que no sea el id actual
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);// nuevasCitas ya es un array no hace falta pasarlo con corchetes
  }

  // mostrar agregar citas o administrar citas dependiendo de si hay o no
  const titulo = citas.length === 0 ? 'no tenes citas pendientes' : 'administrar citas'

  return (
    
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      
      <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
              crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>

              {
                citas.map(cita =>{
                  return(
                    <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                    />
                  )
                })
              }
            </div>
          </div>
      </div>

    </Fragment>
    
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired //con is required definimos que eso es necesario y si esto no se encuentra o no se encuentra como una func habrá un error en consola
}

export default App;
