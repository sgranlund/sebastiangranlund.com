import TEG from "../../images/TEG.jpg";
import "./project.scss"

const Project7 = ({}) => {
  return (
    <div>
      <h1 id="projectTitle">Bachelor Thesis Project </h1>

      <div id="projectCanvas">
        <img src={TEG} alt="" />
        <p>
          During my third year I did my Bachelor Thesis Project. The Thesis was
          made at Bristol University Reasearching improvements regarding Solar
          Panels. The research was regarding the possiblity to use TEGs to
          increase the power output from a Solar Panel modules. Using the waste
          heat to generate power. Using Ansys Fluent simulation of this was
          made.
          <br />
          <br />
          <br />
          <br />
          <a
            id="reportLink"
            href="https://drive.google.com/file/d/1o8N81GyXx-zSbltFet75WI3LUKH56RW_/view?usp=sharing"
          >
            Bachelor Thesis Report
          </a>
          <br />
          <br />
          <a id="reportLink" href="https://www.bristol.ac.uk/">
            Link to Bristol University
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project7;
