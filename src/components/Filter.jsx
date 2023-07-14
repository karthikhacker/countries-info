import { Box } from '@mui/material'
import React from 'react'
import Search from './Search'
import SelectFilter from './SelectFilter'

const style = {
    margin: '30px 0',
    display: {
        xl: 'flex',
        lg: 'flex',
        md: 'flex',
        sm: 'block',
        xs: 'block'
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    mr: 2

}
const Filter = () => {
    return (
        <Box sx={style}>
            <Box>
                <Search />
            </Box>
            <Box>
                <SelectFilter />
            </Box>
        </Box>
    )
}

export default Filter