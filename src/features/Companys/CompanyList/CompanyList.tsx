import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { format } from 'date-fns';

import { Alert, Col, Row, Skeleton, Table, Typography } from 'antd';

import { withTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';

import {
  alertDismissTime,
  DateFormat,
  listFilter,
} from '../../../constants/General';
import {
  clearSuccessMessage,
  getComapniesAction,
  selectCompanyModalVisible,
  selectData,
  selectLoading,
  selectPagination,
  selectSorting,
  selectSucesss,
  showHideAddCompanyModal,
  setCurrentCompany,
  clearCurrentCompany,
  getCurrencyListAction,
} from './CompanyList.slice';

import {
  CompanyListContainer,
  CompaniesPageHeader,
} from './CompanyList.components';
import PrimaryButton from '../../../components/PrimaryButton';
import AddCompany from '../AddCompany';
import AlertContainer from '../../../components/AlertContainer';
import { selectUserInfo } from '../../../app/User.slice';
import { UserRoutes } from '../../../navigation/Routes';
import { clearCompanyUsers } from '../../CompanyUsers/CompanyUser.slice';
import { TableContent } from '../../AdminUsers/AdminUsers.components';
import CompanyListSkeleton from './CompanyListSkeleton';

const { Title, Text } = Typography;

const CompanyList = ({ t }: { t: any }) => {
  const history = useHistory();
  const data = useAppSelector(selectData);
  const pagination = useAppSelector(selectPagination);
  const sorting = useAppSelector(selectSorting);
  const loading = useAppSelector(selectLoading);
  const showAddCompanyModal = useAppSelector(selectCompanyModalVisible);
  const success = useAppSelector(selectSucesss);
  const { isBunkerAdmin } = useAppSelector(selectUserInfo);
  const dispatch = useDispatch();
  const showSorter = true;
  const showSorterTooltip = false;
  const [paginationOptions, setPaginationOptions] = useState({
    showSizeChanger: false,
    showQuickJumper: false,
    pageSizeOptions: pagination.pageSizeOptions,
    total: pagination.total,
    current: pagination.current,
    pageSize: pagination.pageSize,
  });

  const fetchCompaniesData = () => {
    dispatch(
      getComapniesAction({
        page: pagination.current,
        count: pagination.pageSize,
        sortby: sorting.sortby,
        sort: sorting.sortOrder,
      }),
    );
    dispatch(clearCompanyUsers());
  };

  useEffect(() => {
    dispatch(clearCurrentCompany());
    fetchCompaniesData();
    dispatch(getCurrencyListAction());
    return () => {
      dispatch(clearSuccessMessage());
    };
  }, []);

  useEffect(() => {
    if (!isBunkerAdmin && data && data.length === 1) {
      const selectCompany = data[0];
      dispatch(setCurrentCompany(selectCompany));
      const path = UserRoutes.company.companyUsers.replace(
        ':id',
        selectCompany.id,
      );
      history.push(path, selectCompany);
    }
  }, [data]);

  useEffect(() => {
    const newPaginationObj = {
      ...paginationOptions,
      total: pagination.total,
      current: pagination.current,
      pageSize: pagination.pageSize,
    };
    setPaginationOptions(newPaginationObj);
  }, [pagination]);

  useEffect(() => {
    if (success) {
      fetchCompaniesData();
      setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, alertDismissTime);
    }
  }, [success]);

  const handleTableChange = (pageOptions: any, filters: any, sorter: any) => {
    let sortOrderValue = sorting.sortOrder;
    if (sorter.order) {
      sortOrderValue =
        sorter.order === 'ascend' ? listFilter.sort.asc : listFilter.sort.desc;
    } else {
      sortOrderValue = null;
    }
    dispatch(
      getComapniesAction({
        page: pageOptions.current,
        count: pageOptions.pageSize,
        sortby: sorter.columnKey && sorter.order ? sorter.columnKey : null,
        sort: sortOrderValue,
      }),
    );
  };

  const handleAddCompany = () => {
    dispatch(showHideAddCompanyModal(true));
  };

  const handleAlertClose = () => {
    dispatch(clearSuccessMessage());
  };

  const onRow = (record: any, index: number | undefined) => ({
    onClick: () => {
      if (typeof index === 'number') {
        const selectCompany = data[index];
        dispatch(setCurrentCompany(selectCompany));
        const path = UserRoutes.company.companyUsers.replace(
          ':id',
          selectCompany.id,
        );
        history.push(path, selectCompany);
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>{`${t('Companies')} | Bunker`}</title>
      </Helmet>
      {success && (
        <AlertContainer>
          <Alert
            className="submission-success-alert"
            message={t('[company_name] successfully added.', {
              company_name: success.name,
            })}
            type="success"
            showIcon
            closable
            afterClose={handleAlertClose}
          />
        </AlertContainer>
      )}
      <CompaniesPageHeader>
        <Row className="companies-header-row" justify="space-between">
          <Col className="title-container" span={12}>
            <Title>{t('Companies')}</Title>
          </Col>
          <Col className="button-container" span={12}>
            {isBunkerAdmin && (
              <PrimaryButton
                htmlType="button"
                onClick={handleAddCompany}
                className="add-user-button"
              >
                {t('Add Company')}
              </PrimaryButton>
            )}
          </Col>
        </Row>
      </CompaniesPageHeader>
      {!loading && (
        <CompanyListContainer>
          {data && data.length ? (
            <TableContent>
              <Table
                dataSource={data}
                pagination={paginationOptions}
                onChange={handleTableChange}
                onRow={onRow}
                rowKey={(record) => `company-item-${record.id}`}
              >
                <Table.Column
                  title={t('Company Name')}
                  key="name"
                  className="names-column"
                  sorter={showSorter}
                  showSorterTooltip={showSorterTooltip}
                  render={(record) => <span>{record.name}</span>}
                />
                <Table.Column
                  title={t('Date Created')}
                  key="created_at"
                  className="dates-column"
                  render={(record) => (
                    <span>
                      {format(new Date(record.createdAt), DateFormat)}
                    </span>
                  )}
                />
              </Table>
            </TableContent>
          ) : (
            <div className="no-records-container">
              <Skeleton paragraph={{ rows: 1 }} />
              <Skeleton paragraph={{ rows: 1 }} />
              <Skeleton paragraph={{ rows: 1 }} />
              <Text>{t('No Company added')}</Text>
            </div>
          )}
          <AddCompany showModal={showAddCompanyModal} />
        </CompanyListContainer>
      )}
      {loading && <CompanyListSkeleton />}
    </>
  );
};

export default withTranslation()(CompanyList);
