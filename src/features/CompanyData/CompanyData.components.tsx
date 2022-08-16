import styled from 'styled-components';
import { Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { Colors } from '../../theme';

export const NoDataContainer = styled(Row)`
  background: ${Colors.white};
  margin: 94px auto;
  height: 275px;
  width: 468px !important;
  border-radius: 4px;
  padding: 10px 13px;
  box-shadow: 0px 2px 4px rgba(189, 189, 189, 0.25);

  .ant-skeleton-content .ant-skeleton-title {
    height: 16px;
    margin-top: 0px;
    border-radius: 4px;
  }

  .ant-skeleton-paragraph {
    margin-top: 8px !important;

    li + li {
      margin-top: 8px;
    }
  }

  > .ant-row {
    width: 100%;
    .first-column {
      .first-button {
        width: 95%;
        height: 70.31px;
        margin-bottom: 5px;
        background: ${Colors.grey3};
      }

      .second-button {
        width: 95%;
        height: 180px;
        background: ${Colors.grey1};
      }
    }
  }

  .ant-typography.empty-data-text {
    text-align: center;
    width: 100%;
    padding: 40px 0px 20px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 31px;
    color: ${Colors.black08};
  }
`;

export const CompanyDataListContainer = styled(Row)`
  background-color: ${Colors.grey1};
  width: 100%;
  padding: 0 24px;
  height: calc(100vh - 170px);
  box-sizing: border-box;
  overflow-y: scroll;
  .pagination {
    margin: 24px 0 54px;
  }

  > div {
    width: 100%;
  }

  .ant-table-tbody {
    td.names-column {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;

      img {
        margin-right: 13px;
      }
    }

    td.dates-column {
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
    }
  }

  .action-column {
    text-align: end;
  }
`;

export const ActionContainer = styled(Content)`
  .action-dots {
    width: 30px;
    height: 30px;
    cursor: pointer;

    :hover {
      background: ${Colors.primary1};
      border-radius: 17px;
    }
  }
`;

export const LoadingContainer = styled(Row)`
  padding: 24px;
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
      height: 56px;
    }

    .file-column {
      display: flex;
      .ant-skeleton .ant-skeleton-input {
        height: 24px;
        width: 24px;
        border-radius: 4px;
      }
    }

    .date-column {
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
