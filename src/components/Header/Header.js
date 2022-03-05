import React from 'react'
//import { Container } from 'react-bootstrap'


import './Header.css'

function Header() {
  return (
    <header>
        <nav className="navbar bg-dark">
          <div className="container-fluid 'container-max-width'">
              <img src='./download.png'
              alt="" width="40px" height="40px" 
              />
          </div>
        </nav>
    </header>
  )
}

export default Header