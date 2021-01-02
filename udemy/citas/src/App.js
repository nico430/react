import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario.js';
import Cita from './components/Cita.js';

function App() {

  //Almacenamiento de las citas
  const [citas, guardarCitas] = useState([]);

  //Función para listar las citas

  const crearCita = cita =>{
    guardarCitas(...citas ,cita)
  }

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
              <h2>Administra tus citas</h2>

              {
              citas.map(cita =>{
                return(
                <Cita 
                
                key={cita.id} //siempre que se itera de esta forma en react hay que pasarle un key
                cita={cita} //aca solamente estoy pasando la cita que se esta iteando al componente

              
                />
                )}
              )}
            </div>
          </div>
      </div>

    </Fragment>
    
  );
}

export default App;
