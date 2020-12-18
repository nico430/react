var vatiable //las variables creadas con var se pueden modificar y acceder desde cualquier parte

// en ECS6 se agregaron let y const

let variablelet // las vatiables con let son iguales a las var pero con mas restricciones que facilitan su uso y un scope mas marcado

const constante // las constantes se declaran con const y son valores constantes, variables a las que no les vamos a editar su valoe por laargo tiempo
                //esto evita que se edite su valor por cualquier error en funciones o uso

function funcion(parametroUno, parametroDos){
  let res = parametroUno + parametroDos; //funcion simple para sumar en su version antigua
  return res;
}

// Funcion flecha

const funcion = (parametro1,parametro2)=> {
 let result  = parametro1 + parametro2; // en la nueva version tenemos esta forma de declarar funciones y se pueden edcribir aun sin crear la variable ni nombrarla
 return result;
}


// concatenacion

// antes

let concatenacion;
document.write("texto ejemplo uno" + concatenacion + "tecto ejemplo dos");

// ahora se usan template strings que usan una coma especial y una nueva sintaxis

let templatestrings;

document.write(`ejemplo mas ${templatestrings} esa variable`)// atencion que usan unas comas invertidas

// objetos

// el objeto literal

const objetolit = {
   key : "value",
   llave: "valor"
}
//acceso
document.write(objetolit.key);// devuelve value
document.write(objetolit.llave);// devuelve valor

//Objetc constructor

function objetoconstruido (llave1,llavecita2){
  this.llave1 = valor1;
  this.llavecita2 = valor2;
}
//creacion del aobjeto

const persona = new objetoconstruido('juan', 'pepe');

// consulta

console.log(`nombre de la persona es : ${persona.llave1}`);
console.log(`el apellido de la persona es: ${persona.llavecita2}`);
