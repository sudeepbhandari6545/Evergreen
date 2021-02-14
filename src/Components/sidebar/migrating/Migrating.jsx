import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Inputlist from '../Inputlist';
import './migrating.css';

const Migrating = () => {
  return (
    <>
      <Inputlist />
      <div>
        <div className="introduction" id="migrating">
          <Row>
            <Col>
              <div className="pl-5 m-1 migrating-text">
                <h4 className="text-capitalize font-weight-bold">
                  Evergreen v5 Migration Guide
                </h4>
                <p>
                  Evergreen v5 is a general health check for the framework. We
                  took a look at what makes Evergreen tick and compared it to
                  new standards. We made several updates to try and push the
                  DevX of using the framework to be a lot more natural and
                  robust. Below you can see some of the changes we made that may
                  require some work on your side to to upgrade to v5.
                </p>
                <br />
                <h6 className="text-capitalize font-weight-bold">
                  Breaking Changes
                </h6>
                <div>
                  <ul>
                    <li>
                      <a href="">innerRef is gone use ref </a>
                    </li>
                    <li>
                      <a href="">Popover triggers</a>
                    </li>
                    <li>
                      <a href="">Importing and using Icons</a>
                    </li>
                    <li>
                      <a href="">Downshift v5</a>
                    </li>
                    <li>
                      <a href="">Switch no longer manage state</a>
                    </li>
                    <li>
                      <a href="">Radio and RadioGroup onChange arguments</a>
                    </li>
                  </ul>
                </div>
                <br />
                <h6 className="text-capitalize font-weight-bold">
                  innerRef no longer supported
                </h6>
                <p>
                  Previous versions of ui-box and Evergreen relied on passing
                  around innerRef props to forward refs to the underlying
                  components. We've centralized on the standard way of using
                  refs in React: passing a ref directly on the component. Almost
                  all Evergreen components support forwarding refs. Note: If you
                  find a component that you think should be forwarding refs and
                  isn't, please open an issue on GitHub!
                </p>
                <textarea
                  type="text"
                  className="textarea"
                  placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
                ></textarea>

                <h6 className="text-capitalize font-weight-bold">
                  Popover triggers
                </h6>
                <p>
                  With the removal of innerRef in Evergreen, there are some
                  potential changes required with implementations of Popover.
                  The direct child of a Popover must be a component that can
                  forward refs to a DOM node. If you are using class components,
                  you'll need to update your code. We've found the easiest path
                  is to use an Evergreen component – which already handle ref
                  forwarding. You can see an example below:
                </p>
                <textarea
                  type="text"
                  className="textarea"
                  placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
                ></textarea>

                <h6 className="text-capitalize font-weight-bold">
                  Importing and using Icons
                </h6>
                <p>
                  Previously, the way we shipped icons in evergreen-ui@^4 would
                  significantly bloat bundle sizes. Even if you only used 1 icon
                  from Evergreen, you would ship all 400+ icons to your
                  end-users. In evergreen-ui@^4.26.0 we introduced a new way to
                  import icons that would lead to some amount of tree-shaking.
                  Finally, in evergreen-ui@^5.0.0 we have full tree-shaking
                  support. This does impact the way you import icons (import
                  from 'evergreen-ui') and pass icons as props to other
                  components like Button, IconButton, Menu.Item, OrderedList
                  (and Ol), UnorderedList (and Ul). We updated all the
                  components that internally were using the Icon component and
                  updated the prop to no longer expect a string but a React
                  node. We also removed the Icon component from Evergreen
                  itself. This means that all places you were using this
                  component, you will need to update to use the new exported
                  icons.
                </p>
                <textarea
                  type="text"
                  className="textarea"
                  placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
                ></textarea>
                <h6 className="text-capitalize font-weight-bold">
                  Downshift v5
                </h6>
                <p>
                  We upgraded the version of Downshift we use internally in
                  Evergreen from version 3.3.1 to 5.2.0. As part of this some
                  component props have been deprecated and are no longer
                  available in the components that use Downshift.
                </p>
                <textarea
                  type="text"
                  className="textarea"
                  placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
                ></textarea>
                <h6 className="text-capitalize font-weight-bold">
                  Switch is uncontrolled
                </h6>
                <p>
                  To unify usage of form components across Evergreen, we updated
                  Switch to more closely match other components, such as
                  Checkbox. When using the component it is now required that you
                  pass the component an onChange callback method when wanting to
                  manage state
                </p>
                <textarea
                  type="text"
                  className="textarea"
                  placeholder="$ yarn add evergreen-ui
                            # or
                      $ npm install --save evergreen-ui"
                ></textarea>
                <h6 className="text-capitalize font-weight-bold">
                  Radio and RadioGroup onChange arguments
                </h6>
                <p>
                  RadioGroup's onChange handler now bubbles the event directly
                  from children Radio inputs instead of bubbling the value. This
                  change was made to help improve the internal consistency with
                  onChange handlers and to more closely match onChange event
                  signature expecations.
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
      </div>
    </>
  );
};

export default Migrating;
