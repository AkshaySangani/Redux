import {takeEvery,call,put} from 'redux-saga/effects';
import {GET_USER_FETCH,GET_USER_SUCCESS} from './Action/action'

function userFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
}

function* workGetUsersFetch() {
    const users =yield call(userFetch);
    console.log("user",users)
    yield put({type:GET_USER_SUCCESS,users})
}

function* mySaga() {
        yield takeEvery(GET_USER_FETCH,workGetUsersFetch);
}

export default mySaga;