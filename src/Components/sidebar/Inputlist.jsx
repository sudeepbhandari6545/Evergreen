import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Inputlist.css';
import { Link, NavLink } from 'react-router-dom';

const Inputlist = () => {
  return (
    <div className="input-list-item">
      <Nav className="flex-column fixed-left">
        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}

        <Link
          className="text-dark text-capitalize"
          to="/getstarted/introduction"
        >
          Introduction
        </Link>
        <Link className="text-dark text-capitalize" to="/getstarted/migrating">
          Theming
        </Link>
        <Link className="text-dark text-capitalize" to="/getstarted/theming">
          Migrating to v5
        </Link>
      </Nav>
    </div>
  );
};

export default Inputlist;
