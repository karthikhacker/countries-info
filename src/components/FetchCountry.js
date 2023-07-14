import { Chip } from "@mui/material";
import { useDispatch } from "react-redux";
import Country from "./Country";
import { countryFetchPending } from "../features/countrySlice";

const FetchCountry = ({ country }) => {
    const dispatch = useDispatch()
    const handleChip = (b) => {
        console.log(b);
        dispatch(countryFetchPending(b))
    }
    const renderCountry = () => {
        return country?.map(c => {
            // console.log(c);
            const cc = c?.capital?.map(c => c);
            const tz = c?.timezones.map(t => t);
            const mp = c?.maps?.googleMaps;
            const f = c?.flags?.svg;
            const bd = () => {
                return c?.borders ? c?.borders?.map(b => (
                    <Chip
                        key={b}
                        label={b}
                        color="primary"
                        variant='outlined'
                        size='medium'
                        sx={{ mt: 2, mr: 2 }}
                        onClick={() => handleChip(b)}
                    />
                )) : 'No border countries'
            }
            return <Country
                key={c?.name.common}
                f={f}
                name={c?.name?.common}
                cc={cc}
                region={c?.region}
                tz={tz}
                mp={mp}
                bd={bd}
            />
        })
    }
    return renderCountry()
}
export default FetchCountry;