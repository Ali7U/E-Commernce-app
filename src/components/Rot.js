import React from "react";
import { Routes, Route } from "react-router-dom";
import Burgers from "./Burgers";
import Juice from "./Juice";
import Main from "./Main";
import Nav from "./Nav";
import Pizza from "./Pizza";

function Rot(props) {
  const { products, onAdd } = props;
  return (
    <div className="router">
      <Nav />
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={<Main products={products} onAdd={onAdd} />}
          />
          <Route
            path="/burgers"
            element={products
              .map((product) => (
                <Burgers product={product} key={product.id} onAdd={onAdd} />
              ))
              .slice(0, 3)}
          />
          <Route
            path="/pizza"
            element={products
              .map((product) => (
                <Pizza product={product} key={product.id} onAdd={onAdd} />
              ))
              .slice(3, 6)}
          />
          <Route
            path="/juice"
            element={products
              .map((product) => (
                <Juice product={product} key={product.id} onAdd={onAdd} />
              ))
              .slice(6, 9)}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Rot;
