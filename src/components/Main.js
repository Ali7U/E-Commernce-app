import React from "react";
import Products from "./Products";

import Rot from './Rot'

function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
      <main className="block">
        {products.map((product) => (
          <Products product={product} key={product.id} onAdd={onAdd} />
        ))}
      </main>
    </>
  );
}

export default Main;
