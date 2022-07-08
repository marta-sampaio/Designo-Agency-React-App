/* hooks folder */
import { useBreakpoints } from '../../hooks/use-breakpoints';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
/* styles folder */
import { H3, Body1 } from '../../styles';


export default function SkillsCard({ id, title, body }) {

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const url = require(`../../assets/home/desktop/illustration-${id}.svg`);
    const urlOval = require(`../../assets/home/desktop/circle-${id}.svg`);


    return (
        <Grid container component='article'
            sx={{
                ...(isMobile && { mb: '8rem' }),
                ...(isMobile && { mb: '3.2rem' }),
                ...(isDesktop && {
                    maxWidth: '100%',
                    mb: '0'
                })
            }}
        >
            <Grid item xs={12} sm={4} lg={12}>
                <Box component='img'
                    src={url}
                    alt={`${title} illustration`}
                    sx={{
                        height: '20.2rem',
                        mr: { sm: '4.8rem' },
                        background: `center / cover no-repeat url(${urlOval})`
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={8} lg={12}
                display='flex'
                flexDirection='column'
                justifyContent='center'
            >
                <H3 component='h2'
                    mb='3.2rem'
                    sx={{
                        ...(!isTablet && { mt: '4.8rem' }),
                        ...(isTablet && { textAlign: 'left' })
                    }}
                >
                    {title}
                </H3>
                <Body1
                    component='p'
                    sx={{
                        color: 'secondary.dark',
                        ...(isTablet && { textAlign: 'left' }),
                        ...(isDesktop && { maxWidth: '95%' })
                    }}
                >
                    {body}
                </Body1>
            </Grid>
        </Grid >
    )
}
