import CANDELA from "../../images/KTH_8.jpg";
import "./project.scss"
const Project3 = ({}) => {
  return (
    <div>
      <h1 id="projectTitle">Candela Autodocking </h1>
      <div id="projectCanvas">
        <img src={CANDELA} alt="" />
        <p>
          In collaboration with Candela, I togheter with 9 other students developed an autonomous boat.
          The platform was a pilot project for Candela, to be used as a base for their further development in autonomous boating.  <br />
          <br />
          During the project I further my knowledge in ROS and the programming of microcontrollers. 
          I also learned a great deal of how to collaborate in a big team.
          <br />
          <br />
          <a
            id="reportLink"
            href="https://drive.google.com/file/d/1KdBauJG5JPgi5sy5anAiZjEsCIhax-WR/view?usp=sharing"
          >
            Link to full report
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/MF2058?l=en"
          >
            Link to course web MF2058
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/MF2059?l=en"
          >
            Link to course web MF2059
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project3;
