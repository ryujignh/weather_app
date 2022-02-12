import {GET_WEATHER, SET_ERROR, WeatherAction, WeatherState} from "../types"

const initialState: WeatherState = {
  data: null,
  error: ''
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        error: ''
      }
    case SET_ERROR:
      return {
        ...state, //...state loads the initialState
        error: action.payload,
      }
    default:
      return state;
  }
}