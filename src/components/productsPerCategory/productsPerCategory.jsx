import React from 'react';
import '../productsPerCategory/productsPerCategory.css'

function ProductsPerCategory () {
    return (
        <div className='productsPerCategory'>
            <h2>Productos por Categoria</h2>
            <ul className='category-list'>
                <li>Deportes: 5</li>
                <li>Inmuebles: 5</li>
                <li>Mineria: 5</li>
                <li>NFT: 5</li>
                <li>Tecnologia: 5</li>
                <li>Vehiculos: 5</li>
            </ul>
        </div>
    )
}

export default ProductsPerCategory;