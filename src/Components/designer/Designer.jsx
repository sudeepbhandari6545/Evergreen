import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import StarRateIcon from '@material-ui/icons/StarRate';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Card from 'react-bootstrap/Card';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Container from 'react-bootstrap/Container';
import './designer.css';

const Designer = () => {
  return (
    <div className="" id="designer">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <div className="designer-heading">
                <h2 className="font-weight-bold mt-5 p-2">
                  Evergreen for Designers
                </h2>
                <p className="designer-pra">
                  Design products and side-projects with our official <br />
                  design resource for the Evergreen community.
                </p>
              </div>
              <div className="mt-4 ml-2">
                <Button className="text-center p-2" variant="primary">
                  <span>
                    <WidgetsIcon fontSize="small" className="mr-2 p-1" />
                  </span>
                  Download Figma File
                </Button>
                <br />
                <Button
                  href="https://github.com/sudeepbhandari6545"
                  target="_blank"
                  className="heading-btn text-center mt-3"
                  variant="white"
                >
                  <span className="pr-2">
                    <StarRateIcon fontSize="small" />
                  </span>
                  Download Sketch UI kit
                </Button>
                <p className="mt-5">
                  This work is licensed under a:
                  <a href="">
                    Creative Commons Atributies-NonCommercial ShareALike 4.0
                    International License
                  </a>
                </p>
              </div>
            </Row>
          </Col>
          {/******designer image *******/}
          <Col xs={12} md={6}>
            <Row>
              <div className="designer-img">
                <Image
                  className="d-img"
                  src={process.env.PUBLIC_URL + '/image/designer-img.png'}
                  thumbnail
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* ********designer-section****** */}

      <div className="designer-blog">
        <Container>
          <div className="mt-5">
            <div className="justify-content-center align-items-center text-center pt-5">
              <VolumeUpIcon fontSize="large" />
            </div>
            <h3 className="text-center text-capitalize mt-4">
              From Our Design Blog
            </h3>
            {/* ************From Our Design Blog*********** */}
            <div className="pt-5 pl-5">
              <Row>
                <a href="" className="media-click">
                  <Card
                    className="designer-card m-2 "
                    style={{ width: '18rem', height: '15rem' }}
                  >
                    <Card.Img
                      src={process.env.PUBLIC_URL + '/image/d-card-img.jpeg'}
                      variant="center"
                      className="d-card-image"
                    />
                    <Card.Body>
                      <h6 className="font-weight-bold">How we Hire Designer</h6>
                    </Card.Body>
                  </Card>
                </a>

                <a href="" className="media-click">
                  <Card
                    className="designer-card m-2"
                    style={{ width: '18rem', height: '15rem' }}
                  >
                    <Card.Img
                      variant="center"
                      src={process.env.PUBLIC_URL + '/image/d-card-img2.jpg'}
                      className="d-card-image"
                    />
                    <Card.Body>
                      <h6 className="font-weight-bold">Tips to design</h6>
                    </Card.Body>
                  </Card>
                </a>

                <a href="" className="media-click">
                  <Card
                    className="designer-card m-2"
                    style={{ width: '18rem', height: '15rem' }}
                  >
                    <Card.Img
                      variant="center"
                      src={process.env.PUBLIC_URL + '/image/d-card-img3.jpeg'}
                      className="d-card-image"
                    />
                    <Card.Body>
                      <h6 className="font-weight-bold">
                        ways to Design system Quickly
                      </h6>
                    </Card.Body>
                  </Card>
                </a>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Designer;
