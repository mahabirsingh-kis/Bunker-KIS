import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col, List, Typography, Alert, Space, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { InfoCircleFilled } from '@ant-design/icons';
import _ from 'lodash';
import { useHistory } from 'react-router';
import { Prompt, useLocation } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import {
  AddDataContainer,
  CardContainer,
} from './TagCompanyCategories.components';
import AddDataFooter from '../../../../components/AddDataFooter';
import ItemView, { ActionType, Point } from './Item';
import { Colors, Images } from '../../../../theme';
import {
  selectUserInfo,
  updateWalkthroughStatusAction,
} from '../../../../app/User.slice';
import AddCategory from './AddCatrgory';
import CategoriesTree from '../../../../components/CategoriesTree';
import { getGroupsAction, selectAccountGoups } from './TagGroups.slice';
import { Company, TagCategory } from '../../../../constants/types';
import { UserRoutes } from '../../../../navigation/Routes';
import {
  selectClassificationData,
  setTagGroups,
  selectChangeAccounts,
  resetTheAddData,
} from '../AddData.slice';
import useBeforeunload from '../../../../hooks/useBeforeunload';
import AddDataPageHeader from '../AddDataPageHeader';

interface Scope {
  start: number;
  length: number;
}

const { Content } = Layout;

function initLeftAndRightData(array: TagCategory[], filters: TagCategory[]) {
  const items: TagCategory[] = [];
  const getChildren = (result: TagCategory[], object: TagCategory) => {
    if (
      filters.find((filterItem) => filterItem.name === object.name) &&
      object.isAccount
    ) {
      result.push(object);
      items.push({ ...object });
      return result;
    }
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getChildren, []);
      if (children.length) result.push({ ...object, children });
    }
    return result;
  };

  return { filterData: array.reduce(getChildren, []), items };
}

function getAllAccounts(array: TagCategory[]) {
  const getChildren = (result: TagCategory[], object: TagCategory) => {
    if (object.isAccount) {
      result.push(object);
      return result;
    }
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getChildren, []);
      result = [...result, ...children];
    }
    return result;
  };

  return array.reduce(getChildren, []);
}

function filterTheGroup(groups: TagCategory[], key: string) {
  const copyGroups = _.cloneDeep(groups);
  let parent: TagCategory | undefined;
  const getChildren = (result: TagCategory[], object: TagCategory) => {
    if (object.name === key) {
      result.push(object);
      parent = object.parent;
      return result;
    }
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getChildren, []);
      if (children.length) result.push({ ...object, children });
    }
    return result;
  };
  const data = copyGroups.reduce(getChildren, []);
  let newAccounts: TagCategory[] = [];
  if (data.length > 0) {
    newAccounts = getAllAccounts(data[0].children || []);
  }
  return { newAccounts, parent };
}

function matchLeftAndRightData(groups: TagCategory[], filters: TagCategory[]) {
  const copyGroups = _.cloneDeep(groups);
  const getChildren = (result: TagCategory[], object: TagCategory) => {
    if (filters.find((filterItem) => filterItem.group?.name === object.name)) {
      const newAccounts = filters.filter(
        (item) => item.group?.name === object.name,
      );
      if (!object.children) {
        object.children = newAccounts;
      }
      const groupsData = object.children.filter(
        (child: any) =>
          !child.isAccount &&
          !newAccounts.find((account) => account.name === child.name),
      );
      object.children = [...groupsData, ...newAccounts];
    }

    const filterAccount = filters.find(
      (filterItem) =>
        filterItem.name === object.name &&
        filterItem.group?.name === object.group?.name,
    );
    if (filterAccount && object.isAccount) {
      result.push(object);
      return result;
    }
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getChildren, []);
      if (children.length) result.push({ ...object, children });
    }
    return result;
  };

  return copyGroups.reduce(getChildren, []);
}

const ItemHeader = ({
  title,
  isRight = false,
}: {
  title: string;
  isRight?: boolean;
}) => (
  <div
    className="item-header"
    style={{ paddingLeft: isRight ? '30px' : '16px' }}
  >
    <Typography.Text>{title}</Typography.Text>
  </div>
);

