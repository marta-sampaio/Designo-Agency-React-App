import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 767,
            md: 991,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: colors.primaryMain,
            dark: colors.primaryDark,
            light: colors.primaryLight
        },
        secondary: {
            main: colors.primaryDark,
            dark: colors.secondaryDark,
            light: colors.secondaryLight
        }
    },
    typography: {
        fontFamily: [
            'Jost',
            'sans-serif'
        ].join(','),
        htmlFontSize: 10,
        button: {
            fontSize: '1.5rem',
            fontWeight: '500',
            letterSpacing: '0.1rem',
            lineHeight: '2.17rem'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'light' },
                    style: {
                        color: colors.primaryLight,
                        borderRadius: '0.8rem',
                        backgroundColor: colors.primaryMain,
                        '&:hover': {
                            backgroundColor: colors.secondaryMain
                        }
                    },
                },
                {
                    props: { variant: 'dark' },
                    style: {
                        color: '#333136',
                        borderRadius: '0.8rem',
                        backgroundColor: colors.primaryLight,
                        '&:hover': {
                            color: colors.primaryLight,
                            backgroundColor: colors.secondaryMain
                        }
                    }
                }
            ]
        }
    }
});

export default theme;