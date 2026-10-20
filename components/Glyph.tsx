// Line symbols for the three stages of the race.
export type GlyphName = 'fold' | 'float' | 'finish'

const COLORS: Record<GlyphName, string> = {
  fold: 'var(--moss)',
  float: 'var(--river)',
  finish: 'var(--pine)',
}

// Checks on the finish flag: [x, y] of each filled square
const CHECKS = [
  [14, 8],
  [30, 8],
  [22, 19],
  [38, 19],
]

export default function Glyph({ name, size = 56, className }: { name: GlyphName; size?: number; className?: string }) {
  const color = COLORS[name]
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'fold' && (
        <>
          {/* Fold: a sheet of paper with a corner turned down and a crease */}
          <path d="M10 10 H34 L46 22 V46 H10 Z" />
          <path d="M34 10 V22 H46" />
          <path d="M10 46 L31 25" strokeDasharray="3 4" />
        </>
      )}
      {name === 'float' && (
        <>
          {/* Float: a paper boat riding the current */}
          <path d="M8 32 H48 L40 42 H16 Z" />
          <path d="M22 32 L30 12 L36 32" />
          <path d="M30 12 V32" />
          <path d="M6 49 Q11 45 16 49 T26 49 T36 49 T46 49 T50 49" />
        </>
      )}
      {name === 'finish' && (
        <>
          {/* Finish: a checkered flag */}
          <path d="M14 6 V52" />
          <path d="M14 8 H46 V30 H14" />
          {CHECKS.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="8" height="11" fill={color} stroke="none" />
          ))}
        </>
      )}
    </svg>
  )
}
