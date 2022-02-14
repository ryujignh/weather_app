import React, {FC, useState} from "react";
import {LocationData} from "../store/types";
import {Table, Modal, Row, Col, Button, Alert} from "antd";
import {getWeather, setLoading} from "../store/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {MouseEvent} from "react";
import Weather from "./Weather";
import Spinner from "./Spinner";
import {setError} from "../store/actions/errorActions";

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

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clickHandler = (woeid: number) => {
    dispatch(setLoading());
    dispatch(getWeather(woeid))
    showModal()
  }

  const error = useSelector((state: RootState) => state.location.error);

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
    <Row justify="space-around" align="top" style={{width: '100%'}}>
      <Col style={{width: '100%'}}>
        <Table rowKey="title" dataSource={data} columns={columns} style={{width: '100%'}}/>
        <Modal title={loadingWeatherData ? '' : weatherData ? weatherData.title : ''} visible={isModalVisible}
               onCancel={handleCancel} footer={null}>
          {error && <Alert type="error" message={error} onClose={() => dispatch(setError(''))}/>}
          {loadingWeatherData ? <Spinner/> : weatherData && <Weather data={weatherData}/>}
        </Modal>
      </Col>
    </Row>

  );
}

export default LocationTable;
