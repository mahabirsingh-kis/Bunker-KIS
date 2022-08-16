import React from 'react';
import { Col, Row } from 'antd';

import { LoadingContainer } from './CompanyUsers.components';
import Skeleton from '../../components/Skeleton';

const CompanyUsersSkeleton = () => (
  <LoadingContainer>
    <Skeleton.Input active size="default" className="loading-header" />
    <div className="loading-main-content ">
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
      <Row>
        <Col span={1} className="initials-column">
          <Skeleton.Input active size="default" />
        </Col>
        <Col span={19} className="name-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
        <Col span={4} className="last-column">
          <Skeleton.Input active size="default" className="title" />
          <Skeleton.Input active size="default" className="description" />
        </Col>
      </Row>
    </div>
  </LoadingContainer>
);

export default CompanyUsersSkeleton;
