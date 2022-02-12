import React, {FC} from "react";
import {WeatherData} from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
  return (
    <section className="section">
      <div className="container">
        {/*<h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.name} - {data.sys.country}</h1>*/}
        <div className="level" style={{alignItems: 'flex-start'}}></div>
        <div className="level-item has-text-centered">
          <div>
            <p>{data.title}</p>
            <p>Today</p>
            <p>{data.consolidated_weather.the_temp.toFixed(1)} C</p>
            <p>{data.consolidated_weather.weather_state_name}</p>
            <p>{data.consolidated_weather.weather_state_abbr}</p>
            <p>Min: {Math.round(data.consolidated_weather.min_temp)} C</p>
            <p>Max: {Math.round(data.consolidated_weather.max_temp)} C</p>
            <p>{Math.round(data.consolidated_weather.wind_speed)} mph</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
