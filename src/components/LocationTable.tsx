import React, {FC} from "react";
import {LocationData} from "../store/types";

interface LocationProps {
  data: LocationData;
}

const Location: FC<LocationProps> = ({data}) => {
  debugger
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.title}</h1>
        <div className="level-item has-text-centered">
          <div>
            {/*<p className="heading">{data.weather[0].description}</p>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
