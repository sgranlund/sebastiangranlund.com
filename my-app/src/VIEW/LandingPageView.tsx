import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/homebutton.svg";
export const LandingPageView = ({}) => {
  return (
    <div>
      <div className="landingPage">
        <h2 className="title">Sebastian Granlund</h2>

        <Logo id="homeButton" onClick={() => (window.location.pathname = "")} />
      </div>
    </div>
  );
};
