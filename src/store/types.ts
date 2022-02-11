export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface LocationData {
    title: string;
    woeid: number;
}

export interface WeatherData {
    title: string;
    consolidated_weather: {
      weather_state_name: string;
      weather_state_abbr: string;
      min_temp: number,
      max_temp: number,
      the_temp: number,
      wind_speed: number,
    }
}

export interface LocationError {
  cod: string;
  message: string;
}

export interface LocationState {
  data: LocationData | null;
  loading: boolean;
  error: string;
}

interface GetLocationAction {
  type: typeof GET_LOCATIONS;
  payload: LocationData;
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;
export type LocationAction = GetLocationAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}
