const defaultState = {
    value: '+49'
}

const GET_VALUE_INPUT = 'GET_VALUE_INPUT'
const CLEAR_INPUT = 'CLEAR_INPUT'

export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_VALUE_INPUT:
      return {
        value: action.payload
      }

      case CLEAR_INPUT:
        return {
            value: '+49'
        }
    default:
      return state
  }
}

//action creator
export const getValueInputAction = (payload) => ({ type: GET_VALUE_INPUT, payload })

export const inputAction = {type: CLEAR_INPUT}

// action => { type: GET_VALUE_INPUT, payload }