import React from 'react'

function Products(props) {
    const {product, onAdd} = props;
  return (
    <div className='products block2'>
        <img  src={product.img} alt={product.name}/>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <div>
            <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Products