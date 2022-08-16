import React from 'react';
import { PageHeader, Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Company } from '../../../constants/types';
import { UserRoutes } from '../../../navigation/Routes';
import Steps from '../../../components/Steps';

interface AddDataPageHeaderProps {
  company: Company;
  currentStep: number;
}

const breadcrumb = (t: any, company: Company) => {
  const dataPath = UserRoutes.company.companyData.replace(
    ':id',
    String(company.id),
  );
  return (
    <Breadcrumb>
      <Breadcrumb.Item>{company.name}</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={{ pathname: dataPath, state: company }} replace>
          {t('Data')}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{t('Add Data')}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

const AddDataPageHeader = ({
  company,
  currentStep,
}: AddDataPageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <PageHeader
      title={t('Add Data')}
      breadcrumb={breadcrumb(t, company)}
      extra={<Steps total={3} current={currentStep} />}
    />
  );
};

export default AddDataPageHeader;
