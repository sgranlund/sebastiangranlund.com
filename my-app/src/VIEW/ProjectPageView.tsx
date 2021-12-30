import Gallery from "react-photo-gallery";
import { photos } from "../images/photos";
import LogoCorner from "../COMPONENTS/logoCorners/logoCorner"
import Footer from "../COMPONENTS/Footer/footer";

export const ProjectPageView = ({ setIndex, setUpdate, handleOnClick }) => {
  return (
    <div>
      <div className="landingPage">
        <LogoCorner text="SG" onClick= {handleOnClick} />

        <h1 className="title">Projects</h1>
        <div id="gallery">
          <Gallery
            photos={photos}
            onClick={(e, { index }) => (setIndex(index), setUpdate(true))}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
