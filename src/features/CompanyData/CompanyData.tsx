import React, { useEffect, useState } from 'react';
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Modal,
  PageHeader,
  Popover,
  Row,
  Skeleton,
  Table,
  Typography,
} from 'antd';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { switchLayoutAction, selectLayoutType } from '../../app/layout.slice';
import { selectUserInfo } from '../../app/User.slice';
import { LayoutTypes } from '../../constants/Layout';
import { Company, CompanyRole } from '../../constants/types';
import { alertDismissTime, DateFormat, Roles } from '../../constants/General';
import {
  ActionContainer,
  CompanyDataListContainer,
  NoDataContainer,
} from './CompanyData.components';
import {
  clearCompanyData,
  getCompanyDataAction,
  selectCompanyData,
  selectCompanyDataLoading,
  selectCompanyDataPagination,
} from './CompanyData.slice';
import { TableContent } from '../AdminUsers/AdminUsers.components';
import { Images } from '../../theme';
import { UserRoutes } from '../../navigation/Routes';
import { getFileIcon } from '../../utils/func';
import { S3_DOMAIN } from '../../constants/predicates';
import {
  clearSuccessMessage,
  resetTheAddData,
  selectSuccess,
} from './AddData/AddData.slice';
import AlertContainer from '../../components/AlertContainer';
import CompanyDataSkeleton from './CompanyDataSkeleton';

const { Text } = Typography;

const CompanyData = () => {
  const { t } = useTranslation();
  const layoutType = useAppSelector(selectLayoutType);
  const currentUser = useAppSelector(selectUserInfo);
  const pagination = useAppSelector(selectCompanyDataPagination);
  const loading = useAppSelector(selectCompanyDataLoading);
  const importsData = useAppSelector(selectCompanyData);
  const success = useAppSelector(selectSuccess);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { state: company }: { state: Company } = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [visiblePopverId, setVisiblePopverId] = useState<number | null>();
  const { id }: { id: string } = useParams();
  const [paginationOptions, setPaginationOptions] = useState({
    showSizeChanger: false,
    showQuickJumper: false,
    pageSizeOptions: pagination.pageSizeOptions,
    total: pagination.total,
    current: pagination.current,
    pageSize: pagination.pageSize,
  });

  const companyId = Number(id);
  const breadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item>{company.name}</Breadcrumb.Item>
      <Breadcrumb.Item>{t('Data')}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const fetchCompanyData = () => {
    dispatch(
      getCompanyDataAction({
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
    fetchCompanyData();
    return () => {
      dispatch(clearCompanyData());
    };
  }, []);

  useEffect(() => {
    if (success) {
      fetchCompanyData();
      setTimeout(() => {
        dispatch(clearSuccessMessage());
        dispatch(resetTheAddData());
      }, alertDismissTime);
    }
  }, [success]);

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

  const handleVisibleChange = (value: number) => {
    if (visiblePopverId === value) {
      setVisiblePopverId(null);
    } else {
      setVisiblePopverId(value);
    }
  };

  const handleTableChange = (pageOptions: any) => {
    dispatch(
      getCompanyDataAction({
        page: pageOptions.current,
        count: pageOptions.pageSize,
        id: companyId,
      }),
    );
  };

  const removeData = (dataId: number) => {
    // eslint-disable-next-line
    console.log(dataId);
  };
  const handleRemoveData = (recordId: number) => {
    setVisiblePopverId(null);
    Modal.confirm({
      content: t('Are you sure you want to remove this data?'),
      icon: <></>,
      centered: true,
      okText: t('Yes'),
      cancelText: t('No'),
      onOk() {
        removeData(recordId);
      },
    });
  };

  const getIconByFileType = (fileName: string) => {
    const fileType = fileName.substr(fileName.lastIndexOf('.') + 1);
    const selectedFileIcon = getFileIcon(fileType);
    return selectedFileIcon;
  };

  const addDataHandler = () => {
    dispatch(resetTheAddData());
    const path = UserRoutes.addData.stepOne;
    history.push(path, company);
  };

  const handleAlertClose = () => {
    dispatch(clearSuccessMessage());
  };

  return (
    <div>
      <Helmet>
        <title>{`${t('Company Data')} | Bunker`}</title>
      </Helmet>
      <Row justify="start">
        <Col span={24}>
          <PageHeader
            title={t('Data')}
            breadcrumb={breadcrumb()}
            extra={
              isAdmin
                ? [
                    <Button
                      className="add-user-button"
                      key="add-data"
                      type="primary"
                      onClick={addDataHandler}
                    >
                      {t('Add Data')}
                    </Button>,
                  ]
                : []
            }
          />
        </Col>
      </Row>
      {success && (
        <AlertContainer>
          <Alert
            className="submission-success-alert"
            message={t('[Filename] with groups successfully added.', {
              Filename: success.name,
            })}
            type="success"
            showIcon
            closable
            afterClose={handleAlertClose}
          />
        </AlertContainer>
      )}
      {!loading && (
        <CompanyDataListContainer>
          {importsData && importsData.length ? (
            <TableContent>
              <Table
                dataSource={importsData}
                pagination={paginationOptions}
                onChange={handleTableChange}
                rowKey={(record) => `company-data-${record.id}`}
              >
                <Table.Column
                  title={t('Uploaded Name')}
                  key="name"
                  className="names-column"
                  render={(record) => (
                    <span>
                      <img src={getIconByFileType(record.location)} alt="" />
                      {record.name}
                    </span>
                  )}
                />
                <Table.Column
                  title={t('Date Uploaded')}
                  key="uploaded_at"
                  className="dates-column"
                  render={(record) => (
                    <span>
                      {format(new Date(record.createdAt), DateFormat)}
                    </span>
                  )}
                />
                <Table.Column
                  title={t('Last Edited')}
                  key="updated_at"
                  className="dates-column"
                  render={(record) => (
                    <span>
                      {format(new Date(record.updatedAt), DateFormat)}
                    </span>
                  )}
                />
                <Table.Column
                  title={t('Actions')}
                  className="action-column"
                  render={(record) => (
                    <ActionContainer>
                      <Popover
                        content={
                          <div className="data-popover-content">
                            <Button type="default" className="action-button">
                              <a
                                href={S3_DOMAIN + record.location}
                                download
                                onClick={() => setVisiblePopverId(null)}
                              >
                                {t('Download')}
                              </a>
                            </Button>
                            <Button type="default" className="action-button">
                              {t('Edit')}
                            </Button>
                            <Button
                              danger
                              type="default"
                              onClick={() => handleRemoveData(record.id)}
                            >
                              {t('Remove')}
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
              <Row>
                <Col span={6} className="first-column">
                  <Skeleton.Button className="first-button" />
                  <Skeleton.Button className="second-button" />
                </Col>
                <Col span={18}>
                  <Skeleton paragraph={{ rows: 10 }} />
                </Col>
                {!loading && (
                  <Text className="empty-data-text">{t('No Data added')}</Text>
                )}
                {loading && (
                  <Text className="empty-data-text">{t('Loading')}</Text>
                )}
              </Row>
              {isAdmin ? (
                <Row className="empty-bottom-button" justify="center">
                  <Col>
                    <Button
                      className="add-user-button"
                      type="primary"
                      onClick={addDataHandler}
                    >
                      {t('Add data')}
                    </Button>
                  </Col>
                </Row>
              ) : null}
            </NoDataContainer>
          )}
        </CompanyDataListContainer>
      )}
      {loading && <CompanyDataSkeleton />}
    </div>
  );
};

export default CompanyData;
