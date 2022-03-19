import React from 'react'
import { Card, Image } from 'react-bootstrap'

function Product({product}) {
  return (
    <Card className='p-2'>
        <a href={`/product/${product._id}`}>
            <Image src={product.image} className='p-2'></Image> 
            {product.name}   
        </a>
    </Card>
  )
}

export default Product