"use client";
import React from "react";
import PaperCrumple from "@/components/PaperCrumple";
import Button from "@/components/ui/Button";
const Third = ({ setStep }) => {
  return (
    <div className="fixed inset-0">
      <PaperCrumple
        src="/note.png"
        alt="A print to crumple"
        width={450}
        height={450}
        sceneHeight={1080}
        releaseBehavior="restore"
        crumpleAmount={0.85}
        crumpleDuration={0.55}
        releaseDuration={0.4}
        foldCount={6}
        foldSharpness={0.6}
        wrinkleDepth={0.65}
        creaseStrength={0.18}
        paperColor="#f4f0e8"
        paperTexture={0.08}
        draggable
        returnToOrigin
        imageFit="contain"
        roughness={0.92}
        lightIntensity={1.8}
        lightAngle={-35}
        shadow
        shadowOpacity={0.16}
        dragRotation={10}
        dragRadius={180}
        rotation={0}
        seed={7}
        detail={64}
        disabled={false}
      />
      <div className="absolute bottom-0 left-1/2  -translate-x-1/2 my-10">
        <Button onClick={()=>setStep(2)}>
          Zaaa
        </Button>
      </div>
    </div>
  );
};

export default Third;
