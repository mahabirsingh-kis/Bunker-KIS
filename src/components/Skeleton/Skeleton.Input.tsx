import React from 'react';
import { Skeleton } from 'antd';

type SkeletonInputProps = {
  active?: boolean;
  size?: 'large' | 'small' | 'default';
  className?: string;
};

const SkeletonInput = ({ active, size, className }: SkeletonInputProps) => (
  <Skeleton.Input active={active} size={size} className={className} />
);

export default SkeletonInput;
