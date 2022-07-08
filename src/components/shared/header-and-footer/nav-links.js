import { Link } from 'react-router-dom';
import routes from '../../../routes';
/* hooks folder */
import { useBreakpoints } from '../../../hooks/use-breakpoints';
/* MUI */
import Box from '@mui/material/Box';
/* styles folder */
import { H4 } from '../../../styles';


export default function NavLinks({ isHeader, isFooter, isDrawerOpen }) {
    const { isMobile } = useBreakpoints();
    const links = [
        {
            id: 'About',
            title: 'Our company'
        },
        {
            id: 'Locations',
            title: 'Locations'
        },
        {
            id: 'Contact',
            title: 'Contact'
        }
    ];


    return (
        <Box
            sx={{
                ...(isFooter && isMobile && {
                    width: '80vw',
                    mt: '3.2rem',
                    borderTop: '1px solid rgb(255, 255, 255, 0.1)'
                })
            }}
        >
            {links.map(({ id, title }) => (
                <Link to={routes[id]} key={id}>
                    <H4 component='span'
                        sx={{
                            ...(isDrawerOpen && {
                                display: 'block',
                                fontSize: '2.4rem',
                                color: 'primary.light',
                                pt: '3.2rem'
                            }),
                            ...(!isDrawerOpen && isHeader && {
                                color: 'secondary.dark'
                            }),
                            ...(!isDrawerOpen && isFooter && {
                                color: 'primary.light'
                            }),
                            ...(!isDrawerOpen && isFooter && isMobile && {
                                display: 'block',
                                pt: '3.2rem'
                            })
                        }}
                    >
                        {title}
                    </H4>
                </Link>
            ))
            }
        </Box>
    )
}
