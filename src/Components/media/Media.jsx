import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import './media.css';

const Media = () => {
  return (
    <div className="media__height">
      <Container>
        <div className="justify-content-center align-items-center text-center">
          <VolumeUpIcon fontSize="large" />
        </div>
        <h3 className="text-center text-capitalize mt-4">
          Evergreen Related Media
        </h3>
        <Row className="mt-3">
          <a href="" className="media-click">
            <Card className="mycard m-4" style={{ width: '20rem' }}>
              <Card.Img
                src={process.env.PUBLIC_URL + '/image/card-img1.png'}
                variant="center"
              />
              <Card.Body>
                <h6 className="font-weight-bold">
                  Driving Adoption of a Design System
                </h6>
              </Card.Body>
            </Card>
          </a>

          <a href="" className="media-click">
            <Card className="mycard m-4" style={{ width: '20rem' }}>
              <Card.Img
                variant="center"
                src={process.env.PUBLIC_URL + '/image/card-img2.png'}
              />
              <Card.Body>
                <h6 className="font-weight-bold">Growing a Design System</h6>
              </Card.Body>
            </Card>
          </a>

          <a href="" className="media-click">
            <Card className="mycard m-4" style={{ width: '20rem' }}>
              <Card.Img
                variant="center"
                src={process.env.PUBLIC_URL + '/image/card-img5.jpg'}
              />
              <Card.Body>
                <h6 className="font-weight-bold">
                  It's ready for a Design System
                </h6>
              </Card.Body>
            </Card>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default Media;
