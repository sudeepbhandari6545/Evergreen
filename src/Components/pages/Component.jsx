import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './component.css';

const Component = () => {
  return (
    <div className="component">
      <div>
        <Form>
          <FormControl
            type="text"
            size="lg"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
};

export default Component;
