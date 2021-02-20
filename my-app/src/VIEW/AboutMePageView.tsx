import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/homebutton.svg";
import Sebbe from "../images/Sebastian.jpg";
import skidor from "../images/skidsebbe.jpg";
import LvlBar from "../COMPONENTS/lvlBar";
import Footer from "../COMPONENTS/footer";

export const AboutMePageView = ({ one, two, three, four, handleOnClick }) => {
  return (
    <div id="content">
      <div className="landingPage">
        <Logo id="homeButton" onClick={handleOnClick} />

        <div id="textPicBar">
          <h1 id="title">About me</h1>
          <div id="infoBox">
            <img src={Sebbe} alt="" id="sebbeProfil" />
            <div id="bars">
              <LvlBar
                color={"orange"}
                nom={"Python, C, C++"}
                width={"250px"}
                value={one}
                max={100}
              />
              <LvlBar
                color={"orange"}
                nom={"ROS, Robotic Operating System"}
                width={"250px"}
                value={two}
                max={100}
              />
              <LvlBar
                color={"orange"}
                nom={"CAD, Solid Edge"}
                width={"250px"}
                value={three}
                max={100}
              />
              <LvlBar
                color={"orange"}
                nom={"Webdev, Javscript, React, Typescript, GraphQL"}
                width={"250px"}
                value={four}
                max={100}
              />
            </div>
          </div>
          <div id="text">
            <p id="para">
              I'm a 4th year mechtronics student who like to challenge myself.
              Wherther that's on a pair of skis in the mountains or working on a
              new project is equally rewarding for me.
              <br />
              <br />
              When I'm not skiing or working on my next project.
              <br />
              <br />
              In a group I'm usually the one who takes charge. This is not
              because I love having power over others, it's for the reason that
              I do not like to sit around rolling my thumbs.
            </p>
            <img src={skidor} id="skidsebbe" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
