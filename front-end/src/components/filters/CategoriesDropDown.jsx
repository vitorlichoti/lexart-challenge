import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function CategoriesDropDown() {
  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Geladeira</Dropdown.Item>
        <Dropdown.Item href="#">TV</Dropdown.Item>
        <Dropdown.Item href="#">Celular</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CategoriesDropDown