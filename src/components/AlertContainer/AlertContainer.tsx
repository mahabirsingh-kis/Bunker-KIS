import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';

export default styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 13%;
  width: 505px;
  z-index: 9999;
  background-color: transparent !important;
  min-height: auto !important;
  transform: translate(-50%, -50%);
  .ant-alert {
    align-items: baseline !important;
  }
  @media (max-width: 540px) {
    width: 100%;
    left: auto;
  }
  margin-bottom: -100px;
  .error-alert {
    @media (max-width: 540px) {
      width: 100%;
    }
    .ant-alert-icon {
      color: #52c41a;
      height: 35px;
      font-size: 16px;
    }
  }
`;
