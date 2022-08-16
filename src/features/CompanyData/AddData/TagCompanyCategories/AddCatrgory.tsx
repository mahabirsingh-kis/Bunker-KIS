import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import { TreeSelect, Button, Typography, Form, Input } from 'antd';
import _ from 'lodash';

import {
  AddCatrgoryContainer,
  AddCatrgoryContent,
} from './TagCompanyCategories.components';
import { Images } from '../../../../theme';
import { Point } from './Item';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import {
  searchGroupsAction,
  selectSearchGoups,
  clearSearch,
  selectLoading,
  selectError,
  clearError,
  createGroupAction,
  CreateGroupsPayload,
} from './TagGroups.slice';
import { TagCategory } from '../../../../constants/types';
import { getAllKeys } from '../../../../components/CategoriesTree/CategoriesTree';

interface AddCategoryProps {
  companyId: number;
  point?: Point;
  submitAction?: (group: TagCategory) => void;
  cancelAction?: () => void;
}

const AddCatrgoryContentId = 'AddCatrgoryContent';
const searchTreeId = 'searchTreeId';

function filterTheGroup(groups: TagCategory[], key: string) {
  const copyGroups = _.cloneDeep(groups);
  let resultGroupId: number | undefined;
  const getChildren = (result: TagCategory[], object: TagCategory) => {
    if (object.name === key) {
      result.push(object);
      resultGroupId = object.id;
      return result;
    }
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getChildren, []);
      if (children.length) result.push({ ...object, children });
    }
    return result;
  };
  const filterGroups = copyGroups.reduce(getChildren, []);
  if (filterGroups.length > 0) {
    return { name: key, id: resultGroupId };
  }
  return { name: key };
}

const AddCategory = ({
  companyId,
  point,
  submitAction,
  cancelAction,
}: AddCategoryProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const searchGroups = useAppSelector(selectSearchGoups);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const [isAddNew, setIsAddNew] = useState(false);
  const [contentPoint, setContentPoint] = useState(point);
  const [searchExpandKeys, setSearchExpandKeys] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const onTreeExpand = (newExpansKeys: any[]) => {
    setSearchExpandKeys(newExpansKeys);
  };
  useEffect(() => {
    const keys = getAllKeys(searchGroups);
    setSearchExpandKeys(keys);
  }, [searchGroups]);

  useEffect(() => {
    if (document.getElementsByClassName('select-tree-search').length === 0) {
      const treeSelect = document.getElementsByClassName('tree-select')[0];
      if (treeSelect) {
        const search = document.createElement('span');
        search.className = 'select-tree-search ant-select-arrow';
        const searchIcon = document.createElement('img');
        searchIcon.alt = '';
        searchIcon.src = Images.Search;
        search.appendChild(searchIcon);
        const input = treeSelect.getElementsByClassName(
          'ant-select-selector',
        )[0];
        if (input) {
          treeSelect.insertBefore(search, input);
        }
      }
    }
  }, []);
  useEffect(() => {
    const container = document.getElementById(AddCatrgoryContentId);
    if (container) {
      const { clientWidth: elementWidth, clientHeight: elementHeight } =
        container;
      const { clientHeight, clientWidth } = document.body;
      if (elementHeight && point) {
        const newPoint: Point = { ...point };
        if (point.y + elementHeight > clientHeight) {
          newPoint.y -= point.y + elementHeight - clientHeight;
        }
        if (point.x + elementWidth > clientWidth) {
          newPoint.x -= point.y + elementWidth - clientWidth;
        }
        setContentPoint(newPoint);
      }
    }
  }, [point, isAddNew]);

  useEffect(() => {
    dispatch(clearSearch());
    if (isAddNew) {
      dispatch(searchGroupsAction({ companyId, name: '' }));
    }
  }, [isAddNew]);
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: t('${label} is required'),
  };
  /* eslint-enable no-template-curly-in-string */
  const onSerchCategory = _.debounce(
    (name: string) => {
      setSearchText(name);
      if (!name) {
        dispatch(clearSearch());
      } else {
        dispatch(searchGroupsAction({ companyId, name: name.toLowerCase() }));
      }
    },
    500,
    { leading: false },
  );
  const onFinish = async ({
    name,
    parent_id,
  }: {
    name: string;
    parent_id: any;
  }) => {
    if (submitAction) {
      const handleName = name.trim();
      const payload: CreateGroupsPayload = { companyId, name: handleName };
      if (parent_id !== 'None') {
        const parentId = filterTheGroup(searchGroups, parent_id).id;
        payload.parent_id = parentId;
      }
      const result = await dispatch(createGroupAction(payload));
      if (result.type === createGroupAction.fulfilled.toString()) {
        const group = filterTheGroup(
          result.payload as TagCategory[],
          handleName,
        );
        setTimeout(() => {
          submitAction({ name: handleName, id: group.id });
        }, 0);
      }
    }
  };
  const onSelect = (value: any, option: any) => {
    setSearchText('');
    if (submitAction && value) {
      submitAction(option);
    }
  };

  const getValueFromEvent = (e: any) => {
    if (e.target.value === ' ') {
      return '';
    }
    return e.target.value;
  };

  const onFieldsChange = () => {
    dispatch(clearError());
  };
  return (
    <AddCatrgoryContainer onClick={cancelAction}>
      <AddCatrgoryContent
        id={AddCatrgoryContentId}
        x={contentPoint?.x || 0}
        y={contentPoint?.y || 0}
        onClick={(e) => e.stopPropagation()}
      >
        {!isAddNew ? (
          <div
            id={searchTreeId}
            className={
              searchGroups.length === 0 && !searchText
                ? 'isNoSearchData'
                : undefined
            }
          >
            <TreeSelect
              className="tree-select"
              showSearch
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder={t('Search')}
              treeData={searchGroups}
              fieldNames={{ label: 'name' }}
              allowClear
              getPopupContainer={() =>
                document.getElementById(searchTreeId) || document.body
              }
              showArrow={false}
              treeDefaultExpandAll
              onSearch={onSerchCategory}
              onSelect={onSelect}
              treeExpandedKeys={searchExpandKeys}
              onTreeExpand={onTreeExpand}
            />
            <Button
              type="default"
              className="add-new-button"
              block
              icon={<PlusOutlined />}
              onClick={() => setIsAddNew(true)}
            >
              {t('Create New Group')}
            </Button>
          </div>
        ) : (
          <div className="create-form">
            <Typography.Title level={3}>{t('Create Group')}</Typography.Title>
            <Form
              initialValues={{ parent_id: 'None' }}
              validateMessages={validateMessages}
              autoComplete="off"
              onFinish={onFinish}
              onChange={onFieldsChange}
            >
              <Form.Item
                className={error ? 'form-item-has-error' : ''}
                labelCol={{ span: 24 }}
                label={t('Name')}
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
                help={error ? error.message : undefined}
                getValueFromEvent={getValueFromEvent}
              >
                <Input placeholder={t('Enter')} />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                label={t('parent')}
                name="parent_id"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder="Please select"
                  fieldNames={{ label: 'name' }}
                  treeData={searchGroups}
                  treeDefaultExpandAll
                />
              </Form.Item>
              <Form.Item className="category-actions">
                <Button loading={loading} type="primary" htmlType="submit">
                  {t('create & tag')}
                </Button>
                <Button type="text" onClick={cancelAction}>
                  {t('Cancel')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </AddCatrgoryContent>
    </AddCatrgoryContainer>
  );
};

export default AddCategory;
