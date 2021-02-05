import react from "react";
import { NavLink } from "react-router-dom";
import routeURLS from "./navLink";
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
          Home
        </NavLink>
      </li>
      <li className="menuItem">
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to={routeURLS.PROJECT}
          exact
        >
          Projects
        </NavLink>
      </li>
      <li className="menuItem">
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to={routeURLS.WORK}
          exact
        >
          Work Experience
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
