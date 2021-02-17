import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './component.css';

const Component = () => {
  return (
    <div className="container component-main-div" id="component">
      <div className="component-div">
        <SearchIcon className="search-icon justify-content-center" />
        <input
          className="component-search pl-5"
          type="text"
          value=""
          placeholder="search components and foundation"
        />
      </div>
      <div className="component-detail">
        <h4>Foundation</h4>
        <p>Styles and primitive components. Start here.</p>
        <Row>
          <Card className="m-3" style={{ width: '13rem', height: '5rem' }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
            />
            <h5 className="text-center">Layout primitive</h5>
          </Card>
          <Card className="m-3" style={{ width: '13rem', height: '5rem' }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + '/image/comimg2.jpg'}
            />
            <h5 className="text-center">Layout primitive</h5>
          </Card>
          <Card className="m-3" style={{ width: '13rem', height: '5rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <h5 className="text-center">Layout primitive</h5>
          </Card>
          <Card className="m-3" style={{ width: '13rem', height: '5rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <h5 className="text-center">Layout primitive</h5>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default Component;
