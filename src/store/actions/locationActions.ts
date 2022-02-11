import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
// import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError} from "../types";
import {GET_LOCATIONS, SET_ERROR, SET_LOADING, LocationAction, LocationData, LocationError } from "../types";

// const cors_proxy = require('cors-anywhere');
export const getLocation = (city: string): ThunkAction<void, RootState, null, LocationAction> => {
  return async dispatch => {
    try {
      // const host = process.env.HOST || '0.0.0.0';
      // Listen on a specific port via the PORT environment variable
      // const port = process.env.PORT || 8080;
      // const cors_proxy = require('cors-anywhere');
      // cors_proxy.createServer({
      //   originWhitelist: [],
      //   requireHeader: ['origin', 'x-requested-with'],
      //   removeHeaders: ['cookie', 'cookie2']
      // });

      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`);

      if (!res.ok) {
        const resData: LocationError = await res.json();
        throw new Error(resData.message);
      }

      const resData: LocationData = await res.json();
      dispatch({
        type: GET_LOCATIONS,
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

export const setLoading = (): LocationAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): LocationAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}