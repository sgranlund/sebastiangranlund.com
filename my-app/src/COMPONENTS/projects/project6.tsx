import plant from "../../images/plantWatering.jpg";

const Project6 = ({}) => {
  return (
    <div>
      <h1 id="title">Automatic plant watering system </h1>
      <div id="projectCanvas">
        <img src={plant} alt="" />
        <p>
          <br />
          <br />

          <br />
          <br />
          <a id="reportLink" href="http://timelinesebem.herokuapp.com/">
            Website
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/DH2642"
          >
            Link to course web DH2642
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project6;
