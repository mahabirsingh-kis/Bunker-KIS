import React from 'react';
import { Col, Row } from 'antd';

import { LoadingContainer } from './CompanyList.components';
import Skeleton from '../../../components/Skeleton';

const CompanyListSkeleton = () => (
  <LoadingContainer>
    <Skeleton.Input active size="default" className="loading-header" />
    <div className="loading-main-content ">
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={8} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
    </div>
  </LoadingContainer>
);

export default CompanyListSkeleton;
