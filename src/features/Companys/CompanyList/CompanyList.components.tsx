import { Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';

import { Colors } from '../../../theme';

export const CompaniesLayoutContainer = styled(Layout)`
  background: ${Colors.grey1};
`;

export const CompaniesPageHeader = styled(Content)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 120px 20px 120px;
  background: ${Colors.white};
  height: 71px;

  @media (max-width: 540px) {
    padding: 0px 5px;
  }

  .companies-header-row {
    width: 100%;

    .title-container {
      margin-bottom: 0;
      align-items: center;
      display: flex;

      .ant-typography {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 31px;
        margin-bottom: 0;
      }
    }

    .button-container {
      text-align: end;
    }
  }
`;

export const CompanyListContainer = styled(Content)`
  padding: 20px 120px 20px 120px;

  .no-records-container {
    background: ${Colors.white};
    border-radius: 4px;
    padding: 20px 120px 20px 120px;
    text-align: center;
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .ant-skeleton {
      width: 50%;
      margin: 16px auto;
      @media (max-width: 540px) {
        width: 80%;
      }
      .ant-skeleton-content {
        background: ${Colors.grey2};
        padding: 16px 21px;
        border-radius: 8px;

        .ant-skeleton-title {
          margin-top: 0;
          margin-botom: 0;
          width: 60% !important;
        }
        .ant-skeleton-paragraph {
          margin-top: 15px;
          margin-bottom: 0px;
          li {
            width: 100% !important;
          }
        }
      }
    }
    @media (max-width: 540px) {
      padding: 20px 0px;
    }
  }

  .ant-table-container {
    .ant-table-thead .ant-table-cell {
      background: ${Colors.grey1};
      font-size: 12px;
      text-transform: uppercase;
    }

    .ant-table-column-sorters {
      justify-content: start;
      .ant-table-column-title {
        position: relative;
        z-index: 1;
        flex: initial;
        margin-right: 5px;
      }

      .anticon:not(.active) {
        color: ${Colors.primary2};
      }
    }

    .ant-table-row.ant-table-row-level-0 {
      background: ${Colors.white};
    }
    .ant-table-row.ant-table-row-level-0:hover {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0px 1px 15px 3px rgba(36, 36, 36, 0.12);
    }

    .ant-table-thead {
      .ant-table-cell.names-column,
      .ant-table-cell.dates-column {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
      }
    }

    .ant-table-body {
      .ant-table-cell.names-column,
      .ant-table-cell.dates-column {
        background: ${Colors.white};
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
      }
    }

    .ant-table-cell.dates-column {
      text-align: right;
      font-size: 16px;
    }

    .ant-table-cell.names-column {
      font-weight: 600;
      font-size: 18px;
    }
  }

  @media (max-width: 540px) {
    padding: 20px 0px;
  }
  .ant-table-row {
    cursor: pointer;
  }
`;

export const LoadingContainer = styled(Row)`
  padding: 20px 120px 20px 120px;
  width: 100%;
  margin: auto;
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
      height: 60px;
    }

    .date-column {
      display: flex;
      justify-content: center;
      .ant-skeleton {
        width: 88%;
        .ant-skeleton-input {
          height: 24px;
          width: 100%;
          border-radius: 4px;
        }
      }
    }
  }
`;
