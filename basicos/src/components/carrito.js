import React from 'react';
import './carrito.css';
import Producto from './producto';

const Carrito = ({carrito, agregarProducto}) => {
    return ( 
        <div className="carrito">
            <h2>Tu carrito de compras</h2>

            {carrito.length === 0
            
            ?<p>No hay elementos en el carrito</p> // el signo ? significaria verdadero
            

            :carrito.map(producto =>(             // el signo : es como un else
                
                
                <Producto 
                
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
                />
            ))


            }

        </div>
     );
}
 
export default Carrito;