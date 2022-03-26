import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Form , Container, Nav, DropdownButton,Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


import './Header.css'

function Header() {
  return (
    <header>
      <Navbar bg="#121212" expand="lg" breakpoints={['xxl', 'xl', 'lg', 'md', 'sm']}>
        <Container fluid>
          <Link to={'/'}>
            <img t className='img' src='/images/download.png'
            alt="" width="80px" height="40px"/>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <DropdownButton  title="menu">
            <Dropdown.Item eventKey="/">Action</Dropdown.Item>
            <Dropdown.Item eventKey="/">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="/">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
          </Nav>
          <Form>
            <Form.Control type='search' placeholder='search IMDb' />
          </Form>
          </Navbar.Collapse>
          <LinkContainer to="/fav">
              <Nav.Link>
                <i className="fa fa-user"></i>
              </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header