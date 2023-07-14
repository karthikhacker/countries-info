import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
    // console.log(country)
    const countryOrder = country?.name?.common.split("").sort()
    // console.log(countryOrder)
    const code = country?.altSpellings[0];
    return (
        <Grid lg={3} sm={6} xs={12} md={4} item >
            <Card sx={{
                width: {
                    xl: 280,
                    lg: 280,
                    md: 250,
                    sm: 350,
                    xs: 450
                },
                minHeight: 300,
                margin: {
                    xs: 'auto',
                    lg: 1,
                    md: 1
                },
                fontFamily: 'Nunito'

            }}>
                <Link to={`/country/${code}`}>
                    <CardMedia
                        component="img"
                        sx={{ height: 160 }}
                        image={country?.flags?.svg}
                    />
                </Link>

                <CardContent
                    sx={{
                        textAlign: {
                            xs: 'center',
                            sm: 'center',
                            md: 'center',
                            lg: 'left',
                            xl: 'left'
                        }
                    }}
                >
                    <Typography variant='subtitle1' sx={{
                        fontSize: {
                            xs: '2.3em',
                            sm: '1.3em'
                        },
                        fontWeight: '700'
                    }}>
                        {country?.name.common}
                    </Typography>
                    <Typography variant='caption' sx={{
                        fontSize: '1em',
                        fontWeight: '400'
                    }}>
                        population : {country?.population}
                    </Typography>
                    <br />
                    <Typography variant='caption' sx={{
                        fontSize: '1em',
                        fontWeight: '400'
                    }}>
                        Region : {country?.region}
                    </Typography>
                    <br />
                    <Typography variant='caption' sx={{
                        fontSize: '1em',
                        fontWeight: '400'
                    }}>
                        Capital : {country?.capital?.map(cap => cap)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}

export default CountryCard