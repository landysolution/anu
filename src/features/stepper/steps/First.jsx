"use client";
import React, { useState } from "react";
import { Mascot } from "page-mascot";
import Button from "@/components/ui/Button";
import ChangingText from "../components/ChangingText";
import PixelSnow from "@/components/background/PixelSnow";
import ClickSpark from "@/components/ClickSpark";
const First = ({ setStep }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="  rounded-lg p-10 bg-white/50">
      <ClickSpark
        className="flex flex-col items-center justify-center gap-5 "
        sparkColor={"#FB7185"}
        shape="star"
        sparkCount={6}
        sparkSize={10}
        sparkRadius={20}
        duration={700}
      >
        <div className="fixed inset-0 z-[-1] ">
          <PixelSnow
            color="#ffffff"
            variant="round"
            density={0.5}
            speed={1}
            wind={0.25}
            flakeSize={1}
            pixelSize={3}
            glow={0.8}
            mouseInteraction
            sway={0.5}
            twinkle={0.35}
            accumulate={false}
            depth={0.6}
            brightness={1}
            fade={0}
            opacity={1}
            intro
            lightMode={false}
          />
        </div>

        <Mascot
          directions="/mascots/deer-directions.webp"
          reactions="/mascots/deer-reactions.webp"
          size={256}
        />

        <ChangingText index={index} />

        <section className="flex gap-5">
          <Button onClick={() => setStep(2)}>Yes</Button>
          <Button
            variant="secondary"
            onClick={() => setIndex((current) => current + 1)}
          >
            No
          </Button>
        </section>
      </ClickSpark>
    </div>
  );
};

export default First;
