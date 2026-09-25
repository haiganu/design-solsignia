// Solsignia "Vivid" theme — Tailwind CSS v3 preset.
// Light theme only for v1; dark mode planned after launch (same names, second value set).
// Per-product primaries/sidebars: see tokens/products/<product>.css (7 values per app).
// Use ONLY if the repo is still on Tailwind v3 (tailwind.config.* exists).
// tailwind.config.ts:  presets: [require('./vivid.preset.js')]
const cat = (strong, tint, fg) => ({ DEFAULT: strong, tint, fg });
const st = (text, dot, tint, fg) => ({ DEFAULT: text, dot, tint, fg });

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-atkinson)', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-atkinson-mono)', 'ui-monospace', 'Cascadia Mono', 'monospace'],
      },
      colors: {
        canvas: '#F4F5FB', surface: '#FFFFFF', subtle: '#F7F8FC',
        border: { DEFAULT: '#E4E7F2', strong: '#D5D9E8' }, divider: '#F1F2F8',
        ink: { DEFAULT: '#0F172A', 2: '#475569', 3: '#64748B' },
        sidebar: { DEFAULT: '#1E1B4B', fg: '#E0E7FF', muted: '#A5B4FC', active: 'rgb(255 255 255 / 0.14)' },
        primary: { DEFAULT: '#4338CA', hover: '#3730A3', soft: '#EEF2FF', 'on-soft': '#3730A3' },
        mark: { center: '#FFF200', sides: '#FFDE17', outline: '#BE1E2D' },
        cat: {
          device: cat('#2563EB', '#DBEAFE', '#1E40AF'),
          browser: cat('#7C3AED', '#EDE9FE', '#5B21B6'),
          auth: cat('#DB2777', '#FCE7F3', '#9D174D'),
          network: cat('#0D9488', '#CCFBF1', '#115E59'),
          data: cat('#D97706', '#FEF3C7', '#92400E'),
          aware: cat('#16A34A', '#DCFCE7', '#166534'),
        },
        success: st('#047857', '#10B981', '#D1FAE5', '#065F46'),
        warning: st('#B45309', '#F59E0B', '#FEF3C7', '#92400E'),
        danger: st('#BE123C', '#E11D48', '#FFE4E6', '#9F1239'),
        neutral: st('#475569', '#94A3B8', '#F1F5F9', '#334155'),
        'ring-good': '#6EE7B7',
        nav: { overview: '#6366F1', actions: '#E11D48', devices: '#0284C7', compliance: '#7C3AED', reports: '#059669', badge: '#D97706', count: '#FB7185', 'count-fg': '#4C0519' },
        app: { postura: '#818CF8', pharus: '#22D3EE', nexum: '#E879F9', vigil: '#FB923C' },
        avatar: { DEFAULT: '#F472B6', fg: '#500724' },
        'field-quiet': '#EEF0F8', 'field-border': '#7C8699', 'tab-active': '#E0E7FF',
        'on-primary': { DEFAULT: '#FFFFFF', 2: '#E0E7FF', 3: '#C7D2FE' },
        sky: { tint: '#E0F2FE', fg: '#0369A1' },
        scrim: 'rgb(15 23 42 / 0.55)',
        toast: { DEFAULT: '#1E1B4B', 'fg-2': '#C7D2FE' },
      },
      borderRadius: { tag: '8px', btn: '10px', tile: '12px', card: '16px' },
      fontSize: {
        display: ['30px', '1.2'], h2: ['18px', '1.35'], body: ['16px', '1.55'],
        ui: ['15px', '1.4'], label: ['13px', '1.35'], metric: ['34px', '1'],
      },
    },
  },
};
