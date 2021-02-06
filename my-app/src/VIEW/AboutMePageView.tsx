import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/homebutton.svg";
import Sebbe from "../images/Sebastian.jpg";
import LvlBar from "../COMPONENTS/lvlBar";
export const AboutMePageView = ({ newValue }) => {
  return (
    <div id="content">
      <div className="landingPage">
        <Logo id="homeButton" onClick={() => (window.location.pathname = "")} />
        <div id="textPicBar">
          <div id="infoBox">
            <img src={Sebbe} alt="" id="sebbeProfil" />
            <div id="bars">
              <LvlBar
                color={"orange"}
                nom={"Python"}
                width={"250px"}
                value={newValue}
                max={100}
              />
              <LvlBar
                color={"orange"}
                nom={"C"}
                width={"250px"}
                value={newValue}
                max={100}
              />
              <LvlBar
                color={"orange"}
                nom={"Solid Edge"}
                width={"250px"}
                value={newValue}
                max={100}
              />
              <LvlBar
                color={"orange"}
                nom={"React"}
                width={"250px"}
                value={newValue}
                max={100}
              />
            </div>
          </div>
          <p id="text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  );
};
