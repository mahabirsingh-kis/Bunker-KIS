import styled from 'styled-components';
import { Card } from 'antd';

import { Colors } from '../../../../theme';

export const PreviewDataContainer = styled.div`
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

    .preview-data-row {
      width: 100%;
      .preview-table-container {
        width: 100%;

        .ant-table-thead > tr > th,
        .ant-table-tbody > tr > td,
        .ant-table tfoot > tr > th,
        .ant-table tfoot > tr > td {
          position: relative;
          padding: 8px;
          overflow-wrap: break-word;
        }

        .ant-table-tbody > tr > td {
          border-bottom: 1px solid ${Colors.grey3};
          color: ${Colors.black08};
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
        }

        .ant-table-cell.classifiction-column,
        .ant-table-cell.accounts-column {
          border-right: 1px solid ${Colors.grey3};
        }

        .ant-table-cell.groups-column {
          text-align: left;
        }
      }
    }
  }
`;
