import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function WebDropDown() {
  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Web
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Todas</Dropdown.Item>
        <Dropdown.Item href="#">Mercado Livre</Dropdown.Item>
        <Dropdown.Item href="#">Buscapé</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default WebDropDown