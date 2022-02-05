import React from "react";
import { Header, Totals, Latest } from "./containers";
import ProductsPerCategory from "./components/productsPerCategory/productsPerCategory";
import ListOfProducts from "./components/listOfProducts/listOfProducts";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Header />
      <div >
        <section className='first-section'>
          <Totals />
        </section>
        <section className='second-section'>
        <Latest />
        <ProductsPerCategory />
        </section>
        <ListOfProducts />
      </div>
    </div>
  );
};

export default App;
