import React, { useEffect, useState } from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux';
import { countryRegionPending } from '../features/countrySlice';
const SelectFilter = () => {
    const [regionName, setRegionName] = useState("");
    const dispatch = useDispatch();
    const regions = ['Africa', 'Asia', 'America', 'Europe', 'Oceania'];
    const getRegion = () => {
        return regions?.map(r => (
            <MenuItem key={r} value={r}>
                {r}
            </MenuItem>
        ))
    }
    useEffect(() => {
        if (regionName !== "" && regionName !== undefined) {
            dispatch(countryRegionPending(regionName))
        }
    }, [regionName])
    return (
        <Box sx={{
            width: {
                xl: 200,
                lg: 200,
                md: 200,
                sm: 200,
                xs: 150
            }
        }}>
            <FormControl fullWidth size='small'>
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    inputProps={{ 'data-testid': 'select' }}
                    id="demo-simple-select"
                    label="Regions"
                    value={regionName}
                    onChange={(e) => setRegionName(e.target.value)}
                >
                    {getRegion()}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectFilter