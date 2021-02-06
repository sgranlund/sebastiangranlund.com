import React, { useState, useEffect, useCallback } from "react";
import { ProjectPageView } from "../VIEW/ProjectPageView";

import { useHistory } from "react-router-dom";
function ProjectPage() {
  const [index, setIndex] = useState("");
  const [update, setUpdate] = useState(false);
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  useEffect(() => {
    console.log(index);
    if (update == true) {
      window.location.pathname = "/project" + String(index);
    }
    setUpdate(false);
  }, [update]);
  return (
    <ProjectPageView
      setIndex={setIndex}
      setUpdate={setUpdate}
      handleOnClick={handleOnClick}
    />
  );
}

export default ProjectPage;
