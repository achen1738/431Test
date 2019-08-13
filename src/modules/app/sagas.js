import { all } from "redux-saga/effects";
import appSaga from "./appSaga";

export default function* saga() {
  yield all([appSaga()]);
}
