import React from 'react';
import { useTranslation } from 'react-i18next';
import { Space } from 'antd';

import styled from 'styled-components';
import { Colors } from '../../theme';

const StepsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  .steps-text {
    margin-right: 10px;
    font-size: 16px;
    color: ${Colors.black06};
  }
  .ant-space-item {
    display: flex;
    align-items: center;
    .step-item {
      display: inline-block;
      width: 40px;
      height: 6px;
      background-color: ${Colors.primary1};
    }
    .select-step-item {
      background-color: ${Colors.primary5};
    }
    :first-child {
      .step-item {
        border-radius: 3px 0 0 3px;
      }
    }
    :last-child {
      .step-item {
        border-radius: 0 3px 3px 0;
      }
    }
  }
`;

interface StepsProps {
  total: number;
  current: number;
}

const space = 2;

const Steps = ({ total, current }: StepsProps) => {
  const { t } = useTranslation();
  const stepsArray = new Array(total).fill('');
  return (
    <StepsContainer>
      <span className="steps-text">
        {t('[current] of [total] steps', { current, total })}
      </span>
      <Space size={space}>
        {stepsArray.map((_, index) => (
          <span
            className={
              index < current ? 'step-item select-step-item' : 'step-item'
            }
            key={index}
          />
        ))}
      </Space>
    </StepsContainer>
  );
};

export default Steps;
