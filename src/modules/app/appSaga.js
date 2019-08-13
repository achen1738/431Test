// eslint-disable-next-line
import { put, takeEvery, call } from "redux-saga/effects";
import { SOME_ACTION } from "./actionTypes";

export default function* appSaga() {
  yield takeEvery(SOME_ACTION.ACTION, getCourses);
}

export function* getCourses(action) {
  try {
    yield put({ type: SOME_ACTION.PENDING });
    yield put({ type: SOME_ACTION.SUCCESS });
  } catch (error) {
    yield put({
      type: SOME_ACTION.ERROR
    });
  }
}
