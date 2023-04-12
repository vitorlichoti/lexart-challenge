import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar({ result }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length === 0) result(text)
  }, [text, result])

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