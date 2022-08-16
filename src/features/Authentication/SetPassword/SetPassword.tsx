import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Row, Col, Form, Input, Typography, Avatar, Alert } from 'antd';

import { useHistory, useLocation, useParams } from 'react-router-dom';

import { Images } from '../../../theme';

import { AuthRoutes } from '../../../navigation/Routes';
import { AuthScreens } from '../../../navigation/Screens';

import LoadingCover from '../../../components/LoadingCover';
import PrimaryButton from '../../../components/PrimaryButton';
import {
  SetPasswordContainer,
  SetPasswordForm,
} from './SetPassword.components';
import AlertContainer from '../../../components/AlertContainer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectLoading,
  selectError,
  clearError,
  verifyUserCodeAction,
  selectUserEmail,
  setPasswordAction,
  selectSuccess,
} from './SetPassword.slice';

const { Title, Text } = Typography;

/* eslint-disable max-lines-per-function, complexity */
const SetPassword = ({ t }: { t: any }) => {
  const [showPasswordValidator, setShowPasswordValidator] =
    React.useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(false);
  const [isResetPasswordPage, setIsResetPasswordPage] =
    React.useState<boolean>(false);
  const [pageTitle, setPageTitle] = React.useState<string>(
    t(AuthScreens.SetPassword.title),
  );
  const [passwordErrors, setPasswordErrors] = React.useState<any>({});
  const [form] = Form.useForm();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const userEmail = useAppSelector(selectUserEmail);
  const success = useAppSelector(selectSuccess);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();
  const { code }: any = useParams();

  const verifyUserCode = async (uniqeCode: string) => {
    await dispatch(verifyUserCodeAction({ code: uniqeCode }));
  };

  React.useEffect(() => {
    if (location.pathname === AuthRoutes.setNewPassword) {
      setIsResetPasswordPage(true);
      setPageTitle(t(AuthScreens.SetNewPassword.title));
    }
    verifyUserCode(code);
  }, []);

  React.useEffect(() => {
    if (success) {
      dispatch(clearError());
      form.resetFields();
      history.push(AuthRoutes.login);
    }
  }, [success]);

  React.useEffect(() => {
    if (
      !passwordErrors.minLength &&
      !passwordErrors.oneUppercase &&
      !passwordErrors.numberOrSpecials
    ) {
      setShowPasswordValidator(false);
    } else {
      setShowPasswordValidator(true);
    }
  }, [passwordErrors]);

  const initialValue = {};

  const onFieldsChange = () => {
    dispatch(clearError());
    const inputs = form.getFieldsValue();
    const errorList: any = {};
    if (inputs.password) {
      setShowPasswordValidator(true);

      // Validate length
      if (inputs.password.length < 8) {
        setIsPasswordValid(false);
        errorList.minLength = t('At least 8 characters total');
      }

      // Validate capital letters
      const upperCaseLetters = /[A-Z]/g;
      if (!inputs.password.match(upperCaseLetters)) {
        setIsPasswordValid(false);
        errorList.oneUppercase = t('At least 1 uppercase letter');
      }

      // Validate one number or special character
      const numbers = /[0-9]/g;
      const specials = /[!@#$%^&*]/g;
      if (!inputs.password.match(numbers) && !inputs.password.match(specials)) {
        errorList.numberOrSpecials = t(
          'At least 1 number OR special character',
        );
      }
    } else {
      setShowPasswordValidator(false);
    }

    if (Object.keys(errorList).length) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    setPasswordErrors(errorList);
  };

  const onSubmit = async (values: any) => {
    const payload = {
      code,
      password: values.password,
    };
    await dispatch(setPasswordAction(payload));
  };

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} | Bunker`}</title>
      </Helmet>
      {error && (
        <AlertContainer>
          <Alert
            className="error-alert"
            message={t(error.message)}
            type="error"
            showIcon
          />
        </AlertContainer>
      )}
      <SetPasswordContainer
        className="authentication-content"
        justify="center"
        align="middle"
      >
        <Col span={24}>
          <Row justify="center">
            <Col className="title-container">
              <Title>{pageTitle}</Title>
            </Col>
          </Row>
          <Col span={24} className="user-email">
            <Avatar src={Images.UserIcon} />
            <Text>{userEmail}</Text>
          </Col>
          <SetPasswordForm
            name="set-password-form"
            form={form}
            initialValues={initialValue}
            onFinish={onSubmit}
            onFieldsChange={onFieldsChange}
          >
            <Row justify="start" align="middle">
              <Col span={24}>
                <Form.Item
                  className={
                    Object.values(passwordErrors).length
                      ? 'form-item-has-error'
                      : ''
                  }
                  labelCol={{ span: 24 }}
                  label={
                    isResetPasswordPage ? t('New Password') : t('Password')
                  }
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: t('Please enter a password'),
                    },
                  ]}
                >
                  <Input.Password
                    visibilityToggle={false}
                    placeholder={t('Enter Password')}
                  />
                </Form.Item>
                {showPasswordValidator && (
                  <ul className="password-validator">
                    <li className={!passwordErrors.minLength ? 'valid' : ''}>
                      <Text>{t('At least 8 characters total')}</Text>
                    </li>
                    <li className={!passwordErrors.oneUppercase ? 'valid' : ''}>
                      <Text>{t('At least 1 uppercase letter')}</Text>
                    </li>
                    <li
                      className={
                        !passwordErrors.numberOrSpecials ? 'valid' : ''
                      }
                    >
                      <Text>{t('At least 1 number OR special character')}</Text>
                    </li>
                  </ul>
                )}
              </Col>
            </Row>
            <Row justify="start" align="middle" gutter={[0, 16]}>
              <Col span={24}>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={
                    isResetPasswordPage
                      ? t('Confirm New Password')
                      : t('Confirm Password')
                  }
                  name="confirm"
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: t(`Passwords confirm your password`),
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(t(`Passwords don’t match`)),
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    visibilityToggle={false}
                    placeholder={t('Enter Password Again')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col span={24} className="submit-button">
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
                          .filter(({ errors }) => errors.length).length ||
                        !isPasswordValid ||
                        !userEmail
                      }
                    >
                      {t('Submit')}
                    </PrimaryButton>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </SetPasswordForm>
        </Col>
      </SetPasswordContainer>
      <LoadingCover show={loading} />
    </div>
  );
};

export default withTranslation()(SetPassword);
