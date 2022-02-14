import {ErrorAction, ErrorState, SET_ERROR} from "../types"

const initialState: ErrorState = {
  message: ''
}

const errorReducer = (state = initialState, action: ErrorAction): ErrorState => {
  switch (action.type) {
    case SET_ERROR:
      return {
        message: action.payload,
      }
    default:
      return state;
  }
}
export default errorReducer;