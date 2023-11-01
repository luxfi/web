export default ({ colors }) => ({
  inherit: colors.inherit,
  current: colors.current,
  transparent: colors.transparent,
  border: {
    DEFAULT: "var(--border)",
    accented: "var(--border-accented)",
  },
  input: "var(--input)",
  ring: "var(--ring)",
  background: "var(--background)", 
  foreground: "var(--foreground)",
  primary: {
    DEFAULT: "var(--primary)",
    hover: "var(--primary-hover)",
    foreground: "var(--primary-foreground)",
  },
  secondary: {
    DEFAULT: "var(--secondary)",
    hover: "var(--secondary-hover)",
    foreground: "var(--secondary-foreground)",
  },
  destructive: {
    DEFAULT: "var(--destructive)",
    foreground: "var(--destructive-foreground)",
  },
  muted: {
    DEFAULT: "var(--muted)",
    foreground: "var(--muted-foreground)",
  },
  ['very-muted']: {
    DEFAULT: "var(--very-muted)",
    foreground: "var(--very-muted-foreground)",
  },
  nav: {
    DEFAULT: "var(--nav)",
    hover: "var(--nav-hover)",
    current: "var(--nav-current)",
  },
  accent: {
    DEFAULT: "var(--accent)",
    foreground: "var(--accent-foreground)",
  },
  popover: {
    DEFAULT: "var(--popover)",
    foreground: "var(--popover-foreground)",
  },
  card: {
    DEFAULT: "var(--card)",
    foreground: "var(--card-foreground)",
  },
})