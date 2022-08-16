import styled from 'styled-components';
import { Card } from 'antd';

import { Colors } from '../../../../theme';

export const AddDataContainer = styled.div`
  .ant-layout-content {
    height: calc(100vh - 234px);
    min-height: 300px;
    padding: 30px;
    box-sizing: border-box;
    background-color: ${Colors.grey1};
  }
`;

export const CardContainer = styled(Card)`
  height: 100%;
  border: none;
  .ant-card-head {
    border-bottom: none;
    .ant-card-head-title {
      font-weight: 600;
    }
  }
  .ant-card-body {
    padding-top: 0;
    padding-bottom: 0;
    height: calc(100% - 78px);
    .left-container {
      border-right: 1px solid ${Colors.grey3};
      position: relative;
      .tool-tips {
        background: rgba(209, 236, 252, 0.2);
        border: 2px dashed ${Colors.primary2};
        border-radius: 4px;
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        bottom: 0;
        > div {
          position: absolute;
          bottom: 30px;
          left: 50%;
          .ant-alert {
            min-width: 340px;
            margin-top: 10px;
            background: ${Colors.white};
            border: 1px solid ${Colors.grey3};
            box-sizing: border-box;
            border-radius: 4px;
            padding: 8px 12px;
            z-index: 1;
            align-items: start;
            .ant-alert-message {
              line-height: 18px;
              color: ${Colors.grey5};
              font-weight: 600;
              .ant-typography strong {
                color: ${Colors.black08};
              }
            }
            button {
              margin-top: 3px;
            }
          }
        }
      }
    }
  }
  .ant-list {
    height: 100%;
    .ant-list-item {
      margin-top: 2px;
      padding: 8px 16px 10px;
      border-bottom: 1px solid ${Colors.grey3};
      box-sizing: border-box;
      cursor: pointer;
      .ant-typography {
        color: ${Colors.black08};
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        user-select: none;
      }
    }
    .ant-list-item-selected {
      background-color: ${Colors.primary1};
    }
  }
  .ant-list-header {
    padding: 8px 0;
  }
  .ant-spin-nested-loading {
    height: calc(100% - 40px);
    overflow-y: scroll;
  }
  .item-header {
    padding: 8px 16px;
    background-color: ${Colors.grey1};
    .ant-typography {
      text-transform: uppercase;
      color: ${Colors.black06};
      font-weight: 600;
    }
  }
  .right-content {
    height: 100%;
    padding: 14px 32px;
    box-sizing: border-box;
    .right-content-groups {
      height: 100%;
      box-sizing: border-box;
      .ant-tree {
        box-sizing: border-box;
        height: calc(100% - 80px);
        overflow: scroll;
      }
    }
    .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .ant-typography {
        color: ${Colors.black04};
        font-size: 16px;
      }
    }
    .info-message {
      margin-bottom: 22px;
      span {
        color: ${Colors.black04};
        font-size: 14px;
      }
    }
  }
`;

export const AddCatrgoryContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${Colors.clearColor};
`;

export const AddCatrgoryContent = styled(Card)<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  width: 308px;
  z-index: 999;
  padding: 12px;
  box-sizing: border-box;
  .ant-select-tree .ant-select-tree-treenode:not(.ant-select-tree .ant-select-tree-treenode-disabled).filter-node .ant-select-tree-title {
    color: ${Colors.black08}
  }
  .ant-select-tree-title {
    font-weight: 500;
    color: ${Colors.black08}
  }
  .ant-select-tree .ant-select-tree-node-content-wrapper:hover {
    background-color: ${Colors.grey1};
    .ant-select-tree-title {
      color: ${Colors.textColor}
    }
  }
  .ant-card-body {
    padding: 0;
    .ant-select {
      display: block;
    }
    .add-new-button {
      color: ${Colors.primary5};
      background: ${Colors.grey1};
      border-color: ${Colors.primary5};
      text-shadow: none;
      box-shadow: none;
      height: 42px;
      margin-top: 13px;
    }
    .create-form {
      h3 {
        color: ${Colors.black08};
        font-weight: 600;
        margin-bottom: 16px;
      }
      .ant-form-item {
        margin-bottom: 16px;
      }
      .category-actions {
        margin-bottom: 0;
        .ant-form-item-control-input-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          button {
            height: 42px;
            width: 134px;
            text-transform: uppercase;
            font-size: 12px;
          }
          .ant-btn-text {
            background-color: ${Colors.grey2};
            color: ${Colors.black08};
          }
        }
      }
    }
    .tree-select {
      .select-tree-search {
        left: 12px;
        right: unset;
        z-index: 1;
        margin-top: -9px;
        height: 18px;
        width: 18px;
      }
      .ant-select-selection-search {
        left: 44px;
      }
      .ant-select-selection-placeholder {
        padding-left: 32px;
      }
      .ant-select-selection-item {
        padding-left: 32px;
      }
    }
  }
  .isNoSearchData {
    .ant-select-dropdown {
      display: none;
    }
  }
}`;
