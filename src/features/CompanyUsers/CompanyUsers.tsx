import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Row,
  Col,
  PageHeader,
  List,
  Avatar,
  Pagination,
  Button,
  Drawer,
  Breadcrumb,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  CompanyUserListContainer,
  ListContent,
} from './CompanyUsers.components';
import CompanyAddUser from './CompanyAddUser';
import {
  getCompanyUsersAction,
  selectCompanyUsersError,
  selectCompanyUsers,
  selectCompanyUsersPagination,
  selectCompanyUsersLoading,
} from './CompanyUser.slice';
import ConfirmModal from '../../components/ConfirmModal';
import { CompanyRole, Company } from '../../constants/types';
import { Roles, DateFormat } from '../../constants/General';
import { selectUserInfo } from '../../app/User.slice';
import { getRoleTitle } from '../../utils/func';
import EmptyUserView from '../../components/EmptyUserView';
import MessageAlert from '../../components/MessageAlert';
import CompanyUsersSkeleton from './CompanyUsersSkeleton';

/* eslint-disable max-lines-per-function */
const CompanyUsers = () => {
  const { t } = useTranslation();
  const error = useAppSelector(selectCompanyUsersError);
  const users = useAppSelector(selectCompanyUsers);
  const currentUser = useAppSelector(selectUserInfo);
  const pagination = useAppSelector(selectCompanyUsersPagination);
  const loading = useAppSelector(selectCompanyUsersLoading);
  const { state: company }: { state: Company } = useLocation();
  const dispatch = useAppDispatch();
  const { id }: { id: string } = useParams();
  const companyId = Number(id);

  const [showThePagination, setShowThePagination] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [destroyOnClose, setDestroyOnClose] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    dispatch(getCompanyUsersAction({ id: companyId, page: 1, count: 10 }));
  }, []);

  useEffect(() => {
    if (error) {
      MessageAlert.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    const value = pagination.total / pagination.pageSize;
    setShowThePagination(value > 1);
  }, [pagination]);

  const addUser = () => {
    if (isAdmin) {
      setVisible(true);
      setDestroyOnClose(false);
    }
  };

  const onClose = (
    needRefresh: boolean = false,
    haveChanged: boolean,
    success = false,
  ) => {
    setVisible(false);
    if (haveChanged) {
      setIsModalVisible(true);
    }
    if (success) {
      setDestroyOnClose(true);
    }
    if (needRefresh) {
      dispatch(getCompanyUsersAction({ id: companyId, page: 1, count: 10 }));
    }
  };

  const closeAction = () => {
    onClose(false, false);
  };

  const breadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item>{company.name}</Breadcrumb.Item>
      <Breadcrumb.Item>{t('Users')}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const paginationChange = (page: number, pageSize: number | undefined) => {
    if (typeof pageSize === 'number') {
      dispatch(getCompanyUsersAction({ id: companyId, page, count: pageSize }));
    }
  };

  const modalCancelAction = () => {
    setIsModalVisible(false);
    setVisible(true);
  };

  const modalOKAction = () => {
    setIsModalVisible(false);
    setDestroyOnClose(true);
  };

  const getRole = (data: CompanyRole[] | undefined) => {
    if (data) {
      return data.find((item) => item.company_id === Number(id))?.role;
    }
    return '';
  };

  const getRoleText = (roles: CompanyRole[] | undefined) => {
    if (roles) {
      const role = roles.find((item) => item.company_id === Number(id));
      if (role) {
        return getRoleTitle(role);
      }
    }
    return '';
  };

  useEffect(() => {
    if (currentUser) {
      const role = getRole(currentUser.user_company_role);
      setIsAdmin(role === Roles.admin.value || currentUser.isBunkerAdmin);
    }
  }, [currentUser]);

  return (
    <div>
      <Helmet>
        <title>{`${t('Company Users')} | Bunker`}</title>
      </Helmet>
      <Row justify="start">
        <Col span={24}>
          <PageHeader
            title={t('Users')}
            breadcrumb={breadcrumb()}
            extra={
              isAdmin
                ? [
                    <Button
                      className="add-user-button"
                      key="add-user"
                      type="primary"
                      onClick={addUser}
                    >
                      {t('Add user')}
                    </Button>,
                  ]
                : []
            }
          />
        </Col>
      </Row>
      {!loading && (
        <CompanyUserListContainer>
          <Col span={24}>
            {users.length > 0 ? (
              <ListContent>
                <Row className="user-list">
                  <Col span={24}>
                    <List
                      dataSource={users}
                      renderItem={(item) => (
                        <List.Item key={item.id}>
                          <List.Item.Meta
                            avatar={
                              <Avatar>
                                {item.first_name.charAt(0) +
                                  item.last_name.charAt(0)}
                              </Avatar>
                            }
                            title={`${item.first_name} ${item.last_name}`}
                            description={item.email}
                          />
                          <div className="right-content">
                            <p className="right-content-role">
                              {t(getRoleText(item.user_company_role))}
                            </p>
                            <p className="right-content-date">
                              {`${format(
                                new Date(item.updatedAt),
                                DateFormat,
                              )} ${t('Added')}`}
                            </p>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </ListContent>
            ) : null}
            {users.length === 0 && !loading ? (
              <EmptyUserView isAdmin={isAdmin} addUser={addUser} />
            ) : null}
            {showThePagination ? (
              <Row justify="end" className="pagination">
                <Col>
                  <Pagination
                    current={pagination.current}
                    pageSize={pagination.pageSize}
                    total={pagination.total}
                    onChange={paginationChange}
                  />
                </Col>
              </Row>
            ) : null}
          </Col>
        </CompanyUserListContainer>
      )}
      {loading && <CompanyUsersSkeleton />}
      <Drawer
        placement="right"
        width={480}
        onClose={closeAction}
        visible={visible}
        closable={false}
        destroyOnClose={destroyOnClose}
        maskClosable={false}
      >
        <CompanyAddUser companyId={companyId} onClose={onClose} />
      </Drawer>
      <ConfirmModal
        visible={isModalVisible}
        closable={false}
        okText={t('yes')}
        cancelText={t('No, continue editing')}
        description={t('Are you sure you want to cancel?')}
        onCancel={modalCancelAction}
        onOk={modalOKAction}
      />
    </div>
  );
};

export default CompanyUsers;
