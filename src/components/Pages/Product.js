import React from 'react'
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import products from '../../products'

const Product = () => {
  const params = useParams()
  const product = products.find((item) => {
     return (
      item._id === params.id
     )
  })

  return (
    <Container className='bg-dark p-3'>
      <h2 className='text-white'>{product.name}</h2>
      <Image src={product.image} className='pt-3'></Image>
      <p className='p-3 fw-bolder text-white'>Description : {product.description}</p>
      <p className='p-3 fw-bolder text-white'>ImDb Rating : {product.IMDbRating}</p>
    </Container>
  )
}

export default Product