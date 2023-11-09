const {
  round,  
  pxToRem,
  pxToEm,
} = require('../util')

const gray = {
  css: {
    '--tw-prose-body': "var(--fg-body)",
    '--tw-prose-headings': "var(--fg-0)",
    '--tw-prose-links': "var(--fg-0)",
    '--tw-prose-links-hover': "var(--fg-2)",
    '--tw-prose-bold': "var(--fg-0)",
    '--tw-prose-counters': "var(--fg-4)",
    '--tw-prose-bullets': "var(--fg-2)",
    '--tw-prose-hr': "var(--fg-2)",
    '--tw-prose-quotes': "var(--fg-2)",
    '--tw-prose-quote-borders': "var(--fg-3)",
    '--tw-prose-captions': "var(--fg-2)",
    '--tw-prose-kbd': "var(--fg-0)",
    '--tw-prose-kbd-shadows': "var(--fg-1)",
    '--tw-prose-code': "var(--fg-0)",
    '--tw-prose-pre-code': "var(--fg-1)",
    '--tw-prose-pre-bg': "var(--bg-1)",
    '--tw-prose-th-borders': "var(--fg-2)",
    '--tw-prose-td-borders': "var(--fg-3)",
  },
}

const defaultModifiers = (base) => ({
  sm: {
    css: [
      {
        h1: {
          fontSize: pxToRem(24, base),
        },
        h2: {
          fontSize: pxToRem(20, base),
        },
        h3: {
          fontSize: pxToEm(18, base),
        },
      },
      {
      },
    ],
  },
  base: {
    css: [
      {
        fontSize: '1rem',
        lineHeight: 1.4,
        p: {
          marginTop: '0.33rem',
          marginBottom: '0.33rem',
        },
        'p:first-child': {
          marginTop: 0,
        },
        'p:last-child': {
          marginBottom: 0,
        },
        blockquote: {
          marginTop: pxToEm(32, 20),
          marginBottom: pxToEm(32, 20),
          paddingLeft: pxToEm(20, 20),
        },
        h1: {
          fontSize: pxToRem(40, base),
          lineHeight: 1.2,
        },
        h2: {
          fontSize: pxToRem(36, base),
          lineHeight: 1.2,
        },
        h3: {
          fontSize: '1.4rem',
          lineHeight: 1.2,
        },
        h4: {
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
          fontSize: '1.3rem',
          lineHeight: 1.2,
        },
        h5: {
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
          fontSize: '1.2rem',
          lineHeight: 1.4,
          fontWeight: 400
        },
        h6: {
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
          fontSize: '1.15rem',
          lineHeight: 1.3,
          fontWeight: 400
        },
        img: {
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
        },
        'img:first-child': {
          marginTop: 0,
        },
        'img:last-child': {
          marginBottom: 0,
        },
        picture: {
          marginTop: pxToRem(20, base),
          marginBottom: pxToRem(20, base),
        },
        'picture > img': {
          marginTop: '0',
          marginBottom: '0',
        },
        video: {
          marginTop: pxToRem(20, base),
          marginBottom: pxToRem(20, base),
        },
        kbd: {
          fontSize: pxToEm(14, 16),
          borderRadius: pxToRem(5, base),
          paddingTop: pxToEm(3, 16),
          paddingRight: pxToEm(6, 16),
          paddingBottom: pxToEm(3, 16),
          paddingLeft: pxToEm(6, 16),
        },
        code: {
          fontSize: pxToEm(14, 16),
        },
        'h2 code': {
          fontSize: pxToEm(21, 24),
        },
        'h3 code': {
          fontSize: pxToEm(18, 20),
        },
        pre: {
          fontSize: pxToRem(14, 16),
          lineHeight: round(24 / 14),
          marginTop: pxToEm(24, 14),
          marginBottom: pxToEm(24, 14),
          borderRadius: pxToRem(6, base),
          paddingTop: pxToEm(12, 14),
          paddingRight: pxToEm(16, 14),
          paddingBottom: pxToEm(12, 14),
          paddingLeft: pxToEm(16, 14),
        },
        ol: {
          fontSize: '1rem',
          paddingLeft: '1.5rem',
          margin: 0,
          marginLeft: '-5px',
        },
        ul: {
          fontSize: '1rem',
          paddingLeft: '1.5rem',
          margin: 0,
          marginLeft: '-0.6rem',
          listStylePosition: 'outside',
          listStyleType: "'\u25BC'"
        },
        li: {

        },
        'ol > li': {
          paddingLeft: '0.4rem',
        },
        'ul > li': {
          paddingLeft: '0.75rem',
          marginBottom: '0.75rem',
        },
        'ul > li:last-child': {
          marginBottom: 0,
        },
        '> ul > li p': {
          margin: 0,
          display: 'inline'
        },
        /*
        '> ul > li > *:first-child': {
        },
        '> ul > li > *:last-child': {
        },
        '> ol > li > *:first-child': {
        },
        '> ol > li > *:last-child': {
        },
        */
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: pxToRem(12, base),
          marginBottom: pxToRem(12, base),
        },
        dl: {
          marginTop: pxToEm(20, 16),
          marginBottom: pxToEm(20, base),
        },
        dt: {
          marginTop: pxToEm(20, base),
        },
        dd: {
          marginTop: pxToEm(8, base),
          paddingLeft: pxToEm(26, base),
        },
        hr: {
          marginTop: pxToEm(48, base),
          marginBottom: pxToEm(48, base),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: pxToEm(14, base),
          lineHeight: round(24 / 14),
        },
        'thead th': {
          paddingRight: pxToEm(8, 14),
          paddingBottom: pxToEm(8, 14),
          paddingLeft: pxToEm(8, 14),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: pxToEm(8, 14),
          paddingRight: pxToEm(8, 14),
          paddingBottom: pxToEm(8, 14),
          paddingLeft: pxToEm(8, 14),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
        figure: {
          marginTop: pxToEm(32, base),
          marginBottom: pxToEm(32, base),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: pxToEm(14, base),
          lineHeight: round(20 / 14),
          marginTop: pxToEm(12, 14),
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  lg: {
    css: [
      {
        h1: {
          fontSize: pxToRem(55, base),
          lineHeight: 1.1,
        },
        h2: {
          fontSize: pxToRem(45, base),
          lineHeight: 1.1,
        },
        h3: {
          fontSize: pxToRem(32, base),
          lineHeight: 1.1,
        },
        h4: {
          fontSize: pxToRem(26, base),
          marginTop: pxToRem(13, base),
          marginBottom: pxToRem(13, base),
          fontWeight: 500
        },
        h5: {
          fontSize: pxToRem(22, base),
          marginTop: pxToRem(11, base),
          marginBottom: pxToRem(11, base),
          fontWeight: 400
        },
      },
      {
      },
    ],
  },
})

const defaultCSS = {

  color: 'var(--tw-prose-body)',
// YUCK  maxWidth: '65ch',
  p: {}, // Required to maintain correct order when merging
  a: {
    color: 'var(--tw-prose-links)',
    textDecoration: 'underline',
    fontWeight: '400',
  },
  'a:hover': {
    color: 'var(--tw-prose-links-hover)',
  },
  strong: {
    color: 'var(--tw-prose-bold)',
    fontWeight: '600',
  },
  'a strong': {
    color: 'inherit',
  },
  'blockquote strong': {
    color: 'inherit',
  },
  'thead th strong': {
    color: 'inherit',
  },
  ol: {
    listStyleType: 'decimal',
  },
  'ol[type="A"]': {
    listStyleType: 'upper-alpha',
  },
  'ol[type="a"]': {
    listStyleType: 'lower-alpha',
  },
  'ol[type="A" s]': {
    listStyleType: 'upper-alpha',
  },
  'ol[type="a" s]': {
    listStyleType: 'lower-alpha',
  },
  'ol[type="I"]': {
    listStyleType: 'upper-roman',
  },
  'ol[type="i"]': {
    listStyleType: 'lower-roman',
  },
  'ol[type="I" s]': {
    listStyleType: 'upper-roman',
  },
  'ol[type="i" s]': {
    listStyleType: 'lower-roman',
  },
  'ol[type="1"]': {
    listStyleType: 'decimal',
  },
  ul: {
    //listStyleType: 'disc',
  },
  'ol > li::marker': {
    fontWeight: '400',
    color: 'var(--tw-prose-counters)',
  },
  'ul > li::marker': {
    color: 'var(--tw-prose-bullets)',
  },
  'ul > li::before': {
  },
  dt: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  hr: {
    borderColor: 'var(--tw-prose-hr)',
    borderTopWidth: 1,
  },
  blockquote: {
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'var(--tw-prose-quotes)',
    borderLeftWidth: '0.25rem',
    borderLeftColor: 'var(--tw-prose-quote-borders)',
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
  },
  'blockquote p:first-of-type::before': {
    content: 'open-quote',
  },
  'blockquote p:last-of-type::after': {
    content: 'close-quote',
  },
  h1: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '800',
  },
  'h1 strong': {
    fontWeight: '900',
    color: 'inherit',
  },
  h2: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '700',
  },
  'h2 strong': {
    fontWeight: '800',
    color: 'inherit',
  },
  h3: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  'h3 strong': {
    fontWeight: '700',
    color: 'inherit',
  },
  h4: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  'h4 strong': {
    fontWeight: '700',
    color: 'inherit',
  },
  h5: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  'h5 strong': {
    fontWeight: '700',
    color: 'inherit',
  },
  h6: {
    color: 'var(--tw-prose-headings)',
  },
  'h6 strong': {
    fontWeight: '600',
    color: 'inherit', // strong might be a diff color (?)
  },
  img: {}, // Required to maintain correct order when merging
  picture: {
    display: 'block',
  },
  kbd: {
    fontWeight: '500',
    fontFamily: 'inherit',
    color: 'var(--tw-prose-kbd)',
    boxShadow:
      '0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)',
  },
  code: {
    color: 'var(--tw-prose-code)',
    fontWeight: '600',
  },
  'code::before': {
    content: '"`"',
  },
  'code::after': {
    content: '"`"',
  },
  'a code': {
    color: 'inherit',
  },
  'h1 code': {
    color: 'inherit',
  },
  'h2 code': {
    color: 'inherit',
  },
  'h3 code': {
    color: 'inherit',
  },
  'h4 code': {
    color: 'inherit',
  },
  'h5 code': {
    color: 'inherit',
  },
  'h6 code': {
    color: 'inherit',
  },
  'blockquote code': {
    color: 'inherit',
  },
  'thead th code': {
    color: 'inherit',
  },
  pre: {
    color: 'var(--tw-prose-pre-code)',
    backgroundColor: 'var(--tw-prose-pre-bg)',
    overflowX: 'auto',
    fontWeight: '400',
  },
  'pre code': {
    backgroundColor: 'transparent',
    borderWidth: '0',
    borderRadius: '0',
    padding: '0',
    fontWeight: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
  },
  'pre code::before': {
    content: 'none',
  },
  'pre code::after': {
    content: 'none',
  },
  table: {
    width: '100%',
    tableLayout: 'auto',
    textAlign: 'left',
    marginTop: pxToEm(32, 16),
    marginBottom: pxToEm(32, 16),
  },
  thead: {
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--tw-prose-th-borders)',
  },
  'thead th': {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
    verticalAlign: 'bottom',
  },
  'tbody tr': {
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--tw-prose-td-borders)',
  },
  'tbody tr:last-child': {
    borderBottomWidth: '0',
  },
  'tbody td': {
    verticalAlign: 'baseline',
  },
  tfoot: {
    borderTopWidth: '1px',
    borderTopColor: 'var(--tw-prose-th-borders)',
  },
  'tfoot td': {
    verticalAlign: 'top',
  },
  'figure > *': {}, // Required to maintain correct order when merging
  figcaption: {
    color: 'var(--tw-prose-captions)',
  }
}

const getStyles = (baseFontSize) => ({
  DEFAULT: {
    css: [
      defaultCSS,
      gray.css,
      ...defaultModifiers(baseFontSize).base.css,
    ],
  },
  ...defaultModifiers(baseFontSize) 
}) 

module.exports = getStyles
