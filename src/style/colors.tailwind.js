module.exports = ({ colors }) => ({
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
  accent: "var(--fg-0)",      // full contrast (darkTheme:white) : heading and links hover  
  foreground: "var(--fg-body)", // body off-white (bright enough to contrast to bg-forward-1)
  muted: {
    DEFAULT: "var(--fg-2)",   // de-emphasized: fine print
    '1': "var(--fg-2)",       // synonymous ^^^ 
    '2': "var(--fg-3)",       // disabled or very de-emphasized
    '3': "var(--fg-4)",       // very disabled ;) 
    '4': "var(--fg-5)",       // disabled border
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