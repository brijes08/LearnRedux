import { call, put, takeEvery } from "redux-saga/effects";
import { leadsSuccess, leadsError } from "../actions/leads.action";
import { LEADS } from "../types";
import { leadeApi } from "../services/index";
function* fetchLeads({ payload }) {
  try {
    const leadeData = yield call(leadeApi, payload);
    yield put(leadsSuccess(leadeData));
  } catch (error) {
    yield put(leadsError(error));
  }
}
export default function* leadsSaga() {
  yield takeEvery(LEADS.FETCH, fetchLeads);
}
