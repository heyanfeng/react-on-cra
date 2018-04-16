import { createAction } from 'redux-actions';
import axios from 'axios';

export const GET_USER_INFO = 'GET_USER_INFO';
export const UPDATE_DATA_SOURCE = 'UPDATE_DATA_SOURCE';
export const SET_CURRENT_EDIT_ITEM = 'SET_CURRENT_EDIT_ITEM';
export const SET_DIALOG_VISIBLE = 'SET_DIALOG_VISIBLE';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_WEB_SITE = 'SET_USER_WEB_SITE';
export const SET_DIALOG_TITLE = 'SET_DIALOG_TITLE';

// 获取用户数据
export const getUserInfo = createAction(GET_USER_INFO);

// 处理异步Action
export const asycGetUserInfo = () => {
  return (dispatch) => {
    axios.get('http://jsonplaceholder.typicode.com/users').then((res) => dispatch(getUserInfo(res.data)));
  };
};

// 设置表格可编辑状态
export const updateDataSource = createAction(UPDATE_DATA_SOURCE);

// 处理异步Action
export const asycPutDataSource = (id, target) => {
  return (dispatch) => {
    axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, target);
  };
};

// 缓存当前正在编辑的item
export const setCurrentItem = createAction(SET_CURRENT_EDIT_ITEM);

// 处理异步Action
export const asycDelDataSource = (id) => {
  return (dispatch) => {
    axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
  };
};

// 处理异步Action,新增数据，jsonServer共线api成功伪装请求，请看控制台，暂不支持列表新增
export const asycPostDataSource = (target) => {
  return (dispatch) => {
    axios.post(`http://jsonplaceholder.typicode.com/users`, target);
  };
};

// 控制弹窗的显示与隐藏
export const setDialogVisible = createAction(SET_DIALOG_VISIBLE);

export const setDialogTitle = createAction(SET_DIALOG_TITLE);
export const setUserName = createAction(SET_USER_NAME);
export const setUserEmail = createAction(SET_USER_EMAIL);
export const setUserWebSite = createAction(SET_USER_WEB_SITE);
