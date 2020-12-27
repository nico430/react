import React from 'react'

function Header({titulo}){
  
  const edad = 18;

  let mensaje;
  if(edad >= 18){
    mensaje = "sos mayor de edad";
  }
  else{
    mensaje = "sos menor de edad"
  }
  return(
    <h1 id="encabezado" className="encabezado">{titulo}<h1/>
    <h1> Desde el header edad: {edad} {mensaje} </h1></h1>
  )
}



export default Header;
