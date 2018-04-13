import { createAction } from 'redux-actions'
import axios from 'axios'

export const GET_USER_INFO = 'GET_USER_INFO'

// 获取用户数据
export const getUserInfo = createAction(GET_USER_INFO)

// 处理异步Action
export const asycGetUserInfo = () => {
  return (dispatch) => {
    axios.get('http://jsonplaceholder.typicode.com/users').then((res) => dispatch(getUserInfo(res.data)))
  }
}
