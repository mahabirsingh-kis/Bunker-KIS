import React from 'react';
import { Layout, Row, Col, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { useHistory, useLocation, matchPath } from 'react-router';
import { useTranslation } from 'react-i18next';

import ProfileDropdown from '../ProfileDropdown';
import { useCookie } from '../../hooks';
import { CookieKeys } from '../../constants/Keys';
import { User, Company } from '../../constants/types';
import { Colors, Images } from '../../theme';
import { UserRoutes } from '../../navigation/Routes';
import { useAppSelector } from '../../app/hooks';
import { selectUserInfo } from '../../app/User.slice';
import { selectCurrentComapny } from '../../features/Companys/CompanyList/CompanyList.slice';
import { onlyShowTitleHeaderPage } from '../../constants/Layout';

const { Header } = Layout;
const { Title } = Typography;

const HeaderWrapper = styled(Header)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  width: 100%;
  box-shadow: inset 0px -1px 0px ${Colors.borderColor};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-box {
    display: flex;
    align-items: center;
    h3 {
      font-weight: 700;
      margin-bottom: 0;
      margin-left: 15px;
    }
    .logo-active {
      cursor: pointer;
      .ant-avatar {
        height: 40px;
        width: 40px;
      }
    }
  }
  .company-name {
    margin-left: 20px;
    border-left: ${Colors.borderColor} solid 1px;
    h3 {
      font-weight: 600;
      margin-bottom: 0;
      margin-left: 20px;
      color: ${Colors.black08};
      line-height: 30px;
    }
  }
  .back-company {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 30px;
    img {
      margin-left: 22px;
    }
    span {
      font-weight: 500;
      margin-left: 12px;
      color: ${Colors.black08};
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
    }
    .anticon-arrow-left {
      margin-left: 20px;
    }
  }
`;

const HeaderCmp = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const cookies = useCookie([CookieKeys.authUser]);
  const user: User = cookies.getCookie(CookieKeys.authUser);
  const nameAbbreviation = user
    ? user.first_name.charAt(0) + user.last_name.charAt(0)
    : '';
  const { isBunkerAdmin } = useAppSelector(selectUserInfo);
  const {
    state: locationCompany,
    pathname,
  }: { state: Company; pathname: string } = useLocation();
  const companyDetail: Company =
    useAppSelector(selectCurrentComapny) || locationCompany;
  let isOnlyShowTitle = false;
  onlyShowTitleHeaderPage.forEach((path) => {
    if (matchPath(pathname, path)) {
      isOnlyShowTitle = true;
    }
  });
  const showBackToCompany = !isOnlyShowTitle && companyDetail;

  const goBack = () => {
    if (companyDetail) {
      const path = UserRoutes.company.companyUsers.replace(
        ':id',
        String(companyDetail.id),
      );
      history.replace(path, companyDetail);
    }
  };

  const goHome = () => {
    history.push(UserRoutes.home);
  };

  const getTitleComponment = () => {
    if (showBackToCompany) {
      return (
        <div
          onClick={goBack}
          aria-hidden="true"
          className="company-name back-company"
        >
          <img src={Images.ArrowBackIcon} alt="back-icon" />
          <span>{t('Back to') + companyDetail.name}</span>
        </div>
      );
    }

    if (isOnlyShowTitle) {
      return (
        <div className="company-name">
          <Title level={3}>{companyDetail.name}</Title>
        </div>
      );
    }
    return <Title level={3}>Bunker</Title>;
  };

  return (
    <HeaderWrapper>
      <div>
        <div className="logo-box">
          <div className="logo-active" onClick={goHome} aria-hidden="true">
            <Avatar src={Images.Logo} />
          </div>
          {getTitleComponment()}
        </div>
      </div>
      <div>
        <Row gutter={{ lg: 12, xs: 0 }}>
          <Col>
            <ProfileDropdown
              text={nameAbbreviation}
              isBunkerAdmin={isBunkerAdmin}
            />
          </Col>
        </Row>
      </div>
    </HeaderWrapper>
  );
};

export default HeaderCmp;
