import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {
  GET_LOCATIONS,
  SET_ERROR,
  SET_LOADING_LOCATIONS,
  LocationAction,
  LocationData,
} from "../types";

export const getLocation = (city: string): ThunkAction<void, RootState, null, LocationAction> => {
  return async dispatch => {

    try {
      // Using https://cors-anywhere.herokuapp.com as a proxy to request to metaweather.com api to avoid getting CORS error
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`);
      // const res = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);

      if (!res.ok) {
        const resData: any = await res.json();
        dispatch({
          type: SET_ERROR,
          payload: 'resData.message'
        })
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

export const setLoading = (): LocationAction => {
  return {
    type: SET_LOADING_LOCATIONS
  }
}

export const setError = (): LocationAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}