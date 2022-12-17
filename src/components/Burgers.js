import React from 'react'

function Burgers(props) {
  const {product, onAdd} = props
  return (
    <div className="block2 products">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <div>
        <button onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default Burgers