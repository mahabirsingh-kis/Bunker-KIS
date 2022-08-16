import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory, Prompt } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Breadcrumb, Modal } from 'antd';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  selectLoading,
  selectError,
  selectViewDetail,
  getCompanyViewDetailAction,
  GetCompanyViewDetailPayload,
  selectViewData,
  selectPreviewing,
  selectEditing,
  selectEditSuccess,
  updateViewAction,
  previewViewAction,
  clearEditViewDetailData,
} from './EditViewDetails.slice';
import { ViewPageHeader } from '../CompanyViewDetail.components';
import LoadingData from '../../../components/LoadingData';
import FullPageLoading from '../../../components/FullPageLoading';
import { UserRoutes } from '../../../navigation/Routes';
import MessageAlert from '../../../components/MessageAlert';
import { EditViewContainer } from './EditViewDetails.components';
import { ViewDataTypeOptions } from '../../../constants/General';
import EditTableView from './EditTableView';
import EditViewInfoSection from './EditViewInfoSection';
import FormatManagerToolbar from './FormatManagerToolbar';
import useBeforeunload from '../../../hooks/useBeforeunload';

const timelineType = 'P&L Timeline';

/* eslint-disable max-lines-per-function */
const CompanyViewDetail = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const detail = useAppSelector(selectViewDetail);
  const viewData = useAppSelector(selectViewData);
  const previwing = useAppSelector(selectPreviewing);
  const editing = useAppSelector(selectEditing);
  const editSuccess = useAppSelector(selectEditSuccess);
  const dispatch = useAppDispatch();
  const { id }: { id: string } = useParams();
  const [isTimelineView, setIsTimelineView] = useState(false);
  const [isHandlingData, setIsHandlingData] = useState(true);
  const [viewUpdates, setViewUpdates] = useState<{
    data_type: string | undefined;
  }>({
    data_type: ViewDataTypeOptions.actual,
  });
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const breadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item>
        {detail && detail.company && detail.company.name}
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link
          to={{
            pathname: UserRoutes.company.companyViews.replace(
              ':id',
              `${detail && detail.company.id}`,
            ),
            state: detail && detail.company,
          }}
          replace
        >
          {t('Views')}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {!loading && detail && detail.name} ({t('Edit Mode')})
      </Breadcrumb.Item>
    </Breadcrumb>
  );

  const fetchData = async () => {
    const payload: GetCompanyViewDetailPayload = { id };
    dispatch(getCompanyViewDetailAction(payload));
  };

  useBeforeunload((event: any) => {
    if (hasChanged) {
      event.preventDefault();
      event.returnValue = '';
    }
  });

  useEffect(() => {
    dispatch(clearEditViewDetailData());
    fetchData();
    return () => {
      dispatch(clearEditViewDetailData());
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = previwing ? 'hidden' : 'unset';
  }, [previwing]);

  useEffect(() => {
    if (detail && !viewUpdates.data_type) {
      const newViewUpdate = {
        ...viewUpdates,
        data_type: detail.data_type,
        time_frame_start: detail.timeframe_start,
        time_frame_end: detail.timeframe_end,
      };
      setViewUpdates(newViewUpdate);
    }
  }, [detail]);

  useEffect(() => {
    if (editSuccess) {
      history.replace(UserRoutes.companyView.viewDetail.replace(':id', id));
    }
  }, [editSuccess]);

  useEffect(() => {
    if (error) {
      setIsHandlingData(false);
      MessageAlert.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    setIsTimelineView(!!detail && detail.view === timelineType);
    if (detail) {
      setIsHandlingData(false);
    }
  }, [detail]);

  const saveData = (values: any) => {
    dispatch(updateViewAction(values));
  };

  const changeTime = (values: any) => {
    const data = {
      ...viewUpdates,
      ...values,
      id: `${id}`,
    };
    dispatch(previewViewAction(data));
    setViewUpdates((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const changeFormValues = (changed: boolean) => {
    setHasChanged(changed);
  };

  const changeView = (key: string, value: any) => {
    const data = {
      ...viewUpdates,
      id: `${id}`,
    } as any;
    data[`${key}`] = value;
    dispatch(previewViewAction(data));
    setViewUpdates((prev) => ({
      ...prev,
      [key]: value,
    }));
    setHasChanged(true);
  };

  // MOCK
  const currentDefaultColor = '#000000';
  const currentColor = '#000000';

  return (
    <EditViewContainer>
      <Helmet>
        <title>{`${t('View Detail')} | Bunker`}</title>
      </Helmet>
      <ViewPageHeader breadcrumb={breadcrumb()} />
      {previwing ? <FullPageLoading /> : null}
      {loading || isHandlingData ? (
        <LoadingData containerHeight="calc(100vh - 72px - 118.3px)" />
      ) : (
        <>
          <EditViewInfoSection
            detail={detail}
            viweDataType={viewUpdates.data_type || ViewDataTypeOptions.actual}
            istimeline={isTimelineView}
            changeTimeAction={changeTime}
            saveAction={saveData}
            previwing={previwing}
            editing={editing}
            changeFormValues={changeFormValues}
          />
          <FormatManagerToolbar
            isTimelineView={isTimelineView}
            currrentDataType={
              viewUpdates.data_type || ViewDataTypeOptions.actual
            }
            changeView={changeView}
            textColor={{
              defaultColor: currentDefaultColor,
              color: currentColor,
              changeColor: (value) => {
                setHasChanged(true);
                // TODO: change and save color action
                console.log(value);
              },
            }}
          />
          <EditTableView
            tableData={viewData}
            isTimelineView={isTimelineView}
          ></EditTableView>
        </>
      )}
      <Prompt
        message={(location, action) => {
          if (!hasChanged) {
            return true;
          }
          if (
            showLeaveConfirm ||
            (location.pathname ===
              UserRoutes.companyView.viewDetail.replace(':id', id) &&
              action.toLowerCase() !== 'pop')
          ) {
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
              history.replace(location.pathname, location.state);
            },
            onCancel: () => {
              setShowLeaveConfirm(false);
            },
          });
          return false;
        }}
      />
    </EditViewContainer>
  );
};

export default CompanyViewDetail;
