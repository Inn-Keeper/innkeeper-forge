"use client";

import { useId, type CSSProperties } from "react";
import { InnkeeperSilhouette } from "./InnkeeperSilhouette";

export function ForgeBackdrop() {
  const id = useId();
  const paint = (name: string) => `url(#${id}-${name})`;

  return (
    <div className="forge-scene relative min-w-0">
      <svg viewBox="0 0 640 460" fill="none" aria-hidden="true" className="block w-full">
        <defs>
          <radialGradient id={`${id}-halo`}>
            <stop stopColor="#b65b20" stopOpacity=".22" />
            <stop offset="1" stopColor="#b65b20" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-stone`} x1="420" y1="130" x2="570" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#36302b" /><stop offset="1" stopColor="#191817" />
          </linearGradient>
          <radialGradient id={`${id}-fire`} cx=".5" cy=".85" r=".85">
            <stop stopColor="#ffce77" /><stop offset=".35" stopColor="#e8882f" />
            <stop offset="1" stopColor="#6d2e1a" stopOpacity=".2" />
          </radialGradient>
          <linearGradient id={`${id}-iron`} x1="335" y1="303" x2="355" y2="353" gradientUnits="userSpaceOnUse">
            <stop stopColor="#77746c" /><stop offset=".22" stopColor="#444544" /><stop offset="1" stopColor="#262729" />
          </linearGradient>
        </defs>
        <ellipse cx="402" cy="269" rx="235" ry="192" fill={paint("halo")} className="forge-fire" />
        {/* Quiet architectural lines frame the workshop. */}
        <path d="M75 398 H600 M111 377 V120 H307 M111 151 H293 M131 120 V376" stroke="#393028" strokeWidth="1" />
        <path d="M151 150 V188 M177 150 V179 M203 150 V183" stroke="#635043" strokeWidth="3" />
        <path d="M146 186 H156 V203 H146 Z M173 176 L170 191 L182 191 L179 176 M197 182 L208 193 M208 182 L197 193" stroke="#706052" strokeWidth="3" />
        <ellipse cx="350" cy="404" rx="235" ry="15" fill="#000" opacity=".35" />
        {/* Furnace behind the working area, not around the anvil. */}
        <path d="M452 70 H534 L547 168 H441 Z" fill="#201e1c" stroke="#44372c" strokeWidth="2" />
        <path d="M421 188 Q493 107 575 188 V395 H421 Z" fill={paint("stone")} stroke="#63503d" strokeWidth="2" />
        <path d="M441 211 Q495 150 555 211 V358 H441 Z" fill="#100f0e" stroke="#8b6240" strokeWidth="3" />
        <path d="M450 215 Q497 170 547 215 V350 H450 Z" fill={paint("fire")} className="forge-fire" />
        <g stroke="#7c6249" opacity=".35">
          <path d="M434 184 L454 201 M460 161 L473 184 M493 151 V176 M526 158 L517 182 M554 173 L537 196 M422 249 H440 M556 249 H575 M422 292 H440 M556 292 H575 M423 374 H574" />
        </g>
        <g className="forge-flames" fill="#ffc477">
          <path d="M467 342 Q451 322 471 295 Q465 321 486 327 Q483 301 503 282 Q493 315 510 326 Q519 315 525 305 Q540 333 529 345 Z" opacity=".7" />
          <path d="M486 346 Q478 330 492 317 Q491 335 509 326 Q521 337 513 347 Z" fill="#ffe3a6" />
        </g>
        <path d="M436 353 H560 L568 366 H429 Z" fill="#4e3c2c" stroke="#a27342" />
        <g fill="#f5a349">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={469 + i * 12} cy={338 - (i % 2) * 8} r="2" className="forge-ember" style={{ animationDelay: `${i * -.7}s` }} />
          ))}
        </g>
        {/* Stump, iron anvil and the incandescent workpiece. */}
        <path d="M315 347 Q348 338 384 347 L392 400 Q349 410 307 400 Z" fill="#423025" stroke="#69503a" strokeWidth="2" />
        <path d="M322 352 L318 393 M336 355 L333 398 M366 351 L373 398 M382 359 L386 391" stroke="#9a6940" opacity=".35" />
        <path d="M308 378 Q349 388 390 378" stroke="#232323" strokeWidth="9" />
        <path d="M279 301 H403 L419 293 L414 307 L379 321 L370 340 L386 346 V353 H314 V346 L330 339 L323 323 L295 317 Z" fill={paint("iron")} stroke="#898074" strokeWidth="1.5" />
        <path d="M280 301 H402" stroke="#dcc4a1" strokeWidth="2" />
        <path d="M326 297 H370" stroke="#e77c2c" strokeWidth="7" strokeLinecap="round" />
        <path d="M331 295 H367" stroke="#ffe1a0" strokeWidth="3" strokeLinecap="round" />
        <InnkeeperSilhouette />
        <ellipse cx="351" cy="296" rx="47" ry="25" fill={paint("halo")} className="forge-impact" />
        <g fill="#fff1c4" style={{ filter: "drop-shadow(0 0 3px #ff9a3c)" }}>
          {Array.from({ length: 16 }, (_, i) => (
            <circle key={i} cx="351" cy="296" r={i % 4 === 0 ? 2.8 : i % 2 ? 1.6 : 2.1} className="forge-strike-spark" style={{ "--spark-x": `${(i - 7.5) * 11 + (i % 3) * 4}px`, "--spark-y": `${-25 - ((i * 7) % 5) * 16}px` } as CSSProperties} />
          ))}
        </g>
        <path d="M73 416 H600" stroke="#55402c" strokeWidth="1" />
      </svg>
    </div>
  );
}
