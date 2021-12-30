
import { ReactComponent as Logo } from "../images/granlund.svg";
import TextAnimation from "../COMPONENTS/Animations/textAnimation"
import Navbar from "../COMPONENTS/navbar";
import LogoCorner from "../COMPONENTS/logoCorner"
export const LandingPageView = ({}) => {
  return (
   
      <div className="landingPage">
      <LogoCorner onClick={()=>{}}text="SG"/>
     
       

    
      {<Navbar />}
    </div>
  );
};
