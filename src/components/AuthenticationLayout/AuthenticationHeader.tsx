import React from 'react';
import { Avatar, Typography, Layout } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../../i18n';
import { Images, Colors } from '../../theme';
import LanguageDropdown from '../LanguageDropdown';

const { Title } = Typography;
const { Header, Content } = Layout;
const LinksContainer = styled(Content)`
  display: flex;
  background-color: ${Colors.grey2};
  color: ${Colors.primary5};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  width: 15%;
  justify-content: flex-end;
  > a {
    border-right: 1px solid ${Colors.grey4};
    padding-right: 16px;
  }
`;
const AuthHeaderContainer = styled(Header)`
  display: flex;
  align-items: center;
  background-color: ${Colors.grey2};
`;
const LogoContainer = styled(Content)`
  display: flex;
  align-items: center;
  width: 85%;
  background-color: ${Colors.grey2};
  h3 {
    font-weight: 700;
    margin-bottom: 0;
    margin-left: 15px;
  }
`;

const AuthenticationHeader = (props: { showLogin: boolean } | any) => (
  <AuthHeaderContainer>
    <LogoContainer>
      <Avatar src={Images.Logo} />
      <Title level={3}>Bunker</Title>
    </LogoContainer>
    <LinksContainer>
      {props.showLogin && <Link to="/login">Log In</Link>}
      <LanguageDropdown />
    </LinksContainer>
  </AuthHeaderContainer>
);

export default AuthenticationHeader;
