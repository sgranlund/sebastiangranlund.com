import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/homebutton.svg";
import Navbar from "../COMPONENTS/navbar";
export const LandingPageView = ({}) => {
  return (
    <div>
      <div className="landingPage">
        <h2 className="title">Sebastian Granlund</h2>

        <Logo id="homeButton" onClick={() => (window.location.pathname = "")} />
      </div>

      {<Navbar />}
    </div>
  );
};
