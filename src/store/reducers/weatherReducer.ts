import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherState} from "../types"

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
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