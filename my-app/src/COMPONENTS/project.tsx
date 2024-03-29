import "../CSS/project.css";

import Project0 from "./projects/project8";
import Project1 from "./projects/project0";
import Project2 from "./projects/project1";
import Project3 from "./projects/project2";
import Project4 from "./projects/project3";
import Project5 from "./projects/project4";
import Project6 from "./projects/project6";
import Project7 from "./projects/project7";
import { ReactComponent as Back } from "../images/backArrow.svg";
const Project = ({ index, handleOnClick2 }) => {

  console.log(index)
  return (
    <div id="projectCanvas">
      <Back id="goBack" onClick={handleOnClick2} />
      {index === 0 && <Project0 />}
      {index === 1 && <Project1 />}
      {index === 2 && <Project2 />}
      {index === 3 && <Project3 />}
      {index === 4 && <Project4 />}
      {index === 5 && <Project5 />}
      {index === 6 && <Project6 />}
      {index === 7 && <Project7 />}
  
    </div>
  );
};
export default Project;
