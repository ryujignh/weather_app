export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING_LOCATIONS = 'SET_LOADING';
export const SET_LOADING_WEATHER = 'SET_LOADING_WEATHER';
export const SET_ERROR = 'SET_ERROR';

export interface LocationData {
  key: string;
  title: string;
  woeid: number;
}

export interface LocationState {
  data: LocationData[] | null;
  loadingLocations: boolean;
  error: string;
}

interface GetLocationAction {
  type: typeof GET_LOCATIONS;
  payload: LocationData[];
}

interface SetLoadingWeatherAction {
  type: typeof SET_LOADING_WEATHER;
}

interface SetLoadingLocationAction {
  type: typeof SET_LOADING_LOCATIONS;
}

export interface WeatherData {
  title: string;
  consolidated_weather: [{
    weather_state_name: string;
    weather_state_abbr: string;
    min_temp: number,
    max_temp: number,
    the_temp: number,
    wind_speed: number,
  }]
}

export interface WeatherState {
  data: WeatherData | null;
  loadingWeather: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingWeatherAction | SetErrorAction;
export type LocationAction = GetLocationAction | SetLoadingLocationAction | SetErrorAction;
