import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './introduction.css';
import Inputlist from '../Inputlist';

const Introduction = () => {
  return (
    <>
      <Inputlist />

      <div className="introduction">
        <Row>
          <Col>
            <div className="pl-5 m-1 introduction-text ">
              <h4 className="text-capitalize font-weight-bold">introduction</h4>
              <p>
                Evergreen is a pragmatic UI kit for building evolving products
                on the web. It is built and maintained open-source by Segment.
              </p>
              <br />
              <h4 className="text-capitalize font-weight-bold">
                Core beliefs of Evergreen
              </h4>
              <p>
                Evergreen is built on the belief that you can never predict all
                future requirements, only prepare for it. Instead of creating
                fixed configurations that work today, Evergreen promotes
                building systems that anticipate new and changing design
                requirements. Evergreen is built on the belief that things
                should work out of the box with smart defaults and offer full
                control when needed. For example, Evergreen implements most
                components on top of a Box primitive which allows for a lot of
                customization.
                <br /> Evergreen is built on the belief that using Evergreen and
                contributing to Evergreen should be a pleasant experience. We
                prioritize documentation and all the tools for a solid developer
                experience. We advocate respect and inclusivity in our writings
                and interactions.
              </p>
              <br />
              <h4 className="text-capitalize font-weight-bold">
                Install and use components
              </h4>
              <p>
                Evergreen is made up of multiple components and tools which you
                can import one by one. All you need to do is install the
                evergreen-ui package:
                <textarea
                  type="text"
                  className="textarea"
                  placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
                ></textarea>
              </p>
              <p>
                A working version, assuming you are using something like Create
                React App, might look like this:
              </p>
              <textarea
                type="text"
                className="textarea"
                placeholder="import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'evergreen-ui'
ReactDOM.render(
  <Button>I am using 🌲 Evergreen!</Button>,
  document.getElementById('root')
)"
              ></textarea>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Introduction;
