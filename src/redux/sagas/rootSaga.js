import {handleGetUser} from "./handlers/user";
import {GET_USER} from "../ducks/user";
import {takeLatest} from "redux-saga/effects";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
