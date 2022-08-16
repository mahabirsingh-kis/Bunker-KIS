import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Dropdown, Menu, Space } from 'antd';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';

import { CookieKeys } from '../../constants/Keys';
import { AuthRoutes, UserRoutes } from '../../navigation/Routes';
import { useAppDispatch } from '../../app/hooks';
import { logoutAction } from '../../features/Authentication/Login/Login.slice';
import { useCookie } from '../../hooks';
import { Colors } from '../../theme';
import { clearUser } from '../../app/User.slice';
import { clearCompanylistData } from '../../features/Companys/CompanyList/CompanyList.slice';
import MessageAlert from '../MessageAlert';
import ChangeLanguage from '../../features/ChangeLanguage';

const Profile = styled.div`
  display: flex;
  align-items: center;
  .anticon-caret-down {
    margin-left: 8px;
  }
`;

const ProfileAvatar = styled.div`
  cursor: pointer;
  height: 32px;
  width: 32px;
  padding: 0;
  background: ${Colors.grey2};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.grey6};
  font-weight: 600;
  text-transform: uppercase;
`;

interface ProfileDropdownProps {
  text: string;
  isBunkerAdmin: boolean;
}

const ProfileDropdownContainer = styled(Menu)`
  width: 204px;
  font-weight: 500;
  .admin-item {
    color: ${Colors.black08};
  }
  .logout-item {
    color: ${Colors.black06};
  }
`;

const ProfileDropdown = ({
  text,
  isBunkerAdmin,
}: ProfileDropdownProps | any) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const cookies = useCookie([CookieKeys.authUser]);
  const [changeLanguageVisible, setChangeLanguageVisible] = useState(false);
  const onLogout = async () => {
    cookies.removeCookie(CookieKeys.authUser);
    dispatch(clearUser());
    dispatch(clearCompanylistData());
    await dispatch(logoutAction());
    history.replace(AuthRoutes.login);
    MessageAlert.success(t('You have been logged out of your account.'));
  };
  const goAdmin = () => {
    history.push(UserRoutes.admin.adminUsers);
  };

  const showChangeLanguage = () => {
    setChangeLanguageVisible(true);
  };

  const hideChangeLanguage = () => {
    setChangeLanguageVisible(false);
  };

  const ProfileList = () => (
    <ProfileDropdownContainer>
      {isBunkerAdmin ? (
        <Menu.Item className="admin-item" key="Admin" onClick={goAdmin}>
          <Space size={4}>{t('Admin')}</Space>
        </Menu.Item>
      ) : null}
      <Menu.Item
        className="admin-item"
        key="change-language"
        onClick={showChangeLanguage}
      >
        <Space size={4}>{t('Change language')}</Space>
      </Menu.Item>
      <Menu.Item className="logout-item" key="logout" onClick={onLogout}>
        <Space size={4}>{t('Log Out')}</Space>
      </Menu.Item>
    </ProfileDropdownContainer>
  );

  return (
    <>
      <Dropdown
        overlay={ProfileList}
        placement="bottomRight"
        trigger={['click']}
        getPopupContainer={() => document.getElementById('main-layout')!}
      >
        <Profile>
          <ProfileAvatar>{text}</ProfileAvatar>
          <CaretDownOutlined />
        </Profile>
      </Dropdown>
      <ChangeLanguage
        visible={changeLanguageVisible}
        closeModal={hideChangeLanguage}
      />
    </>
  );
};

export default ProfileDropdown;
