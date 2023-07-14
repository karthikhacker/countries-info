import axios from 'axios'
import { put, call, takeEvery, fork } from 'redux-saga/effects'
import { countriesFectRejected, countriesFetchSuccess, countryFetchSuccess, countryFetchRejected, countrySearchSuccess, countrySearchRejected, countryRegionSuccess, countryRegionPending } from '../features/countrySlice';

function* getCountries() {
    try {
        const res = yield call(() => axios.get('https://restcountries.com/v3.1/all'));
        //console.log(res.data);
        yield put(countriesFetchSuccess(res.data))
    } catch (error) {
        if (error.response) {
            yield put(countriesFectRejected(error.response))
        }
    }
}
function* getCountry({ payload }) {
    //console.log(name)
    try {
        const code = payload;
        const res = yield call(() => axios.get(`https://restcountries.com/v3.1/alpha/${code}`));
        // console.log(res.data);
        yield put(countryFetchSuccess(res.data));
    } catch (error) {
        if (error.response) {
            yield put(countryFetchRejected(error.response.data))
        }
    }
}
function* searchCountry({ payload }) {
    try {
        const name = payload;
        const res = yield call(() => axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`));
        yield put(countrySearchSuccess(res.data));
    } catch (error) {
        if (error.response) {
            yield put(countrySearchRejected(error.response.data))
        }
    }
}
function* filterRegion({ payload }) {
    try {
        const region = payload;
        const res = yield call(() => axios.get(`https://restcountries.com/v3.1/region/${region}`));
        yield put(countryRegionSuccess(res.data));
    } catch (error) {
        if (error.response) {
            yield put(countryRegionPending(error.response.data))
        }
    }
}
function* getCountriesSaga() {
    yield takeEvery('countries/countriesFetchPending', getCountries);
}
function* getCountrySaga() {
    yield takeEvery('countries/countryFetchPending', getCountry);
}
function* searchSaga() {
    yield takeEvery('countries/countrySearchPending', searchCountry)
}
function* regionSaga() {
    yield takeEvery('countries/countryRegionPending', filterRegion)
}

export const countrySaga = [fork(getCountriesSaga), fork(getCountrySaga), fork(searchSaga), fork(regionSaga)]