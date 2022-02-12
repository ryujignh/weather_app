import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';

import {RootState} from "./store";
import SearchBar from "./components/SearchBar";
import Alert from './components/Alert'
import {setAlert} from "./store/actions/alertActions";
import {setError} from "./store/actions/weatherActions";
import NoResult from "./components/NoResult";
import {Layout, Row, Col, Spin, Space} from "antd";
import LocationTable from "./components/LocationTable";
import Spinner from "./components/Spinner";

const {Content} = Layout;

const App: FC = () => {
  const dispatch = useDispatch();
  const locationData = useSelector((state: RootState) => state.location.data);
  const loading = useSelector((state: RootState) => state.location.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <SearchBar title="How is the weather?"/>
          </Col>
        </Row>

        <Row justify="space-around" align="middle" style={{backgroundColor: '#FFFFFF'}}>
          <Col span={12}>
            <Row className="result-container" justify="space-around" align="middle">
              {loading ? <Spinner/> : locationData ? <LocationTable data={locationData}/> : <NoResult/>}
            </Row>
          </Col>
        </Row>
        {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>}
        {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
      </Content>


    </Layout>
  );
}

export default App;
