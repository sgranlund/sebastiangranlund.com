import react from "react";
import { NavLink } from "react-router-dom";
import routeURLS from "./navLink";
import { ReactComponent as WorkIcon } from "../../images/cv.svg";
import { ReactComponent as ProjectIcon } from "../../images/project.svg";
import { ReactComponent as MeIcon } from "../../images/me.svg";
import "./navbar.scss"
const Navbar = () => {
  return (
    <ul className="mainMenu">
      <li className="menuItem">
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to={routeURLS.ABOUT}
          exact
        >
          <MeIcon id="icon" />
          ABOUT ME
        </NavLink>
      </li>
      <li className="menuItem">
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to={routeURLS.PROJECT}
          exact
        >
          <ProjectIcon id="icon" />
          PROJECTS
        </NavLink>
      </li>
      <li className="menuItem">
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to={routeURLS.WORK}
          exact
        >
          <WorkIcon id="icon" />
          CV
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
