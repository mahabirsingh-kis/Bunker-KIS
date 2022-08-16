import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { format } from 'date-fns';
import {
  Breadcrumb,
  Button,
  Col,
  PageHeader,
  Row,
  Skeleton,
  Table,
  Typography,
  Popover,
} from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { switchLayoutAction, selectLayoutType } from '../../app/layout.slice';
import { LayoutTypes } from '../../constants/Layout';
import { Company, CompanyRole } from '../../constants/types';
import { DateFormat, Roles } from '../../constants/General';
import { selectUserInfo } from '../../app/User.slice';
import {
  ActionContainer,
  CompanyViewsContainer,
  NoDataContainer,
} from './CompanyViews.component';
import { TableContent } from '../AdminUsers/AdminUsers.components';
import {
  getComapnyViewsAction,
  selectCompanyViewsPagination,
  selectCompanyHasData,
  selectViewsData,
  selectLoading,
  clearCompanyViewsData,
} from './CompanyViews.slice';
import { Images } from '../../theme';
import { resetTheAddData } from '../CompanyData/AddData/AddData.slice';
import { UserRoutes } from '../../navigation/Routes';
import CompanyViewsSkeleton from './CompanyViewsSkeleton';
import {
  clearAllEditViewData,
  clearEditViewDetailData,
} from '../CompanyViewDetail/EditViewDetails/EditViewDetails.slice';

const { Text } = Typography;

