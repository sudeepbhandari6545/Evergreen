import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import GitHubIcon from '@material-ui/icons/GitHub';
import './home.css';
import Media from '../media/Media';
import About from '../About/About';

const Home = () => {
  return (
    <>
      <div className="home-background" id="Home">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Row className="home-details">
                <h6 className="font-weight-bold text-uppercase  text-success mb-4">
                  Evergreen
                </h6>
                <h1>A Design System for the Web</h1>
                <p>
                  Evergreen is a React UI Framework for building ambitious
                  products on the web.
                </p>
                <div className="mt-4">
                  <Button className="text-center p-2" variant="primary">
                    Browse Components
                  </Button>
                  <Button
                    href="https://github.com/sudeepbhandari6545"
                    target="_blank"
                    className="home-git-button"
                    variant="white"
                  >
                    <span className="pr-2">
                      <GitHubIcon fontSize="small" />
                    </span>
                    GITHUB
                  </Button>
                </div>
              </Row>
            </Col>
            {/* home image */}
            <Col xs={12} md={6}>
              <Row>
                <Image
                  className="home-img mt-5"
                  src={process.env.PUBLIC_URL + '/image/energreen-home.png'}
                  thumbnail
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <About />
      <Media />
    </>
  );
};

export default Home;
