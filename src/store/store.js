import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import countrySlice from '../features/countrySlice'
import themeSlice from '../features/themeSlice'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        countries: countrySlice,
        themes: themeSlice
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);