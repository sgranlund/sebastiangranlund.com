import { ReactComponent as Logo } from "../images/homebutton.svg";
import Project from "../COMPONENTS/project";
export const ProjectIndexView = ({ index, handleOnClick, handleOnClick2 }) => {
  return (
    <div>
      <div className="landingPage">
  

        
        <Project index={index} handleOnClick2={handleOnClick2} />
      </div>
    </div>
  );
};
