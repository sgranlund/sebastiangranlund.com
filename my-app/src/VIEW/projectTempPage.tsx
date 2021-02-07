import { ReactComponent as Logo } from "../images/homebutton.svg";
import Project from "../COMPONENTS/project";
export const ProjectIndexView = ({ index, handleOnClick, handleOnClick2 }) => {
  return (
    <div>
      <div className="landingPage">
        <h2 className="title">Sebastian Granlund</h2>

        <Logo id="homeButton" onClick={handleOnClick} />
        <Project index={index} handleOnClick2={handleOnClick2} />
      </div>
    </div>
  );
};
