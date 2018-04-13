import { handleActions } from 'redux-actions'
import { GET_USER_INFO } from './actions'

const initalState = {
  userItems: []
}

const example01Model = handleActions(
  {
    [GET_USER_INFO]: {
      next(state, action) {
        return {
          ...state,
          userItems: action.payload
        }
      }
    }
  },
  initalState
)

export default example01Model
