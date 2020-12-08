import React from "react";
import { Container } from "./stepper-styled";
import StepperList from "./StepperList";

export default function Stepper({
  children,
  step,
  steps = [],
  titleComponent: TitleComponent = () => null,
}) {
  const Title = () =>
    TitleComponent && <TitleComponent title={steps[step]?.title} />;
  const childrenArray = React.Children.toArray(children);
  const stepperList = steps.map((step) => step.label);

  return (
    <Container>
      <Title />
      <StepperList steps={stepperList} currentStep={step} />
      {childrenArray[step]}
    </Container>
  );
}
