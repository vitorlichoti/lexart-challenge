import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CategoriesDropDown({ select }) {
  const [selector, setSelector] = useState('Categorias');

  const handleOptions = (eventKey) => {
    if (eventKey === 'Categorias') {
      setSelector('Categorias')
    }
    setSelector(eventKey)
    select(eventKey)
  }

  return (
    <NavDropdown title={selector} id="basic-nav-dropdown" onSelect={handleOptions}>
      <NavDropdown.Item eventKey="Geladeira">Geladeira</NavDropdown.Item>
      <NavDropdown.Item eventKey="TV">TV</NavDropdown.Item>
      <NavDropdown.Item eventKey="Celular">Celular</NavDropdown.Item>
      <NavDropdown.Item eventKey="Todas Categorias">Todas Categorias</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="Categorias">Limpar Fitros</NavDropdown.Item>
    </NavDropdown>
  )
}

export default CategoriesDropDown
