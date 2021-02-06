import React, { useState, useEffect } from "react";
import { ProjectPageView } from "../VIEW/ProjectPageView";

function ProjectPage() {
  const [index, setIndex] = useState("");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    console.log(index);
    if (update == true) {
      window.location.pathname = "/project" + String(index);
    }
    setUpdate(false);
  }, [update]);
  return <ProjectPageView setIndex={setIndex} setUpdate={setUpdate} />;
}

export default ProjectPage;
