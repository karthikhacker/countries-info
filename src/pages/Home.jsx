import { Box, Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard'
import { useDispatch, useSelector } from 'react-redux'
import { countriesFetchPending } from '../features/countrySlice'
import Filter from '../components/Filter'
import Loading from '../components/Loading'

const Home = () => {
    const [page, setPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const dispatch = useDispatch();
    const { countries, isLoading, error } = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(countriesFetchPending());
    }, [dispatch])
    const indexOfLastPage = page * dataPerPage;
    const indexOfFirstPage = indexOfLastPage - dataPerPage;
    const order = [...countries]?.sort((a, b) => a.name.common.localeCompare(b.name.common)).slice(indexOfFirstPage, indexOfLastPage);
    // console.log(order);
    const fetchCountries = () => {
        return order?.map(country => <CountryCard key={country?.name?.common} country={country} />)
    }
    // console.log(error);
    return (

        <>
            <Filter />
            {
                isLoading ? <Loading /> : (
                    <>
                        <Grid container spacing={1}>
                            {fetchCountries()}
                        </Grid>
                        <Box sx={{ width: '100%', mt: 10, mb: 8, display: 'flex', justifyContent: 'center' }}>
                            <Pagination
                                count={countries && Math.floor(countries?.length / 10)}
                                defaultPage={page}
                                onChange={(e, value) => setPage(value)}
                            />
                        </Box>
                    </>
                )
            }

        </>








    )
}

export default Home