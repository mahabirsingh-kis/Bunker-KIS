import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { SiderTheme } from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';
import { useLocation, useParams, useHistory } from 'react-router';

import { UserScreens } from '../../navigation/Screens';
import { useAppSelector } from '../../app/hooks';
import {
  selectOpenKeys,
  selectSelectedKeys,
  selectIsAdminPage,
} from '../../app/menu.slice';
import { MenuKeys } from './MenuKeys';
import { Images } from '../../theme';
import { Company } from '../../constants/types';
import { selectCurrentComapny } from '../../features/Companys/CompanyList/CompanyList.slice';
import { UserRoutes } from '../../navigation/Routes';

const SideBarContent = ({ sidebarTheme }: { sidebarTheme: SiderTheme }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const openKeys = useAppSelector(selectOpenKeys);
  const selectedKeys = useAppSelector(selectSelectedKeys);
  const isAdminPage = useAppSelector(selectIsAdminPage);
  const { state: locationCompany }: { state: Company } = useLocation();
  const { id: companyId }: { id: string } = useParams();
  const companyDetail: Company =
    useAppSelector(selectCurrentComapny) || locationCompany;

  const linkToUsers = () => {
    const path = UserRoutes.company.companyUsers.replace(':id', companyId);
    history.replace(path, companyDetail);
  };
  const linkToData = () => {
    const path = UserRoutes.company.companyData.replace(':id', companyId);
    history.replace(path, companyDetail);
  };
  const linkToViews = () => {
    const path = UserRoutes.company.companyViews.replace(':id', companyId);
    history.replace(path, companyDetail);
  };

  return isAdminPage ? (
    <Menu
      key={`menu_${selectedKeys}`}
      className="sidebar-menu"
      theme={sidebarTheme}
      mode="inline"
      defaultOpenKeys={[...openKeys]}
      defaultSelectedKeys={[...selectedKeys]}
    >
      <Menu.Item
        key={MenuKeys.adminUsers}
        icon={<img src={Images.UsersIcon} alt="" />}
      >
        <Link to={UserScreens.AdminUsers.path}>{t('Users')}</Link>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu
      key={`menu_${selectedKeys}`}
      className="sidebar-menu"
      theme={sidebarTheme}
      mode="inline"
      defaultOpenKeys={[...openKeys]}
      defaultSelectedKeys={[...selectedKeys]}
    >
      <Menu.Item
        key={MenuKeys.companyViews}
        icon={<img src={Images.ViewsListIcon} alt="" />}
        onClick={linkToViews}
      >
        <span aria-hidden="true">{t('Views')}</span>
      </Menu.Item>
      <Menu.Item
        key={MenuKeys.companyUsers}
        icon={<img src={Images.UsersIcon} alt="" />}
        onClick={linkToUsers}
      >
        <span aria-hidden="true">{t('Users')}</span>
      </Menu.Item>
      <Menu.Item
        key={MenuKeys.companyData}
        icon={<img src={Images.DataIcon} alt="" />}
        onClick={linkToData}
      >
        <span aria-hidden="true">{t('Data')}</span>
      </Menu.Item>
    </Menu>
  );
};

export default SideBarContent;
