import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WebDropDown from './filters/WebDropDown';
import CategoriesDropDown from './filters/CategoriesDropDown';
import SearchBar from './filters/SearchBar';

function HomeNavBar({ categorie, search }) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">Lexart Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <WebDropDown select={categorie} />
            <CategoriesDropDown select={categorie} />
          </Nav>
          <SearchBar result={search} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default HomeNavBar;
