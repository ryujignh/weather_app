import {GET_LOCATIONS, SET_ERROR, SET_LOADING, LocationAction, LocationState} from "../types"

const initialState: LocationState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: LocationAction): LocationState => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
      console.log('locationReducer')
      return {
        ...state, //...state loads the initialState
        loading: true
      }
    case SET_ERROR:
      return {
        ...state, //...state loads the initialState
        error: action.payload,
        loading: true
      }
    default:
      return state;
  }
}