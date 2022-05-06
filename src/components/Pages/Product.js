import React from 'react'


import products from '../../products'

const Product = () => {
  const product = products.find((item) => {
     return (
      item._id 
     )
  })

  return (
    <div>
      {product.name}
    </div>
  )
}

export default Product