import { all } from 'redux-saga/effects'
import { countrySaga } from './countrySaga'

function* rootSaga() {
    yield all([...countrySaga])
}
export default rootSaga;