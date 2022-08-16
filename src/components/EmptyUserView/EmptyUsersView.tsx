import React from 'react';
import styled from 'styled-components';
import { Skeleton, Space, Typography, Row, Col, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { Colors } from '../../theme';

const { Title } = Typography;

const EmptyUserViewContainer = styled(Row)`
  .empty-content {
    background-color: ${Colors.white};
    width: 488px;
    box-shadow: 0px 2px 4px ${Colors.adminHeaderBorderColor};
    border-radius: 4px;
    margin: 160px 0 0;
    padding: 20px;
    display: flex;
  }
  .empty-bottom-view {
    margin-top: 40px;
    h2 {
      font-weight: 700;
      color: ${Colors.black08};
      margin-bottom: 0;
    }
  }
  .empty-bottom-button {
    margin-top: 15px;
  }
  .ant-skeleton {
    background-color: ${Colors.grey1};
    padding: 16px;
    border-radius: 8px;
    .ant-skeleton-avatar {
      background-color: ${Colors.grey3};
      width: 30px;
      height: 30px;
    }
    .ant-skeleton-title {
      background-color: ${Colors.grey3};
      margin-top: 0;
      margin-bottom: 0;
    }
    .ant-skeleton-paragraph {
      background-color: ${Colors.grey2};
      margin-top: 10px !important;
      margin-bottom: 0;
    }
  }
`;

interface EmptyUserViewProps {
  isAdmin: boolean;
  addUser: () => void;
}

const EmptyUserView = ({ addUser, isAdmin }: EmptyUserViewProps) => {
  const { t } = useTranslation();
  return (
    <EmptyUserViewContainer justify="center">
      <Col>
        <Row>
          <Col>
            <Space className="empty-content" direction="vertical" size={10}>
              <Skeleton avatar paragraph={{ rows: 1 }} />
              <Skeleton avatar paragraph={{ rows: 1 }} />
              <Skeleton avatar paragraph={{ rows: 1 }} />
            </Space>
          </Col>
        </Row>
        <Row className="empty-bottom-view">
          <Col span={24}>
            <Row justify="center">
              <Col>
                <Title level={2}>{t('No User added.')}</Title>
              </Col>
            </Row>
            {isAdmin ? (
              <Row className="empty-bottom-button" justify="center">
                <Col>
                  <Button
                    onClick={addUser}
                    className="add-user-button"
                    type="primary"
                  >
                    {t('add user')}
                  </Button>
                </Col>
              </Row>
            ) : null}
          </Col>
        </Row>
      </Col>
    </EmptyUserViewContainer>
  );
};

export default EmptyUserView;
