"use client";

import { InnkeeperSilhouette } from "./InnkeeperSilhouette";

const SPARK_COUNT = 18;
const BURST_SPARK_COUNT = 12;

const STRIKE_ANIMATIONS = [
  "forge-light",
  "forge-strike-flash",
  "forge-spark-burst",
  "forge-strike-shake",
];
// Just before the strike at 60% of the 8s cycle, so the ramp-up plays
const STRIKE_AT_MS = 4750;

function triggerStrike() {
  document
    .getAnimations()
    .filter(
      (a): a is CSSAnimation =>
        a instanceof CSSAnimation && STRIKE_ANIMATIONS.includes(a.animationName),
    )
    .forEach((a) => {
      a.currentTime = STRIKE_AT_MS;
    });
}

function seeded(index: number, salt: number) {
  return (((index + 1) * 7919 + salt * 104729) % 233280) / 233280;
}

export function ForgeBackdrop() {
  const sparks = Array.from({ length: SPARK_COUNT }, (_, i) => ({
    id: i,
    left: 38 + seeded(i, 1) * 24,
    delay: seeded(i, 2) * 4,
    duration: 2.2 + seeded(i, 3) * 2.5,
    size: 2 + seeded(i, 4) * 3,
    drift: -20 + seeded(i, 5) * 40,
  }));

  const burstSparks = Array.from({ length: BURST_SPARK_COUNT }, (_, i) => ({
    id: i,
    x: -70 + seeded(i, 6) * 140,
    y: -30 - seeded(i, 7) * 60,
    size: 2 + seeded(i, 8) * 2.5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Warm ambient glow from the hearth */}
      <div className="forge-ambient absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(234,88,12,0.22),rgba(245,158,11,0.08)_45%,transparent_70%)]" />

      {/* Stone/brick header band */}
      <div className="absolute inset-x-0 top-0 h-28 forge-bricks opacity-90" />

      {/* Forge scene — innkeeper + hearth */}
      <div
        className="forge-strike-shake pointer-events-auto absolute bottom-0 left-1/2 flex w-[min(860px,98vw)] -translate-x-1/2 cursor-pointer items-end justify-center"
        onClick={triggerStrike}
      >
      <svg
        className="w-full max-w-[720px] shrink text-[#1a1512]"
        viewBox="0 0 720 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fireGlow" x1="360" y1="120" x2="360" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#EA580C" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7C2D12" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="coalGlow" cx="360" cy="200" r="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
          </radialGradient>
          <filter id="fireBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Back wall / chimney */}
        <path
          d="M120 40 L120 280 L600 280 L600 40 Q360 10 120 40 Z"
          fill="currentColor"
          opacity="0.95"
        />

        {/* Brick lines on forge body */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          <g key={row} opacity="0.15">
            {Array.from({ length: row % 2 === 0 ? 8 : 7 }, (_, col) => (
              <rect
                key={col}
                x={140 + col * 58 + (row % 2 === 0 ? 0 : 29)}
                y={60 + row * 28}
                width="52"
                height="12"
                rx="1"
                stroke="#F59E0B"
                strokeWidth="0.5"
                fill="none"
              />
            ))}
          </g>
        ))}

        {/* Forge mouth opening */}
        <path
          d="M220 130 Q360 95 500 130 L500 280 L220 280 Z"
          fill="#0B0A09"
        />

        {/* Inner fire glow */}
        <ellipse cx="360" cy="210" rx="110" ry="70" fill="url(#coalGlow)" filter="url(#fireBlur)" className="forge-fire-pulse" />
        <path
          d="M250 280 L250 150 Q360 115 470 150 L470 280 Z"
          fill="url(#fireGlow)"
          opacity="0.55"
          className="forge-fire-pulse"
        />

        {/* Anvil silhouette */}
        <path
          d="M310 248 L310 228 L295 222 L295 214 L425 214 L425 222 L410 228 L410 248 L395 252 L325 252 Z"
          fill="#2A2420"
          stroke="#3D3530"
          strokeWidth="1.5"
        />
        <rect x="318" y="252" width="84" height="8" rx="2" fill="#1E1B18" />

        {/* Arch stone outline */}
        <path
          d="M210 130 Q360 88 510 130"
          stroke="#3D3530"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
        <InnkeeperSilhouette className="forge-lit-rim hidden sm:block w-[130px] md:w-[150px] shrink-0 -ml-6 md:-ml-10 mb-1 opacity-95 -scale-x-100" />
      </div>

      {/* Rising sparks from the hearth */}
      <div className="absolute inset-x-0 bottom-[18%] h-48">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className="forge-spark absolute rounded-full bg-ember"
            style={{
              left: `${spark.left}%`,
              width: spark.size,
              height: spark.size,
              animationDuration: `${spark.duration}s`,
              animationDelay: `${spark.delay}s`,
              ["--spark-drift" as string]: `${spark.drift}px`,
            }}
          />
        ))}
      </div>

      {/* Hammer strike — flash at the anvil + radial spark burst */}
      <div className="forge-strike-flash absolute bottom-[16%] left-1/2 h-40 w-72 -translate-x-1/2" />
      <div className="absolute inset-x-0 bottom-[22%] h-0">
        {burstSparks.map((spark) => (
          <span
            key={spark.id}
            className="forge-spark-burst absolute left-1/2 rounded-full bg-ember"
            style={{
              width: spark.size,
              height: spark.size,
              ["--burst-x" as string]: `${spark.x}px`,
              ["--burst-y" as string]: `${spark.y}px`,
            }}
          />
        ))}
      </div>

      {/* Heat shimmer above the fire */}
      <div className="absolute bottom-[22%] left-1/2 h-24 w-48 -translate-x-1/2 forge-shimmer opacity-30" />
    </div>
  );
}
