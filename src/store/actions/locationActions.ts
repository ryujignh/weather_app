import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
// import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError} from "../types";
import {
  GET_LOCATIONS,
  SET_ERROR,
  SET_LOADING,
  LocationAction,
  LocationData,
} from "../types";

// const cors_proxy = require('cors-anywhere');
export const getLocation = (city: string): ThunkAction<void, RootState, null, LocationAction> => {
  return async dispatch => {

    try {
      // const resData: LocationData[] = [
      //   {
      //     key: "San Francisco",
      //     title: "San Francisco",
      //     woeid: 2487956,
      //   },
      //   {
      //     key: "San Diego",
      //     title: "San Diego",
      //     woeid: 2487889,
      //   },
      //   {
      //     key: "San Jose",
      //     title: "San Jose",
      //     woeid: 2488042,
      //   },
      //   {
      //     key: "San Antonio",
      //     title: "San Antonio",
      //     woeid: 2487796,
      //   },
      //   {
      //     key: "Santa Cruz",
      //     title: "Santa Cruz",
      //     woeid: 2488853,
      //   },
      //   {
      //     key: "Santiago",
      //     title: "Santiago",
      //     woeid: 349859,
      //   },
      //   {
      //     key: "Santorini",
      //     title: "Santorini",
      //     woeid: 56558361,
      //   },
      //   {
      //     key: "Santander",
      //     title: "Santander",
      //     woeid: 773964,
      //   },
      //   {
      //     key: "Busan",
      //     title: "Busan",
      //     woeid: 1132447,
      //   },
      //   {
      //     key: "Santa Cruz de Tenerife",
      //     title: "Santa Cruz de Tenerife",
      //     woeid: 773692,
      //   },
      //   {
      //     key: "Santa Fe",
      //     title: "Santa Fe",
      //     woeid: 2488867,
      //   }
      // ]

      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`);
      // dispatch({
      // type: GET_LOCATIONS,
      // payload: resData
      // });

      if (!res.ok) {
        const resData: any = await res.json();
        throw new Error(resData.message);
      }

      const resData: LocationData[] = await res.json();
      dispatch({
        type: GET_LOCATIONS,
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

// export const getLocationDetail = (woeid: number): ThunkAction<void, RootState, null, LocationAction> => {
//   return async dispatch => {
//     try {
//       // TODO: Uncomment when using real api
//       // const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
//       const resData: WeatherData = {
//         title: 'San Francisco',
//         consolidated_weather: {
//           weather_state_name: 'Light Cloud',
//           weather_state_abbr: 'lc',
//           min_temp: 12.07,
//           max_temp: 20.405,
//           the_temp: 20.14,
//           wind_speed: 3.191880401725921,
//         }
//       }
//       dispatch({
//         type: GET_LOCATION_DETAIL,
//         payload: resData
//       });
//     } catch (err: any) {
//       dispatch({
//         type: SET_ERROR,
//         payload: err.message
//       });
//     }
//   }
// }

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