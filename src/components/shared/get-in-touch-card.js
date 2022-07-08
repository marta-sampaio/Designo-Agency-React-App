/* hooks folder */
import { useBreakpoints } from '../../hooks/use-breakpoints';
/* MUI */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/* styles folder */
import { H1, Body1 } from '../../styles';


export default function GetInTouch() {
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const obj = useBreakpoints();
    const breakpoint = Object.keys(obj).find(key => obj[key] === true).toLowerCase().slice(2);
    const url = require(`../../assets/shared/${breakpoint}/bg-pattern-call-to-action-${breakpoint}.svg`);


    return (
        <Box component='section'
            aria-labelledby='card-title'
            sx={{
                position: 'relative',
                display: 'block',
                width: '100%',
                height: '20rem'
            }}
        >
            <Stack sx={{
                position: 'absolute',
                alignItems: 'center',
                backgroundImage: `url(${url})`,
                backgroundColor: 'primary.main',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                ...(isMobile && {
                    bottom: '-80%',
                    mx: '2.4rem',
                    p: '6.4rem 2.4rem'
                }),
                ...(isTablet && {
                    bottom: '-40%',
                    mx: '3.9rem',
                    p: '5.7rem 12rem'
                }),
                ...(!isDesktop && {
                    justifyContent: 'center'
                }),
                ...(isDesktop && {
                    bottom: '-30%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    p: '7.2rem 9.5rem'
                })
            }}
            >
                <Box
                    sx={{ ...(isDesktop && { maxWidth: '50%' }) }}
                >
                    <H1 component='h2'
                        id='card-title'
                        sx={{ ...(isDesktop && { textAlign: 'left' }) }}
                    >
                        Let's talk about your project
                    </H1>
                    <Body1 sx={{
                        ...(isMobile && { pt: '3.2rem', pb: '6rem' }),
                        ...(isTablet && { pt: '1.5rem', pb: '3.2rem' }),
                        ...(isDesktop && { pt: '2rem', textAlign: 'left' })
                    }}
                    >
                        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                    </Body1>
                </Box>
                <Button
                    variant='dark'
                    type='sumbit'
                    sx={{ p: '1.4rem' }}
                >
                    Get in touch
                </Button>
            </Stack >
        </Box >
    )
}
