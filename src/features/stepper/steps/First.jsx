"use client";

import { useEffect, useState } from "react";
import { Mascot } from "page-mascot";
import Button from "@/components/ui/Button";
import ChangingText from "../components/ChangingText";
import PixelSnow from "@/components/background/PixelSnow";
import ClickSpark from "@/components/ClickSpark";

export default function First({ setStep }) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preload() {
      try {
        await Promise.all(
          [
            "/mascots/deer-directions.webp",
            "/mascots/deer-reactions.webp",
          ].map(async (src) => {
            const image = new window.Image();
            image.src = src;
            await image.decode();
          }),
        );
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    preload();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div
        role="status"
        className="fixed inset-0 grid place-items-center bg-black text-rose-300"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-rose-300/20 border-t-rose-300" />
          <p>Түр хүлээгээрэй…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p role="alert" className="p-6 text-center text-rose-300">
        Зураг ачаалж чадсангүй. Хуудсаа дахин ачаалаарай.
      </p>
    );
  }

  return (
    <div className="rounded-lg bg-white/50 p-10">
      <ClickSpark
        className="flex flex-col items-center justify-center gap-5"
        sparkColor="#FB7185"
        shape="star"
        sparkCount={6}
        sparkSize={10}
        sparkRadius={20}
        duration={700}
      >
        <div className="fixed inset-0 z-[-1]">
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
}