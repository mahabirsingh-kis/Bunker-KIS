import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Row, Col, Form, Input, Typography, Alert } from 'antd';

import {
  selectLoading,
  selectError,
  forgotPasswordAction,
  clearError,
  clearSuccess,
  selectSuccess,
} from './ForgotPassword.slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import LoadingCover from '../../../components/LoadingCover';
import PrimaryButton from '../../../components/PrimaryButton';
import { ForgotPasswordForm } from './ForgotPassword.component';
import AlertContainer from '../../../components/AlertContainer';

const { Title, Text } = Typography;

const ForgotPassword = ({ t }: { t: any }) => {
  const [form] = Form.useForm();
  const [formError, setFormError] = React.useState<boolean>(false);
  const [checkEmail, setCheckEmail] = React.useState<boolean>(false);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const success = useAppSelector(selectSuccess);
  const dispatch = useAppDispatch();

  const initialVlue = {};
  const successMessage: string = t(
    'If the account is valid, the password reset email will be sent to this email address',
  );
  const emailInputName = 'email';

  useEffect(() => {
    if (checkEmail) {
      form.validateFields([emailInputName]);
    }
  }, [checkEmail]);

  const emailInputOnBlur = () => {
    if (!checkEmail) {
      setCheckEmail(true);
    }
  };

  const onFieldsChange = () => {
    if (checkEmail) {
      dispatch(clearError());
      if (form.getFieldError('email').length) {
        setFormError(true);
      } else {
        setFormError(false);
      }
    }
  };

  const handleAlertClose = async () => {
    await dispatch(clearSuccess());
  };

  const onFinish = async (values: any) => {
    await dispatch(forgotPasswordAction(values));
    await dispatch(clearError());
    form.resetFields();
  };

  return (
    <div>
      <Helmet>
        <title>{`${t('Forgot Password')} | Bunker`}</title>
      </Helmet>
      {success && (
        <AlertContainer>
          <Alert
            className="submission-success-alert"
            message={successMessage}
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
              <Title>{t('Forgot Password')}</Title>
            </Col>
            <Col className="subtitle-container">
              <Text>
                {t('Enter the email address associated with your email')}
              </Text>
            </Col>
          </Row>
          <ForgotPasswordForm
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
                {!formError && (
                  <Text className="form-help-text">{successMessage}</Text>
                )}
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
                          .filter(({ errors }) => errors.length).length
                      }
                    >
                      {t('Sent Reset Link')}
                    </PrimaryButton>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </ForgotPasswordForm>
        </Col>
      </Row>
      <LoadingCover show={loading} />
    </div>
  );
};

export default withTranslation()(ForgotPassword);
