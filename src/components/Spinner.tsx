import React, {FC} from "react";
import {Row, Col, Spin, Typography} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const {Title} = Typography;
const spinIcon = <LoadingOutlined style={{fontSize: 50}} spin/>;

const Spinner: FC = () => {
  return (
    <Row justify="space-around" align="middle">
      <Col>
        <Title level={3}><Spin indicator={spinIcon}/><p>Loading</p></Title>
      </Col>
    </Row>
  );
}

export default Spinner