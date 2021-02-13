import React from 'react';
import Inputlist from '../sidebar/Inputlist';
import Introduction from '../sidebar/Introduction/Introduction';
import { Switch, Route } from 'react-router-dom';
import Migrating from './migrating/Migrating';
import Theming from './theming/Theming';

const Getstarted = () => {
  return (
    <div>
      {/* <Inputlist /> */}
      <Introduction />
      <Switch>
        {/* <Route exact path="/" component={Introduction} /> */}
        <Route exact path="/Inputlist" component={Inputlist} />
        <Route exact path="/getstarted/migrating" component={Migrating} />
        <Route exact path="/getstarted/theming" component={Theming} />
      </Switch>
    </div>
  );
};

export default Getstarted;
