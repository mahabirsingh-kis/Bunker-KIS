import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Typography, Alert } from 'antd';

import { CookieKeys } from '../../../constants/Keys';
import { UserRoutes } from '../../../navigation/Routes';
import LoadingCover from '../../../components/LoadingCover';
import PrimaryButton from '../../../components/PrimaryButton';
import { LoginForm } from './Login.components';
import AlertContainer from '../../../components/AlertContainer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectLoading,
  selectError,
  loginAction,
  clearError,
  ErrorType,
  TempData,
} from './Login.slice';
import {
  clearSuccess as clearSetPasswordSuccess,
  selectSuccess as selectSetPasswordSuccess,
} from '../SetPassword/SetPassword.slice';
import { useCookie } from '../../../hooks';
import { User } from '../../../constants/types';

function isUser(data: User | TempData | ErrorType | undefined): data is User {
  return (data as User).email !== undefined;
}

function isTempData(
  data: User | TempData | ErrorType | undefined,
): data is TempData {
  return (data as TempData).code !== undefined;
}

const { Title, Text } = Typography;

const emailInputName = 'email';

/* eslint-disable no-param-reassign, complexity */
const Login = ({ t }: { t: any }) => {
  const [form] = Form.useForm();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const successMessage = useAppSelector(selectSetPasswordSuccess);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const cookies = useCookie([CookieKeys.authUser]);
  const initialVlue = {};

  const [checkEmail, setCheckEmail] = useState(false);

  useEffect(() => {
    if (checkEmail) {
      form.validateFields([emailInputName]);
    }
  }, [checkEmail]);

  const onFieldsChange = () => {
    dispatch(clearError());
  };

  // eslint-disable-next-line
  useEffect(() => {
    const user = cookies.getCookie(CookieKeys.authUser);
    if (user && user.token) {
      history.replace(UserRoutes.companies);
    }
    return () => {
      dispatch(clearSetPasswordSuccess());
      dispatch(clearError());
    };
  }, []);

  const onFinish = async (values: any) => {
    const result = await dispatch(loginAction(values));
    const { payload } = result;
    if (result.type === loginAction.fulfilled.toString()) {
      if (isTempData(payload)) {
        history.push(`/set-new-password/${payload.code}`);
      }
      if (isUser(payload)) {
        const userData = {
          first_name: payload.first_name,
          last_name: payload.last_name,
          token: payload.token,
        };
        cookies.setCookie(CookieKeys.authUser, JSON.stringify(userData));
        history.replace(UserRoutes.companies);
      }
    }
  };

  const handleAlertClose = () => {
    dispatch(clearSetPasswordSuccess());
  };

  const emailInputOnBlur = () => {
    if (!checkEmail) {
      setCheckEmail(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${t('Login')} | Bunker`}</title>
      </Helmet>
      {successMessage && (
        <AlertContainer>
          <Alert
            className="submission-success-alert"
            message={t('Your account password reset successfully')}
            type="success"
            showIcon
            closable
            afterClose={handleAlertClose}
          />
        </AlertContainer>
      )}
      <Row className="authentication-content" justify="center" align="middle">
        <Col span={24}>
          <Row justify="center">
            <Col className="title-container">
              <Title>{t('Login to Bunker')}</Title>
            </Col>
          </Row>
          <LoginForm
            name="login-form"
            form={form}
            initialValues={initialVlue}
            onFinish={onFinish}
            onFieldsChange={onFieldsChange}
          >
            <Row justify="start" align="middle">
              <Col span={24}>
                <Form.Item
                  className={error ? 'form-item-has-error' : ''}
                  labelCol={{ span: 24 }}
                  label={t('Email')}
                  name={emailInputName}
                  rules={[
                    {
                      type: checkEmail ? 'email' : undefined,
                      required: checkEmail,
                      message: t('Please enter a valid email format'),
                    },
                  ]}
                >
                  <Input
                    onBlur={emailInputOnBlur}
                    placeholder={t('Enter your Email')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="start" align="middle" gutter={[0, 16]}>
              <Col span={24}>
                <Form.Item
                  className={
                    error
                      ? 'password-item form-item-has-error'
                      : 'password-item'
                  }
                  labelCol={{ span: 24 }}
                  label={t('Password')}
                  name="password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    visibilityToggle={false}
                    placeholder={t('Enter your Password')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/forgot-password">{t('Forgot Password')}</Link>
              </Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col span={24} className="login-button">
                <Form.Item shouldUpdate>
                  {() => (
                    <PrimaryButton
                      htmlType="submit"
                      block
                      loading={loading}
                      disabled={
                        !form.isFieldsTouched(true) ||
                        !!form
                          .getFieldsError()
                          .filter(({ errors }) => errors.length).length
                      }
                    >
                      {loading ? null : t('Login')}
                    </PrimaryButton>
                  )}
                </Form.Item>
              </Col>
            </Row>
            {error ? (
              <Row className="login-message-error" justify="center">
                <Col>
                  <Text type="danger">
                    {t('The email and password entered are not valid')}
                  </Text>
                </Col>
              </Row>
            ) : null}
          </LoginForm>
        </Col>
      </Row>
      <LoadingCover show={loading} />
    </div>
  );
};

export default withTranslation()(Login);
