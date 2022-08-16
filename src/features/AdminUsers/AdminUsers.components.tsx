import styled from 'styled-components';
import { Row } from 'antd';

import { Colors } from '../../theme';

export const AdminUserListContainer = styled(Row)`
  background-color: ${Colors.grey1};
  padding: 0 24px;
  height: calc(100vh - 240px);
  box-sizing: border-box;
  overflow-y: scroll;
  .pagination {
    margin: 24px 0 54px;
  }
  .companys {
    li:not(:first-child) {
      margin-top: 10px;
    }
    padding: 0;
    list-style-type: none;
    margin: 0;
  }
  .role-tags {
    display: flex;
    flex-flow: column;
    align-items: start;
    .ant-tag:not(:first-child) {
      margin-top: 10px;
    }
  }
  .name-cell-vertical {
    vertical-align: top;
    p {
      margin-bottom: 0;
    }
  }
`;

export const TableContent = styled.div`
  .ant-table table {
    border-collapse: separate !important;
    border-spacing: 0 4px;
  }
  padding: 4px 0 20px 0;
  .ant-table-thead {
    .ant-table-cell {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    tr {
      th:last-child {
        text-align: end;
      }
    }
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0;
  }
  .ant-table-tbody > tr > td {
    border-bottom: unset;
  }
  .ant-table-thead > tr > th {
    border-bottom: unset;
  }
  .ant-table-content {
    background-color: ${Colors.grey1};
  }
  .ant-table-row {
    background-color: ${Colors.white};
    color: ${Colors.black};
    td:last-child {
      p {
        text-align: end;
      }
    }
  }
  .user-name {
    font-weight: 600;
    font-size: 16px;
  }
  .company-name {
    font-weight: 400;
  }
  li.company-name,
  .user-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .created-date {
    color: ${Colors.black06};
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${Colors.white};
  }
  .ant-table-thead th.ant-table-column-has-sorters:hover {
    background-color: ${Colors.grey1};
  }
  .ant-table-column-sort {
    background-color: ${Colors.white};
  }
  .ant-table-thead th.ant-table-column-sort {
    background-color: ${Colors.grey1};
  }
  .ant-table-column-sorter-up.active {
    color: ${Colors.primary5};
  }
  .ant-table-column-sorter-up {
    color: ${Colors.primary2};
  }
  .ant-table-column-sorter-down {
    color: ${Colors.primary2};
  }
  .ant-table-column-sorter-down.active {
    color: ${Colors.primary5};
  }
  .ant-table-column-title {
    margin-right: 5px !important;
  }
`;
