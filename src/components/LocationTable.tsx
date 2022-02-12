import React, {FC, FormEvent, MouseEventHandler, useState} from "react";
import {LocationData, WeatherData} from "../store/types";
import {Table, Modal, Spin} from "antd";
import {setLoading} from "../store/actions/locationActions";
import {getWeather} from "../store/actions/weatherActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {LoadingOutlined} from "@ant-design/icons";
import {MouseEvent} from "react";
import Weather from "./Weather";

interface LocationProps {
  data: LocationData[];
}

const LocationTable: FC<LocationProps> = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.weather.loading);
  const spinIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

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

  const clickHandler = (woeid: number)  => {
  // const clickHandler: MouseEventHandler = (e: MouseEvent)  => {
    showModal()
    dispatch(setLoading());
    dispatch(getWeather(woeid))
    // dispath(openModal(id))
    // dispatch(setLoading());
    // dispatch(getLocation(city));
    // setCity('');
  }

  const columns = [
    {
      dataIndex: "title",
      key: "title",
    },
    {
      dataIndex: "woeid",
      key: "woeid",
      render: (woeid: number) => <a onClick={(e: MouseEvent) => {clickHandler(woeid)}}>Details</a>
    }
  ]
  return (
    <section className="section">
      <div className="container">
        <Table dataSource={data} columns={columns} style={{tableLayout: 'auto'}}/>
      </div>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {loading ? <h2><Spin indicator={spinIcon}></Spin><p>Loading</p></h2> : ''}
        {weatherData ? <Weather data={weatherData}/> : ''}
        {/*{locationData ? <LocationTable data={locationData}/> : <h1>No results yet!</h1>}*/}
      </Modal>
    </section>
  );
}

export default LocationTable;
