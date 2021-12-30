import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { AboutMePageView } from "../VIEW/AboutMePageView";

function AboutMePage() {
  
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  return (
    <AboutMePageView
      handleOnClick={handleOnClick}
    />
  );
}

export default AboutMePage;
