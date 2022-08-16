import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Form,
  Row,
  Col,
  Input,
  Select,
  Checkbox,
  Divider,
  Button,
} from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { CompanyAddUserContainer } from './CompanyUsers.components';
import ValidationPasswordInput from '../../components/ValidationPasswordInput/ValidationPasswordInput';
import {
  addUsersAction,
  selectAddUserLoading,
  AddUsersPayload,
  selectAddUserError,
  clearAddError,
} from './AddUser.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Roles } from '../../constants/General';
import MessageAlert from '../../components/MessageAlert';
interface CompanyAddUserProps {
  companyId: number;
  onClose?: (
    needRefresh: boolean,
    haveChanged: boolean,
    success: boolean,
  ) => void;
}

const { Title, Paragraph } = Typography;
const { Option } = Select;
/* eslint-disable max-lines-per-function */
const CompanyAddUser = ({ companyId, onClose }: CompanyAddUserProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAddUserLoading);
  const error = useAppSelector(selectAddUserError);
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [haveChanged, setHaveChanged] = useState(false);
  const roleOptions = [Roles.admin, Roles.editor, Roles.viewer];

  /* eslint-disable arrow-body-style */
  useEffect(() => {
    return () => {
      dispatch(clearAddError());
    };
  }, []);
  /* eslint-enable arrow-body-style */

  const initData = {
    isSendEmail: true,
  };
  const onValuesChange = (chnageValues: any) => {
    setHaveChanged(true);
    if (chnageValues.isSendEmail !== undefined) {
      setShowPassowrd(!chnageValues.isSendEmail);
    }
    if (chnageValues.email) {
      dispatch(clearAddError());
    }
  };

  const closeAction = () => {
    if (onClose) {
      onClose(false, haveChanged, false);
    }
  };

  const onFinish = async (values: any) => {
    const palyload: AddUsersPayload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      add_to_company: [
        {
          company_id: companyId,
          role: values.role,
        },
      ],
    };

    if (!values.isSendEmail) {
      palyload.password = values.password;
    }

    const result = await dispatch(addUsersAction(palyload));
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
            <Title level={2}>Add User</Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              onValuesChange={onValuesChange}
              initialValues={initData}
              validateMessages={validateMessages}
              autoComplete="off"
              onFinish={onFinish}
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
                        required: true,
                        type: 'email',
                      },
                    ]}
                  >
                    <Input placeholder={t('Enter')} />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="mb-24" id="select-row-container">
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label={t('Role')}
                    name="role"
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
                        document.getElementById('select-row-container')!
                      }
                    >
                      {roleOptions.map((item) => (
                        <Option value={item.value}>{t(item.text)}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
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
              <Row className="mb-24">
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
