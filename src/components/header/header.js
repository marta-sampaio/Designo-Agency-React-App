import React, { useState } from 'react';
/* components folder*/
import { NavBar, NavLinks } from '../../components';
/* MUI */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


export default function Header() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isHeader = true;

    function handleDrawerToggle() {
        setIsDrawerOpen(!isDrawerOpen);
    };


    return (
        <>
            <AppBar position='relative'
                sx={{
                    zIndex: '999',
                    p: {
                        xs: '3.5rem 2.4rem',
                        sm: '6.4rem 3.9rem',
                        lg: '6.4rem 16.5rem'
                    },
                    backgroundColor: 'primary.light',
                    boxShadow: 'none'
                }}
            >
                <NavBar
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                    isHeader={isHeader}
                />
            </AppBar>
            <Drawer
                onClose={handleDrawerToggle}
                open={isDrawerOpen}
                anchor='top'
                sx={{
                    zIndex: '997',
                    display: { sm: 'none' }
                }}
            >
                <Box
                    width='100vw'
                    role='presentation'
                    textAlign='left'
                    sx={{
                        p: '16.4rem 2.4rem 4.8rem 2.4rem',
                        backgroundColor: 'primary.dark'
                    }}
                >
                    <NavLinks
                        isDrawerOpen={isDrawerOpen}
                        isHeader={isHeader}
                    />
                </Box>
            </Drawer>
        </>
    )
}
