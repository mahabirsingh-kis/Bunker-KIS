import React from 'react';
import { Button, Modal } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../theme';

const ConfirmModalContainer = styled(Modal)`
  .ant-modal-content {
    border-radius: 4px;
  }
  .ant-modal-body {
    padding: 16px;
    p {
      font-size: 16px;
      color: ${Colors.black08};
    }
  }
  .ant-modal-footer {
    padding: 10px 16px 16px;
    text-align: right;
    .bottom-actions {
      text-align: right;
      button {
        text-transform: uppercase;
      }
      .ant-btn-text {
        background-color: ${Colors.grey2};
      }
    }
  }
`;

interface ConfirmModalProps {
  visible: boolean;
  closable?: boolean;
  destroyOnClose?: boolean;
  description: string;
  okText: string;
  cancelText: string;
  width?: number;
  onCancel?: () => void;
  onOk?: () => void;
}

const ConfirmModal = ({
  visible,
  description,
  okText,
  cancelText,
  closable = true,
  width = 377,
  onCancel,
  onOk,
  destroyOnClose = true,
}: ConfirmModalProps) => {
  const modalFooter = () => (
    <div className="bottom-actions">
      <Button type="primary" onClick={onOk}>
        {okText}
      </Button>
      <Button type="text" onClick={onCancel}>
        {cancelText}
      </Button>
    </div>
  );
  return (
    <ConfirmModalContainer
      visible={visible}
      centered
      width={width}
      closable={closable}
      destroyOnClose={destroyOnClose}
      footer={modalFooter()}
    >
      <p>{description}</p>
    </ConfirmModalContainer>
  );
};

export default ConfirmModal;
