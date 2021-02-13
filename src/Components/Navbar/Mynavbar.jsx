import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import MessageIcon from '@material-ui/icons/Message';

import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Mynavbar = () => {
  return (
    <>
      <Navbar className="my-navbar fixed-top" expand="lg">
        <Navbar.Brand href="#home">
          {/* ******my logo******** */}
          <Link to="/">
            <img
              className="nav-logo"
              src={process.env.PUBLIC_URL + '/image/logo/logo.jpg'}
              alt="logo"
            />
            <span className="font-weight-bold text-success m-2">
              Ever-Green
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-5">
            <NavLink exact className="menu-item text-dark" to="/getstarted">
              Get Started
            </NavLink>
            <NavLink exact className="menu-item text-dark" to="/about">
              Components
            </NavLink>
            <NavLink exact className="menu-item text-dark" to="/skill">
              for designer
            </NavLink>
            <NavLink exact className="menu-item text-dark" to="/exprence">
              what's new
            </NavLink>
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
