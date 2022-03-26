import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Movies from './components/Pages/Movies'
import Product from './components/Pages/Product'



const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route exact path='/' element={<Movies />} />
              <Route path='/product/:id' element={<Product />} />
            </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
  )
}

export default App