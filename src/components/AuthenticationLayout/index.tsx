import React, { memo } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Header from './AuthenticationHeader';
import { Colors } from '../../theme';
import { AuthRoutes } from '../../navigation/Routes';

const { Content } = Layout;
const AuthenticationContainer = styled(Content)`
  display: flex;
  align-items: start;
  justify-content: center;
  @media (max-width: 540px) {
    display: inherit;
  }
  .authentication-content {
    margin-top: calc(28vh - 72px);
    width: 400px;
    @media (max-width: 540px) {
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
  .title-container {
    text-align: center;
    h1.ant-typography {
      line-height: 32px;
      margin-bottom: 0;
      color: ${Colors.black08};
    }
  }
  .subtitle-container {
    text-align: center;
    span.ant-typography {
      line-height: 32px;
      margin-bottom: 0;
      color: ${Colors.black08};
    }
  }
`;

const LayoutCmp = ({ children }: { children: React.ReactChildren }) => {
  const { pathname } = useLocation();
  return (
    <Layout hasSider={false} style={{ minHeight: '100vh' }}>
      <Header showLogin={pathname === AuthRoutes.forgotPassword} />
      <AuthenticationContainer>{children}</AuthenticationContainer>
    </Layout>
  );
};

export default memo(LayoutCmp);
