"use client";
import React, { useState } from "react";
import First from "./steps/First";
import Third from "./steps/Third";
import Flowers from "./components/Flowers";
const StepFlow = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="relative z-50">
      {step === 1 && <First setStep={setStep} />}
      <div className={`${step === 1 && 'hidden'} `}>
        <Third setStep={setStep} />
      </div>
      {step === 2 && <Flowers />}
      {/* {step === 3 && <Third setStep={setStep} />} */}
    </div>
  );
};

export default StepFlow;
