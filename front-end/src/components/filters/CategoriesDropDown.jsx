import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function CategoriesDropDown({ select }) {

  const handleOptions = (eventKey) => {
    select(eventKey)
  }

  return (
    <Dropdown className="d-inline mx-2" onSelect={handleOptions}>
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Geladeira">Geladeira</Dropdown.Item>
        <Dropdown.Item eventKey="TV">TV</Dropdown.Item>
        <Dropdown.Item eventKey="Celular">Celular</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CategoriesDropDown