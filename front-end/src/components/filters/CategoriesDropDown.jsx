import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function CategoriesDropDown({ select }) {
  const [selector, setSelector] = useState('Categorias');

  const handleOptions = (eventKey) => {
    setSelector(eventKey)
    select(eventKey)
  }

  return (
    <Dropdown className="d-inline mx-2" onSelect={handleOptions}>
      <Dropdown.Toggle id="dropdown-autoclose-true" style={{ minWidth: '100px' }}>
        {selector}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Geladeira">Geladeira</Dropdown.Item>
        <Dropdown.Item eventKey="TV">TV</Dropdown.Item>
        <Dropdown.Item eventKey="Celular">Celular</Dropdown.Item>
        <Dropdown.Item eventKey="">Limpar Filtro</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CategoriesDropDown