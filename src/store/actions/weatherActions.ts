import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError} from "../types";

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      debugger

      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    } catch(err) {
      dispatch({
        type: SET_ERROR,
        payload: 'err.message'
      });
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}