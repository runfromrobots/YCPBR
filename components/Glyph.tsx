// Line symbols for the three stages of the race, drawn like old
// alchemical or botanical marks.
export type GlyphName = 'boat' | 'water' | 'root'

const COLORS: Record<GlyphName, string> = {
  boat: 'var(--moss)',
  water: 'var(--river)',
  root: 'var(--pine)',
}

export default function Glyph({ name, size = 56, className }: { name: GlyphName; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      stroke={COLORS[name]}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'boat' && (
        <>
          {/* Fold: a paper boat under a guiding star */}
          <path d="M8 34 H48 L40 46 H16 Z" />
          <path d="M22 34 L30 14 L36 34" />
          <path d="M30 14 V34" />
          <path d="M30 4 V8 M28 6 H32" />
        </>
      )}
      {name === 'water' && (
        <>
          {/* Float: the old sign for water, over a current */}
          <path d="M10 8 H46 L28 36 Z" />
          <path d="M8 44 Q13 40 18 44 T28 44 T38 44 T48 44" />
          <path d="M14 51 Q19 47 24 51 T34 51 T44 51" />
        </>
      )}
      {name === 'root' && (
        <>
          {/* Finish: a sprout above the ground line, roots spreading below, for The Root */}
          <path d="M28 22 V30" />
          <path d="M28 22 Q18 20 15 10 Q25 10 28 22 Z" />
          <path d="M28 18 Q36 16 40 7 Q31 6 28 18 Z" />
          <path d="M6 30 H50" />
          <path d="M28 30 V50" />
          <path d="M28 36 Q19 39 12 48 M28 36 Q37 39 44 48" />
          <path d="M28 43 Q22 47 20 53 M28 43 Q34 47 36 53" />
        </>
      )}
    </svg>
  )
}
