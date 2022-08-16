import styled from 'styled-components';
import { Row } from 'antd';

import { Colors } from '../../theme';

export const CompanyUserListContainer = styled(Row)`
  background-color: ${Colors.grey1};
  padding: 0 24px;
  height: calc(100vh - 170px);
  box-sizing: border-box;
  overflow-y: scroll;
  .pagination {
    margin: 24px 0 54px;
  }
`;

export const ListContent = styled.div`
  padding: 20px 0;
  .ant-list-item {
    background-color: ${Colors.white};
    border-radius: 4px;
    margin-top: 4px;
    padding: 12px 20px;
    .ant-list-item-meta {
      align-items: center;
      .ant-avatar {
        width: 42px;
        height: 42px;
        background: ${Colors.primary1};
        .ant-avatar-string {
          line-height: 42px;
          color: ${Colors.primary6};
          font-size: 18px;
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      .ant-list-item-meta-title {
        color: ${Colors.black};
        font-weight: 600;
        font-size: 16px;
      }
      .ant-list-item-meta-description {
        color: ${Colors.black06};
        font-size: 12px;
      }
    }
  }
  .ant-list-split .ant-list-item {
    border-bottom: unset;
  }
  .right-content {
    display: block;
    text-align: right;
    .right-content-role {
      font-weight: 500;
      font-size: 14px;
    }
    .right-content-date {
      font-size: 12px;
      color: ${Colors.black06};
    }
  }
`;

export const CompanyAddUserContainer = styled(Row)`
  .mb-24 {
    margin-bottom: 24px;
  }
  h2 {
    font-weight: 700;
    margin: 0;
  }
  .ant-form-item {
    margin: 0;
  }
  .ant-form-item-label {
    line-height: 12px;
  }
  .check-input {
    margin: 0px;
    .ant-form-item-control-input {
      margin-top: 0;
      min-height: 0;
    }
  }
  .ant-divider-horizontal {
    margin-top: 0;
  }
  .ant-typography {
    margin-bottom: 0;
  }
  .ant-btn {
    height: 42px;
    font-size: 16px;
    font-weight: 700;
  }
  .ant-btn-text {
    color: ${Colors.black06};
  }

  .companys-roles {
    .companys-roles-space {
      align-items: stretch;
      .select-company {
        width: 208px;
      }
      .select-role {
        margin-left: 10px;
        width: 146px;
      }
      > div > .anticon {
        margin-top: 35px;
        margin-left: 3px;
      }
    }
    .ant-btn {
      border-color: ${Colors.primary5};
      color: ${Colors.primary5};
      height: 32px;
      width: 32px;
      line-height: 20px;
    }
  }
  .switch-item {
    .ant-form-item {
      margin: 0px;
    }
    .ant-form-item-control-input {
      min-height: 32px;
    }
    .ant-typography {
      margin-left: 14px;
      font-weight: 500;
    }
  }

  .removeCompanyRoles {
    font-size: 16px;
    color: ${Colors.primary5};
    margin-left: 15px !important;
  }

  .disabledRemoveCompanyRoles {
    color: ${Colors.grey3};
    cursor: not-allowed;
  }

  .add-companys-roles-button {
    margin-bottom: 0;
    height: 32px;
    .ant-form-item-control-input {
      min-height: 32px;
    }
  }
`;

export const LoadingContainer = styled(Row)`
  padding: 24px;
  width: 100%;
  .loading-header {
    width: 100%;
    height: 24px;
    .ant-skeleton-input {
      height: 24px !important;
      border-radius: 4px;
    }
  }

  .loading-main-content {
    background: ${Colors.white};
    border-radius: 4px;
    width: 100%;
    margin-top: 20px;
    padding: 24px;
    height: calc(100vh - 280px);

    .ant-row {
      padding: 7px 0px;
      height: 70px;
    }

    .initials-column {
      display: flex;
      .ant-skeleton .ant-skeleton-input {
        height: 42px;
        width: 42px;
        border-radius: 50%;
      }
    }

    .name-column {
      display: flex;
      flex-direction: column;
      .title {
        height: 24px;
        width: 188px;
        .ant-skeleton-input {
          border-radius: 4px;
          height: 24px;
        }
        margin-bottom: 6px;
      }
      .description {
        height: 12px;
        width: 188px;
        .ant-skeleton-input {
          border-radius: 4px;
          height: 12px;
        }
      }
    }
    .last-column {
      display: flex;
      flex-direction: column;
      .title {
        height: 24px;
        width: 188px;
        .ant-skeleton-input {
          border-radius: 4px;
          height: 24px;
        }
        margin-bottom: 6px;
      }
      .description {
        height: 12px;
        width: 188px;
        .ant-skeleton-input {
          border-radius: 4px;
          height: 12px;
        }
      }
    }
  }
`;
