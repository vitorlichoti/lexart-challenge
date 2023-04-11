import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar({ result }) {
  const [text, setText] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    result(text)
  }

  return (
    <Form className="d-flex" onSubmit={submitSearch}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <Button variant="outline-success" type='submit'>Search</Button>
    </Form>
  )
}

export default SearchBar