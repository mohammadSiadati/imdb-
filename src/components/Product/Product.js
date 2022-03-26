import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'react-bootstrap'

const Product = ({product})  => {
  return (
    <Card className='p-2'>
        <Link to={`/product/${product._id}`}>
            <Image src={product.image} className='p-2'></Image> 
            {product.name}
        </Link>
    </Card>
  )
}

export default Product