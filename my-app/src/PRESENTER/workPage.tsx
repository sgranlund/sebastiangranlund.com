import { WorkPageView } from "../VIEW/WorkPageView";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
function WorkPage() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  return <WorkPageView handleOnClick={handleOnClick} />;
}

export default WorkPage;
