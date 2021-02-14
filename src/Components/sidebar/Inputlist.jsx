import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Inputlist.css';
import { Link, NavLink } from 'react-router-dom';

const Inputlist = () => {
  return (
    <div className="input-list-item">
      <Nav className="flex-column">
        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}

        <Link
          className="input-list text-dark text-capitalize mt-2"
          to="/getstarted/introduction"
        >
          Introduction
        </Link>
        <Link
          className="input-list text-dark text-capitalize mt-2"
          to="/getstarted/theming"
        >
          Theming
        </Link>
        <Link
          className="input-list text-dark text-capitalize mt-2"
          to="/getstarted/migrating"
        >
          Migrating to v5
        </Link>
      </Nav>
    </div>
  );
};

export default Inputlist;
