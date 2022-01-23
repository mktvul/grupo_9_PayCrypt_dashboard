import React from "react";
import { Header, Totals, Latest, Footer } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Header />
      <div>
        <Totals />
        <Latest />
      </div>
      <Footer />
    </div>
  );
};

export default App;
