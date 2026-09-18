"use client";

import { useEffect, useState } from "react";
import { DroneSvg } from "./DroneSvg";

export function HeroDrone() {
  const [pos, setPos] = useState({ left: "50%", top: "50%" });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const moveDrone = () => {
      setPos({
        left: `${Math.random() * 55 + 22}%`,
        top: `${Math.random() * 50 + 25}%`,
      });

      timeoutId = setTimeout(moveDrone, 3500 + Math.random() * 1500);
    };

    timeoutId = setTimeout(moveDrone, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="drone-box"
      className="absolute pointer-events-none transition-all duration-[2.5s] ease-in-out z-20"
      style={{
        width: 180,
        left: pos.left,
        top: pos.top,
        transform: "translate(-50%, -50%)",
      }}
      aria-hidden="true"
    >
      <div className="relative p-4 animate-bounce-slow">
        <DroneSvg />
      </div>
    </div>
  );
}