/* eslint-disable no-param-reassign, complexity */
const TagCompanyCategories = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { state: company }: { state: Company } = useLocation();
  const dispatch = useAppDispatch();
  const classifications: TagCategory[] = useAppSelector(
    selectClassificationData,
  );
  const [selectScope, setSelectScope] = useState<Scope[]>([]);
  const [lastSelect, setLastSelect] = useState<number | undefined>(undefined);
  const [showToolTips, setShowToolTips] = useState(false);
  const user = useAppSelector(selectUserInfo);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [addCategoryPoint, setAddCategoryPoint] = useState<Point | undefined>();
  const changes: TagCategory[] = useAppSelector(selectChangeAccounts);
  const accountGoups: TagCategory[] = useAppSelector(selectAccountGoups);
  useBeforeunload((event: any) => {
    event.preventDefault();
    event.returnValue = '';
  });
  useEffect(() => {
    if (!company) {
      history.replace(UserRoutes.companies);
      return;
    }
    if (!classifications || classifications.length === 0) {
      history.replace(UserRoutes.addData.stepOne, company);
      return;
    }
    dispatch(getGroupsAction({ companyId: company.id }));
  }, []);

  useEffect(() => {
    if (user.walkthrough) {
      setShowToolTips(false);
    } else {
      setShowToolTips(true);
    }
  }, [user]);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const accounts: TagCategory[] = getAllAccounts(classifications || []);
  const [leftAccounts, setLeftAccounts] = useState<TagCategory[]>([]);
  const [rightGroups, setRightGroups] = useState<TagCategory[]>([]);
  const [changeAccounts, setChangeAcounts] = useState<TagCategory[]>(changes);
  useEffect(() => {
    if (changes.length === 0) {
      const { filterData, items: filterItems } = initLeftAndRightData(
        [...accountGoups],
        accounts,
      );
      setRightGroups(filterData);
      setChangeAcounts(filterItems);
    }
  }, [accountGoups]);

  useEffect(() => {
    const itemData = accounts.filter(
      (item) =>
        !changeAccounts.find((filterItem) => filterItem.name === item.name),
    );
    setLeftAccounts(itemData);
    const filterData = matchLeftAndRightData([...accountGoups], changeAccounts);
    setRightGroups(filterData);
  }, [changeAccounts]);

  const getIsSelected = (index: number) => {
    let isSelected = false;
    selectScope.forEach((scope) => {
      if (index < scope.start + scope.length && index >= scope.start) {
        isSelected = true;
      }
    });
    return isSelected;
  };

  const unSelected = (index: number) => {
    const newScops: Scope[] = [];
    selectScope.forEach((scope) => {
      if (index < scope.start + scope.length && index >= scope.start) {
        if (scope.length > 1) {
          const preScope = {
            start: scope.start,
            length: index - scope.start,
          };
          const sufScope = {
            start: index + 1,
            length: scope.length - index - 1,
          };
          if (preScope.length > 0) {
            newScops.push(preScope);
          }
          if (sufScope.length > 0) {
            newScops.push(sufScope);
          }
        }
      } else {
        newScops.push(scope);
      }
    });
    return newScops;
  };

  const tagAccounts = (group: TagCategory) => {
    setShowAddCategory(false);
    const selecteAccounts = leftAccounts.filter((item, index) =>
      getIsSelected(index),
    );
    const newAccounts = selecteAccounts.map((item) => {
      const newGroup = { ...item, group: { ...group } };
      return newGroup;
    });
    setChangeAcounts([...changeAccounts, ...newAccounts]);
    setExpandedKeys([group.name]);
    setSelectScope([]);
  };

  const closeToolTips = () => {
    setShowToolTips(false);
    dispatch(updateWalkthroughStatusAction({ status: true }));
  };

  const listItemAction = (type: ActionType, index: number, point: Point) => {
    let scopes: Scope[] = [...selectScope];
    if (type === ActionType.leftClick) {
      const scope = {
        start: index,
        length: 1,
      };
      scopes = [scope];
      setLastSelect(index);
      setSelectScope(scopes);
      return;
    }
    if (type === ActionType.commandAndLeftClick) {
      if (getIsSelected(index)) {
        const newScops = unSelected(index);
        setSelectScope(newScops);
      } else {
        const scope = {
          start: index,
          length: 1,
        };
        scopes.push(scope);
        setLastSelect(index);
        setSelectScope(scopes);
      }
      return;
    }

    if (type === ActionType.shiftAndLeftClick) {
      const scope = {
        start: index,
        length: 1,
      };
      if (lastSelect !== undefined) {
        if (lastSelect > index) {
          scope.start = index;
          scope.length = lastSelect - index + 1;
        }
        if (lastSelect < index) {
          scope.start = lastSelect;
          scope.length = index - lastSelect + 1;
        }
      }
      scopes = [scope];
      setSelectScope(scopes);
      return;
    }

    if (
      (type === ActionType.rightClick ||
        type === ActionType.controlAndLeftCkick) &&
      getIsSelected(index)
    ) {
      setTimeout(() => {
        setAddCategoryPoint(point);
        setShowAddCategory(true);
      }, 0);
    }
  };

  const deleteTheAccounts = (key: string) => {
    const isItem = changeAccounts.find((item) => item.name === key);
    if (isItem) {
      const newData = changeAccounts.filter((item) => item.name !== key);
      setChangeAcounts(newData);
    } else {
      const { newAccounts, parent } = filterTheGroup(rightGroups, key);
      if (parent) {
        const newAccount: TagCategory[] = newAccounts.map((account: any) => {
          const handleAccount = { ...account };
          handleAccount.group = parent;
          return handleAccount;
        });
        const newChanges = changeAccounts.map((change) => {
          const filterAccount = newAccount.find(
            (item) => item.name === change.name,
          );
          return filterAccount || change;
        });
        setChangeAcounts(newChanges);
      } else {
        const newChange = changeAccounts.filter(
          (item) =>
            !newAccounts.find((account: any) => account.name === item.name),
        );
        setChangeAcounts(newChange);
      }
    }
  };

  const deleteAction = (key: string, group: TagCategory | undefined) => {
    let description = '';
    if (group) {
      description = t(
        'Are you sure you want to remove this item from [group]?',
        {
          group: group.name,
        },
      );
    } else {
      description = t(
        'Are you sure you want to remove the associations with [group]?',
        {
          group: key,
        },
      );
    }

    Modal.confirm({
      content: description,
      icon: <></>,
      centered: true,
      okText: t('Yes'),
      cancelText: t('No'),
      onOk: () => {
        deleteTheAccounts(key);
      },
    });
  };

  const setChanges = () => {
    const newAccounts = [...leftAccounts, ...changeAccounts];
    const finalData = accounts.map((account) => {
      const hanleAccount = { ...account };
      const findResult = newAccounts.find(
        (item) => item.name === hanleAccount.name,
      );
      if (findResult && findResult.group) {
        hanleAccount.group = findResult.group;
      }
      return {
        name: hanleAccount.name,
        group: hanleAccount.group,
        classification: hanleAccount.classification,
      };
    });
    dispatch(setTagGroups({ tagGroups: finalData, changeAccounts }));
  };

  const onNext = () => {
    setChanges();
    history.push(UserRoutes.addData.stepThree, company);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <AddDataContainer>
      <Helmet>
        <title>{`${t('Add Data')} | Bunker`}</title>
      </Helmet>
      <Layout>
        <Row justify="start">
          <Col span={24}>
            <AddDataPageHeader company={company} currentStep={2} />
          </Col>
        </Row>
        <Content>
          <CardContainer title={t('Tag Groups')}>
            <Row style={{ height: '100%' }}>
              <Col
                className="left-container"
                style={{ height: '100%' }}
                span={8}
                onContextMenu={(e) => e.preventDefault()}
              >
                <ItemHeader title={t('accounts')} />
                <List
                  dataSource={leftAccounts}
                  renderItem={(item, index) => (
                    <ItemView
                      index={index}
                      value={item.name}
                      isSelect={getIsSelected(index)}
                      action={listItemAction}
                    />
                  )}
                />
                {showToolTips ? (
                  <div className="tool-tips">
                    <div>
                      <img src={Images.ToolTips} alt="" />
                      <Alert
                        message={
                          <div>
                            {t('Select data by using')}
                            <Typography.Text strong>
                              {t(' Shift and/or Control.')}
                            </Typography.Text>
                            {t('Right click to tag to groups.')}
                          </div>
                        }
                        closable
                        onClose={closeToolTips}
                      />
                    </div>
                  </div>
                ) : null}
              </Col>
              <Col span={16} style={{ height: '100%' }}>
                <ItemHeader title={t('groups')} isRight />
                <div className="right-content">
                  {rightGroups && rightGroups.length > 0 ? (
                    <div className="right-content-groups">
                      <Space className="info-message" size={6}>
                        <InfoCircleFilled
                          style={{ color: Colors.grey4, fontSize: '14px' }}
                        />
                        <span>
                          {t(
                            'Making edits to groups will impact groups for the whole company and all views. ',
                          )}
                        </span>
                      </Space>
                      <CategoriesTree
                        categories={rightGroups}
                        expandedKeys={expandedKeys}
                        onDelete={deleteAction}
                      />
                    </div>
                  ) : (
                    <div className="empty">
                      <Typography.Text>
                        {t('Tagged groups will show here.')}
                      </Typography.Text>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </CardContainer>
        </Content>
        <AddDataFooter
          showPrevious
          nextDisabled={false}
          onPrevious={goBack}
          onNext={onNext}
        />
      </Layout>
      {showAddCategory ? (
        <AddCategory
          companyId={company.id}
          point={addCategoryPoint}
          cancelAction={() => setShowAddCategory(false)}
          submitAction={tagAccounts}
        />
      ) : null}
      <Prompt
        message={(location, action) => {
          if (showLeaveConfirm === true || action.toLowerCase() === 'pop') {
            if (action.toLowerCase() === 'pop') {
              setChanges();
            }
            return true;
          }
          if (location.pathname === UserRoutes.addData.stepThree) {
            return true;
          }
          setShowLeaveConfirm(true);
          Modal.confirm({
            content: t(
              'Are you sure you want to cancel your current progress? All updates will be lost?',
            ),
            icon: <></>,
            centered: true,
            okText: t('Yes'),
            cancelText: t('No'),
            onOk: () => {
              setShowLeaveConfirm(false);
              dispatch(resetTheAddData());
              history.replace(location.pathname, location.state);
            },
            onCancel: () => {
              setShowLeaveConfirm(false);
            },
          });
          return false;
        }}
      />
    </AddDataContainer>
  );
};

export default TagCompanyCategories;
