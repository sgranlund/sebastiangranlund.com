import container from "../../images/container.png";

const Project4 = ({}) => {
  return (
    <div>
      <h1 id="title">FTI-container </h1>
      <div id="projectCanvas">
        <img src={container} alt="" />
        <p>
          <br />
          <br />

          <br />
          <br />
          <a id="reportLink" href="">
            Link to full report
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/MF1040"
          >
            Link to course web MF1063
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project4;
