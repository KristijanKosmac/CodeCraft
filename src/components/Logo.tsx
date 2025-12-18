export const CodeCraftLogo = ({ size = 40 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background gradient circle */}
    <defs>
      <linearGradient id="ccGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>

    {/* Main circle background */}
    <circle cx="100" cy="100" r="95" fill="url(#ccGradient)" opacity="0.15" />
    <circle cx="100" cy="100" r="95" stroke="url(#ccGradient)" strokeWidth="2" fill="none" />

    {/* Left Code bracket < */}
    <path
      d="M 50 80 L 70 100 L 50 120"
      stroke="url(#ccGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Right Code bracket > */}
    <path
      d="M 150 80 L 130 100 L 150 120"
      stroke="url(#ccGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Central gear/craft symbol - rotating style */}
    <g transform="translate(100, 100)">
      {/* Outer gear petals */}
      <g strokeWidth="3" stroke="url(#ccGradient)" fill="none" strokeLinecap="round">
        <line x1="0" y1="-22" x2="0" y2="-28" />
        <line x1="0" y1="22" x2="0" y2="28" />
        <line x1="22" y1="0" x2="28" y2="0" />
        <line x1="-22" y1="0" x2="-28" y2="0" />
        <line x1="15.5" y1="-15.5" x2="19.8" y2="-19.8" />
        <line x1="-15.5" y1="15.5" x2="-19.8" y2="19.8" />
        <line x1="15.5" y1="15.5" x2="19.8" y2="19.8" />
        <line x1="-15.5" y1="-15.5" x2="-19.8" y2="-19.8" />
      </g>

      {/* Inner hexagon */}
      <polygon
        points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7"
        fill="url(#ccGradient)"
        opacity="0.3"
      />

      {/* Center dot */}
      <circle cx="0" cy="0" r="4" fill="url(#ccGradient)" />
    </g>
  </svg>
);

export const CodeCraftLogoFull = () => (
  <div className="flex items-center gap-3">
    <div className="p-2">
      <CodeCraftLogo size={48} />
    </div>
    <div>
      <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
        CodeCraft
      </span>
      <p className="text-xs font-semibold text-gray-500 -mt-1">TECH SOLUTIONS</p>
    </div>
  </div>
);
