import React, {FC} from "react";
import {Row, Col, Typography} from "antd";

const {Title} = Typography;

const NoResult: FC = () => {
  return (
    <Row justify="space-around" align="middle">
      <Col style={{textAlign: 'center'}}>
        <Title type="secondary" level={3} style={{marginBottom: '1.5rem'}}>No results yet!</Title>
        <Title type="secondary" level={3}>Please use the search box above</Title>
      </Col>
    </Row>
  );
}

export default NoResult;
