import React from "react";
import ReactDOM from "react-dom";

import "./CSS/landingPage.css";
import "./CSS/homeButtonAni.css";
import "./CSS/aboutMe.css";
import "./CSS/projectPage.css";
import LandingPage from "./PRESENTER/landingPage";
import ProjectPage from "./PRESENTER/projectPage";
import AboutMePage from "./PRESENTER/aboutMePage";
import WorkPage from "./PRESENTER/workPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import routeUrls from "./COMPONENTS/navLink";
import "./CSS/index.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={routeUrls.PROJECT}>
          <ProjectPage />
        </Route>
        <Route path={routeUrls.ABOUT}>
          <AboutMePage />
        </Route>
        <Route path={routeUrls.WORK}>
          <WorkPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
