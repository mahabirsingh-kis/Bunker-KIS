import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import { Colors, Images } from '../../theme';
import { TagCategory } from '../../constants/types';

const CategoriesTreeContainer = styled(Tree)`
  overflow-y: auto;
  .ant-tree-title {
    font-weight: 600;
    font-size: 16px;
    color: ${Colors.black08};
  }
  .ant-tree-treenode {
    display: flex;
    align-items: flex-start;
    padding: 0 0 12px 0;
    outline: none;
  }
  .ant-tree-node-content-wrapper {
    cursor: default;
  }
  .ant-tree-switcher {
    height: 26px;
    margin-top: 2px;
  }
  .ant-tree-switcher-noop {
    display: none;
  }
  .title-container {
    display: flex;
    align-items: center;
    span {
      line-height: 26px;
    }
    .item-text {
      font-weight: 400;
    }
    img {
      display: none;
      margin-left: 6px;
      cursor: pointer;
    }
    :hover {
      img {
        display: inline-block;
      }
    }
  }
`;

export function getAllKeys(array: TagCategory[]) {
  const getChildren = (result: string[], object: TagCategory) => {
    result.push(object.name);
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getChildren, []);
      result = [...result, ...children];
    }
    return result;
  };

  return array.reduce(getChildren, []);
}

interface CategoriesTreeProps {
  categories: any;
  expandedKeys?: string[];
  fieldNames?: { key: string; title: string };
  defaultExpandAll?: boolean;
  onDelete?: (value: string, group?: TagCategory) => void;
}

const CategoriesTree = ({
  categories,
  onDelete,
  fieldNames = { key: 'name', title: 'name' },
  expandedKeys,
  defaultExpandAll = false,
}: CategoriesTreeProps) => {
  const [keys, setKeys] = useState<string[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  useEffect(() => {
    if (defaultExpandAll) {
      const allKeys = getAllKeys(categories);
      setKeys(allKeys);
    }
  }, [categories]);
  useEffect(() => {
    if (expandedKeys) {
      setAutoExpandParent(true);
      setKeys(expandedKeys);
    }
  }, [expandedKeys]);

  const onExpand = (newExpansKeys: any[]) => {
    setKeys(newExpansKeys);
    setAutoExpandParent(false);
  };
  return (
    <CategoriesTreeContainer
      treeData={categories}
      fieldNames={fieldNames}
      switcherIcon={<ReactSVG src={Images.SwitchTree} />}
      selectable={false}
      autoExpandParent={autoExpandParent}
      expandedKeys={keys}
      onExpand={onExpand}
      titleRender={(data: any) => (
        <div className="title-container">
          <span className={data.isAccount ? 'item-text' : undefined}>
            {data.name}
          </span>
          {onDelete ? (
            <img
              src={Images.Delete}
              alt=""
              onClick={() => onDelete(data.name, data.group)}
              aria-hidden="true"
            />
          ) : null}
        </div>
      )}
    />
  );
};

export default CategoriesTree;
