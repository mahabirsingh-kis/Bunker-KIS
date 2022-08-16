import styled from 'styled-components';
import { Table, PageHeader } from 'antd';

import { Colors, Images } from '../../theme';

export const ViewDetailContainer = styled.div`
  .edit-view-button {
    background: ${Colors.grey1};
    border: 1px solid ${Colors.primary5};
    color: ${Colors.primary5};
    height: 28px;
    width: 88px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    padding: 6px 10px;
  }

  .view-details-page-header {
    height: 177px;
  }
`;

export const ViewPageHeader = styled(PageHeader)`
  .ant-page-header-heading-title {
    white-space: unset;
  }
`;

export const HeaderTitleContainer = styled.div`
  .title-container {
    display: flex;
    align-items: center;
    h3 {
      margin-bottom: 0;
      font-weight: 600;
      color: ${Colors.textColor};
    }
    > span {
      margin-left: 7px;
    }
  }
  > span {
    display: block;
    margin-top: 6px;
    font-size: 12px;
    color: ${Colors.black06};
    font-weight: 400;
  }
`;

export const YearHeader = styled.div`
  text-align: center;
  background-color: ${Colors.grey2};
  padding: 12px;
  color: ${Colors.primary9};
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const MonthHeader = styled.div<{ isEven?: boolean }>`
  text-align: right;
  padding: 12px;
  font-size: 12px;
  line-height: inherit;
  font-weight: 600;
  color: ${Colors.primary9};
  background-color: ${(props) =>
    props.isEven ? Colors.primary10 : Colors.primary11};
  .type {
    text-transform: capitalize;
  }
`;

export const SnapshotMonthHeader = styled.div`
  font-size: 12px;
  line-height: inherit;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.primary9};
  background-color: ${Colors.primary11};
  display: flex;
  justify-content: center;
  .snapshot-month-container {
    width: 100%px;
    height: 48px;
    text-align: right;
  }
  .type {
    text-transform: capitalize;
  }
`;

export const CurrencyCell = styled.div<{
  isBold: boolean;
  isNormal: boolean;
}>`
  text-align: center;
  padding: ${(props) => (props.isNormal ? '8px 12px' : '4px 12px 4px 32px')};
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${Colors.primary9};
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    text-transform: none;
    .currency {
      color: ${Colors.black04};
    }
    .value {
      font-weight: ${(props) => (props.isBold ? 600 : 400)};
      color: ${Colors.textColor};
      padding-left: 20px;
    }
  }
`;

export const NumberCell = styled.div<{ isBold: boolean }>`
  text-align: end;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 24px;
  font-weight: ${(props) => (props.isBold ? 600 : 400)};
  color: ${Colors.textColor};
`;

export const PercentCell = styled.div`
  text-align: end;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${Colors.black04};
  font-style: italic;
`;

export const EmptyCell = styled.div``;

export const ViewTable = styled(Table)<{ isTimeline: boolean }>`
  th.ant-table-cell {
    padding: 0;
    width: 181px !important;
    height: 40px;
}
  }
  td.ant-table-cell {
    padding: 0;
    width: 181px !important;
    height: 40px;
}
  }
  .ant-table-cell {
    min-width: 50px;
    width: 181px !important;
    height: 40px;
}
  }
  .ant-table-body {
    height: ${(props) =>
      props.isTimeline
        ? 'calc(100vh - 72px - 118.3px - 98px)'
        : 'calc(100vh - 72px - 118.3px - 72px)'};
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
    white-space: nowrap;
  }
  .ant-table-thead > tr > th {
    border-bottom: none;
    white-space: nowrap;
  }
  .ant-table-thead > tr:first-child > th:first-child {
    // border-right: none !important;
  }
  .ant-table.ant-table-bordered
    > .ant-table-container
    > .ant-table-content
    > table
    > thead
    > tr
    > th {
    border-right: 1px solid ${Colors.grey4};
    border-bottom: none;
  }
  .ant-table.ant-table-bordered
    > .ant-table-container
    > .ant-table-content
    > table
    > tbody
    > tr
    > td {
    border-right: 1px solid ${Colors.grey2};
  }
  .hasTree {
    td:first-child {
      cursor: pointer;
    }
  }
  .boldRow {
    td {
      border-top: 1px solid ${Colors.grey6};
    }
  }
  td {
    background-color: ${Colors.grey1};
  }
  td.ant-table-cell-row-hover {
    background-color: ${Colors.grey1} !important;
  }
  .group {
    td span {
      color: ${Colors.primary4} !important;
    }
  }
  .evenBackground {
    td {
      background-color: ${Colors.white};
    }
    td.ant-table-cell-row-hover {
      background-color: ${Colors.white} !important;
    }
  }
  th.normaColumn {
    background-color: ${Colors.primary10};
  }
  td.normaColumn {
    min-width: 181px !important;
    width: 181px;
  }
  .emptyColum {
    min-width: 181px;
    width: 181px;
  }
  .monthColumn {
    min-width: 181px;
    width: 181px;
    > div {
      width: 100%;
      display block;
    }
  }
  // .monthColumn.first-header {
  //   .snapshot-month-container { 
  //     padding-top: 4px;
  //     padding-right: 4px;
  //   }
  // }
  .monthColumn { 
    .snapshot-month-container {
      padding: 4px 12px;
    }
  }
  td.emptyColum {
    border-top: none !important;
  }
  th.emptyColum {
    border-right: 1px solid ${Colors.grey2} !important;
  }
  .treeColum {
    padding: 0 26px !important;
    width: 247px !important;
  }
  .numberColum {
    text-align: center;
    .anticon-caret-right,
    .anticon-caret-down {
      display: none;
    }
    .ant-table-row-indent {
      display: none;
    }
    min-width: 40px !important;
  }
  .table-header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: no-repeat url(${Images.TableHeaderImage});
    background-size: cover;
  }
  .edit-top-line {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.grey2};
    border-right: 0.5px solid ${Colors.grey4} !important
    > span {
      font-weight: 600;
      color: ${Colors.grey6};
    }
  }
  td.ant-table-selection-column {
    border-top: 0.5px solid ${Colors.grey4} !important;
    border-left: 0.5px solid ${Colors.grey4} !important;
    border-right: 0.5px solid ${Colors.grey4} !important;
    background: ${Colors.white};
    min-width: 40px !important;
    > span {
      font-weight: 600;
      color: ${Colors.grey6} !important;
    }
  }
`;
