import React from 'react'

import products from '../../products'

import './Movies.css'

import { Col, Container, Row} from 'react-bootstrap'
import Product from '../Product/Product'

const Movies = () => {
  return (
    <Container className='bg border'>
        <Row>
            <Col>
                <h5>IMDb Charts</h5>
                <h3>Top Rated TV Shows</h3>
                <p><small>IMDb Top 30 as rated by regular IMDb voters.</small></p>
                <hr />
                <p><small>Showing 30 Titles</small></p>
                <p><small>Rank & Title</small></p>
                <Row>
                  {products.map((item) => {
                    return(
                      <Row>
                        <Container className='py-3 border'>
                          <Product product={item} />
                        </Container>
                      </Row>
                    )
                  })}
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Movies