import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

const ErrorMessage = () => {
    const { error } = useSelector(state => state.countries);
    console.log(error);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <Typography variant='h6'>
                {error !== undefined && error?.message}
            </Typography>
        </Box>
    )
}

export default ErrorMessage