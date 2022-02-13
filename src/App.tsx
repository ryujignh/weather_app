import React, {FC} from 'react';
import {useSelector} from "react-redux";
import './App.css';

import {RootState} from "./store";
import SearchBar from "./components/SearchBar";
import NoResult from "./components/NoResult";
import {Layout, Row, Col} from "antd";
import LocationTable from "./components/LocationTable";
import Spinner from "./components/Spinner";

const {Content} = Layout;

const App: FC = () => {
  const locationData = useSelector((state: RootState) => state.location.data);
  const loadingLocations = useSelector((state: RootState) => state.location.loadingLocations);
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
              {loadingLocations ? <Spinner/> : locationData ? <LocationTable data={locationData}/> : <NoResult/>}
            </Row>
          </Col>
        </Row>
      </Content>


    </Layout>
  );
}

export default App;
