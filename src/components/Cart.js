import React from "react";

function Cart(props) {
  const { cartItems, onAdd } = props;

  const itemPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 65 ? 0 : 20;
  const totalPrice = itemPrice + shippingPrice + taxPrice;

  return (
    <div className="cart block2">
      {cartItems.length === 0 && <div className="block">cart is empty</div>}

      {cartItems.map((item) => (
        <>
          <div className="block row">
            <p>{item.name}</p>
            <button className="btn" onClick={() => onAdd(item)}>
              +
            </button>
            <p>{item.qty}</p>
            <button className="btn" onClick={() => onAdd(item)}>
              -
            </button>
            {item.price.toFixed(2)}
          </div>
        </>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row block3">
            <p>price</p>
            <p>{itemPrice.toFixed(2)}</p>
          </div>
          <div className="row block3">
            <p>tax price</p>
            <p>{taxPrice.toFixed(2)}</p>
          </div>
          <div className="row block3">
            <p>shipping price</p>
            <p>{shippingPrice.toFixed(2)}</p>
          </div>
          <div className="row block3">
            <p>total price</p>
            <p>{totalPrice.toFixed(2)}</p>
          </div>
            

            <button onClick={() => alert("request is done ")}>order now</button>
            
        </>
      )}
    </div>
  );
}

export default Cart;
