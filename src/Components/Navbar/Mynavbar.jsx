import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import MessageIcon from '@material-ui/icons/Message';

import './Navbar.css';

const Mynavbar = () => {
  return (
    <>
      <Navbar className="my-navbar" expand="lg">
        <Navbar.Brand href="#home">
          {/* ******my logo******** */}
          <a href="#Home">
            <img
              className="nav-logo"
              src={process.env.PUBLIC_URL + '/image/logo/logo.jpg'}
              alt="logo"
            />
            <span className="font-weight-bold text-success m-2">
              Ever-Green
            </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-5">
            <Nav.Link className="menu-item text-dark" href="#home">
              Get Started
            </Nav.Link>
            <Nav.Link className="menu-item text-dark" href="#aboutme">
              Components
            </Nav.Link>
            <Nav.Link className="menu-item text-dark" href="#skill">
              for designer
            </Nav.Link>
            <Nav.Link className="menu-item text-dark" href="#Exprence">
              what's new
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          href="https://www.facebook.com"
          className="nav-button mr-2"
          target="_blank"
          variant="white"
        >
          <span className="pr-2">
            <MessageIcon fontSize="small" />
          </span>
          DISCUSSION
        </Button>
        <Button
          href="https://github.com/sudeepbhandari6545"
          target="_blank"
          className="nav-button"
          variant="white"
        >
          <span className="pr-2">
            <GitHubIcon fontSize="small" />
          </span>
          GITHUB
        </Button>
      </Navbar>
    </>
  );
};

export default Mynavbar;
