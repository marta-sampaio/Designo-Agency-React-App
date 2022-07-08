/* components folder*/
import { NavLinks } from '../../../components';
/* hooks folder */
import { useBreakpoints } from '../../../hooks/use-breakpoints';
/* assets folder */
import logoDark from '../../../assets/shared/desktop/logo-dark.png';
import logoLight from '../../../assets/shared/desktop/logo-light.png';
/* MUI */
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';


export default function NavBar({ isHeader, isFooter, setIsDrawerOpen }) {

    const { isMobile } = useBreakpoints();

    return (
        <Toolbar disableGutters
            sx={{
                ...(isMobile && isHeader && { justifyContent: 'space-between' }),
                ...(isMobile && isFooter &&
                {
                    flexDirection: 'column',
                    textAlign: 'center'
                }),
                ...(!isMobile && { justifyContent: 'space-between' })
            }}
        >
            <Box component='img'
                src={isFooter ? logoLight : logoDark}
                sx={{ maxHeight: '2.7rem' }}
            />
            {isHeader &&
                <IconButton
                    onClick={() => setIsDrawerOpen(true)}
                    size='large'
                    aria-label='menu-icon-mobile'
                    sx={{
                        display: {
                            xs: 'inline',
                            sm: 'none'
                        },
                        color: 'primary.dark'
                    }}
                >
                    <MenuIcon />
                </IconButton>
            }
            <Stack component='nav'
                sx={{
                    ...(isHeader && isMobile && { display: 'none' }),
                    ...(!isMobile && { display: 'inline' })
                }}
            >
                <NavLinks
                    isFooter={isFooter}
                    isHeader={isHeader}
                />
            </Stack>
        </Toolbar >
    )
}
