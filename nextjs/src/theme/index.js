import { createTheme } from '@material-ui/core/styles'
const commonTypography = {
    fontFamily: "'Mulish', sans-serif",
}
// Create a theme instance.
const defaultTheme = createTheme({
    palette: {
        background: {
            default: '#fff',
        },
    },
    typography: {
        ...commonTypography,
    },
})

const theme = {
    ...defaultTheme,
    overrides: {
        MuiTypography: {
            caption: {
                fontSize: '15rem',
                lineHeight: '15rem',
                fontWeight: 1000,
            },
            h1: {
                fontSize: '6rem',
                lineHeight: '6.6rem',
                fontWeight: 700,
            },

            h2: {
                fontSize: '4.4rem',
                lineHeight: '5.3rem',
                fontWeight: 700,
            },

            h3: {
                fontSize: '2.8rem',
                lineHeight: '3.9rem',
                fontWeight: 700,
            },

            h4: {
                fontSize: '2rem',
                lineHeight: '2.8rem',
                fontWeight: 700,
            },

            body1: {
                fontSize: '2rem',
                lineHeight: '2.8rem',
            },

            body2: {
                fontSize: '1.6rem',
                lineHeight: '2.2rem',
            },
            subtitle1: {
                fontSize: '1.4rem',
                lineHeight: '2rem',
                fontWeight: 700,
            },
            subtitle2: {
                fontSize: '1.4rem',
                lineHeight: '2rem',
                fontWeight: 500,
            },
            overline: {
                fontSize: '4.8rem',
                lineHeight: '5.3rem',
                fontWeight: 700,
            },
        },
    },
}

export default theme
