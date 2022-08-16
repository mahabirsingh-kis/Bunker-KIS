import styled from 'styled-components';
import { Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { Colors } from '../../theme';

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
    }

    .name-column {
      display: flex;
      flex-direction: column;
      .title {
        height: 24px;
        width: 260px;
        .ant-skeleton-input {
          border-radius: 4px;
          height: 24px;
        }
        margin-bottom: 6px;
      }
      .description {
        height: 12px;
        width: 260px;
        .ant-skeleton-input {
          border-radius: 4px;
          height: 12px;
        }
      }
    }

    .date-column {
      .ant-skeleton {
        height: 36px;
        width: 260px;
        .ant-skeleton-input {
          border-radius: 4px;
        }
      }
    }

    .action-column {
      justify-content: end;
      display: flex;
      .ant-skeleton {
        height: 36px;
        width: 36px;
        .ant-skeleton-input {
          border-radius: 4px;
        }
      }
    }
  }
`;

export const NoDataContainer = styled(Row)`
  height: fit-content;
  .skeleton-section {
    background: ${Colors.white};
    margin: 94px auto 50px auto;
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
      height: fit-content;
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
  }

  .ant-typography.empty-data-text {
    text-align: center;
    width: 100%;
    padding: 15px !important;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 31px;
    color: ${Colors.black08};
  }

  .empty-bottom-button {
    width: 100%;
  }
`;

export const CompanyViewsContainer = styled(Row)`
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
      width: 45%;
      div {
        display: flex;
        flex-direction: column;
        .view-name {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
        }

        .view-description {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          color: ${Colors.black06};
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 270px;
        }
      }
    }

    td.dates-column {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
    }
  }

  .action-column {
    text-align: end;
  }

  .ant-table-row.ant-table-row-level-0:hover {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0px 1px 15px 3px rgba(36, 36, 36, 0.12);
    cursor: pointer;
  }
`;

export const ActionContainer = styled(Content)`
  .action-dots {
    width: 30px;
    height: 30px;
    cursor: pointer;
    padding 5px;
     img {
      width: 15px;
      height: 15px;
    }

    :hover {
      background: ${Colors.primary1};
      border-radius: 17px;
    }
  }
`;
