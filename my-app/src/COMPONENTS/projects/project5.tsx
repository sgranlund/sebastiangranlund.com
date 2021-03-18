import montBlanc from "../../images/montBlanc.jpg";

const Project1 = ({}) => {
  return (
    <div>
      <h1 id="title">Mount Blanc mobile light</h1>
      <div id="projectCanvas">
        <img src={montBlanc} alt="" />
        <p>
          During my first year in my Design Engineer degree me and 3 other
          students designed a mobile light. The objective was to design a mobile
          light for Mount Blancs customer segment. The result was a pocket light
          with design close to the famous Mount Blanc pencils. <br />
          <br /> In this project I understood the importance of iterating during
          product development. It was also my first time with CAD- Solid Edge an
          eye opening project understanding the power of CAD.
        </p>
      </div>
    </div>
  );
};
export default Project1;
