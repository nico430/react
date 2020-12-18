import React,{ useState } from 'react'


function persona(N,A,T,M){
  this.nombre = N;
  this.apellido = A;
  this.telefono = T;
  this.mail = M;
}

function Agregar(){
  const [contactos, setContactos] = useState([]);
  const [contacto, setContacto] = useState([]);

function onClickHandler(){
  let contactosTmp = [...contactos]
  contactosTmp.push(contacto)
  setContactos(contactosTmp)
}

function onChangeHandler(a){
  let nombre = a.target.value
  setContacto()
}

  return(
  <div>

  <form action="index.html" method="post">

  </form>

    <input type="text" onChange={onChangeHandler}/>
    <input type="text"  />
    <button onClick={()=>onClickHandler()}>agendar</button>

    <h3>Lista contactos</h3>
    <ul>
      {contactos.map( (unContacto)=>(
        <li>
          Nombre: {unContacto} <br/>
          pellido: apellido
        </li>
      ))}
    </ul>
  </div>
)
}


export default Agregar
