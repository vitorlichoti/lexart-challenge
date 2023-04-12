import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function WebDropDown({ select }) {
  const [selector, setSelector] = useState('Web');

  const handleOptions = (eventKey) => {
    if (eventKey === "Web") {
      setSelector(eventKey)
      return select('Limpar Tela')
    }
    setSelector(eventKey)
    select(eventKey)
  }
  return (
    <NavDropdown title={selector} id="basic-nav-dropdown" onSelect={handleOptions}>
      <NavDropdown.Item eventKey="Mercado Livre">Mercado Livre</NavDropdown.Item>
      <NavDropdown.Item eventKey="Buscapé">Buscapé</NavDropdown.Item>
      <NavDropdown.Item eventKey="Todos os sites">Todos os sites</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="Web">Limpar Fitros</NavDropdown.Item>
    </NavDropdown>
  )
}

export default WebDropDown
