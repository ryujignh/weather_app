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
            {/*<p className="heading">{data.weather[0].description}</p>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
