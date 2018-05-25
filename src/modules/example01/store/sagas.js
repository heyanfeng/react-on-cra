import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'


function getUser() {
    return axios.get('http://jsonplaceholder.typicode.com/users')
}

// 处理异步Action
function* asycGetUserInfo() {
    const userInfo = yield call(getUser)
    yield put({type: 'GET_USER_INFO', payload: userInfo.data})
}


export function* watchAsyc() {
    yield* takeEvery('GET_USER_INFO_ASYNC', asycGetUserInfo)
}