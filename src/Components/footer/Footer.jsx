import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer-logo"
        src={process.env.PUBLIC_URL + '/image/logo/sudeep.png'}
        alt="sudeep bhandari"
      />
      <div className="footer-text float-sm-right">
        <p>
          Evergreen is an open source project developed at Segment.
          <span className="highlite">
            We’re hiring designers and engineers!
          </span>
          <br />
        </p>
        <div className="float-sm-right pt-4">
          © Sudeep Bhandari&nbsp;{new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
