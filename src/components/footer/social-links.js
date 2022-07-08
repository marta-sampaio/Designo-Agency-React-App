/* hooks folder */
import { useBreakpoints } from '../../hooks/use-breakpoints';
/* MUI */
import Box from '@mui/material/Box';


export default function SocialLinks({ socialMedia }) {

    const { isMobile } = useBreakpoints();

    // Calling images dynamically:
    /* require.context returns an array of the files that is matched to the regular expression passed into it */
    const icon = importAll(require.context('../../assets/shared/desktop', false, /\.(svg)$/));
    /* Pass that array to a function that turns it into an object that has keys matched to their filename  */
    function importAll(r) {
        let icon = {};
        r.keys().map(item => { icon[item.replace('./', '')] = r(item); });
        return icon;
    };


    return (
        <>
            <a
                href={`https://www.${socialMedia}.com/`} target='_blank'
                rel='noreferrer'>
                <Box component='img'
                    src={icon[`icon-${socialMedia}.svg`]}
                    alt={`${socialMedia} icon`}
                    sx={{
                        ...(isMobile && {
                            px: '0.8rem'
                        }),
                        ...(!isMobile && {
                            px: '1rem'
                        })
                    }}
                />
            </a>
        </>
    )
}

