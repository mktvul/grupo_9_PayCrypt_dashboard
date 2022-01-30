import React, { useState, useEffect } from 'react';
import '../listOfProducts/listOfProducts.css';

function ListOfProducts () {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => setProductsList(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(productsList)

  return (
      <div className='listOfProducts'>
          <h2 className='products-title'>Listado de Productos</h2>
          <ul className='products-list'>
            {
              productsList.map((product, i) => {
                return (
                  <li key={i} className='parent'>
                    <div className="div1">{product.id}</div>
                    <div className="div2">{product.name}</div>
                    <div className="div3">{product.description}</div>
                  </li>
                )
              })
            }
          </ul>
      </div>
  )
}

export default ListOfProducts;