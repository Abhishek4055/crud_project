import { all } from "redux-saga/effects";
import { userSagas } from "./saga";

export default function* rootSaga() {
  yield all([...userSagas]);
}
