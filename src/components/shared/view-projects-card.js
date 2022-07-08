import { Link } from 'react-router-dom';
import routes from '../../routes';
/* hooks folder */
import { useBreakpoints } from '../../hooks/use-breakpoints';
/* MUI */
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
/* styles folder */
import { H2 } from '../../styles/';


export default function ViewProjectsCard({ route, title, id }) {

    const { isDesktop } = useBreakpoints();

    const obj = useBreakpoints();
    const breakpoint = Object.keys(obj).find(key => obj[key] === true).toLowerCase().slice(2);
    const url = (require(`../../assets/home/${breakpoint}/${id}.jpg`));


    return (

        <Paper elevation={6}
            sx={{
                position: 'relative',
                borderRadius: '1.5rem',
                ...(!isDesktop && { mb: '2.4rem' }),
                ...(isDesktop && {
                    gridArea: `${route}`,
                    height: '100%'
                })
            }}
        >
            <Link to={routes[route]}>
                <Box role='img'
                    aria-labelledby='view-projects-title'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        height: {
                            xs: '25rem',
                            lg: '100%'
                        },
                        width: '100%',
                        boxShadow: 'inset 0 0 0 100rem rgba(0,0,0,.5)',
                        background: `no-repeat center / cover url(${url})`,
                        borderRadius: '1.5rem'
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        zIndex: '0',
                        height: {
                            xs: '25rem',
                            lg: '100%'
                        },
                        width: '100%',
                        borderRadius: '1.5rem',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: '0.5'
                        }
                    }}
                    />
                    <H2 component='h2'
                        id='view-projects-title'
                        sx={{
                            position: 'relative',
                            zIndex: '1',
                            mb: '1.97rem'
                        }}
                    >
                        {title}
                    </H2>
                    <Typography component='span'
                        variant='button'
                        sx={{
                            position: 'relative',
                            zIndex: '1',
                            color: 'primary.light',
                            letterSpacing: '0.5rem'
                        }}
                    >
                        View Projects
                        <ArrowForwardIosIcon
                            sx={{
                                position: 'relative',
                                zIndex: '1',
                                color: 'primary.main'
                            }}
                        />
                    </Typography>
                </Box>
            </Link>
        </Paper >
    )
}