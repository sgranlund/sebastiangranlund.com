import react from "react";
import { NavLink } from "react-router-dom";
import routeURLS from "./navLink";
import workIcon from "../images/portfolio.svg";
import projectIcon from "../images/project.svg";
import meIcon from "../images/me.svg";
const Navbar = () => {
  return (
    <ul className="mainMenu">
      <li className="menuItem">
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to={routeURLS.HOME}
          exact
        >
          <img src={meIcon} />
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
          <img src={projectIcon}></img>
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
          <img src={workIcon}></img>
          WORK
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
