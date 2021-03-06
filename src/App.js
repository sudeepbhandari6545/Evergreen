import React from 'react';
import Mynavbar from './Components/Navbar/Mynavbar';
import Home from './Components/home/Home';
import About from './Components/About/About';
import Media from './Components/media/Media';
import Footer from './Components/footer/Footer';
import Getstarted from './Components/sidebar/Getstarted';
import Introduction from './Components/sidebar/Introduction/Introduction';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Migrating from './Components/sidebar/migrating/Migrating';
import Theming from './Components/sidebar/theming/Theming';
import Component from './Components/pages/Component';
import Designer from './Components/designer/Designer';
import New from './Components/new/New';

const App = () => {
  return (
    <>
      <Mynavbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/component" component={Component} />
        <Route exact path="/designer" component={Designer} />
        <Route exact path="/new" component={New} />

        <Route exact path="/getstarted" component={Getstarted} />
        <Route exact path="/getstarted/introduction" component={Introduction} />
        <Route exact path="/getstarted/migrating" component={Migrating} />
        <Route exact path="/getstarted/theming" component={Theming} />
        <Redirect to="/" />
      </Switch>
      <Footer />

      {/* <Mynavbar />
      <Home />
      <br />
      <About />
      <br />
      <Media />
      <Footer /> */}
      {/* <Getstarted /> */}
    </>
  );
};

export default App;
