export function InnkeeperSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="innkeeperRim" x1="0" y1="130" x2="160" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A2420" />
          <stop offset="55%" stopColor="#1A1512" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="apronRim" x1="40" y1="160" x2="130" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#241F1B" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Shadow on ground */}
      <ellipse cx="78" cy="252" rx="42" ry="6" fill="#000" opacity="0.35" />

      <g className="forge-innkeeper-idle">
        {/* Boots */}
        <path d="M52 228 L52 248 L68 248 L68 232 Z" fill="#141110" />
        <path d="M88 228 L88 248 L104 248 L104 232 Z" fill="#141110" />

        {/* Legs */}
        <path d="M58 188 L58 230 L70 230 L70 188 Z" fill="#1E1B18" />
        <path d="M86 188 L86 230 L98 230 L98 188 Z" fill="#1E1B18" />

        {/* Apron */}
        <path
          d="M48 132 L44 248 L112 248 L108 132 L92 128 L68 128 Z"
          fill="url(#apronRim)"
          stroke="#3D3530"
          strokeWidth="1.2"
        />
        <path d="M68 128 L92 128 L88 248 L72 248 Z" fill="#161412" opacity="0.6" />

        {/* Torso / tunic */}
        <path
          d="M52 92 Q78 84 104 92 L108 136 L48 136 Z"
          fill="#1A1512"
          stroke="url(#innkeeperRim)"
          strokeWidth="1.5"
        />

        {/* Left arm (away from fire) */}
        <path
          d="M48 98 Q28 108 24 132 Q22 142 30 146 Q38 148 42 136 Q46 120 52 108 Z"
          fill="#1A1512"
          stroke="#3D3530"
          strokeWidth="1.2"
        />

        {/* Right arm + tongs toward forge */}
        <path
          d="M104 98 Q128 108 132 128 Q136 142 126 148 Q116 152 110 136 Q106 118 104 108 Z"
          fill="#1A1512"
          stroke="url(#innkeeperRim)"
          strokeWidth="1.5"
        />
        <g stroke="#4A4038" strokeWidth="2" strokeLinecap="round">
          <line x1="128" y1="136" x2="158" y2="118" />
          <line x1="128" y1="136" x2="158" y2="142" />
          <circle cx="158" cy="130" r="3" fill="#2A2420" stroke="#F59E0B" strokeWidth="1" opacity="0.8" />
        </g>

        {/* Head */}
        <circle cx="78" cy="72" r="22" fill="#1A1512" stroke="url(#innkeeperRim)" strokeWidth="1.5" />

        {/* Beard */}
        <path
          d="M62 78 Q78 98 94 78 Q88 92 78 94 Q68 92 62 78 Z"
          fill="#141110"
          opacity="0.9"
        />

        {/* Cap / hood */}
        <path
          d="M56 62 Q78 42 100 62 L96 72 Q78 58 60 72 Z"
          fill="#141110"
          stroke="#3D3530"
          strokeWidth="1.2"
        />

        {/* Fire-lit face edge */}
        <path
          d="M88 58 Q96 68 94 82"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>
    </svg>
  );
}
