import React, { useEffect, useCallback, memo } from 'react';
import { Layout, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SidebarWidth, HeaderHeight } from '../../constants/Layout';
import SettingDrawer from '../SettingsDrawer';
import {
  selectSidebarTheme,
  selectRightbarTheme,
  toggloRightbarAction,
} from '../../app/layout.slice';
import Header from './Header';
import SideBar from './SideBar';
import { Colors } from '../../theme';
import { UserRoutes } from '../../navigation/Routes';
import { getUserInfoAction } from '../../app/User.slice';

const { Content } = Layout;
const { Title } = Typography;

const HeaderWrapper = styled(Layout.Header)`
  display: flex;
  align-items: center;
  position: fixed;
  top: 72px;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 2px 4px ${Colors.adminHeaderBorderColor};
  h2 {
    font-weight: 600;
  }
`;

const AdminHeader = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <Title level={2}>{t('Admin')}</Title>
    </HeaderWrapper>
  );
};

/* eslint-disable complexity */
const LayoutCmp = ({ children }: { children: React.ReactChildren }) => {
  const sidebarTheme = useAppSelector(selectSidebarTheme);
  const rightbar = useAppSelector(selectRightbarTheme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserInfoAction());
  }, []);
  const toggleRightbar = useCallback(() => {
    dispatch(toggloRightbarAction(!rightbar));
  }, [rightbar]);
  const { pathname } = useLocation();

  const isAdminPage: boolean =
    pathname === UserRoutes.admin.adminUsers ||
    pathname === UserRoutes.admin.adminCalculations ||
    pathname === UserRoutes.admin.adminCategories;

  const contentMarginTop = isAdminPage ? 2 * HeaderHeight : HeaderHeight;
  return (
    <Layout style={{ minHeight: '100vh' }} id="main-layout">
      <Header />
      {isAdminPage ? <AdminHeader /> : null}
      <Layout style={{ marginTop: contentMarginTop }}>
        <SideBar sidebarTheme={sidebarTheme} />
        <Layout style={{ marginLeft: SidebarWidth }}>
          <Content className="page-content">{children}</Content>
        </Layout>
      </Layout>
      <SettingDrawer visible={rightbar} toggleRightbar={toggleRightbar} />
    </Layout>
  );
};

export default memo(LayoutCmp);
