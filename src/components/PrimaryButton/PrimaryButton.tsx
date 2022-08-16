import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const PrimaryButtonCmp = styled(Button)``;

const PrimaryButton = (props: any) => (
  <PrimaryButtonCmp type="primary" {...props} />
);

export default PrimaryButton;
