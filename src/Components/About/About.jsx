import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about">
        <Container>
          <Row>
            <Col md={4}>
              <Row>
                <h5 className="text-capitalize text-white p-4 mt-4 mb-2">
                  Works out of the box
                </h5>
                <p className="text-white">
                  Evergreen contains a set of polished React components that
                  work out of the box.
                </p>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <h5 className="text-capitalize text-white p-4 mt-4 mb-2">
                  Flexible & composable
                </h5>
                <p className="text-white">
                  Evergreen components are built on top of a React UI Primitive
                  for endless composability.
                </p>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <h5 className="text-capitalize text-white p-4 mt-4 mb-2">
                  Enterprise-grade
                </h5>
                <p className="text-white">
                  Evergreen features a UI design language for enterprise-grade
                  web applications.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
