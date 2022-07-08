/* components folder*/
import { Locations, NavBar, SocialLinks } from '../../components';
/* hooks folder */
import { useBreakpoints } from '../../hooks/use-breakpoints';
/* MUI */
import Stack from '@mui/material/Stack';


export default function Footer() {

    const isFooter = true;
    const socialMediaList = ['facebook', 'youtube', 'twitter', 'pinterest', 'instagram'];
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    return (
        <Stack component='footer'
            sx={{
                p: {
                    xs: '25.3rem 2.4rem 6.4rem',
                    sm: '16.6rem 3.9rem 8rem',
                    lg: '14.4rem 16.5rem 7.2rem'
                },
                backgroundColor: 'primary.dark'
            }}
        >
            <NavBar isFooter={isFooter} />
            <Stack
                sx={{
                    ...(!isMobile && {
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    })
                }}>
                <Stack component='address'
                    sx={{
                        ...(!isMobile && {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexGrow: '1'
                        }),
                        maxWidth: {
                            sm: '45vw',
                            lg: '30vw'
                        }
                    }}
                >
                    <Locations isFooter={isFooter} />
                </Stack>
                <Stack
                    flexDirection='row'
                    pt='4rem'
                    sx={{
                        ...(isMobile && {
                            justifyContent: 'center'
                        }),
                        ...(!isMobile && {
                            justifyContent: 'flex-end'
                        })
                    }}
                >
                    {socialMediaList.map(item => (
                        <SocialLinks
                            key={item}
                            socialMedia={item}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack >
    )
}