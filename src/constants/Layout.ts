import { SiderTheme } from 'antd/lib/layout/Sider';
import { UserRoutes } from '../navigation/Routes';

export const LgWidth = 992;
export const SidebarWidth = 220;
export const CollapsedWidth = 80;
export const HeaderHeight = 72;
export const LayoutTypes = {
  veritical: 'veritical',
  horizontal: 'horizontal',
};
export const SidebarTypes = {
  default: 'default',
  condensed: 'condensed',
  icon: 'icon',
};
export const SidebarTheme: SiderTheme = 'light';
export const SidebarThemes = {
  dark: 'dark',
  light: 'light',
};
export const TopbarThemes = {
  dark: 'dark',
  light: 'light',
};

export const onlyShowTitleHeaderPage = [
  UserRoutes.company.companyUsers,
  UserRoutes.company.companyData,
  UserRoutes.company.companyViews,
];
