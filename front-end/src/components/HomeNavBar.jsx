import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WebDropDown from './filters/WebDropDown';
import CategoriesDropDown from './filters/CategoriesDropDown';
import SearchBar from './filters/SearchBar';

function HomeNavBar({ categorie, search }) {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <WebDropDown />
          <CategoriesDropDown select={categorie} />
        </Nav>
        <SearchBar result={search} />
      </Container>
    </Navbar>
  )
}

export default HomeNavBar;
