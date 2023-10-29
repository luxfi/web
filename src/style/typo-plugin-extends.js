const commonTags = {
  p: {
    margin: 0,
    alignSelf: 'flex-start',
    fontSize: '1.1rem',
    lineHeight: 1.4,
    fontWeight: 500
  },
  ol: {
    margin: 0,
    alignSelf: 'flex-start',
    
  },
  ul: {
    margin: 0,
    listStylePosition: 'outside',
    //listStyleType: 'disc',
    listStyleImage: "url('/assets/img/lux-icon-for-bullet-list--18x16.png')",
  },

  a: {
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.6,
      textDecoration: 'underline',
    }
  },
  img: {
    margin: 0
  },
}


export default (theme) => ({
  DEFAULT: {
    css: {
      maxWidth: 'initial',
      ...commonTags,
      h1: {
        fontSize: theme('fontSize[3xl]'),
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
      ...commonTags,
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
      ...commonTags,
      h1: {
        fontSize: theme('fontSize[6xl]'),
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
        textAlign: 'center',
        lineHeight: 1.0
      },
      h2: {
        fontSize: theme('fontSize[5xl]'),  
        fontFamily: theme('fontFamily.heading'),
        margin: 0,
        fontWeight: 800,
        textAlign: 'center',
        lineHeight: 1.0
      },
      h3: {
        fontSize: theme('fontSize[4xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.heading'),
        fontWeight: 800,
        textAlign: 'center',
        lineHeight: 1.0
      },
      h4: {
        fontSize: theme('fontSize[3xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 1.0,
      },
      h5: {
        fontSize: theme('fontSize[2xl]'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 800,
        textAlign: 'center',
      },
      h6: {
        fontSize: theme('fontSize.xl'),  
        margin: 0,
        fontFamily: theme('fontFamily.inter'),
        fontWeight: 800,
        textAlign: 'center',
        lineHeight: 1.1,
      },
    }
  }
})