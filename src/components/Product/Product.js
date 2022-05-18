import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Image } from 'react-bootstrap'


const Product = ({product})  => {

  const [valueLike, setVlueLike] = useState(0)



  const likeHandler = () => {
    setVlueLike(valueLike + 1)
    localStorage.setItem(`${product.name}`, valueLike)
  }

  const dislikeHandler = ({valueLike}) => {
    setVlueLike([...valueLike - 1])
    localStorage.setItem(`${product.name}`, valueLike)
  }

  return (
    <Card className='p-2'>
        <Link to={`/product/${product._id}`}>
            <Image src={product.image} className='p-2'></Image> 
            {product.name}
        </Link>
        <Button variant="outline-success"  onClick={likeHandler}><i className="fa fa-thumbs-up" aria-hidden="true"></i></Button>{' '}
        <Button variant="outline-danger" onClick={dislikeHandler}><i className="fa fa-thumbs-down" aria-hidden="true"></i></Button>{' '}
    </Card>
  )
}

export default Product