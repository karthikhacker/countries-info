import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LightMode } from '@mui/icons-material';
import { changeTheme } from '../features/themeSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector(state => state.themes);

    const handleMode = () => {
        dispatch(changeTheme(!darkMode));
    }
    return (
        <Box>
            <AppBar color="inherit" position='fixed'>
                <Toolbar >
                    <Typography variant="h6" sx={{
                        flexGrow: 1, fontFamily: 'Nunito',
                        fontWeight: 700
                    }}>
                        <Link underline="none" component={RouterLink} to="/">
                            Where in the world ?
                        </Link>
                    </Typography>
                    <Button
                        variant="outlined"
                        color="inherit"
                        startIcon={darkMode ? <LightMode /> : <DarkModeIcon />}
                        onClick={handleMode}
                        sx={{
                            fontSize: {
                                xs: '0.8em',
                                sm: '0.8em',
                                md: '1em',
                                lg: '1em',
                                xl: '1em'
                            },
                            fontFamily: 'Nunito',
                            fontWeight: 400
                        }}
                    >
                        {darkMode ? 'Light mode' : 'Dark Mode'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar