import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/homebutton.svg";
import Gallery from "react-photo-gallery";
import { photos } from "../images/photos";

import Footer from "../COMPONENTS/footer";

export const ProjectPageView = ({ setIndex, setUpdate, handleOnClick }) => {
  return (
    <div>
      <div className="landingPage">
        <h2 className="title">Sebastian Granlund</h2>

        <Logo id="homeButton" onClick={handleOnClick} />
        <h1 id="title">Projects</h1>
        <div id="gallery">
          <Gallery
            photos={photos}
            onClick={(e, { index }) => (setIndex(index), setUpdate(true))}
          />
          ;
        </div>
        <Footer />
      </div>
    </div>
  );
};
