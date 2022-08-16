import React, { useState, useEffect, useMemo } from 'react';
import { Menu, Dropdown, Space } from 'antd';
import _ from 'lodash';
import { CaretDownOutlined } from '@ant-design/icons';

import { LocalStorageKeys } from '../../constants/Keys';
import i18n from '../../i18n';
import Languages from '../../constants/Languages';
import { useLocalStorage } from '../../hooks';
import { Colors } from '../../theme';

const LanguageDropdown = () => {
  const localStorage = useLocalStorage();
  const [lang, setLang] = useState('');
  useEffect(() => {
    const currentLanguage =
      localStorage.getItem(LocalStorageKeys.i18nLanguage) || '';
    setLang(currentLanguage);
  }, []);

  const changeLanguageAction = (l: string) => {
    i18n.changeLanguage(l);
    localStorage.setItem(LocalStorageKeys.i18nLanguage, l);
    setLang(l);
  };

  const menu = useMemo(
    () => (
      <Menu selectable selectedKeys={[lang]}>
        {_.map(Object.keys(Languages), (key: string) => (
          <Menu.Item
            className="flag-item"
            key={key}
            onClick={() => changeLanguageAction(key)}
          >
            <Space size={4}>
              <span>{_.get(Languages, `${key}.label`)}</span>
            </Space>
          </Menu.Item>
        ))}
      </Menu>
    ),
    [Languages, lang],
  );
  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <div className="lang-dropdown">
        <span className="lang-text">{_.get(Languages, `${lang}.label`)}</span>
        <CaretDownOutlined style={{ color: Colors.black04 }} />
      </div>
    </Dropdown>
  );
};

export default LanguageDropdown;
