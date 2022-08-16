import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import {
  Row,
  Col,
  PageHeader,
  Breadcrumb,
  Form,
  Input,
  Radio,
  DatePicker,
  Typography,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  MonthPickerFormat,
  TextAreaMaxLength,
  TimeframeFormat,
  timeFrameOptions,
  ViewNameMaxLength,
  viewTypeOptions,
  ViewDataTypeOptions,
} from '../../../constants/General';
import { Images } from '../../../theme';

import { Company } from '../../../constants/types';
import { CreateViewContainer, CreateViewForm } from './CreateView.component';
import PrimaryButton from '../../../components/PrimaryButton';
import {
  clearCreateViewData,
  clearError,
  createViewAction,
  getAvailableTimeFramesAction,
  selectAvailableTimeframes,
  selectCreatedViewData,
  selectError,
  selectIsNameValid,
  validateViewNameAction,
} from './CreateView.slice';
import { selectLoading } from '../../Authentication/Register/Register.slice';
import { UserRoutes } from '../../../navigation/Routes';
import { S3_DOMAIN } from '../../../constants/predicates';
import { ViewLinks } from '../../../constants/Links';
import MessageAlert from '../../../components/MessageAlert';
import { getDefautMonth } from '../../../utils/func';

const { TextArea } = Input;
const { Text } = Typography;

