import { Form } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../../theme';

export const ForgotPasswordForm = styled(Form)`
  margin-top: 30px;
  .ant-form-item {
    margin-bottom: 2px;
  }
  .ant-form-item.ant-form-item-has-error {
    margin-bottom: 12px !important;
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
  .submit-button {
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
  .form-help-text {
    font-size: 12px;
    color: ${Colors.black04};
  }
`;
