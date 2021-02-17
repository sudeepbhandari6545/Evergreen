import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { Card } from '@material-ui/core';
import './new.css';

const New = () => {
  return (
    <>
      <div className="main-div">
        <div className="main-heading">
          <div className="heading">
            <h5 className="text-uppercase">update</h5>
            <h1 className="">What's New in Evergreen</h1>
            <p className="text-justify pt-3">
              Evergreen is a living system, which means we are constently making
              updates to it. You can learn more about those changes, and up
              coming <br />
              ones here.
            </p>
            <div className="mt-4">
              <Button
                href="https://github.com/sudeepbhandari6545"
                target="_blank"
                variant="light"
              >
                <span className="pr-2 p-1">
                  <GitHubIcon fontSize="small" />
                </span>
                View ChangeLog
              </Button>
            </div>
          </div>
        </div>
        {/* second part */}
        <div className="second-div">
          <div className="justify-content-center align-items-center text-center pt-5">
            <VolumeUpIcon fontSize="large" />
          </div>
          <h4 className="text-center pt-3 pb-5">Major Releases</h4>

          <div className="second-heading">
            <Card style={{ width: '65rem', border: '2px' }}>
              <h4 className="pl-5 pt-2">Evergreen v5.0.0</h4>
              <p className="pl-5 pt-2">Augest,2020</p>
              <p className="text-justify pl-5 pt-2 ">
                Evergreen v5 is a general health check for the framework. We
                took a look at what makes Evergreen tick and compared it to new
                standards. We made several updates to try and push the DevX of
                using the framework to be a lot more natural and robust. Below
                you can see some of the changes we made that may require some
                work on your side to to upgrade to v5.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
