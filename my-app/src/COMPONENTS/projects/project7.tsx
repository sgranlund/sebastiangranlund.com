import stolen from "../../images/stolen.png";
import "./project.scss"
const Project3 = ({}) => {
  return (
    <div>
      <h1 id="projectTitle">Genève - A materials project </h1>
      <div id="projectCanvas">
        <img src={stolen} alt="" />
        <p>
          During my second year I together with 3 other students designed a
          chair. The aim of this project was to with a specific customer segment
          in mind design a suiting chair when it comes to prices, design, solid
          mechanics, material and functions. We designed a chair that was then
          deemed trendy and would be attractive to a 30-year-old living I the
          city. A mood board was after this made too get a clear view on the
          design aesthetics. Multiple concepts were made and iteratively we
          ended up with a chair called Genève. <br />
          <br />
          In this course we learned EduPack, a program which is very useful when
          working with materials. Also, the CAD knowledges where vastly
          improved.
          <br />
          <br />
          <a
            id="reportLink"
            href="https://drive.google.com/file/d/1hk9Y8gElW4ChzDYUh7r7bdYSarpU_PKt/view?usp=sharing"
          >
            Link to full report
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/MF1063"
          >
            Link to course web MF1063
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project3;
