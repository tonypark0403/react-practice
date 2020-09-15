import { Col, Row, Typography } from 'antd';
import React from 'react';
import Settings from '../component/Settings';

export default function Search() {
  return (
    <>
      <Row justify='end' style={{ padding: 20 }}>
        <Col>
          <Settings />
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
            Management
          </Typography.Title>
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 50 }}>
        <Col span={12}>Search</Col>
      </Row>
    </>
  );
}
