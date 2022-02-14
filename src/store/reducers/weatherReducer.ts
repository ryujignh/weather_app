import {GET_WEATHER, SET_ERROR, SET_LOADING_WEATHER, WeatherAction, WeatherState} from "../types"

const initialState: WeatherState = {
  data: null,
  error: '',
  loadingWeather: false
}

const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loadingWeather: false,
        error: ''
      }
    case SET_LOADING_WEATHER:
      return {
        ...state, //...state loads the initialState
        loadingWeather: true
      }
    case SET_ERROR:
      return {
        ...state, //...state loads the initialState
        error: action.payload,
        loadingWeather: false,
      }
    default:
      return state;
  }
}
export default weatherReducer;