import { all } from "redux-saga/effects";
import leadsSaga from './lead.saga'

export default function* rootSaga() {
    yield all([
        leadsSaga(),
    ])
}