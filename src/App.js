import React from 'react'

import { Container } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Movies from './components/Pages/Movies'


const App = () => {
  return (
    <div>
      <Header />
        <main className='py-3'>
          <Container>
            <Movies>
                
            </Movies>
          </Container>
        </main>
      <Footer/>
    </div>
  )
}

export default App