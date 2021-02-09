import React, { useState, useEffect, useCallback } from "react";
import { ProjectPageView } from "../VIEW/ProjectPageView";
import { ProjectIndexView } from "../VIEW/projectTempPage";
import { useHistory } from "react-router-dom";
import routeUrls from "../COMPONENTS/navLink";

function ProjectPage() {
  const [index, setIndex] = useState("");
  const [update, setUpdate] = useState(false);
  const history = useHistory();
  const history2 = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  const handleOnClick2 = useCallback(() => setUpdate(false), [update]);

  useEffect(() => {
    console.log(index);
    if (update == true) {
      //history.push("/project" + String(index));
    }
    //setUpdate(false);
  }, [update]);
  return update ? (
    <ProjectIndexView
      index={index}
      handleOnClick={handleOnClick}
      handleOnClick2={handleOnClick2}
    />
  ) : (
    <ProjectPageView
      setIndex={setIndex}
      setUpdate={setUpdate}
      handleOnClick={handleOnClick}
    />
  );
}

export default ProjectPage;
