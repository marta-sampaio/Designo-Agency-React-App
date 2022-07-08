import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const useMobile = () => useMediaQuery(useTheme().breakpoints.down('sm'));
export const useTablet = () => useMediaQuery(useTheme().breakpoints.between('sm', 'lg'));

export const useBreakpoints = () => {
    const isMobile = useMobile();
    const isTablet = useTablet();
    return {
        isMobile,
        isTablet,
        isDesktop: !isMobile && !isTablet
    }
};