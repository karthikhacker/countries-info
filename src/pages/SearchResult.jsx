import React from 'react'
import { useSelector } from 'react-redux'
import FetchCountry from '../components/FetchCountry';
import { Grid } from '@mui/material';
import ErrorMessage from '../components/ErrorMessage';

const SearchResult = () => {
    const { country, error } = useSelector(state => state.countries);
    return (
        <>
            <ErrorMessage />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <FetchCountry country={country} />
            </Grid>
        </>

    )
}

export default SearchResult