import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';

import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { CardContainer, PreviewDataContainer } from './PreviewData.components';
import AddDataFooter from '../../../../components/AddDataFooter';
import { Company } from '../../../../constants/types';
import {
  selectDataTypes,
  saveDataAction,
  selectFileData,
  selectFileName,
  selectTagGroups,
  selectType,
  updateCurrentStep,
  selectSuccess,
  selectLoading,
} from '../AddData.slice';
import { TableContent } from '../../../AdminUsers/AdminUsers.components';
import { UserRoutes } from '../../../../navigation/Routes';
import AddDataPageHeader from '../AddDataPageHeader';

const { Content } = Layout;

/* eslint-disable no-param-reassign, complexity */
const PreviewData = () => {
  const { t } = useTranslation();
  const loading = useAppSelector(selectLoading);
  const tagGroups = useAppSelector(selectTagGroups);
  const fileData = useAppSelector(selectFileData);
  const fileName = useAppSelector(selectFileName);
  const dataType = useAppSelector(selectType);
  const dataTypes = useAppSelector(selectDataTypes);
  const success = useAppSelector(selectSuccess);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { state: company }: { state: Company } = useLocation();

  useEffect(() => {
    dispatch(updateCurrentStep(3));
  }, []);

  useEffect(() => {
    if (success) {
      history.replace(
        UserRoutes.company.companyData.replace(':id', String(company.id)),
        company,
      );
    }
  }, [success]);

  const goBack = () => {
    history.goBack();
  };

  const formatAccountsData = (tagsData: any) => {
    const accountsData = tagsData.map((tag: any) => {
      const newObj = {
        name: tag.name,
        classificationId: tag.classification.id,
        groupId: tag.group ? tag.group.id : '',
      };
      return newObj;
    });
    return accountsData;
  };

  const handleSave = async () => {
    if (company && fileData && dataType && fileName && tagGroups) {
      const accounts = await formatAccountsData(tagGroups);
      const selectedType = dataTypes.find((tp) => tp.id === dataType).type;
      const formData = new FormData();
      formData.append('company_id', String(company.id));
      formData.append('file', fileData);
      formData.append('data_type', selectedType);
      formData.append('file_name', fileName);
      formData.append('accounts', JSON.stringify(accounts));
      await dispatch(saveDataAction(formData));
    }
  };

  return (
    <PreviewDataContainer>
      <Helmet>
        <title>{`${t('Add Data')} | Bunker`}</title>
      </Helmet>
      <Layout className="add-data-layout">
        <Row justify="start">
          <Col span={24}>
            <AddDataPageHeader company={company} currentStep={3} />
          </Col>
        </Row>
        <Content>
          <Row justify="start" style={{ height: '100%', overflowY: 'auto' }}>
            <Col span={24} style={{ paddingRight: '20px', width: '100%' }}>
              <CardContainer title={t('Preview')}>
                <Row className="preview-data-row" style={{ height: '100%' }}>
                  {tagGroups?.length && (
                    <TableContent
                      className="preview-table-container"
                      style={{ width: '100%' }}
                    >
                      <Table
                        dataSource={tagGroups}
                        pagination={false}
                        rowKey={(record) =>
                          `preview-item-${record.id}-${record.classification?.id}`
                        }
                      >
                        <Table.Column
                          title={t('Classifications')}
                          key="classification"
                          className="classifiction-column"
                          render={(record) => (
                            <span>{record.classification.name}</span>
                          )}
                        />
                        <Table.Column
                          title={t('Accounts')}
                          key="Account"
                          className="accounts-column"
                          render={(record) => <span>{record.name}</span>}
                        />
                        <Table.Column
                          title={t('groups')}
                          key="groups"
                          className="groups-column"
                          render={(record) => (
                            <span>
                              {record.group ? record.group.name : '-'}
                            </span>
                          )}
                        />
                      </Table>
                    </TableContent>
                  )}
                </Row>
              </CardContainer>
            </Col>
          </Row>
        </Content>
        <AddDataFooter
          showPrevious
          nextDisabled
          currentStep={3}
          loading={loading}
          onPrevious={goBack}
          onSave={handleSave}
        />
      </Layout>
    </PreviewDataContainer>
  );
};

export default PreviewData;
