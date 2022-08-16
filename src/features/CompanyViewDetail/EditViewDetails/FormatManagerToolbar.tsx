import React, { useMemo, useState } from 'react';
import { Dropdown, Menu, Space, Divider, Button, Row, Col } from 'antd';
import {
  CaretDownOutlined,
  SettingOutlined,
  CaretRightOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import {
  FormatManagerToolbarContainer,
  ColorItem,
  ColorsPickPopover,
  PickPopup,
  ColorOption,
} from './EditViewDetails.components';
import {
  EditViewOption,
  ViewDataTypeOptions,
} from '../../../constants/General';
import { Colors, Images } from '../../../theme';
import { ViewTextStandardColors } from '../../../constants/colors';

const { SubMenu } = Menu;

interface ColorsPickProps {
  color: string;
  defautColor: string;
  selectColor: (color: string) => void;
}

const ColorsPick = ({ color, defautColor, selectColor }: ColorsPickProps) => {
  const { t } = useTranslation();
  const resetColor = () => {
    selectColor(defautColor);
  };

  const changeColor = (value: string) => {
    selectColor(value);
  };

  return (
    <PickPopup>
      <Row className="standard-part">
        <Col>
          <div className="colors-title">{t('Standard')}</div>
          <ul className="color-options">
            {ViewTextStandardColors.map((colorItem) => (
              <ColorOption
                key={colorItem}
                color={colorItem}
                onClick={() => changeColor(colorItem)}
              >
                {color === colorItem ? (
                  <CheckOutlined
                    style={{
                      color:
                        colorItem === Colors.white
                          ? Colors.black
                          : Colors.white,
                    }}
                  />
                ) : null}
              </ColorOption>
            ))}
          </ul>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <div className="colors-title">{t('Customize')}</div>
          <ul className="color-options">
            <li>
              <img src={Images.AddCustomColor} alt="" />
            </li>
          </ul>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Col>
          <Button className="reset-button" type="text" onClick={resetColor}>
            {t('Reset')}
          </Button>
        </Col>
      </Row>
    </PickPopup>
  );
};

interface FormatManagerToolbarProps {
  isTimelineView: boolean;
  currrentDataType: string;
  textColor: {
    color: string;
    defaultColor: string;
    changeColor: (color: string) => void;
  };
  changeView: (key: string, value: any) => void;
}

const FormatManagerToolbar = ({
  isTimelineView,
  currrentDataType,
  textColor,
  changeView,
}: FormatManagerToolbarProps) => {
  const { t } = useTranslation();

  const [showChangeTextColor, setShowChangeTextColor] = useState(false);

  const { defaultColor } = textColor;
  const [currentColor, setCurrentColor] = useState(textColor.color);

  const menu = useMemo(
    () => (
      <Menu
        selectedKeys={[currrentDataType]}
        triggerSubMenuAction="click"
        expandIcon={<CaretRightOutlined />}
        onClick={({ key }: { key: string }) => {
          changeView('data_type', key);
        }}
      >
        <SubMenu
          key="view-data-type"
          title={t(EditViewOption.DataType)}
          popupClassName="view-data-type-menu"
          disabled={!isTimelineView}
        >
          <Menu.Item key={ViewDataTypeOptions.actual}>
            {t(ViewDataTypeOptions.actual)}
          </Menu.Item>
          <Menu.Item key={ViewDataTypeOptions.budget}>
            {t(ViewDataTypeOptions.budget)}
          </Menu.Item>
          <Menu.Item key={ViewDataTypeOptions.budgetVsActual}>
            {t(ViewDataTypeOptions.budgetVsActual)}
          </Menu.Item>
        </SubMenu>
      </Menu>
    ),
    [currrentDataType],
  );

  const selectColor = (value: string) => {
    setCurrentColor(value);
    setShowChangeTextColor(false);
    textColor.changeColor(value);
  };
  return (
    <FormatManagerToolbarContainer id="formatManagerToolbarContainer">
      <Space className="items-section">
        <ColorsPickPopover
          content={
            <ColorsPick
              color={currentColor}
              defautColor={defaultColor}
              selectColor={selectColor}
            />
          }
          trigger="click"
          placement="bottomRight"
          visible={showChangeTextColor}
          onVisibleChange={(visible) => setShowChangeTextColor(visible)}
          getPopupContainer={() =>
            document.getElementById('formatManagerToolbarContainer')!
          }
        >
          <ColorItem isSelected={showChangeTextColor}>
            <img src={Images.TextColorIcon} alt="" />
            <div
              className="text-color-square"
              style={{ background: currentColor }}
            ></div>
          </ColorItem>
        </ColorsPickPopover>
      </Space>
      <div className="format-setting-icon">
        <SettingOutlined style={{ fontSize: '18px' }} />
      </div>
      <div className="view-options-menu-container">
        <Dropdown
          overlay={menu}
          trigger={['click']}
          overlayClassName="edi-view-options"
          placement="bottomCenter"
        >
          <button type="button" className="ant-dropdown-link">
            {t('Options')} <CaretDownOutlined />
          </button>
        </Dropdown>
      </div>
    </FormatManagerToolbarContainer>
  );
};

export default FormatManagerToolbar;
