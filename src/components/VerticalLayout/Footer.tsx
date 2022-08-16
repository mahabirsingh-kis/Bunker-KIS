import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const FooterCmp = () => (
  <Footer>
    <Row justify="center" align="middle">
      <Col>{new Date().getFullYear()} © Bunker.</Col>
    </Row>
  </Footer>
);

export default FooterCmp;
