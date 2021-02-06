import React, { useState, useEffect } from "react";

import { AboutMePageView } from "../VIEW/AboutMePageView";

function AboutMePage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 0.5;

        if (newValue === 50) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 10);
  }, []);
  return <AboutMePageView newValue={value} />;
}

export default AboutMePage;
