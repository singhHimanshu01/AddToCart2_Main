import React from 'react'

const ProductList = ({product , addToCart}) => {
  return (
    <div className='productList'>
        {
            product.map((productItem,productIndex)=>{
              return (
                <div key={productIndex}>
                  <img src={productItem.url} alt="photo" />
                  <p>{productItem.name} | {productItem.category}</p>
                  <p>{productItem.seller}</p>
                  <p>Rs {productItem.price} /-</p>
                  <button onClick={()=> addToCart(productItem)}>Add To Cart</button>
                </div>
              )
            })
        }
    </div>
  )
}

export default ProductList