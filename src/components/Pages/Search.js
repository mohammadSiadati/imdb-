import React from 'react'
import Product from '../Product/Product'
import { Container, Row } from 'react-bootstrap'
import products from '../../products'
import { useParams } from 'react-router-dom'

const Search = () => {
    const params = useParams()


    const result =  products.filter((item) => {
        return item.name.toLowerCase().includes(params.name.toLowerCase())
    })
  return (
    <Row>
        {result.map((item) => {
            return(
                <Row key={item._id}>
                    <Container className='py-3 border'>
                          <Product product={item} />
                     </Container>
                </Row>
     )
    })}
    </Row>
  )
}

export default Search