import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { countryFetchPending, countryFetchSuccess } from '../features/countrySlice';
import { Grid, Box, Chip } from '@mui/material';
import FetchCountry from '../components/FetchCountry';
import Loading from '../components/Loading';
const CountryInfo = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { country, isLoading } = useSelector(state => state.countries);
    // console.log(params);
    useEffect(() => {
        dispatch(countryFetchPending(params?.code));
    }, [params])
    // console.log(country);
    if (isLoading) {
        return <Loading />
    }
    return (
        <Grid container spacing={2}>
            <FetchCountry country={country} />
        </Grid>

    )
}

export default CountryInfo