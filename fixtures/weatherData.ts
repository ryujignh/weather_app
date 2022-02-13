// Mock data. Use this if you want to avoid call the real api
import {WeatherData} from "../src/store/types";

const resData: WeatherData = {
  title: 'San Francisco',
  consolidated_weather: [{
    weather_state_name: 'Light Cloud',
    weather_state_abbr: 'lc',
    min_temp: 12.07,
    max_temp: 20.405,
    the_temp: 20.14,
    wind_speed: 3.191880401725921,
  }]
}

export default resData;