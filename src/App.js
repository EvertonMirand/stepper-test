import { useState } from "react";
import Step from "./components/Step";
import Stepper from "./components/Stepper";

const steps = [
  {
    title: "Abc",
    label: "123",
  },
  {
    title: "bcd",
    label: "bcd",
  },
  {
    title: "bcd",
    label: "bcd",
  },
  {
    title: "bcd",
    label: "bcd",
  },
  {
    title: "bcd",
    label: "bcd",
  },
];

function App() {
  const [stepPosition, setStepPosition] = useState(0);

  console.warn(stepPosition);

  const onClickNext = () => {
    setStepPosition(stepPosition + 1);
  };

  const onClickBack = () => {
    stepPosition > 0 && setStepPosition(stepPosition - 1);
  };

  return (
    <div className="App">
      <Stepper
        step={stepPosition}
        steps={steps}
        titleComponent={({ title }) => <h1>{title}</h1>}
      >
        <Step titleComponent={() => <h1>{steps[0]}</h1>}>
          <div>Hey</div>
          <div>CAbeça de vento</div>
        </Step>
        <Step titleComponent={() => <h1>{steps[0]}</h1>}>hello</Step>
      </Stepper>
      <div>
        <button onClick={onClickBack} disabled={setStepPosition <= 0}>
          Voltar
        </button>

        {stepPosition === steps.length - 1 ? (
          <button>Confirmar</button>
        ) : (
          <button onClick={onClickNext}>Proximo</button>
        )}
      </div>
    </div>
  );
}

export default App;
