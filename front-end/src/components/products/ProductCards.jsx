import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

import '../styles/Card.css';

function ProductCards({ items }) {
  return (
    <Container className='card-main-container'>
      {items?.map((e) => (
        <Card key={e.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={e.thumbnail} className='card-image-container' />
          <Card.Body>
            <Card.Title className='card-text'>{e.title}</Card.Title>
            <Card.Text>R${e.price}</Card.Text>
            <Button variant="primary" href={e.permalink}>Ir a Web</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default ProductCards