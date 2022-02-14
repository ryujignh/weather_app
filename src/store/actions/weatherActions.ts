import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {GET_WEATHER, SET_ERROR, SET_LOADING_WEATHER, WeatherAction, WeatherData,} from "../types";

export const getWeather = (woeid: number): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    let res;
    try {
      // Using https://sheltered-eyrie-68708.herokuapp.com as a proxy to request to metaweather.com api to avoid getting CORS error
      res = await fetch(`https://sheltered-eyrie-68708.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);

      const resData: WeatherData = await res.json();
      if (!res.ok) {
        const resData: any = await res.json();
        dispatch({
          type: SET_ERROR,
          payload: resData.message
        })
      }
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    } catch (err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING_WEATHER
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}