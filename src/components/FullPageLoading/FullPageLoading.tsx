import React from 'react';
import styled from 'styled-components';

import LoadingData from '../LoadingData';
import { Colors } from '../../theme';

const FullPageLoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background: ${Colors.black02};
`;

const FullPageLoading = () => (
  <FullPageLoadingContainer>
    <LoadingData containerHeight="100%" />
  </FullPageLoadingContainer>
);

export default FullPageLoading;
