import styled from 'styled-components';
import { Card, Form } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { Colors } from '../../../../theme';

export const AddDataContainer = styled.div`
  .ant-layout-content {
    min-height: 300px;
    padding: 30px;
    box-sizing: border-box;
    background-color: ${Colors.grey1};
  }
`;

export const CardContainer = styled(Card)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  border: none;
  .ant-card-head {
    border-bottom: none;
    .ant-card-head-title {
      font-weight: 600;
    }
  }
  .ant-card-body {
    padding-top: 0;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    .upload-form-row {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  .ant-typography.file-upload-label {
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 8px;
    color: ${Colors.black06};
  }

  .upload-message-error {
    margin-top: 10px;
    .ant-typography {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
  }

  .template-instructions-link {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    position: absolute;
    bottom: 40px;
    justify-content: center;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    a {
      padding: 0px 4px;
    }
  }
`;

export const AddUploadForm = styled(Form)`
  width: 100%;
  margin-bottom: 15px;
  .file-name-input-col {
    padding-right: 30px;
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
`;

export const FileUploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: ${Colors.grey1};
  outline: none;
  transition: border 0.24s ease-in-out;

  .ant-upload-btn {
    display: table;
    height: 100%;
  }

  .ant-upload-text {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;

    .ant-upload-text-first {
      margin-right: 5px;
    }
    .ant-upload-text-link {
      color: ${Colors.blue_248ef0};
    }
  }

  .ant-upload-hint {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .ant-typography {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: ${Colors.grey5};
    }
  }
`;

export const UploadedFileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 23px;
  background: ${Colors.white};
  outline: none;
  height: 76px;
  border: 1px solid ${Colors.grey3};
  box-sizing: border-box;
  border-radius: 4px;
  justify-content: space-between;

  .file-data-container {
    display: flex;
    align-items: center;

    img {
      margin-right: 21px;
    }

    .file-name {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
    }
  }
  .upload-status-content {
    display: flex;
    align-items: center;

    .upload-error {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      text-align: right;
      color: ${Colors.danger5};
      margin-right: 15px;
    }

    .reload-icon {
      margin-right: 15px;
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }

  .ant-progress-line {
    position: relative;
    width: 33%;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    .ant-progress-text {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      text-align: right;
      color: ${Colors.primary5};
      margin-right: 10px;
    }

    .ant-progress-bg {
      background: ${Colors.primary5};
    }
  }

  .change-file-button {
    background: ${Colors.grey2};
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 16px;
    cursor: pointer;
    .ant-typography {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      color: ${Colors.black08};
    }
  }
`;

export const activeStyle = {
  background: `rgba(209, 236, 252, 0.5)`,
  border: `1px solid ${Colors.primary5} !important`,
};

export const acceptStyle = {
  border: `1px solid ${Colors.primary5} !important`,
  background: `rgba(209, 236, 252, 0.5)`,
};

export const ClassificationsContainer = styled(Content)`
  display: flex;
  background: ${Colors.white} !important;
  padding: 0px !important;
  height: calc(100vh - 400px);
  overflow-y: scroll;

  .classification-container {
    flex: 1;
    height: 100%;
  }

  .classifications-tree-content {
    display: flex;
    flex-direction: column;
    padding: 0px;
    background: ${Colors.white};
  }
`;

export const EmptyClassificationsContainer = styled(Content)`
  display: flex;
  align-items: center;
  background: ${Colors.white} !important;

  .classification-container {
    flex: 1;
    height: 100%;
  }

  .empty-classifications-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${Colors.white};

    .no-file-text {
      overflow-wrap: break-word;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: ${Colors.grey5};
    }
  }
`;
