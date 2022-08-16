import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Form,
  Row,
  Col,
  Input,
  Checkbox,
  Divider,
  Button,
  Switch,
  Space,
  Select,
} from 'antd';
import {
  MinusCircleOutlined,
  PlusOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import { CompanyAddUserContainer } from '../CompanyUsers/CompanyUsers.components';
import ValidationPasswordInput from '../../components/ValidationPasswordInput/ValidationPasswordInput';
import { Roles, listFilter } from '../../constants/General';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addUsersAction,
  selectAddUserLoading,
  selectAddUserError,
  AddUsersPayload,
  clearAddError,
} from '../CompanyUsers/AddUser.slice';
import { selectCompanys, getComapniesAction } from './AdminUsers.slice';
import { CompanyRole } from '../../constants/types';
import MessageAlert from '../../components/MessageAlert';
interface CompanyAddUserProps {
  onClose?: (
    needRefresh: boolean,
    haveChanged: boolean,
    success: boolean,
  ) => void;
}

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const roleOptions = [Roles.admin, Roles.editor, Roles.viewer];

const addToCompanyFiledName = 'add_to_company';

/* eslint-disable max-lines-per-function, complexity */
const CompanyAddUser = ({ onClose }: CompanyAddUserProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [showAddCompanyRole, setShowAddCompanyRole] = useState(true);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAddUserLoading);
  const error = useAppSelector(selectAddUserError);
  const companies = useAppSelector(selectCompanys);
  const [haveChanged, setHaveChanged] = useState(false);

  const [filterCompanies, setFilterCompanies] = useState(companies);

  useEffect(() => {
    dispatch(
      getComapniesAction({
        page: 1,
        count: 500,
        sort: listFilter.sort.asc,
        sortby: listFilter.sortBy.name,
      }),
    );
    return () => {
      dispatch(clearAddError());
    };
  }, []);

  useEffect(() => {
    setFilterCompanies(companies);
  }, [companies]);

  const initData = {
    isSendEmail: true,
    isBunkerAdmin: false,
    add_to_company: [undefined],
  };
  const onValuesChange = (chnageValues: any) => {
    setHaveChanged(true);
    if (chnageValues.isSendEmail !== undefined) {
      setShowPassowrd(!chnageValues.isSendEmail);
    }

    if (chnageValues.isBunkerAdmin !== undefined) {
      setShowAddCompanyRole(!chnageValues.isBunkerAdmin);
    }

    if (chnageValues.email) {
      dispatch(clearAddError());
    }
    if (chnageValues.add_to_company) {
      setFilterCompanies([...companies]);
    }
  };

  const onFinished = async (values: any) => {
    const payload: AddUsersPayload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      add_to_company: [],
    };
    if (!values.isBunkerAdmin) {
      payload.add_to_company = values.add_to_company;
    }
    if (!values.isSendEmail) {
      payload.password = values.password;
    }
    const result = await dispatch(addUsersAction(payload));
    if (result.type === addUsersAction.fulfilled.toString()) {
      MessageAlert.success(
        t('[first_name] [last_name] was successfully added.', {
          first_name: values.first_name,
          last_name: values.last_name,
        }),
      );
      if (onClose) {
        onClose(true, false, true);
      }
    }
  };

  const closeAction = () => {
    if (onClose) {
      onClose(false, haveChanged, false);
    }
  };

  const getSelectCompanyStatus = (companyId: number) => {
    const data: CompanyRole[] = form.getFieldValue(addToCompanyFiledName);
    const filter = data.find((item) => item && item.company_id === companyId);
    return !filter;
  };
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: t('${label} is required'),
    types: {
      email: t('Please enter a valid email format'),
    },
  };
  /* eslint-enable no-template-curly-in-string */
  return (
    <CompanyAddUserContainer>
      <Col span={24}>
        <Row className="mb-24">
          <Col>
            <Title level={2}>{t('Add User')}</Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              form={form}
              onValuesChange={onValuesChange}
              initialValues={initData}
              validateMessages={validateMessages}
              autoComplete="off"
              onFinish={onFinished}
            >
              <Row className="mb-24">
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label={t('First name')}
                    name="first_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder={t('Enter')} />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="mb-24">
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label={t('Last name')}
                    name="last_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder={t('Enter')} />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="mb-24">
                <Col span={24}>
                  <Form.Item
                    className={error ? 'form-item-has-error' : ''}
                    labelCol={{ span: 24 }}
                    label={t('Email')}
                    name="email"
                    help={error ? error.message : undefined}
                    rules={[
                      {
                        type: 'email',
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder={t('Enter')} />
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row className="switch-item mb-24" align="middle">
                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    name="isBunkerAdmin"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col>
                  <Text>{t('Bunker Admin')}</Text>
                </Col>
              </Row>
              {showAddCompanyRole ? (
                <Row
                  className="companys-roles mb-24"
                  id="admin-select-company-container"
                >
                  <Col span={24}>
                    <Form.List name={addToCompanyFiledName}>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(({ key, name, ...restField }) => (
                            <Space
                              className="companys-roles-space"
                              key={key}
                              style={{ display: 'flex', marginBottom: 24 }}
                              align="baseline"
                            >
                              <Form.Item
                                {...restField}
                                label={t('company')}
                                labelCol={{ span: 24 }}
                                name={[name, 'company_id']}
                                className="select-company"
                                shouldUpdate
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Select
                                  placeholder={t('Select')}
                                  suffixIcon={<CaretDownOutlined />}
                                  getPopupContainer={() =>
                                    document.getElementById(
                                      'admin-select-company-container',
                                    )!
                                  }
                                >
                                  {filterCompanies.map((item) => (
                                    <Option
                                      key={item.id}
                                      disabled={
                                        !getSelectCompanyStatus(item.id)
                                      }
                                      value={item.id}
                                    >
                                      {item.name}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                label={t('role')}
                                labelCol={{ span: 24 }}
                                className="select-role"
                                name={[name, 'role']}
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Select
                                  placeholder={t('Select')}
                                  suffixIcon={<CaretDownOutlined />}
                                  getPopupContainer={() =>
                                    document.getElementById(
                                      'admin-select-company-container',
                                    )!
                                  }
                                >
                                  {roleOptions.map((item) => (
                                    <Option key={item.value} value={item.value}>
                                      {t(item.text)}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <MinusCircleOutlined
                                className={
                                  fields.length < 2
                                    ? 'removeCompanyRoles disabledRemoveCompanyRoles'
                                    : 'removeCompanyRoles'
                                }
                                disabled={fields.length < 2}
                                onClick={() => {
                                  if (fields.length > 1) {
                                    remove(name);
                                  }
                                }}
                              />
                            </Space>
                          ))}
                          <Form.Item className="add-companys-roles-button">
                            <Button
                              onClick={() => add()}
                              size="large"
                              icon={<PlusOutlined />}
                            />
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Col>
                </Row>
              ) : null}
              <Divider />
              <Row className="mb-24">
                <Col span={24}>
                  <Form.Item
                    className="check-input"
                    labelCol={{ span: 24 }}
                    name="isSendEmail"
                    valuePropName="checked"
                  >
                    <Checkbox>{t('Send invitation email')}</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              {showPassowrd ? (
                <Row>
                  <Col span={24}>
                    <Row className="mb-24">
                      <Col span={24}>
                        <Divider />
                        <Paragraph>
                          {t('Please set a temporary password for this user.')}
                        </Paragraph>
                      </Col>
                    </Row>
                    <Row className="mb-24">
                      <Col span={24}>
                        <ValidationPasswordInput
                          label={t('New Password')}
                          name="password"
                          rule={{
                            required: true,
                            errorMessage: t('Please enter a password'),
                          }}
                          placeholder={t('Enter')}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-24">
                      <Col span={24}>
                        <Form.Item
                          name="confirm"
                          label={t('confirm new password')}
                          dependencies={['password']}
                          labelCol={{ span: 24 }}
                          rules={[
                            {
                              required: true,
                              message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue('password') === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error(t('Passwords don’t match')),
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password
                            visibilityToggle={false}
                            placeholder={t('Enter')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ) : null}
              <Row className="active-section">
                <Col span={24}>
                  <Button loading={loading} type="primary" htmlType="submit">
                    {loading ? null : t('ADD')}
                  </Button>
                  <Button type="text" onClick={closeAction}>
                    {t('Cancel')}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </CompanyAddUserContainer>
  );
};

export default CompanyAddUser;
