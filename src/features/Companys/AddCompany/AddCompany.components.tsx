import { Content } from 'antd/lib/layout/layout';
import { Form } from 'antd';

import styled from 'styled-components';
import { Colors } from '../../../theme';

export const AddCompanyForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 2px;

    .ant-form-item-explain-error {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    }
  }

  .company-name-control .ant-form-item {
    margin-bottom: 22px;
  }
  .ant-form-item.ant-form-item-has-error {
    margin-bottom: 22px !important;
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
  a.ant-typography {
    font-family: inherit;
  }
`;

export const AddCompanyModalFooter = styled(Content)`
  .ant-btn {
    padding: 10px 16px !important;
    height: 42px;
  }

  .add-action-btn {
    text-transform: uppercase;
  }

  .cancel-action-btn {
    border: none;
    color: ${Colors.black06};
    background: ${Colors.grey1};
  }
`;
