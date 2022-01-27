import React, {useState, useEffect} from 'react';
import '../productsPerCategory/productsPerCategory.css'

function ProductsPerCategory () {
    const [products, setProducts] = useState(0);
  
    useEffect(() => {
      fetch("http://localhost:3001/api/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className='productsPerCategory'>
            <h2>Productos por Categoria</h2>
            <ul className='category-list'>
                <li>Deportes: {products.totalDeDeportes}</li>
                <li>Inmuebles: {products.totalDeInmuebles}</li>
                <li>Mineria: {products.totalDeMineria}</li>
                <li>NFT: {products.totalDeNft}</li>
                <li>Tecnologia: {products.totalDeTecnologia}</li>
                <li>Vehiculos: {products.totalDeVehiculos}</li>
            </ul>
        </div>
    )
}

export default ProductsPerCategory;