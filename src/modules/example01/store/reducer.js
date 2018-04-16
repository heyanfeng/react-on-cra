import { handleActions } from 'redux-actions';
import {
  GET_USER_INFO,
  UPDATE_DATA_SOURCE,
  SET_CURRENT_EDIT_ITEM,
  SET_DIALOG_VISIBLE,
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_WEB_SITE,
  SET_DIALOG_TITLE
} from './actions';

const initalState = {
  userItems: [],
  currentItem: {},
  dialogVisible: false,
  name: '',
  email: '',
  website: '',
  title: ''
};

const example01Model = handleActions(
  {
    [GET_USER_INFO]: {
      next(state, action) {
        return {
          ...state,
          userItems: action.payload
        };
      }
    },
    [UPDATE_DATA_SOURCE]: (state, action) => {
      return {
        ...state,
        userItems: action.payload
      };
    },
    [SET_CURRENT_EDIT_ITEM]: (state, action) => {
      return {
        ...state,
        name: action.payload.name ? action.payload.name : '',
        email: action.payload.email ? action.payload.email : '',
        website: action.payload.website ? action.payload.website : '',
        currentItem: { ...action.payload }
      };
    },
    [SET_DIALOG_VISIBLE]: (state, action) => {
      return {
        ...state,
        dialogVisible: action.payload
      };
    },
    [SET_DIALOG_TITLE]: (state, action) => {
      return {
        ...state,
        title: action.payload
      };
    },
    [SET_USER_NAME]: (state, action) => {
      return {
        ...state,
        name: action.payload
      };
    },
    [SET_USER_EMAIL]: (state, action) => {
      return {
        ...state,
        email: action.payload
      };
    },
    [SET_USER_WEB_SITE]: (state, action) => {
      return {
        ...state,
        website: action.payload
      };
    }
  },
  initalState
);

export default example01Model;
