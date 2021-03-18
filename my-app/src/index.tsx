import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./CSS/landingPageNew.css";
import "./CSS/homeButtonAni2.css";
import "./CSS/aboutMeNew.css";
import "./CSS/projectPage.css";
import "./CSS/indexNew.css";
import LandingPage from "./PRESENTER/landingPage";
import ProjectPage from "./PRESENTER/projectPage";
import AboutMePage from "./PRESENTER/aboutMePage";
import WorkPage from "./PRESENTER/workPage";
import PDF from "./COMPONENTS/pdfView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import routeUrls from "./COMPONENTS/navLink";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path={routeUrls.TEST}>
          <PDF />
        </Route>
        <Route path={routeUrls.PROJECT}>
          <ProjectPage />
        </Route>
        <Route path={routeUrls.ABOUT}>
          <AboutMePage />
        </Route>
        <Route path={routeUrls.WORK}>
          <WorkPage />
        </Route>
        <Route path={routeUrls.HOME}>
          <LandingPage />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
