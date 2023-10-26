export default (theme) => ({
  DEFAULT: {
    css: {
      maxWidth: 'initial',
      p: {
        margin: 0,
        alignSelf: 'flex-start'
      },
      ol: {
        margin: 0,
        alignSelf: 'flex-start'
      },
      ul: {
        margin: 0,
        alignSelf: 'flex-start'
      },
      a: {
        textDecoration: 'none',
        '&:hover': {
          opacity: 0.6,
          textDecoration: 'underline',
        }
      },
      h1: {
        fontSize: theme('fontSize[2xl]'),
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
        textAlign: 'center'
      },
      h2: {
        fontSize: theme('fontSize.xl'),  
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
        textAlign: 'center'
      },
      h3: {
        fontSize: theme('fontSize.lg'),  
        margin: 0,
        fontFamily: theme('fontFamily.heading'),
        fontWeight: 800,
        textAlign: 'center'
      },
      h4: {
        fontSize: theme('fontSize.lg'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 800,
        textAlign: 'center'
      },
      h5: {
        fontSize: theme('fontSize.lg'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 600,
        textAlign: 'center'
      },
      h6: {
        fontSize: theme('fontSize.lg'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 400,
        textAlign: 'center'
      },
    }
  },
  md: {
    css: {
      maxWidth: 'initial',
      h1: {
        fontSize: theme('fontSize[4xl]'),
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
      },
      h2: {
        fontSize: theme('fontSize[3xl]'),  
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800
      },
      h3: {
        fontSize: theme('fontSize[2xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.heading'),
        fontWeight: 800
      },
      h4: {
        fontSize: theme('fontSize.xl'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 700
      },
      h5: {
        fontSize: theme('fontSize.lg'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 700,
        textTransform: 'uppercase',
      },
      h6: {
        fontSize: theme('fontSize.lg'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 800,
        //textTransform: 'uppercase',
      },
    }
  },
  lg: {
    css: {
      maxWidth: 'initial',
      h1: {
        fontSize: theme('fontSize[6xl]'),
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
        textAlign: 'center'
      },
      h2: {
        fontSize: theme('fontSize[5xl]'),  
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
        textAlign: 'center'
      },
      h3: {
        fontSize: theme('fontSize[4xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.heading'),
        fontWeight: 800,
        textAlign: 'center'
      },
      h4: {
        fontSize: theme('fontSize[4xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 700,
        textAlign: 'center'
      },
      h5: {
        fontSize: theme('fontSize[3xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 800,
        textAlign: 'center'
      },
      h6: {
        fontSize: theme('fontSize.[2xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 800,
        textAlign: 'center'
      },
    }
  }
})