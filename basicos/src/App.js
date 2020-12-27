import React, {Fragment,useState} from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import Producto from './components/producto';
import Carrito from './components/carrito';

function App() {

  //Crear listado de productos

  const [productos, setProductos] = useState([
    { id: 1, nombre:'camisa Reactjs', precio: 50 },
    { id: 2, nombre:'camisa Vuejs', precio: 40 },
    { id: 3, nombre:'camisa node.js', precio: 30 },
    { id: 4, nombre:'camisa Angular', precio: 20 }
  ])

  //state para un carrito de compras
  const [carrito, agregarProducto] = useState([])

  //Obtener fecha
    const fecha = new Date().getFullYear();

  return (
    <Fragment>

        <Header 
        titulo= "Tienda Virtual"
        número={20}
        />

          <h1>Lista de productos</h1>
          {productos.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
          ))}

          <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
          />

        <Footer 
          fecha={fecha}
        />

    </Fragment>
  );
}

export default App;
