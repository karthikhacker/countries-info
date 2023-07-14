import { SearchOutlined, SearchSharp } from '@mui/icons-material'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { countrySearchPending } from '../features/countrySlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const { countries } = useSelector(state => state.countries);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const options = countries?.map(c => {
        return c.name.common
    })
    useEffect(() => {
        if (value !== null && value !== "") {
            dispatch(countrySearchPending(value))
            navigate("/search/result")
        }

    }, [value])
    return (
        <Autocomplete
            disablePortal
            freeSolo
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            options={options}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            sx={{
                width: {
                    xl: 300,
                    lg: 300,
                    sm: '100%',
                    xs: '100%'
                },
                marginBottom: {
                    sm: '20px',
                    xs: '20px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px'
                }
            }}
            renderInput={(params) => <TextField
                {...params}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchSharp />
                        </InputAdornment>
                    )
                }}
                placeholder='Search countries'
            />}
            size='small'
        />
    )
}

export default Search