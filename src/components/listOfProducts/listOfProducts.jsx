import React from 'react';
import '../listOfProducts/listOfProducts.css'

function ListOfProducts () {
    return (
        <div className='listOfProducts'>
            <h2>Listado de Productos</h2>
            <ul>
                <li>Primer producto</li>
                <li>Segundo producto</li>
                <li>Tercer producto</li>
            </ul>
        </div>
    )
}

export default ListOfProducts;