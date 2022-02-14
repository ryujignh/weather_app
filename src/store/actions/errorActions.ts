import {ErrorAction, SET_ERROR} from "../types";

export const setError = (message: string): ErrorAction => {
  return {
    type: SET_ERROR,
    payload: message
  }
}

