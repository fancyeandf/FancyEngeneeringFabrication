export default function OrnateDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 28"
      className={`h-6 w-40 sm:w-56 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ornateGrad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--gold-dark)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--gold-dark)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 14 H90"
        stroke="url(#ornateGrad)"
        strokeWidth="1"
      />
      <path
        d="M150 14 H240"
        stroke="url(#ornateGrad)"
        strokeWidth="1"
      />
      <path
        d="M100 14 C104 6 112 6 116 12 C119 16 116 20 120 20 C124 20 121 16 124 12 C128 6 136 6 140 14"
        stroke="var(--gold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="120" cy="14" r="2.5" fill="var(--gold)" />
    </svg>
  );
}
