import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const navigate = useNavigate();

  const searchItem = (e) => {
    e.preventDefault()
    setInput(navigate(`/SearchItem/${inputRef.current.value}`));
  };

  return (
    <header>
      <Navbar
        bg="#121212"
        expand="lg"
        breakpoints={["xxl", "xl", "lg", "md", "sm"]}
      >
        <Container fluid>
          <Link to={"/"}>
            <img
              className="img"
              src="/images/download.png"
              alt=""
              width="80px"
              height="40px"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <DropdownButton title="menu">
            <Dropdown.Item eventKey="/">Action</Dropdown.Item>
            <Dropdown.Item eventKey="/">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="/">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            ></Nav>
            <Form className="d-flex w-50">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={input}
                onInput={e => setInput(e.target.value)}
                ref={inputRef}
              />
              <button
                className="btn-dark rounded-3 border-danger w-25"
                onClick={searchItem}
              >
                Search...
              </button>
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
  );
}

export default Header;
