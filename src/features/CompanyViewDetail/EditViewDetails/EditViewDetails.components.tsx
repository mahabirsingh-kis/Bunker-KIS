import styled from 'styled-components';
import { PageHeader, Row, Popover } from 'antd';

import { Colors } from '../../../theme';

export const EditViewContainer = styled.div`
  .edit-table {
    display: none;
    table {
      border-top: unset !important;
    }
    .edit-fist-row-cell {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 0.5px solid ${Colors.grey4};
      background: white;
      border-left: 0.5px solid ${Colors.grey4};
      border-right: 0.5px solid ${Colors.grey4};
      font-weight: 600;
      color: #718096 !important;
    }
    .snapshot {
      height: 72px;
    }
    .timeline {
      height: 48px;
    }
    .ant-table-header {
      .ant-table-thead {
        tr:first-child {
          th:first-child {
            border-right: unset !important;
          }
          th:not(:first-child) {
            border-top: 1px solid ${Colors.grey4} !important;
            border-bottom: 1px solid ${Colors.grey4} !important;
            border-right: 1px solid ${Colors.grey4} !important;
          }
          th:nth-child(2) {
            border-left: 1px solid ${Colors.grey4} !important;
          }
        }
      }
    }
  }

  .ant-page-header {
    padding: 15px 24px 0px;
  }
`;

export const ViewPageHeader = styled(PageHeader)`
  .ant-page-header-heading-title {
    white-space: unset;
  }
`;

export const ViewInfoSectionContainer = styled(PageHeader)`
  padding-top: 0px !important;
  box-shadow: inset 0px -1px 0px #e2e8f0;

  .ant-page-header-content {
    padding-top: 0px !important;
  }
  .create-view-form {
    width: 100%;
  }
  
  .view-name-input-col {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    
    .ant-input {
      width: 180px;
      height: 32px;
      ont-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
    }
  }
  

  
  .view-desc-input-col {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    textarea {
      color: ${Colors.black06}; !important
    }
    .ant-form-item {
      margin-bottom: 0px;
    }
    label {
      width: 100%;
      .desc-label-set {
        display: flex;
        justify-content: space-between;
        width: 100%;
        
        .desc-label-option {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          text-transform: capitalize;
        }
      }
    }

    .textarea-error {
      border-color: ${Colors.danger5} !important;
    }
    
    .ant-input-textarea:after {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      padding: 5px 8px;
      margin-bottom: 5px;
      position: absolute;
      right: 0;
      bottom: 0;
      color: ${Colors.black04};
      display: none;
    }

    .text-count-section {
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: ${Colors.black04};
      padding: 5px 5px 0px 0px;
      margin-bottom: 5px;
      position: absolute;
      top: 65px;
      
      .description-length-counter {
        float: right;
        .text-over {
          color: ${Colors.danger5};
        }
        .text-current-length,
        .text-max-length {
          color: ${Colors.black04};
        }
      }
    }
    .desc-error-msg {
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      padding: 5px 5px 0px 0px;
      margin-bottom: 5px;

      .max-length-error {
        color: ${Colors.danger5} !important;
      }
      
      .description-length-counter {
        float: right;
        .text-over {
          color: ${Colors.danger5};
        }
        .text-current-length,
        .text-max-length {
          color: ${Colors.black04};
        }
      }
    }
  }

  .view-timeframe-input-col {
    display: flex;
    align-items: center;

    .separater-dash {
      color: ${Colors.black06};
      margin: -6px 4px 4px 4px;
    }
    
    .ant-form-item {
      height: 44px;
      display: flex;
      align-items: center;
    }

    .ant-form-item-label {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: ${Colors.black06};
    }
    
    .ant-form-item-control {
      height: 22px;

      .ant-form-item-control-input {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 22px;
      }

      .ant-form-item-control-input-content {
        width: 109px;
        .ant-picker {
          width: 109px;
          height: 22px;
        }
      }

      .ant-picker-input > input:placeholder-shown {
        text-overflow: ellipsis;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
      }
    }

    .all-time-check {
      margin-left: 10px;
      .ant-checkbox-wrapper {
        color: ${Colors.black08};
      }
      .ant-form-item-control-input-content {
        width: unset;
      }
    }
    .ant-picker-disabled {
      background: ${Colors.white} !important;
    }
  }
  
  .action-container {

    justify-content: end;
    display: flex;

    .ant-btn-primary {
      padding: 6px 10px;
      width: 72px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 28px;
      }
    }
  }
  `;

