import React from 'react';
import styled from 'styled-components';

import { Images } from '../../theme';

interface IProps {
  containerHeight?: string | null;
}

const LoadingDataBox = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.containerHeight};
`;

const LoadingData = (props: IProps) => {
  const { containerHeight } = props;
  return (
    <LoadingDataBox containerHeight={containerHeight}>
      <img src={Images.LoadingDataImage} alt="loading" width="80" height="80" />
    </LoadingDataBox>
  );
};

export default LoadingData;
