import React, {FC, useState} from "react";
import {LocationData} from "../store/types";
import {Table, Modal, Spin, Row, Col} from "antd";
import {getWeather} from "../store/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {MouseEvent} from "react";
import Weather from "./Weather";

interface LocationProps {
  data: LocationData[];
}

const LocationTable: FC<LocationProps> = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const weatherData = useSelector((state: RootState) => state.weather.data);

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
      render: (woeid: number) => <a onClick={(e: MouseEvent) => {
        clickHandler(woeid)
      }}>See Details...</a>
    }
  ]
  return (
    <Row style={{width: '100%'}}>
      <Col style={{width: '100%'}}>
        <Table dataSource={data} columns={columns} style={{width: '100%'}}/>
        <Modal title={weatherData ? weatherData.title : ''} visible={isModalVisible} onOk={handleOk}
               onCancel={handleCancel}>
          {weatherData ? <Weather data={weatherData}/> : ''}
        </Modal>
      </Col>
    </Row>

  );
}

export default LocationTable;
