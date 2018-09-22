import React from 'react';
import { Typography } from '@material-ui/core';

const IBM = () => {
  return (
    <Typography component="div">
      <b>IBM Connections, Dublin Ireland (June 2015 – September 2017)</b><br />
      Front-End, Connections new notification UI looks (6 November 2016 to Now)<br />
      <ul>
        <li>Team of four developers including me were in charge of developing the new notification UI looks for the next Connections (Enterprise Social Solution) release.</li>
        <li>Required to do code reviews, unit and end to end tests for the project.</li>
        <li>Used the latest NodeJS and JavaScript technologies stack for development namely Gulp, Webpack, Karma, Lerna, Protractor, ReactJS (Redux, Router, Enzyme), RxJS, Babel, Jasmine JS, ES6, PhantomJS, Express(NodeJS), SASS (CSS, CSS3).</li>
        <li>Used the CI (selenium) and CD pipeline to the tests and deploy our module (notification UI) to the artifactory.</li>
        <li>Used GitHub as our project source control and Kanban Agile for our development approach.</li>
      </ul>
      <br />
      Full-Stack, Connections integration with Office 365, SharePoint 2013 (18 Jun 2015 to 5 November 2016)
      <ul>
        <li>Team of four developers including me were in charge of researching ways to integrate Office 365 and SharePoint 2013 with Connections.</li>
        <li>Required to do code reviews, unit and end to end tests for the project.</li>
        <li>Technologies used for integrating Office365 were Java 1.6 (Servlet, Spring 3.0, JSON Web Token, Zookeeper, selenium, JUnit), WOPI (Web Application Open Platform Interface) and Office Web Apps server.</li>
        <li>Technologies used for integrating SharePoint 2013 were HTML (IFrame tag) concept, URL-Rewrite IIS, JavaScript (Dojo 1.8 toolkit, XML, JSON, JQuery, Ajax), CSS.</li>
        <li>Used CI(selenium) pipeline to run our tests.</li>
        <li>Used Real Team Concert (RTC) as our project source control and Kanban Agile for our development approach.</li>
      </ul>
    </Typography>
  );
}
export default IBM;