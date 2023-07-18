import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Box, Typography, Paper, } from '@mui/material';
import { Link } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Country = ({ name, f, cc, region, tz, mp, bd }) => {

    return (
        <>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}  >
                <Box sx={{
                    width: {
                        xs: '300px',
                        sm: '450px',
                        md: '400px',
                        lg: '450px',
                        xl: '450px'
                    }

                }}>
                    <img src={f} style={{ width: '100%' }} />
                </Box>
            </Grid>
            <Grid item lg={6}>
                <Box>
                    <Typography variant='h5'>
                        {name}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Capital :   {cc}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Region :   {region}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Timezones :   {tz}
                    </Typography>
                    <Typography variant='subtitle'>
                        Map :   <a style={{ textDecoration: 'none', color: 'blue' }} href={`${mp}`}>Locate in google map</a>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        Border countries
                    </Typography>
                    {bd()}
                </Box>
            </Grid >
        </>
    )
}

export default Country