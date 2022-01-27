import React from "react";
import { Header, Totals, Latest } from "./containers";
import ProductsPerCategory from "./components/productsPerCategory/productsPerCategory";
import ListOfProducts from "./components/listOfProducts/listOfProducts";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Header />
      <div className="body">
        <section className='first-section'>
          <Totals />
        </section>
        <section className='second-section'>
        <Latest />
        <ProductsPerCategory />
        </section>
        <section className='third-section'>
          <ListOfProducts />
        </section>
      </div>
    </div>
  );
};

export default App;
