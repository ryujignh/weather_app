import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData,} from "../types";

export const getWeather = (woeid: number): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      // const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
      //
      // if (!res.ok) {
      //   const resData: WeatherError = await res.json();
      //   throw new Error(resData.message);
      // }

      // TODO: Uncomment when using real api
      const resData: WeatherData = {
        title: 'San Francisco',
        consolidated_weather: {
          weather_state_name: 'Light Cloud',
          weather_state_abbr: 'lc',
          min_temp: 12.07,
          max_temp: 20.405,
          the_temp: 20.14,
          wind_speed: 3.191880401725921,
        }
      }
      // const resData: WeatherData = await res.json();
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