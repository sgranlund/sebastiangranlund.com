import plant from "../../images/plantWatering.jpg";
import "./project.scss"
const Project6 = ({}) => {
  return (
    <div>
      <h1 id="projectTitle">Automatic plant watering system </h1>
      <div id="projectCanvas">
        <img src={plant} alt="" />
        <p>
          The Automatic Plant Watering System was a project I made to keep my
          plant hydrated when I’m out of town. The idea is to have moisture
          sensors in the plants hooked up to an Arduino which is connected to a
          pump in a water tank. When the moisture is to low, the Arduino signals
          the pumps and they feed water to the plants.
          <br />
          <br />
          In addition to just watering the plants it’s also connected to an
          application which makes it able for me to in real time see the
          moisture of the plants. This is a good verifier if I’m ever worried
          the plants aren’t getting enough water.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};
export default Project6;
