export default function LogoMark({ size = 36 }) {
  const id = `wl-${size}`
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FA" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="20%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Left wing */}
      <path
        d="M6 10 C 18 28 32 52 52 66 C 40 56 24 34 10 8 Z"
        fill={`url(#${id}-a)`}
      />
      {/* Left wing inner highlight */}
      <path
        d="M6 10 C 14 22 26 44 48 62 C 38 54 22 30 10 8 Z"
        fill={`url(#${id}-c)`}
        opacity="0.7"
      />
      {/* Right wing */}
      <path
        d="M52 66 C 70 46 90 22 114 6 C 100 18 78 48 56 68 Z"
        fill={`url(#${id}-b)`}
      />
      {/* Right wing inner highlight */}
      <path
        d="M54 64 C 72 44 92 20 114 6 C 102 16 82 44 58 66 Z"
        fill={`url(#${id}-c)`}
        opacity="0.5"
      />
    </svg>
  )
}
