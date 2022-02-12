import React, {FC} from "react";
import {WeatherData} from "../store/types";
import {Row, Col, Typography, Space} from "antd";
import Spinner from "./Spinner";

const {Title} = Typography;

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
  return (
    <Row justify="space-around" align="middle">
      {data ? (
        <Space direction="vertical">
          <Row justify="space-around" align="middle">
            <Title level={2}>Today</Title>
          </Row>
          <hr/>
          <Row justify="space-around" align="middle">
            <Col span={6} push={2}>
              <Title level={3}>{data.consolidated_weather[0].the_temp.toFixed(1)} C</Title>
            </Col>
            <Col span={6} pull={2}>
              <img
                src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}
                style={{width: '70%'}} alt={data.consolidated_weather[0].weather_state_name}/>
              <p>{data.consolidated_weather[0].weather_state_name}</p>

            </Col>
          </Row>
          <Row justify="space-around" align="middle">
            <Col span={6} push={4}>
              <p>Min: {Math.round(data.consolidated_weather[0].min_temp)} C</p>
            </Col>
            |
            <Col span={6} pull={2}>
              <p>Max: {Math.round(data.consolidated_weather[0].max_temp)} C</p>
            </Col>
          </Row>
          <Row justify="space-around" align="middle">
            <Col>
              <p>{Math.round(data.consolidated_weather[0].wind_speed)} mph</p>
            </Col>
          </Row>
        </Space>
      ) : <Spinner/>}
    </Row>
  );
}

export default Weather;
