import React, { useState, useEffect } from "react";

import { AboutMePageView } from "../VIEW/AboutMePageView";

function AboutMePage() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const rate = 1;
  const period = 2;
  useEffect(() => {
    const interval = setInterval(() => {
      setOne((oldValue) => {
        const newValue = oldValue + rate;

        if (newValue === 50) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, period);
    const interval1 = setInterval(() => {
      setTwo((oldValue) => {
        const newValue = oldValue + rate;

        if (newValue === 70) {
          clearInterval(interval1);
        }

        return newValue;
      });
    }, period);
    const interval2 = setInterval(() => {
      setThree((oldValue) => {
        const newValue = oldValue + rate;

        if (newValue === 20) {
          clearInterval(interval2);
        }

        return newValue;
      });
    }, period);
    const interval3 = setInterval(() => {
      setFour((oldValue) => {
        const newValue = oldValue + rate;

        if (newValue === 100) {
          clearInterval(interval3);
        }

        return newValue;
      });
    }, period);
  }, []);
  return <AboutMePageView one={one} two={two} three={three} four={four} />;
}

export default AboutMePage;