/* eslint-disable no-param-reassign, complexity */
const CrateView = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const history = useHistory();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const isNameValid = useAppSelector(selectIsNameValid);
  const availableTimeframes = useAppSelector(selectAvailableTimeframes);
  const createdViewData = useAppSelector(selectCreatedViewData);

  const dispatch = useAppDispatch();
  const { state: company }: { state: Company } = useLocation();
  const [viewType, setViewType] = useState(viewTypeOptions.snapshot);
  const [timeFrame, setTimeFrame] = useState(timeFrameOptions.allTime);
  const [description, setDescription] = useState('');
  const [descriptionOver, setDescriptionOver] = useState(false);
  const [showMaxlenghtError, setShowMaxlenghtError] = useState(false);
  const [initialValues, setInitialValues] = useState<any>();
  const [timelineStartMonth, setTimelineStartMonth] = useState(
    moment().subtract(13, 'month'),
  );
  const companyId = Number(company.id);
  const breadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item>{company.name}</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link
          to={{
            pathname: UserRoutes.company.companyViews.replace(
              ':id',
              `${company.id}`,
            ),
            state: company,
          }}
          replace
        >
          {t('Views')}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{t('Create View')}</Breadcrumb.Item>
    </Breadcrumb>
  );
  const timeFrameStart = 'time_frame_start';
  const timeFrameEnd = 'time_frame_end';
  const dataTypeTimeline = 'data_type';

  const fetchAvailableTimeFrames = () => {
    dispatch(getAvailableTimeFramesAction({ companyId }));
  };

  useEffect(() => {
    dispatch(clearCreateViewData());
    fetchAvailableTimeFrames();
  }, []);

  const setSnapshotTimeframe = () => {
    const lastTimeframe = availableTimeframes[availableTimeframes.length - 1];
    const values = {
      name: '',
      description: '',
      view_type: viewType,
      time_frame_start: moment(moment(lastTimeframe, TimeframeFormat).toDate()),
      time_frame_end: null,
    };
    setInitialValues(values);
    form.setFields([
      {
        name: timeFrameStart,
        value: moment(moment(lastTimeframe, TimeframeFormat).toDate()),
      },
      {
        name: timeFrameEnd,
        value: null,
      },
      {
        name: 'view_type_timeline',
        value: timeFrameOptions.allTime,
      },
    ]);
  };

  const setSnapshotTimeline = () => {
    const defaultMonth = moment().subtract(13, 'month').format(TimeframeFormat);
    const availMonth = availableTimeframes.find(
      (frame) => frame === defaultMonth,
    );
    if (availMonth) {
      setTimelineStartMonth(moment(availMonth, TimeframeFormat));
    } else {
      const startTime = getDefautMonth(availableTimeframes);
      setTimelineStartMonth(moment(startTime, TimeframeFormat));
    }
  };

  useEffect(() => {
    if (availableTimeframes.length) {
      setSnapshotTimeframe();
      setSnapshotTimeline();
    }
  }, [availableTimeframes]);

  useEffect(() => {
    if (createdViewData) {
      const path = UserRoutes.companyView.viewDetail.replace(
        ':id',
        createdViewData.id,
      );
      history.push(path, company);
      MessageAlert.success(
        t('Your view [name] has been successfully created.', {
          name: createdViewData.name,
        }),
      );
    }
  }, [createdViewData]);

  const handleDescription = async (event: any) => {
    const descValue = event.target.value;
    if (descValue.length > TextAreaMaxLength) {
      setDescriptionOver(true);
    } else {
      setDescriptionOver(false);
      setShowMaxlenghtError(false);
    }
    setDescription(event.target.value);
  };

  const handleViewName = async (event: any) => {
    dispatch(clearError());
    if (event.target.value) {
      const payload = { name: event.target.value, companyId: company.id };
      await dispatch(validateViewNameAction(payload));
    }
  };

  const handleViewTypeChange = (event: any) => {
    setViewType(event.target.value);
    const typeValue = event.target.value;
    if (typeValue === viewTypeOptions.snapshot) {
      setSnapshotTimeframe();
    }
    if (typeValue === viewTypeOptions.timeline) {
      const values = {
        ...initialValues,
        view_type: viewType,
        time_frame_start: timelineStartMonth,
        time_frame_end: null,
      };
      setInitialValues(values);
      form.setFields([
        {
          name: timeFrameStart,
          value: timelineStartMonth,
        },
        {
          name: timeFrameEnd,
          value: null,
        },
        {
          name: 'view_type_timeline',
          value: timeFrameOptions.allTime,
        },
        {
          name: dataTypeTimeline,
          value: ViewDataTypeOptions.actual,
        },
      ]);
    }

    setTimeFrame(timeFrameOptions.allTime);
  };

  const handleTimeFrameChange = (event: any) => {
    setTimeFrame(event.target.value);
  };

  const onSubmit = async (values: any) => {
    if (descriptionOver) {
      setShowMaxlenghtError(true);
    }
    if (!error && isNameValid && !descriptionOver) {
      const formPayload = {
        ...values,
        time_frame_start: `${moment(values.time_frame_start).format(
          TimeframeFormat,
        )}-01`,
        time_frame_end: values.time_frame_end
          ? `${moment(values.time_frame_end).format(TimeframeFormat)}-01`
          : null,
        view_type: viewType,
        description,
        companyId,
      };
      if (values.view_type_timeline === timeFrameOptions.allTime) {
        formPayload.time_frame_start = null;
        formPayload.time_frame_end = null;
      }
      delete formPayload.view_type_timeline;
      await dispatch(createViewAction(formPayload));
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${t('Create View')} | Bunker`}</title>
      </Helmet>
      <Row justify="start">
        <Col span={24}>
          <PageHeader
            title={t('Create View')}
            breadcrumb={breadcrumb()}
          ></PageHeader>
        </Col>
      </Row>
      <CreateViewContainer>
        <CreateViewForm
          form={form}
          onFinish={onSubmit}
          initialValues={initialValues}
        >
          <div className="create-view-form">
            <Row justify="start">
              <Col span={24} className="view-name-input-col">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={t('Name')}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: t('Name is required'),
                    },
                  ]}
                >
                  <Input
                    placeholder={t('Enter')}
                    onBlur={handleViewName}
                    maxLength={ViewNameMaxLength}
                    className={error && !isNameValid ? 'name-input-error' : ''}
                    onChange={() => dispatch(clearError())}
                  />
                </Form.Item>
                {error && !isNameValid && (
                  <Row className="name-message-error" justify="start">
                    <Col>
                      <Text type="danger">
                        {error.message ? t(error.message) : null}
                      </Text>
                    </Col>
                  </Row>
                )}
              </Col>
              <Col span={24} className="view-desc-input-col">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={
                    <div className="desc-label-set">
                      <div className="desc-label">{t('Description')}</div>
                      <div className="desc-label-option">{t('Optional')}</div>
                    </div>
                  }
                  name="description"
                >
                  <TextArea
                    placeholder={t('Enter')}
                    showCount
                    autoSize={{ minRows: 5, maxRows: 5 }}
                    onChange={handleDescription}
                    className={descriptionOver ? 'textarea-error' : ''}
                  />
                  <div className="text-count-section">
                    {descriptionOver && showMaxlenghtError && (
                      <span className="max-length-error">
                        {t('Longer than maximum length 250 words')}
                      </span>
                    )}
                    <span className="description-length-counter">
                      <span
                        className={
                          descriptionOver ? 'text-over' : 'text-current-length'
                        }
                      >
                        {description.length}
                      </span>
                      <span>/</span>
                      <span className="text-max-length">
                        {TextAreaMaxLength}
                      </span>
                    </span>
                  </div>
                </Form.Item>
              </Col>
              <Col span={24} className="view-type-radio-col">
                <Form.Item
                  labelCol={{ span: 24 }}
                  label={t('View Type')}
                  name="view_type"
                >
                  <Radio.Group
                    className="view-type-Radio-group"
                    onChange={handleViewTypeChange}
                    defaultValue={viewType}
                  >
                    <Radio value={viewTypeOptions.snapshot}>
                      <div className="view-type-content">
                        <div className="view-type-icon" />
                        {t(viewTypeOptions.snapshot)}
                        <div className="view-type-line" />
                        <Link
                          to={{
                            pathname: S3_DOMAIN + ViewLinks.plSnapshotTemplate,
                          }}
                          target="_blank"
                        >
                          <img
                            src={Images.ViewsIcon}
                            className="view-icon"
                            alt=""
                          />
                        </Link>
                      </div>
                    </Radio>
                    <Radio value={viewTypeOptions.timeline}>
                      <div className="view-type-content">
                        <div className="view-type-icon" />
                        {t(viewTypeOptions.timeline)}
                        <div className="view-type-line" />
                        <Link
                          to={{
                            pathname: S3_DOMAIN + ViewLinks.plTimelineTemplate,
                          }}
                          target="_blank"
                        >
                          <img
                            src={Images.ViewsIcon}
                            className="view-icon"
                            alt=""
                          />
                        </Link>
                      </div>
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              {viewType === viewTypeOptions.snapshot && initialValues && (
                <Col span={24} className="time-frame-col">
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label={t('Timeframe')}
                    name={timeFrameStart}
                    rules={[
                      {
                        required: true,
                        message: t('Timeframe is required'),
                      },
                    ]}
                  >
                    <DatePicker
                      picker="month"
                      format={MonthPickerFormat}
                      defaultValue={initialValues?.time_frame_start}
                      disabledDate={(current) => {
                        const existMonth = availableTimeframes.find(
                          (m) =>
                            String(moment(current).format(TimeframeFormat)) ===
                            String(m),
                        );
                        return current && !existMonth;
                      }}
                    />
                  </Form.Item>
                </Col>
              )}
              {viewType === viewTypeOptions.timeline && (
                <Col span={24} className="time-frame-col">
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label={t('Timeframe')}
                    name="view_type_timeline"
                  >
                    <Radio.Group
                      onChange={handleTimeFrameChange}
                      defaultValue={timeFrame}
                    >
                      <Radio value={timeFrameOptions.allTime}>
                        {t(timeFrameOptions.allTime)}
                      </Radio>
                      <Radio value={timeFrameOptions.specificTime}>
                        {t(timeFrameOptions.specificTime)}
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              )}
              {viewType === viewTypeOptions.timeline &&
                timeFrame === timeFrameOptions.specificTime && (
                  <>
                    <Col span={11} className="time-frame-col">
                      <Form.Item
                        labelCol={{ span: 24 }}
                        label={t('Start')}
                        name={timeFrameStart}
                        rules={[
                          {
                            required: true,
                            message: t('Start is required'),
                          },
                        ]}
                      >
                        <DatePicker
                          picker="month"
                          format={MonthPickerFormat}
                          defaultValue={moment().subtract(1, 'month')}
                          disabledDate={(current) => {
                            const existMonth = availableTimeframes.find(
                              (m) =>
                                String(
                                  moment(current).format(TimeframeFormat),
                                ) === String(m),
                            );
                            return current && !existMonth;
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={11} className="time-frame-col">
                      <Form.Item
                        labelCol={{ span: 24 }}
                        label={t('End')}
                        name={timeFrameEnd}
                      >
                        <DatePicker
                          picker="month"
                          placeholder="None"
                          format={MonthPickerFormat}
                          disabledDate={(current) => {
                            const existMonth = availableTimeframes.find(
                              (m) =>
                                String(
                                  moment(current).format(TimeframeFormat),
                                ) === String(m),
                            );
                            const startValue =
                              form.getFieldValue(timeFrameStart);
                            const checkstart = startValue
                              ? moment(current) < startValue
                              : true;
                            return current && (!existMonth || checkstart);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </>
                )}
              {viewType === viewTypeOptions.timeline && (
                <Col span={24} className="time-frame-col">
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label={t('data type')}
                    name={dataTypeTimeline}
                  >
                    <Radio.Group defaultValue={ViewDataTypeOptions.actual}>
                      <Radio value={ViewDataTypeOptions.actual}>
                        {t(ViewDataTypeOptions.actual)}
                      </Radio>
                      <Radio value={ViewDataTypeOptions.budget}>
                        {t(ViewDataTypeOptions.budget)}
                      </Radio>
                      <Radio value={ViewDataTypeOptions.budgetVsActual}>
                        {t(ViewDataTypeOptions.budgetVsActual)}
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              )}
            </Row>
          </div>
          <div className="footer-button-container">
            <PrimaryButton
              htmlType="submit"
              className="add-user-button"
              key="create-view-submit"
              loading={loading}
            >
              {!loading && t('Create View')}
            </PrimaryButton>
          </div>
        </CreateViewForm>
      </CreateViewContainer>
    </div>
  );
};

export default CrateView;
