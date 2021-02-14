import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Inputlist from '../Inputlist';
import './theming.css';

const Theming = () => {
  return (
    <>
      <Inputlist />
      <div className="introduction" id="theming">
        <Row>
          <Col>
            <div className="pl-5 m-1 theming-text">
              <h4 className="text-capitalize font-weight-bold">
                Theme Provider
              </h4>
              <p>
                In order to style your app, you must wrap it in the
                ThemeProvider component. This component uses the React.Context
                API under the hood.
                <br />
                In order to use the ThemeProvider component, you must pass it a
                value prop that is a Theme object.
                <br /> Please note: at this moment in time, theming isn't fully
                supported yet! There are certain attributes of the Theme object
                that are required so please be sure you have them when providing
                a custom theme.
              </p>
              <br />
              <h4 className="text-capitalize font-weight-bold">
                Simple theming
              </h4>
              <p>
                The ThemeProvider Component, you can either override the default
                styles(shown below) or use your own theme completely. You can
                add anything you want to the theme object, as long as you have
                required properties.
              </p>
              <textarea
                type="text"
                className="textarea"
                placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
              ></textarea>
              <br />
              <h4 className="text-capitalize font-weight-bold">
                Nested theming
              </h4>

              <p>
                You can theme certain parts of your app differently by nesting
                the ThemeProvider components.
              </p>
              <textarea
                type="text"
                className="textarea"
                placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
              ></textarea>

              <br />
              <h4 className="text-capitalize font-weight-bold">
                Using withTheme
              </h4>
              <p>
                The withTheme HOC allows you to easily pass the theme object
                down to your components.
              </p>
              <textarea
                type="text"
                className="textarea"
                placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
              ></textarea>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Theming;
