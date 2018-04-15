import { handleActions } from "redux-actions";
import {
  GET_USER_INFO,
  UPDATE_DATA_SOURCE,
  SET_CURRENT_EDIT_ITEM
} from "./actions";

const initalState = {
  userItems: [],
  currentItem: {}
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
        currentItem: { ...action.payload }
      };
    }
  },
  initalState
);

export default example01Model;
