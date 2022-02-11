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

      // const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`);

      const resData: LocationData[] = [
        {
          title: "San Francisco",
          woeid: 2487956,
        },
        {
          title: "San Diego",
          woeid: 2487889,
        },
        {
          title: "San Jose",
          woeid: 2488042,
        },
        {
          title: "San Antonio",
          woeid: 2487796,
        },
        {
          title: "Santa Cruz",
          woeid: 2488853,
        },
        {
          title: "Santiago",
          woeid: 349859,
        },
        {
          title: "Santorini",
          woeid: 56558361,
        },
        {
          title: "Santander",
          woeid: 773964,
        },
        {
          title: "Busan",
          woeid: 1132447,
        },
        {
          title: "Santa Cruz de Tenerife",
          woeid: 773692,
        },
        {
          title: "Santa Fe",
          woeid: 2488867,
        }
      ]


      // dispatch({
        // type: GET_LOCATIONS,
        // payload: resData
      // });

      // if (!res.ok) {
      //   const resData: LocationError = await res.json();
      //   throw new Error(resData.message);
      // }

      // const resData: LocationData = await res.json();
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