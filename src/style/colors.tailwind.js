export default ({ colors }) => ({
  inherit: colors.inherit,
  current: colors.current,
  transparent: colors.transparent,
  input: "var(--input)",
  ring: "var(--ring)",
  background: 'var(--bg-0)',
    // levels forward in z-index (a la Material Design)
  level: {
    DEFAULT: "var(--bg-0)",
    '0': "var(--bg-0)", 
    '1': "var(--bg-1)", 
    '2': "var(--bg-2)", 
    '3': "var(--bg-3)", 
  },
  foreground: {
    accent: "var(--fg-0)",      // full contrast (darkTheme:white) : heading and links hover  
    DEFAULT: "var(--fg-body)",  // body off-white (bright enough to contrast to bg-forward-1)
    muted: "var(--fg-2)",       // de-emphasized: fine print
    'more-muted': "var(--fg-3)",     // disabled 
    'very-muted': "var(--fg-4)",     // very disabled ;) 
    'fully-muted': "var(--fg-5)"     // disabled border 
  },
  primary: {
    DEFAULT: "var(--primary)",
    hover: "var(--primary-hover)",
    fg: "var(--primary-fg)",
  },
  secondary: {
    DEFAULT: "var(--secondary)",
    hover: "var(--secondary-hover)",
    fg: "var(--secondary-fg)",
  },
  destructive: {
    DEFAULT: "var(--destructive)",
    fg: "var(--destructive-fg)",
  },
  nav: {
    DEFAULT: "var(--nav)",
    hover: "var(--nav-hover)",
    current: "var(--nav-current)",
  },
})