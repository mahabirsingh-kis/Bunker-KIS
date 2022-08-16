import React, { useEffect } from 'react';
import { Modal, Button, Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { CaretDownOutlined } from '@ant-design/icons';
import _ from 'lodash';
import styled from 'styled-components';

import { AddCompanyModalFooter } from '../Companys/AddCompany/AddCompany.components';
import { Colors } from '../../theme';
import Languages from '../../constants/Languages';
import { useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/Keys';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateLanguageAction, selectLoading } from './ChangeLanguage.slice';
import i18n from '../../i18n';

const { Option } = Select;

const ChnageLanguageModal = styled(Modal)`
  .actions-item {
    margin: 32px 0 0;
  }
`;

interface ChangeLanguageProps {
  visible: boolean;
  closeModal: () => void;
}

const languageFieldName = 'language';

const ChangeLanguage = ({ visible, closeModal }: ChangeLanguageProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const localStorage = useLocalStorage();
  useEffect(() => {
    const currentLanguage =
      localStorage.getItem(LocalStorageKeys.i18nLanguage) || '';
    form.setFields([
      {
        name: languageFieldName,
        value: currentLanguage,
      },
    ]);
  }, []);

  const onFinish = async (values: any) => {
    if (values.language) {
      const result = await dispatch(
        updateLanguageAction({ language: values.language }),
      );
      if (result.type === updateLanguageAction.fulfilled.toString()) {
        i18n.changeLanguage(values.language);
        localStorage.setItem(LocalStorageKeys.i18nLanguage, values.language);
        closeModal();
      }
    }
  };

  return (
    <ChnageLanguageModal
      title={t('Change Language')}
      visible={visible}
      closable={false}
      destroyOnClose
      maskClosable={false}
      centered
      footer={null}
    >
      <Form form={form} name="change-language" onFinish={onFinish}>
        <Form.Item
          label={t('Language')}
          name={languageFieldName}
          labelCol={{ span: 24 }}
        >
          <Select
            suffixIcon={<CaretDownOutlined style={{ color: Colors.grey5 }} />}
          >
            {Object.keys(Languages).map((key) => (
              <Option value={key} key={key}>
                {_.get(Languages, `${key}.label`)}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className="actions-item">
          <AddCompanyModalFooter>
            <Button
              htmlType="submit"
              key="submit"
              type="primary"
              className="add-action-btn"
              loading={loading}
            >
              {t('Update')}
            </Button>
            <Button
              key="back"
              className="cancel-action-btn"
              onClick={() => closeModal()}
            >
              {t('Cancel')}
            </Button>
          </AddCompanyModalFooter>
        </Form.Item>
      </Form>
    </ChnageLanguageModal>
  );
};

export default ChangeLanguage;
