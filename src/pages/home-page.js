/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/* components folder*/
import { ViewProjectsCard, SkillsCard, GetInTouch } from '../components';
/* hooks folder */
import { useBreakpoints } from '../hooks/use-breakpoints';
/* assets folder */
import imgPhone from '../assets/home/desktop/image-hero-phone.png';
import imgLeaf from '../assets/shared/desktop/bg-pattern-leaf.svg';
import imgLeaf2 from '../assets/shared/desktop/bg-pattern-leaf-rotate.svg';
/* MUI */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/* styles folder */
import { H1, Body1 } from '../styles';


export default function Home() {

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const links = [
        {
            routeKey: 'WebDesign',
            title: 'Web Design',
            id: 1
        },
        {
            routeKey: 'AppDesign',
            title: 'App Design',
            id: 2
        },
        {
            routeKey: 'GraphicDesign',
            title: 'Graphic Design',
            id: 3
        }
    ];


    return (
        <Stack component='main'
            sx={{
                px: {
                    sm: '3.9rem',
                    lg: '16.4rem'
                },
                ...(isDesktop && {
                    background: `0% 15% / 75vw no-repeat url(${imgLeaf}), 100% 110% / 75vw no-repeat url(${imgLeaf2})`
                })
            }}
        >
            <Stack component='section'
                sx={{
                    position: 'relative',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row'
                    },
                    alignItems: 'center',
                    height: {
                        xs: '84.3rem',
                        lg: '64rem'
                    },
                    backgroundColor: 'primary.main',
                    borderRadius: { sm: '1.5rem' },
                    overflow: 'hidden'
                }}
            >
                <Box sx={{
                    display: 'block',
                    zIndex: '1',
                    maxWidth: {
                        sm: '78%',
                        md: '63%',
                        lg: '55%'
                    },
                    pt: {
                        xs: '8rem',
                        sm: 'calc(3.5rem + 1vw)',
                        md: 'calc(4rem + 1vw)',
                        lg: '0'
                    },
                    px: {
                        xs: '2.4rem',
                        sm: '0',
                    },
                    pl: {
                        lg: '9.5rem'
                    },
                    textAlign: {
                        xs: 'center',
                        lg: 'left'
                    }
                }}
                >
                    <H1 component='h1'
                        sx={{
                            px: {
                                sm: 'calc(0.9rem + 1vw)',
                                md: 'calc(0.9rem + 1vw)',
                                lg: 'initial'
                            },
                            pb: {
                                xs: '1.4rem',
                                lg: '2.5rem'
                            },
                            textAlign: { lg: 'left' }
                        }}
                    >
                        Award-winning custom designs and digital branding solutions
                    </H1>
                    <Body1 component='p'
                        sx={{
                            pb: {
                                xs: '2.4rem',
                                lg: '4rem'
                            },
                            py: {
                                sm: 'calc(0.5rem + 1vw)',
                                md: 'calc(1.3rem + 1vw)'
                            },
                            textAlign: { lg: 'left' }
                        }}
                    >
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </Body1>
                    <Button
                        variant='dark'
                        type='sumbit'
                        sx={{ p: '1.4rem' }}
                    >
                        Learn more
                    </Button>
                </Box>
                <Box aria-hidden='true'
                    sx={{
                        position: 'absolute',
                        right: { lg: '0' },
                        left: {
                            xs: '0',
                            sm: '20%',
                            lg: 'initial'
                        },
                        top: {
                            xs: '10%',
                            sm: '5%',
                            lg: '0'
                        },
                        width: '64rem',
                        height: '64rem',
                        background: 'linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%)',
                        borderRadius: '50%',
                        opacity: '0.31',
                        transform: 'matrix(0, -1, -1, 0, 0, 0)'
                    }}
                >
                </Box>
                <Box component='img'
                    src={imgPhone}
                    sx={{
                        position: 'absolute',
                        right: {
                            lg: '-10rem'
                        },
                        top: {
                            xs: '28rem',
                            lg: '-3rem'
                        },
                        zIndex: '0',
                        height: 'auto'
                    }}
                >
                </Box>
            </Stack >
            <section
                aria-label='projects'
                css={css`
                    display: grid;
                    grid-template-areas: ${isDesktop && '"WebDesign AppDesign" "WebDesign GraphicDesign"'};
                    grid-template-columns: ${isDesktop && '1fr 1fr'};                    
                    grid-template-rows: ${isDesktop && '30rem 30rem'};
                    gap:${isDesktop && '3rem'};
                    padding: ${isDesktop ? '16rem 0' : '12rem 0'};
                `}
            >
                {links.map(({ routeKey, title, id }) => (
                    <ViewProjectsCard
                        key={routeKey}
                        route={routeKey}
                        title={title}
                        id={id}
                    />

                ))}
            </section>
            <Stack component='section'
                aria-label='skills'
                sx={{
                    ...(isMobile && { mb: '12rem' }),
                    ...(isTablet && { mb: '15rem' }),
                    ...(isDesktop && {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        mb: '20rem'
                    }),
                    px: {
                        xs: '2.4rem',
                        sm: '0'
                    },
                    textAlign: 'center'
                }}
            >
                <SkillsCard
                    id='1'
                    title='Passionate'
                    body='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
                />
                <SkillsCard
                    id='2'
                    title='Resourceful'
                    body="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
                />
                <SkillsCard
                    id='3'
                    title='Friendly'
                    body='We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
                />
            </Stack>
            <GetInTouch />
        </Stack >
    )
};