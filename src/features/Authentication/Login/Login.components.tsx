import { Form } from 'antd';
import styled from 'styled-components';

export const LoginForm = styled(Form)`
  margin-top: 30px;
  .ant-form-item {
    margin-bottom: 12px;
  }
  .password-item {
    .ant-form-item-explain {
      display: none;
    }
  }
  .ant-form-item-label > label {
    height: auto;
    text-transform: uppercase;
    ::before {
      display: none !important;
    }
  }
  .ant-btn-primary {
    height: 42px;
  }
  .ant-form-item-with-help {
    margin-bottom: 16px;
  }
  .ant-form-item-explain {
    margin-top: 8px;
  }

  .login-button {
    .ant-form-item {
      margin-top: 33px;
      .ant-btn-primary {
        text-transform: uppercase;
      }
    }
  }
  a.ant-typography {
    font-family: inherit;
  }
  .login-message-error {
    margin-top: 10px;
  }
`;
