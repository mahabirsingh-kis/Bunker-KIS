import React, { useEffect, memo } from 'react';
import { Layout } from 'antd';

import { useAppDispatch } from '../../app/hooks';
import Header from './Header';
import { getUserInfoAction } from '../../app/User.slice';

const { Content } = Layout;

const LayoutCmp = ({ children }: { children: React.ReactChildren }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserInfoAction());
  }, []);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content className="page-content horizontal-page-content ">
        {children}
      </Content>
    </Layout>
  );
};

export default memo(LayoutCmp);
