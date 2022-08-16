import styled from 'styled-components';
import { Form, Row } from 'antd';
import { Colors, Images } from '../../../theme';

export const CreateViewContainer = styled(Row)`
  row-gap: 0px;
  width: 650px;
  margin: 30px auto;
`;

export const CreateViewForm = styled(Form)`
  width: 100%;
  margin-bottom: 15px;

  .create-view-form {
    height: 616px;
    background: ${Colors.white};
    margin: 24px auto;
    border-radius: 4px;
    padding: 30px;
    .ant-form-item {
      margin-bottom: 15px;
    }

    .view-name-input-col {
      .name-message-error {
        padding: 8px 0px;
        margin-top: -16px;
      }

      .name-input-error {
        border-color: ${Colors.danger5} !important;
      }
    }

    .view-desc-input-col {
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

      .textarea-error textarea {
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

    .ant-picker {
      width: 236px;
    }

    .ant-radio-wrapper {
      span {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: ${Colors.black08};
      }
    }
  }

  .ant-form-item-control-input {
    min-height: 0px;
  }
  .footer-button-container {
    position: relative;
    width: 100%;
    text-align: right;

    button {
      height: 42px;
      min-width: 115px;
      text-transform: uppercase;
    }
  }
  .view-type-Radio-group {
    .ant-radio-wrapper::after {
      display: none;
    }
    .ant-radio-wrapper {
      border: 1px solid ${Colors.grey3};
      border-radius: 4px;
      padding: 5px 10px;
      > span {
        padding: 0;
      }
      .ant-radio {
        display: none;
      }
      .view-type-content {
        display: flex;
        align-items: center;
        .view-type-icon {
          background: url(${Images.ViewTypeNormal}) no-repeat;
          width: 24px;
          height: 24px;
          margin-right: 4px;
        }
        .view-type-line {
          width: 1px;
          height: 14px;
          background: ${Colors.grey3};
          margin: 0 6px;
        }
      }
    }
    .ant-radio-wrapper-checked {
      border: 1px solid ${Colors.primary5};
      .view-type-content {
        .view-type-icon {
          background: url(${Images.ViewTypeSelected}) no-repeat;
        }
      }
    }
  }
`;
