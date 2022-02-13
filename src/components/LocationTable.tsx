import React, {FC, useState} from "react";
import {LocationData} from "../store/types";
import {Table, Modal, Row, Col, Button} from "antd";
import {getWeather, setLoading} from "../store/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {MouseEvent} from "react";
import Weather from "./Weather";
import Spinner from "./Spinner";

interface LocationProps {
  data: LocationData[];
}

const LocationTable: FC<LocationProps> = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loadingWeatherData = useSelector((state: RootState) => state.weather.loadingWeather);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clickHandler = (woeid: number) => {
    dispatch(setLoading());
    dispatch(getWeather(woeid))
    showModal()
  }

  const columns = [
    {
      dataIndex: "title",
      key: "title",
    },
    {
      dataIndex: "woeid",
      key: "woeid",
      render: (woeid: number) => <Button type="link" onClick={(e: MouseEvent) => {
        e.preventDefault()
        clickHandler(woeid)
      }}>See Details...</Button>
    }
  ]
  return (
    <Row justify="space-around" align="middle" style={{width: '100%'}}>
      <Col style={{width: '100%'}}>
        <Table dataSource={data} columns={columns} style={{width: '100%'}}/>
        <Modal title={loadingWeatherData ? '' : weatherData ? weatherData.title : ''} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          {loadingWeatherData ? <Spinner/> : weatherData && <Weather data={weatherData}/>}
        </Modal>
      </Col>
    </Row>

  );
}

export default LocationTable;
