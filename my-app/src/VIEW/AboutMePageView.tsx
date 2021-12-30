import Sebbe from "../images/Sebastian.jpg";
import Footer from "../COMPONENTS/Footer/footer";
import LogoCorner from "../COMPONENTS/logoCorners/logoCorner";

export const AboutMePageView = ({ handleOnClick }) => {
  return (
    <div id="content">
      <div className="landingPage">
      <LogoCorner text="SG" onClick= {handleOnClick} />
        <div id="textPicBar">
          <h1 className="title">About me</h1>
        
          <div id="text">
            <p id="para">
              I'm a 5th year mechtronics student who like to challenge myself.
              Wherther that's on a pair of skis in the mountains or working on a
              new project.
              <br />
              <br />
              When not skiing or working on the next project. I enjoy reading
              books to further develope my knowledge or participate in a new
              sport of some sort.
              <br />
              <br />
              In a team I'm usually the one who takes charge. 
              I like to voice my opinions, but I'm not the one who gets stubborn and only supports my own ideas. 
              I keep an opened mind and tries includes everyone in the discussion.
            </p>
            <img src={Sebbe} id="skidsebbe" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
