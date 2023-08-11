import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    countries: [],
    country: null,
    isLoading: false,
    error: {}
}
export const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        countriesFetchPending: (state) => {
            state.isLoading = true
        },
        countriesFetchSuccess: (state, action) => {
            state.countries = action.payload;
            state.isLoading = false
        },
        countriesFetchRejected: (state, action) => {
            state.error = action.payload;
            state.isLoading = false
        },
        countryFetchPending: (state) => {
            state.isLoading = true
        },
        countryFetchSuccess: (state, action) => {
            state.country = action.payload
            state.isLoading = false;
            // console.log(action.payload)
        },
        countryFetchRejected: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        countrySearchPending: (state) => {
            state.isLoading = true
        },
        countrySearchSuccess: (state, action) => {
            state.country = action.payload;
            state.isLoading = false;
        },
        countrySearchRejected: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        countryRegionPending: (state) => {
            state.isLoading = true;
        },
        countryRegionSuccess: (state, action) => {
            state.isLoading = false;
            state.countries = action.payload;
        },
        countryRegionRejected: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})
export const {
    countriesFetchSuccess,
    countriesFetchPending,
    countriesFectRejected,
    countryFetchPending,
    countryFetchSuccess,
    countryFetchRejected,
    countrySearchPending,
    countrySearchSuccess,
    countrySearchRejected,
    countryRegionPending,
    countryRegionSuccess,
    countryRegionRejected
} = countrySlice.actions;
export default countrySlice.reducer