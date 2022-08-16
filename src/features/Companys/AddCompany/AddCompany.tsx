import React, { useEffect } from 'react';
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useDispatch } from 'react-redux';

import { withTranslation } from 'react-i18next';
import {
  addCompanyAction,
  clearError,
  selectCompanyModalVisible,
  selectCurrencyList,
  selectError,
  selectLoading,
  showHideAddCompanyModal,
} from '../CompanyList/CompanyList.slice';
import { useAppSelector } from '../../../app/hooks';
import { AddCompanyForm, AddCompanyModalFooter } from './AddCompany.components';

const { Option } = Select;

const initialVlue = {};
const inputName = 'name';
const selectName = 'currency';
/* eslint-disable no-param-reassign, complexity */
const AddCompany = ({ t, showModal }: { t: any; showModal: boolean }) => {
  const [form] = Form.useForm();
  const [formError, setFormError] = React.useState<boolean>(false);
  const [checkName, setCheckName] = React.useState<boolean>(false);
  const [checkCurrency, setCheckCurrency] = React.useState<boolean>(false);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const currencyList = useAppSelector(selectCurrencyList);
  const modalVisibal = useAppSelector(selectCompanyModalVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    form.resetFields();
    return () => {
      form.resetFields();
      dispatch(clearError());
    };
  }, []);

  useEffect(() => {
    setCheckName(false);
    setCheckCurrency(false);
    setFormError(false);
    form.resetFields();
  }, [modalVisibal]);

  useEffect(() => {
    if (checkName && checkCurrency) {
      form.validateFields([inputName, selectName]);
    }
  }, [checkName, checkCurrency]);

  const handleCloseModal = () => {
    setCheckName(false);
    setCheckCurrency(false);
    setFormError(false);
    form.resetFields();
    dispatch(showHideAddCompanyModal(false));
  };

  const nameInputOnBlur = () => {
    if (!checkName) {
      setCheckName(true);
    }
  };

  const onFieldsChange = () => {
    if (checkName && checkCurrency) {
      if (
        form.getFieldError(inputName).length ||
        form.getFieldError(selectName).length
      ) {
        setFormError(true);
      } else {
        setFormError(false);
      }
      if (!form.getFieldValue(inputName) || !form.getFieldValue(selectName)) {
        setFormError(true);
      }
      dispatch(clearError());
    }
    if (checkName && form.getFieldValue(inputName)) {
      setCheckCurrency(true);
    }
    if (checkCurrency && form.getFieldValue(selectName)) {
      setCheckName(true);
    }
  };

  const onSubmit = async () => {
    const formData = form.getFieldsValue();
    await dispatch(addCompanyAction(formData));
  };

  const handleCurrencyOnBlur = () => {
    setCheckCurrency(true);
  };

  return (
    <>
      <Modal
        title={t('Add Company')}
        visible={showModal}
        closable={false}
        maskClosable={false}
        onCancel={handleCloseModal}
        className="addCompanyModal"
        centered
        footer={[
          <AddCompanyModalFooter>
            <Button
              key="submit"
              type="primary"
              loading={loading}
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length ||
                !checkName ||
                !checkCurrency ||
                formError ||
                error != null
              }
              onClick={onSubmit}
              className="add-action-btn"
            >
              {t('Add')}
            </Button>
            <Button
              key="back"
              onClick={handleCloseModal}
              className="cancel-action-btn"
            >
              {t('Cancel')}
            </Button>
          </AddCompanyModalFooter>,
        ]}
      >
        <AddCompanyForm
          name="add-company-form"
          form={form}
          initialValues={initialVlue}
        >
          <Row justify="start" align="middle">
            <Col span={24} className="company-name-control">
              <Form.Item
                className={error || formError ? 'form-item-has-error' : ''}
                labelCol={{ span: 24 }}
                label={t('Name')}
                name={inputName}
                help={error ? error.message : undefined}
                rules={[
                  {
                    required: true,
                    message: t('Please enter a company name'),
                  },
                ]}
              >
                <Input
                  onBlur={nameInputOnBlur}
                  onChange={onFieldsChange}
                  placeholder={t('Company Name')}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                className={error || formError ? 'form-item-has-error' : ''}
                labelCol={{ span: 24 }}
                label={t('Currency')}
                name={selectName}
                rules={[
                  {
                    required: true,
                    message: t('Please select a currency'),
                  },
                ]}
              >
                <Select
                  placeholder="Select"
                  onChange={onFieldsChange}
                  onBlur={handleCurrencyOnBlur}
                >
                  {currencyList.map((cr: any) => (
                    <Option value={cr.id} key={`currency-option-${cr.id}`}>
                      {`${cr.symbol} - ${cr.name}`}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </AddCompanyForm>
      </Modal>
    </>
  );
};

export default withTranslation()(AddCompany);
