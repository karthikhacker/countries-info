import { Box, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}
        >
            <Typography variant='h6'>
                LOADING ...
            </Typography>
        </Box>
    )
}

export default Loading