export const FormatManagerToolbarContainer = styled(Row)`
  width: 100%;
  height: 42px;
  background: ${Colors.white};
  padding: 2px 32px 0;
  display: flex;
  align-items: center;

  .items-section {
    border-right: 1px solid ${Colors.grey3};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .format-setting-icon {
    margin: 0 7px;
  }

  .view-options-menu-container {
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background: ${Colors.white};
      border: 1px solid ${Colors.grey3};
      box-sizing: border-box;
      border-radius: 4px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      width: 98px;
      height: 30px;
      text-align: left;
      padding: 0px 8px;
      :hover {
        background: ${Colors.grey1};
        border: 1px solid ${Colors.grey1};
      }
    }
    .ant-dropdown-menu-submenu-title {
      color: ${Colors.black08} !important;
    }
  }
  .ant-popover-arrow {
    display: none;
  }
  .ant-popover-inner-content {
    width: 254px;
    box-shadow: 0px 2px 4px ${Colors.adminHeaderBorderColor};
    border-radius: 4px;
  }
`;

export const EditViewTableContaner = styled(Row)`
  position: relative;
  margin-bottom: 50px;
  overflow-x: auto;

  .reactgrid {
    .reactgrid-content {
      .rg-cell {
        padding: 0;
      }
      .alpha-header-cell {
        display: flex;
        justify-content: center;
        border: 0.5px solid #cbd5e0;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: ${Colors.grey6};
      }

      .row-number-cell {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #718096;
        justify-content: center;
      }

      .timeline-header-cell {
        background: #f3f9ff !important;
        color: ${Colors.primary9} !important;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: right;
        flex-direction: row;
        justify-content: end;
        border-right: 1px solid rgb(232, 232, 232) !important;
        padding: 0px 9px;
      }

      .actual-title-cell {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: ${Colors.primary7};
        background: ${Colors.white06};
        padding: 7px 20px;
      }

      .group-title-cell {
        font-family: Inter;
        font-style: normal;
        font-size: 16px;
        line-height: 26px;
        color: ${Colors.primary7};
        background: ${Colors.white06};
        padding: 7px 20px;
      }

      .currency-title-cell {
        font-family: Inter;
        font-style: normal;
        font-size: 16px;
        line-height: 26px;
        color: ${Colors.black08};
        padding: 7px 20px 7px 20px !important;
      }
      .percentage-title-cell {
        font-family: Inter;
        font-style: normal;
        font-size: 14px;
        line-height: 26px;
        color: ${Colors.black06};
        padding: 7px 20px 7px 20px !important;
      }
      .bold-title {
        font-weight: 600;
      }
      .italic-title {
        font-style: italic;
      }

      .currency-cell-wrapper {
        width: 100%;
        display: flex;
        height: 40px;
        align-items: center;
        padding: 7px 10px 7px 20px;
        justify-content: space-between;

        span.currency-type {
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
          display: flex;
          align-items: center;
          text-align: right;
          color: ${Colors.black04};
        }
        span.currency-value {
          font-family: Inter;
          font-style: normal;
          font-size: 14px;
          line-height: 22px;
          display: flex;
          align-items: center;
          text-align: right;
          color: ${Colors.black};
        }

        &.bold-value {
          span.currency-value {
            font-weight: 600;
          }
        }
      }

      .percentage-type-cell {
        font-family: Inter;
        font-style: italic;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        text-align: right;
        color: rgba(26, 32, 44, 0.6);
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 7px 15px;
      }
    }
  }

  .rg-currency-cell > div:not(.divider-row-border) {
    border: 1px solid rgb(232, 232, 232) !important;
  }

  // snapShot header css
  .snapshot-header-cell-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: end;
    flex-direction: column;
    justify-content: flex-end;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${Colors.primary9};
    padding: 5px 5px;
  }

  .null-value-cell {
    display: flex;
    justify-content: center;
    border: 1px solid rgb(232, 232, 232) !important;
  }

  .divider-row-border {
    border-top: 1px solid ${Colors.grey6} !important;
  }
  .rg-currency-cell:contains-selector (div.divider-row-border) {
    border-top: 1px solid ${Colors.grey6} !important;
  }

  .expansion-padding-left {
    .chevron {
      margin-left: 15px;
    }
    .no-child {
      margin-left: 15px;
    }
  }
`;

export const ColorItem = styled.div<{ isSelected: boolean }>`
  width: 30px;
  height: 30px;
  padding: 6px 6px 2px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? Colors.selectBackground : '')};
  border-radius: 4px;
  > img {
    width: 12px;
    height: 14px;
  }
  .text-color-square {
    height: 3px;
    width: 100%;
    background: ${Colors.black06};
    margin-top: 3px;
  }
`;

export const ColorsPickPopover = styled(Popover)``;

export const PickPopup = styled.div`
  padding: 10px;
  .ant-divider-horizontal {
    margin: 8px 0 10px;
  }
  .colors-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: ${Colors.black};
  }
  ul {
    list-style-type: none;
    margin: 6px 0 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    li {
      margin-right: 6px;
      cursor: pointer;
    }
    li:last-child {
      margin-right: 0;
    }
  }
  .reset-button {
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    color: ${Colors.black06};
  }
`;

export const ColorOption = styled.li<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${Colors.grey2};
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
