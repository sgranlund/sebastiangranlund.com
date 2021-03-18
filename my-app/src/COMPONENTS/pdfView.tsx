import react from "react";
import { NavLink } from "react-router-dom";
import routeURLS from "./navLink";
import { ReactComponent as WorkIcon } from "../images/cv.svg";
import { ReactComponent as ProjectIcon } from "../images/project.svg";
import { ReactComponent as MeIcon } from "../images/me.svg";
const pdfViewer = () => {
  return (
    <div className="pdf">
      <iframe
        id="pdfFrame"
        src="https://docs.google.com/viewer?srcid=1xPvsQFE0Pm9AeO70UsLKbbHFpzErznwV&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
      ></iframe>
    </div>
  );
};
export default pdfViewer;
