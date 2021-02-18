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
          <Col md={3}>
            <Card className="" style={{ width: '13rem', height: '12rem' }}>
              <Card.Img
                variant="center"
                src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                style={{
                  width: '13rem',
                  height: '12rem',
                  padding: '30px',
                  backgroundColor: 'lightgray',
                }}
              />
            </Card>

            <p className="text-capitalize text-center pt-3">Layout primitive</p>
          </Col>
          <Col md={3}>
            <Card className="" style={{ width: '13rem', height: '12rem' }}>
              <Card.Img
                variant="center"
                src={process.env.PUBLIC_URL + '/image/comimg2.jpg'}
                style={{
                  width: '13rem',
                  height: '12rem',
                  padding: '30px',
                  backgroundColor: 'lightgray',
                }}
              />
            </Card>
            <p className="text-capitalize text-center pt-3">Layout primitive</p>
          </Col>
          <Col md={3}>
            <Card className="" style={{ width: '13rem', height: '12rem' }}>
              <Card.Img
                variant="center"
                src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                style={{
                  width: '13rem',
                  height: '12rem',
                  padding: '30px',
                  backgroundColor: 'lightgray',
                }}
              />
            </Card>
            <p className="text-capitalize text-center pt-3">Layout primitive</p>
          </Col>
          <Col md={3}>
            <Card className="" style={{ width: '13rem', height: '12rem' }}>
              <Card.Img
                variant="center"
                src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                style={{
                  width: '13rem',
                  height: '12rem',
                  padding: '30px',
                  backgroundColor: 'lightgray',
                }}
              />
            </Card>
            <p className="text-capitalize text-center pt-3">Layout primitive</p>
          </Col>
        </Row>
      </div>
      <div>
        <div className="component-detail">
          <h4>Components</h4>
          <p>Buttons & Atomic Elements.</p>
          <Row>
            <Col md={3}>
              <Card className="" style={{ width: '13rem', height: '12rem' }}>
                <Card.Img
                  variant="center"
                  src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                  style={{
                    width: '13rem',
                    height: '12rem',
                    padding: '30px',
                    backgroundColor: 'lightgray',
                  }}
                />
              </Card>

              <p className="text-capitalize text-center pt-3">button</p>
            </Col>
            <Col md={3}>
              <Card className="" style={{ width: '13rem', height: '12rem' }}>
                <Card.Img
                  variant="center"
                  src={process.env.PUBLIC_URL + '/image/comimg2.jpg'}
                  style={{
                    width: '13rem',
                    height: '12rem',
                    padding: '30px',
                    backgroundColor: 'lightgray',
                  }}
                />
              </Card>
              <p className="text-capitalize text-center pt-3">tab</p>
            </Col>
            <Col md={3}>
              <Card className="" style={{ width: '13rem', height: '12rem' }}>
                <Card.Img
                  variant="center"
                  src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                  style={{
                    width: '13rem',
                    height: '12rem',
                    padding: '30px',
                    backgroundColor: 'lightgray',
                  }}
                />
              </Card>
              <p className="text-capitalize text-center pt-3">badge and pill</p>
            </Col>
            <Col md={3}>
              <Card className="" style={{ width: '13rem', height: '12rem' }}>
                <Card.Img
                  variant="center"
                  src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                  style={{
                    width: '13rem',
                    height: '12rem',
                    padding: '30px',
                    backgroundColor: 'lightgray',
                  }}
                />
              </Card>
              <p className="text-capitalize text-center pt-3">avatar</p>
            </Col>
          </Row>
          <div className="pt-5">
            <p>Text Inputs & File Uploading.</p>
            <Row>
              <Col md={3}>
                <Card className="" style={{ width: '13rem', height: '12rem' }}>
                  <Card.Img
                    variant="center"
                    src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                    style={{
                      width: '13rem',
                      height: '12rem',
                      padding: '30px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </Card>

                <p className="text-capitalize text-center pt-3">text input</p>
              </Col>
              <Col md={3}>
                <Card className="" style={{ width: '13rem', height: '12rem' }}>
                  <Card.Img
                    variant="center"
                    src={process.env.PUBLIC_URL + '/image/comimg2.jpg'}
                    style={{
                      width: '13rem',
                      height: '12rem',
                      padding: '30px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </Card>
                <p className="text-capitalize text-center pt-3">search input</p>
              </Col>
              <Col md={3}>
                <Card className="" style={{ width: '13rem', height: '12rem' }}>
                  <Card.Img
                    variant="center"
                    src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                    style={{
                      width: '13rem',
                      height: '12rem',
                      padding: '30px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </Card>
                <p className="text-capitalize text-center pt-3">tag input</p>
              </Col>
              <Col md={3}>
                <Card className="" style={{ width: '13rem', height: '12rem' }}>
                  <Card.Img
                    variant="center"
                    src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                    style={{
                      width: '13rem',
                      height: '12rem',
                      padding: '30px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </Card>
                <p className="text-capitalize text-center pt-3">textarea</p>
              </Col>
              <Col md={3}>
                <Card className="" style={{ width: '13rem', height: '12rem' }}>
                  <Card.Img
                    variant="center"
                    src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                    style={{
                      width: '13rem',
                      height: '12rem',
                      padding: '30px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </Card>
                <p className="text-capitalize text-center pt-3">
                  auto complete
                </p>
              </Col>
              <Col md={3}>
                <Card className="" style={{ width: '13rem', height: '12rem' }}>
                  <Card.Img
                    variant="center"
                    src={process.env.PUBLIC_URL + '/image/comimg1.jpg'}
                    style={{
                      width: '13rem',
                      height: '12rem',
                      padding: '30px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </Card>
                <p className="text-capitalize text-center pt-3">file picker</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
