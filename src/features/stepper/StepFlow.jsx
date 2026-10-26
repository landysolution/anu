"use client";

import { useState } from "react";
import First from "./steps/First";
import Letter from "./steps/Letter";
import Flowers from "./components/Flowers";

export default function StepFlow() {
  const [step, setStep] = useState(1);

  return (
    <div className="relative z-50">
      {step === 1 && <First setStep={setStep} />}

      <div className={step === 2 ? "" : "hidden"}>
        <Letter setStep={setStep} />
      </div>

      {step === 3 && <Flowers />}
      
    </div>
  );
}