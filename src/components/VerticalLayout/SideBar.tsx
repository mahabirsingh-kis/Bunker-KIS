import React from 'react';
import { Layout } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import styled from 'styled-components';

import { SidebarWidth } from '../../constants/Layout';
import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const SidebarCmp = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  box-shadow: inset -1px 0px 0px #e2e8f0;
  padding-right: 1px;
`;

const SideBar = ({ sidebarTheme }: { sidebarTheme: SiderTheme }) => (
  <SidebarCmp trigger={null} theme={sidebarTheme} width={SidebarWidth}>
    <SidebarContent sidebarTheme={sidebarTheme} />
  </SidebarCmp>
);

export default SideBar;
