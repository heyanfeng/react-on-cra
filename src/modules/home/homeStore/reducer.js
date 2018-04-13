import { handleActions } from 'redux-actions'
import { TEST_REDUX } from './actions'

const initalState = {
  text: ''
}

const homeModel = handleActions(
  {
    [TEST_REDUX]: (state, action) => {
      return {
        text: action.payload
      }
    }
  },
  initalState
)

export default homeModel
