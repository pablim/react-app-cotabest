import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { 
  getCharactersRequest, 
  getCharactersByNameRequest 
} from '../../api/services/Characters'

// worker Saga: will be fired on FETCH_LIST actions
function* fetchCharacters(action) {
   try {
      const response = yield call(getCharactersRequest);
      yield put({type: "FETCH_LIST_SUCCEEDED", payload: response.data.results});
   } catch (e) {
      yield put({type: "FETCH_LIST_FAILED", message: e.message});
   }
}

function* updateCharacters(action) {
   try {
      const response = yield call(getCharactersByNameRequest, action.payload);
      yield put({type: "FETCH_LIST_SUCCEEDED", payload: response.data.results});
   } catch (e) {
      yield put({type: "FETCH_LIST_FAILED", message: e.message});
   }
}

/*
  Starts fetchCharacters on each dispatched `FETCH_LIST` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("FETCH_LIST", fetchCharacters);
}

function* watchAll() {
  yield all([
    takeLatest("FETCH_LIST", fetchCharacters),
    takeLatest("UPDATE_LIST", updateCharacters)
  ])
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_LIST" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("FETCH_LIST", fetchCharacters);
// }

//export default mySaga;
export default watchAll;