const CompanyViews = () => {
  const { t } = useTranslation();
  const layoutType = useAppSelector(selectLayoutType);
  const currentUser = useAppSelector(selectUserInfo);
  const companyHasData = useAppSelector(selectCompanyHasData);
  const pagination = useAppSelector(selectCompanyViewsPagination);
  const viewsData = useAppSelector(selectViewsData);
  const loading = useAppSelector(selectLoading);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { state: company }: { state: Company } = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const { id }: { id: string } = useParams();
  const [paginationOptions, setPaginationOptions] = useState({
    showSizeChanger: false,
    showQuickJumper: false,
    pageSizeOptions: pagination.pageSizeOptions,
    total: pagination.total,
    current: pagination.current,
    pageSize: pagination.pageSize,
  });
  const [visiblePopverId, setVisiblePopverId] = useState<number | null>(null);

  const companyId = Number(id);
  const breadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item>{company.name}</Breadcrumb.Item>
      <Breadcrumb.Item>{t('Views')}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const fetchCompanyViews = () => {
    dispatch(
      getComapnyViewsAction({
        page: pagination.current,
        count: pagination.pageSize,
        id: companyId,
      }),
    );
  };

  useEffect(() => {
    if (layoutType !== LayoutTypes.veritical) {
      dispatch(switchLayoutAction(LayoutTypes.veritical));
    }
    dispatch(clearEditViewDetailData());
    dispatch(clearAllEditViewData());
    fetchCompanyViews();
    return () => {
      dispatch(clearCompanyViewsData());
    };
  }, []);

  const getRole = (data: CompanyRole[] | undefined) => {
    if (data) {
      return data.find((item) => item.company_id === Number(id))?.role;
    }
    return '';
  };

  useEffect(() => {
    if (currentUser) {
      const role = getRole(currentUser.user_company_role);
      setIsAdmin(role === Roles.admin.value || currentUser.isBunkerAdmin);
    }
  }, [currentUser]);

  useEffect(() => {
    const newPaginationObj = {
      ...paginationOptions,
      total: pagination.total,
      current: pagination.current,
      pageSize: pagination.pageSize,
    };
    setPaginationOptions(newPaginationObj);
  }, [pagination]);

  const handleTableChange = (pageOptions: any) => {
    dispatch(
      getComapnyViewsAction({
        page: pageOptions.current,
        count: pageOptions.pageSize,
        id: companyId,
      }),
    );
  };

  const onRow = (record: any) => ({
    onClick: () => {
      const path = UserRoutes.companyView.viewDetail.replace(':id', record.id);
      history.push(path);
    },
  });

  const createViewHandler = () => {
    const path = UserRoutes.views.createView;
    history.push(path, company);
  };

  const addDataHandler = () => {
    dispatch(resetTheAddData());
    const path = UserRoutes.addData.stepOne;
    history.push(path, company);
  };

  const handleVisibleChange = (value: number) => {
    if (visiblePopverId === value) {
      setVisiblePopverId(null);
    } else {
      setVisiblePopverId(value);
    }
  };
  const goToEditView = (viewId: any) => {
    dispatch(clearEditViewDetailData());
    const path = UserRoutes.companyView.editViewDetail.replace(
      ':id',
      String(viewId),
    );
    history.push(path);
  };

  return (
    <div>
      <Helmet>
        <title>{`${t('Company Views')} | Bunker`}</title>
      </Helmet>
      <Row justify="start">
        <Col span={24}>
          <PageHeader
            title={t('Views')}
            breadcrumb={breadcrumb()}
            extra={
              isAdmin
                ? [
                    <Button
                      className="add-user-button"
                      key="add-data"
                      type="primary"
                      disabled={!companyHasData}
                      onClick={createViewHandler}
                    >
                      {t('Create View')}
                    </Button>,
                  ]
                : []
            }
          />
        </Col>
      </Row>
      {!loading && (
        <CompanyViewsContainer>
          {viewsData && viewsData.length ? (
            <TableContent>
              <Table
                dataSource={viewsData}
                pagination={paginationOptions}
                onChange={handleTableChange}
                onRow={(record) => onRow(record)}
                rowKey={(record) => `company-views-${record.id}`}
              >
                <Table.Column
                  title={t('View Name')}
                  key="name"
                  className="names-column"
                  render={(record) => (
                    <div>
                      <span className="view-name">{record.name}</span>
                      <span className="view-description">
                        {record.description}
                      </span>
                    </div>
                  )}
                />
                <Table.Column
                  title={t('Date Created')}
                  key="uploaded_at"
                  className="dates-column"
                  render={(record) => (
                    <span>
                      {format(new Date(record.createdAt), DateFormat)}
                    </span>
                  )}
                />
                <Table.Column
                  title={t('Actions')}
                  className="action-column"
                  render={(record) => (
                    <ActionContainer onClick={(e) => e.stopPropagation()}>
                      <Popover
                        content={
                          <div className="data-popover-content">
                            <Button type="default" className="action-button">
                              {t('Share')}
                            </Button>
                            <Button
                              type="default"
                              className="action-button"
                              onClick={() => goToEditView(record.id)}
                            >
                              {t('Edit')}
                            </Button>
                          </div>
                        }
                        placement="left"
                        trigger="click"
                        visible={visiblePopverId === record.id}
                        onVisibleChange={() => handleVisibleChange(record.id)}
                      >
                        <img
                          src={Images.VerticalDotsIcon}
                          alt=""
                          className="action-dots"
                        />
                      </Popover>
                    </ActionContainer>
                  )}
                />
              </Table>
            </TableContent>
          ) : (
            <NoDataContainer>
              <div className="skeleton-section">
                <Row>
                  <Col span={6} className="first-column">
                    <Skeleton.Button className="first-button" />
                    <Skeleton.Button className="second-button" />
                  </Col>
                  <Col span={18}>
                    <Skeleton paragraph={{ rows: 10 }} />
                  </Col>
                </Row>
              </div>

              <>
                {companyHasData ? (
                  <Text className="empty-data-text">
                    {t('No View Created.')}
                  </Text>
                ) : (
                  <Text className="empty-data-text">
                    {t(
                      'No data found. Views require data to be uploaded to Bunker.',
                    )}
                  </Text>
                )}
              </>

              {isAdmin ? (
                <Row className="empty-bottom-button" justify="center">
                  {companyHasData ? (
                    <Button
                      className="add-user-button"
                      type="primary"
                      onClick={createViewHandler}
                    >
                      {t('Create View')}
                    </Button>
                  ) : (
                    <Button
                      className="add-user-button"
                      type="primary"
                      onClick={addDataHandler}
                    >
                      {t('Add data')}
                    </Button>
                  )}
                </Row>
              ) : null}
            </NoDataContainer>
          )}
        </CompanyViewsContainer>
      )}
      {loading && <CompanyViewsSkeleton />}
    </div>
  );
};

export default CompanyViews;
