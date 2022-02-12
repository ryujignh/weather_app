import React, {FC} from "react";
import {Row, Col, Spin, Typography, Space} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const {Title} = Typography;
const spinIcon = <LoadingOutlined style={{fontSize: 50}} spin/>;

const Alert: FC = () => {
  return (
    // <Row justify="space-around" align="middle" style={{height: '100%'}}>
    //   <Col>
        <Title level={3}><Spin indicator={spinIcon}/><p>Loading</p></Title>
      // </Col>
    // </Row>
  );
}

export default Alert