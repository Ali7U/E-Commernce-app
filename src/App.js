import React, { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rot from "./components/Rot";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header countCart={cartItems.length} />
        <Rot products={products} onAdd={onAdd} />
        <Routes>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onRemove={onRemove} onAdd={onAdd} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
