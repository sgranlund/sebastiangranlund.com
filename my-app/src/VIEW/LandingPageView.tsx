import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/granlund.svg";

import Navbar from "../COMPONENTS/navbar";
export const LandingPageView = ({}) => {
  return (
    <div>
      <div className="landingPage">
        <h2 className="title">Sebastian Granlund</h2>

        <Logo
          id="homeButtonLand"
          onClick={() => (window.location.pathname = "")}
        />
      </div>
      {<Navbar />}
    </div>
  );
};
