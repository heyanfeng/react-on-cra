import { createAction } from "redux-actions";
import axios from "axios";

export const GET_USER_INFO = "GET_USER_INFO";
export const UPDATE_DATA_SOURCE = "UPDATE_DATA_SOURCE";
export const SET_CURRENT_EDIT_ITEM = "SET_CURRENT_EDIT_ITEM";

// 获取用户数据
export const getUserInfo = createAction(GET_USER_INFO);

// 处理异步Action
export const asycGetUserInfo = () => {
  return dispatch => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(res => dispatch(getUserInfo(res.data)));
  };
};

// 设置表格可编辑状态
export const updateDataSource = createAction(UPDATE_DATA_SOURCE);

// 处理异步Action
export const asycPutDataSource = (id, target) => {
  return dispatch => {
    axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, target);
  };
};

// 缓存当前正在编辑的item
export const setCurrentItem = createAction(SET_CURRENT_EDIT_ITEM);

// 处理异步Action
export const asycDelDataSource = id => {
  return dispatch => {
    axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
  };
};
