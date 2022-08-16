import React from 'react';
import { Col, Row } from 'antd';

import { LoadingContainer } from './CompanyViews.component';
import Skeleton from '../../components/Skeleton';

const CompanyViewsSkeleton = () => (
  <LoadingContainer>
    <Skeleton.Input active size="default" className="loading-header" />
    <div className="loading-main-content ">
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
      <Row>
        <Col span={10} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={12} className="date-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={2} className="action-column">
          <Skeleton.Input active size="default" />
        </Col>
      </Row>
    </div>
  </LoadingContainer>
);

export default CompanyViewsSkeleton;
