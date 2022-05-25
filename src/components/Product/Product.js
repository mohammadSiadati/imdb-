import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Image } from 'react-bootstrap'


const Product = ({product})  => {

  const [valueLike, setVlueLike] = useState(Number(localStorage.getItem(`like_${product._id}`)))
  const [valueDisLike, setVlueDisLike] = useState(Number(localStorage.getItem(`dislike_${product._id}`)))


  const likeHandler = () => {
    setVlueLike(valueLike + 1)
    localStorage.setItem(`like_${product._id}`, valueLike)
  }

  const dislikeHandler = () => {
    setVlueDisLike(valueDisLike - 1)
    localStorage.setItem(`dislike_${product._id}`, valueDisLike)
  }

  return (
    <Card className='p-2'>
        <Link to={`/product/${product._id}`}>
            <Image src={product.image} className='p-2'></Image> 
            {product.name}
        </Link>
        <Button variant="inline-success"  onClick={likeHandler} className='position-absolute bottom-60 start-50'><i className="fa fa-thumbs-up" aria-hidden="true"> {localStorage.getItem(`like_${product._id}`)} </i></Button>{' '}
        <Button variant="inline-danger" onClick={dislikeHandler} className='position-absolute top-50 end-50'><i className="fa fa-thumbs-down" aria-hidden="true"> {localStorage.getItem(`dislike_${product._id}`)}</i></Button>{' '}
    </Card>
  )
}

export default Product