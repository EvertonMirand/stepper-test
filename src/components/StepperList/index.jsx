import React from "react";

import { ProgressBar } from "./styles";

const StepperList = ({
  steps = [],
  currentStep,
  size = 30,
  lineWidth = 100,
}) => {
  return (
    <ProgressBar className="progressbar" size={size} lineWidth={lineWidth}>
      {steps.map((step, index) => (
        <li className={currentStep >= index && "active"}>{step}</li>
      ))}
    </ProgressBar>
  );
};

export default StepperList;
