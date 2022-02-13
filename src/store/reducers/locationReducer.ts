import {GET_LOCATIONS, SET_ERROR, SET_LOADING_LOCATIONS, LocationAction, LocationState} from "../types"

const initialState: LocationState = {
  data: null,
  loadingLocations: false,
  error: ''
}

const locationReducer = (state = initialState, action: LocationAction): LocationState => {
  switch (action.type) {
    case GET_LOCATIONS:
      console.log('GET_LOCATIONS')
      return {
        data: action.payload,
        loadingLocations: false,
        error: ''
      }
    case SET_LOADING_LOCATIONS:
      console.log('locationReducer')
      return {
        ...state, //...state loads the initialState
        loadingLocations: true
      }
    case SET_ERROR:
      return {
        ...state, //...state loads the initialState
        error: action.payload,
        loadingLocations: true
      }
    default:
      return state;
  }
}
export default locationReducer;