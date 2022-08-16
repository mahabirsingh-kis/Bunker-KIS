import React from 'react';
import { List, Typography } from 'antd';

export enum ActionType {
  leftClick,
  rightClick,
  commandAndLeftClick,
  shiftAndLeftClick,
  controlAndLeftCkick,
}
export interface Point {
  x: number;
  y: number;
}
interface ItemProps {
  value: string;
  index: number;
  isSelect: boolean;
  action?: (type: ActionType, index: number, point: Point) => void;
}

const leftArrow = 0;
const rightArrow = 2;

/* eslint-disable no-param-reassign, complexity */
const Item = ({ value, index, isSelect, action }: ItemProps) => {
  const clickAction = (e: any) => {
    e.preventDefault();
    let type = ActionType.leftClick;
    const isCtrlKey = e.ctrlKey && !e.metaKey && !e.shiftKey;
    const isMetaKey = e.metaKey && !e.ctrlKey && !e.shiftKey;
    const isShiftKey = e.shiftKey && !e.metaKey && !e.ctrlKey;
    if (e.button === leftArrow) {
      type = ActionType.leftClick;
      if (isCtrlKey) {
        type = ActionType.controlAndLeftCkick;
      }
      if (isMetaKey) {
        type = ActionType.commandAndLeftClick;
      }
      if (isShiftKey) {
        type = ActionType.shiftAndLeftClick;
      }
    }

    if (e.button === rightArrow) {
      type = ActionType.rightClick;
    }
    if (action) {
      action(type, index, { x: e.clientX, y: e.clientY });
    }
  };
  return (
    <List.Item
      className={isSelect ? 'ant-list-item-selected ' : ''}
      onMouseUp={clickAction}
    >
      <Typography.Text>{value}</Typography.Text>
    </List.Item>
  );
};

export default Item;
