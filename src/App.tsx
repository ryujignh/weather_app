import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';

import {RootState} from "./store";
import SearchBar from "./components/SearchBar";
import Alert from './components/Alert'
import Weather from "./components/Weather";
import Location from "./components/Location";
import {setAlert} from "./store/actions/alertActions";
import {setError} from "./store/actions/weatherActions";
import NoResult from "./components/NoResult";
import {Layout, Row, Col, Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import LocationTable from "./components/LocationTable";

const {Header, Footer, Sider, Content} = Layout;

const spinIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const locationData = useSelector((state: RootState) => state.location.data);
  const loading = useSelector((state: RootState) => state.location.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  return (
    <Layout>
      <Content>

        <SearchBar title="How is the weather?"/>

        <Row style={{backgroundColor: '#FFFFFF', minHeight: '100%', justifyContent: 'center'}}>
          <Col span={12}>
            <div className="result-container">
              {loading ? <h2><Spin indicator={spinIcon}></Spin><p>Loading</p></h2> : ''}
              {locationData ? <LocationTable data={locationData}/> : <h1>No results yet!</h1>}
            </div>


          </Col>

        </Row>

        {/*{loading ? <h2 className="is-size-3 py-2">Loaing...</h2> : weatherData && <Weather data={weatherData}/>}*/}

        {/*{locationData ? <Location data={locationData}/> : <NoResult/> }*/}
        {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>}
        {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
      </Content>


    </Layout>
  );
}

export default App;
