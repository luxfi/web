export const fontFamily = {
  sans: [
    'var(--font-inter)',
    // Do not provide an array of fallbacks.
    // there's a bug in Next where they get listed out in this order so the 
    // last one cascades!
    /*
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"', */
  ],
  serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ],
  heading: ['var(--font-druk-text-wide)']
}

export const fontSize = {
  xs: ['0.8rem', { lineHeight: '1rem' }],       // fine print               
  sm: ['0.9rem', { lineHeight: '1.2rem' }],     // 'standard' some news article cards  (typography-sm)
  base: ['1rem', { lineHeight: 1.4 }],     // 'standard' for phone, tablet, and desktop up through 'md' (typography<DEFAULT>),
                                                //   h6 for typography-sm
  lg: ['1.125rem', { lineHeight: '1.75rem' }],  // h6 for 'md', 'standard' for 'lg' (typography-lg), h5 for typography-sm
  xl: ['1.25rem', { lineHeight: '1.75rem' }],   // h5 for 'md' 'h6' for 'lg', , h4 for typography-sm 
  '2xl': ['1.5rem', { lineHeight: '2rem' }],    // etc
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
}