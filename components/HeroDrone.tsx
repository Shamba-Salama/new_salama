"use client";

import { useEffect, useState } from "react";
import { DroneSvg } from "./DroneSvg";

export function HeroDrone() {
  const [pos, setPos] = useState({ left: "50%", top: "50%" });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const moveDrone = () => {
      setPos({
        left: `${Math.random() * 60 + 20}%`,
        top: `${Math.random() * 60 + 20}%`,
      });
      timeoutId = setTimeout(moveDrone, 3000 + Math.random() * 2000);
    };

    timeoutId = setTimeout(moveDrone, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="drone-box"
      className="absolute pointer-events-none transition-all duration-[2s] ease-in-out z-50"
      style={{ width: 180, left: pos.left, top: pos.top }}
    >
      <div className="relative p-4 animate-bounce-slow">
        <DroneSvg />
        <div className="absolute top-0 left-0 w-1/4 h-1/4 border-2 border-accent rounded-full animate-spin-slow" />
        <div className="absolute top-0 right-0 w-1/4 h-1/4 border-2 border-accent rounded-full animate-spin-slow" />
      </div>
    </div>
  );
}
