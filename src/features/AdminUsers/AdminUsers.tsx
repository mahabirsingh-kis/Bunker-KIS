import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Row,
  Col,
  PageHeader,
  Button,
  Table,
  Tag,
  Drawer,
  Breadcrumb,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { switchLayoutAction, selectLayoutType } from '../../app/layout.slice';
import { LayoutTypes } from '../../constants/Layout';
import { AdminUserListContainer, TableContent } from './AdminUsers.components';
import { Colors } from '../../theme';
import AdminAddUser from './AdminAddUser';
import {
  getUsersAction,
  selectAdminUsersLoading,
  selectAdminUsersError,
  selectAdminUsersPagination,
  selectAdminUsers,
} from './AdminUsers.slice';
import ConfirmModal from '../../components/ConfirmModal';
import { User } from '../../constants/types';
import { Roles, DateFormat } from '../../constants/General';
import { getRoleTitle } from '../../utils/func';
import MessageAlert from '../../components/MessageAlert';

const getColumns = (t: any) => [
  {
    title: t('name'),
    key: 'name',
    ellipsis: true,
    className: 'name-cell-vertical',
    render: (text: string, record: User) => (
      <p className="user-name">{`${record.first_name} ${record.last_name}`}</p>
    ),
  },
  {
    title: t('company'),
    key: 'company',
    ellipsis: true,
    render: (text: string, record: User) => (
      <ul className="companys">
        {record.user_company_role?.map((item) => (
          <li key={item.company_id} className="company-name">
            {item.role === Roles.bunkerAdmin.value
              ? t('All')
              : item.company?.name}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: t('role'),
    key: 'role',
    ellipsis: true,
    render: (tag: string, record: User) => (
      <div className="role-tags">
        {record.user_company_role?.map((item) => {
          let backgroundColor = '';
          let color = '';
          switch (item.role) {
            case Roles.bunkerAdmin.value:
              backgroundColor = Colors.primary7;
              color = Colors.white;
              break;
            case Roles.admin.value:
              backgroundColor = Colors.grey7;
              color = Colors.grey1;
              break;
            default:
              backgroundColor = Colors.grey2;
              color = Colors.grey6;
              break;
          }
          return (
            <Tag color={backgroundColor} key={item.id} style={{ color }}>
              {getRoleTitle(item)}
            </Tag>
          );
        })}
      </div>
    ),
  },
  {
    title: t('Date created'),
    key: 'updatedAt',
    ellipsis: true,
    dataIndex: 'updatedAt',
    render: (date: string) => (
      <p className="created-date">{format(new Date(date), DateFormat)}</p>
    ),
  },
];

const AdminUsers = () => {
  const { t } = useTranslation();
  const layoutType = useAppSelector(selectLayoutType);
  const loading = useAppSelector(selectAdminUsersLoading);
  const error = useAppSelector(selectAdminUsersError);
  const pagination = useAppSelector(selectAdminUsersPagination);
  const users = useAppSelector(selectAdminUsers);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [destroyOnClose, setDestroyOnClose] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const breadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item>{t('Admin')}</Breadcrumb.Item>
      <Breadcrumb.Item>{t('Users')}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const addUser = () => {
    setVisible(true);
    setDestroyOnClose(false);
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
      dispatch(getUsersAction({ page: 1, count: pagination.pageSize }));
    }
  };

  const closeAction = () => {
    onClose(false, false);
  };

  const modalCancelAction = () => {
    setIsModalVisible(false);
    setVisible(true);
  };

  const modalOKAction = () => {
    setIsModalVisible(false);
    setDestroyOnClose(true);
  };

  const paginationChange = (page: number, pageSize: number | undefined) => {
    if (typeof pageSize === 'number') {
      dispatch(getUsersAction({ page, count: pageSize }));
    }
  };
  useEffect(() => {
    if (layoutType !== LayoutTypes.veritical) {
      dispatch(switchLayoutAction(LayoutTypes.veritical));
    } else {
      dispatch(getUsersAction({ page: 1, count: 10 }));
    }
  }, []);

  useEffect(() => {
    if (error) {
      MessageAlert.error(error.message);
    }
  }, [error]);
  return (
    <div>
      <Helmet>
        <title>{`${t('Admin Users')} | Bunker`}</title>
      </Helmet>
      <Row justify="start">
        <Col span={24}>
          <PageHeader
            title={t('Users')}
            breadcrumb={breadcrumb()}
            extra={[
              <Button
                className="add-user-button"
                key="add-user"
                type="primary"
                onClick={addUser}
              >
                {t('Add User')}
              </Button>,
            ]}
          />
        </Col>
      </Row>
      <AdminUserListContainer>
        <Col span={24}>
          <TableContent>
            <Table
              loading={loading}
              columns={getColumns(t)}
              dataSource={users}
              pagination={{
                current: pagination.current,
                pageSize: pagination.pageSize,
                total: pagination.total,
                onChange: paginationChange,
              }}
            />
          </TableContent>
        </Col>
      </AdminUserListContainer>
      <Drawer
        placement="right"
        width={480}
        onClose={closeAction}
        visible={visible}
        closable={false}
        destroyOnClose={destroyOnClose}
        maskClosable={false}
      >
        <AdminAddUser onClose={onClose} />
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

export default AdminUsers;
