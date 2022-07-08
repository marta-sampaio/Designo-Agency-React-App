import { colors } from '../styles';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


export const H1 = styled(Typography)(
    ({ theme }) => ({
        fontWeight: 500,
        color: colors.primaryLight,
        textAlign: 'center',
        fontSize: '3.2rem',
        lineHeight: '3.6rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '4.8rem',
            lineHeight: '4.8rem'
        },
    })
);


export const H2 = styled(Typography)(
    ({ theme }) => ({
        fontWeight: 500,
        color: colors.primaryLight,
        textAlign: 'center',
        fontSize: '2.8rem',
        lineHeight: '3.6rem',
        letterSpacing: '0.14rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '4rem',
            lineHeight: '4.8rem',
            letterSpacing: '0.2rem'
        },
    })
);


export const H3 = styled(Typography)({
    fontWeight: 500,
    color: colors.secondaryDark,
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '2.6rem',
    letterSpacing: '0.5rem',
    textTransform: 'uppercase',
});

export const H4 = styled(Typography)(
    ({ theme }) => ({
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: '2.5rem',
        letterSpacing: '0.2rem',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '4.2rem',
            lineHeight: '1.4rem'
        }
    })
);

export const Body1 = styled(Typography)({
    fontWeight: 400,
    color: colors.primaryLight,
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
});

