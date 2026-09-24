// Copy into components/brand/SolsigniaMark.tsx in any product repo.
// Paths and colours are the brand source of truth. Do not edit them.
type Props = { size?: number; className?: string; title?: string };

const PATHS = [
  { d: 'M61.89,27.48l59,109L81.72,254.11,49.14,142.78Z', fill: '#FFDE17' },
  { d: 'M218.11,27.48l12.75,115.3L198.28,254.11,159.09,136.5Z', fill: '#FFDE17' },
  { d: 'M140,25.89l49.29,113.75L140,253.38,90.71,139.64Z', fill: '#FFF200' }, // centre, drawn last
];

/** size = rendered height in px. <= 48 uses the small (thick outline) version. */
export function SolsigniaMark({ size = 28, className, title }: Props) {
  const small = size <= 48;
  const viewBox = small ? '40 2 200 278' : '40 8 200 264';
  const vbH = small ? 278 : 264;
  const width = Math.round(((size * 200) / vbH) * 10) / 10;
  return (
    <svg
      width={width}
      height={size}
      viewBox={viewBox}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {PATHS.map((p) => (
        <path key={p.d} d={p.d} fill={p.fill} stroke="#BE1E2D" strokeWidth={small ? 14 : 5} strokeMiterlimit={10} />
      ))}
    </svg>
  );
}
