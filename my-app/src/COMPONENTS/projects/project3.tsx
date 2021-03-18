import container from "../../images/container.png";

const Project4 = ({}) => {
  return (
    <div>
      <h1 id="title">FTI-container </h1>
      <div id="projectCanvas">
        <img src={container} alt="" />
        <p>
          Togheter with FTI I with a group of 5 other people were tasked with
          developing a solution for increasing their container emptying
          effecieny. They wanted a solution whhich decreased the time they had
          to go out and empty their containers.
          <br />
          <br />
          Me and my team designed a compressing mechanism which at given times
          compresses the waste inside giving room for more. In the project we
          got a lot of hands on work with CAD (Solid Edge) designing the whole
          mechanism indside one of FTIs containers. We also practised iterative
          designa and reaserach methods for designing.
          <br />
          <br />
          <a
            id="reportLink"
            href="https://drive.google.com/file/d/1xPvsQFE0Pm9AeO70UsLKbbHFpzErznwV/view?usp=sharing"
          >
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
