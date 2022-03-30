import React from 'react'


import products from '../../products'

const Product = ({match}) => {
  const product = products.find((item) => {
    return console.log('item',item),
     console.log('match',match),
     console.log('produt',product)
  })

  return (
    <div>
      kkas
    </div>
  )
}

export default Product