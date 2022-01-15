import React from "react";
import { Header, Totals, Latest, Footer } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Totals />
      <Latest />
      <Footer />
    </div>
  );
};

export default App;
