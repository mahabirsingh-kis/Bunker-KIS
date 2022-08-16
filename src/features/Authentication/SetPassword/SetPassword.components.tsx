import { Form, Row } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../../theme';

export const SetPasswordContainer = styled(Row)`
  .user-email {
    margin-top: 38px;
    .ant-avatar {
      height: 25px;
      width: 25px;
    }
    .ant-typography {
      margin-left: 8px;
    }
  }
  .password-validator {
    padding-left: 15px;
    margin-left: 8px;
    li {
      span.ant-typography {
        font-size: 12px;
        line-height: 18px;
        display: block;
        color: ${Colors.grey4};
      }
    }
  }
  li {
    ::marker {
      font-size: 18px;
      line-height: 0.8;
      color: ${Colors.grey4};
    }
  }
  li.valid {
    ::marker {
      color: ${Colors.success5};
    }
    span.ant-typography {
      color: ${Colors.black08};
    }
  }
`;

export const SetPasswordForm = styled(Form)`
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
`;
