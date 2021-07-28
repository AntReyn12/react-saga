import {handleGetUser} from "./handlers/user";
import {GET_USER} from "../ducks/user";
import {takeEvery} from "redux-saga/effects";

export function* watcherSaga() {
  yield takeEvery(GET_USER, handleGetUser);
}
