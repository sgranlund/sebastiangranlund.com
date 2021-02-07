import takbox from "../../images/takboxRosa.jpg";

const Project0 = ({}) => {
  return (
    <div>
      <h1 id="title">Takbox </h1>
      <div id="projectCanvas">
        <img src={takbox} alt="" />
        <p>
          In the second year of my Design Engineer degree I together with 5
          other students designed a roof box. The objective was to identify an
          already existing mechanism and improve it. Usually a roof top box
          opens from one side but with our improved mechanism it opens from both
          sides and also along the longest side which helps the accessibility of
          the stored goods. During the project the focus to make the mechanism
          as robust as possible doing solid mechanic calculation to prove this.
          <br />
          <br />
          In this project I practised my skills in Solid Edge and MatLab.
          <br />
          <br />
          <a id="reportLink" href="">
            Link to full report
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/MF1064"
          >
            Link to course web MF1064
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project0;
