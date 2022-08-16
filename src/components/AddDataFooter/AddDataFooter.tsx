import React from 'react';
import { Layout, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { Colors } from '../../theme';

const { Footer } = Layout;

const FooterContainer = styled.div<{ showprevious: boolean }>`
  z-index: 100;
  .ant-layout-footer {
    display: flex;
    padding: 14px 30px;
    align-items: center;
    justify-content: ${(props) =>
      props.showprevious ? 'space-between' : 'flex-end'};
    background-color: ${Colors.white};
    .ant-btn-primary {
      min-width: 120px;
      height: 42px;
    }
    .ant-btn-primary {
      color: ${Colors.primary5};
      background: ${Colors.grey1};
      border-color: ${Colors.primary5};
      text-shadow: none;
      box-shadow: none;
    }
    .ant-btn-primary[disabled] {
      color: ${Colors.primary5};
      background: ${Colors.grey3};
      border-color: ${Colors.grey3};
      text-shadow: none;
      box-shadow: none;
      color: ${Colors.grey5};
    }
    .ant-btn-link {
      padding-left: 0;
    }
    .ant-btn-primary.save-btn {
      background: ${Colors.primary5};
      color: ${Colors.white};
    }
  }
`;

interface AddDataFooterProps {
  nextDisabled: boolean;
  showPrevious?: boolean;
  currentStep?: number;
  loading?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  onSave?: () => void;
}

const AddDataFooter = ({
  nextDisabled,
  showPrevious,
  loading,
  onPrevious,
  onNext,
  onSave,
  currentStep,
}: AddDataFooterProps) => {
  const { t } = useTranslation();
  return (
    <FooterContainer showprevious={showPrevious || false}>
      <Footer>
        {showPrevious && (
          <Button onClick={onPrevious} type="link">
            <ArrowLeftOutlined />
            {t('Previous')}
          </Button>
        )}
        {currentStep !== 3 && (
          <Button onClick={onNext} disabled={nextDisabled} type="primary">
            {t('Next')}
          </Button>
        )}
        {currentStep === 3 && (
          <Button
            onClick={onSave}
            type="primary"
            className="save-btn"
            loading={loading}
          >
            {t('Save')}
          </Button>
        )}
      </Footer>
    </FooterContainer>
  );
};

export default AddDataFooter;
