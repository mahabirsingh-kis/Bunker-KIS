import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Col, DatePicker, Form, Input, Row, Checkbox } from 'antd';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  selectLoading,
  selectError,
  selectIsNameValid,
  clearError,
  validateViewNameAction,
} from './EditViewDetails.slice';
import { selectAvailableTimeframes } from '../../CompanyViews/CreateView/CreateView.slice';
import { ViewInfoSectionContainer } from './EditViewDetails.components';
import {
  MonthPickerFormat,
  TextAreaMaxLength,
  TimeframeFormat,
  ViewNameMaxLength,
  viewTypeOptions,
} from '../../../constants/General';
import PrimaryButton from '../../../components/PrimaryButton';
import { getDefautMonth } from '../../../utils/func';

const { TextArea } = Input;

interface EditViewInfoSectionProps {
  detail: any;
  istimeline: boolean;
  saveAction: (values: any) => void;
  changeTimeAction: (values: {
    time_frame_start?: string;
    time_frame_end?: string;
  }) => void;
  previwing: boolean;
  editing: boolean;
  viweDataType: string;
  changeFormValues: (chnaged: boolean) => void;
}

/* eslint-disable max-lines-per-function, complexity */
const EditViewInfoSection = ({
  detail,
  istimeline,
  saveAction,
  changeTimeAction,
  previwing,
  editing,
  viweDataType,
  changeFormValues,
}: EditViewInfoSectionProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const isNameValid = useAppSelector(selectIsNameValid);
  const availableTimeframes = useAppSelector(selectAvailableTimeframes);
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState(detail?.description);
  const [descriptionOver, setDescriptionOver] = useState(false);
  const [showMaxlenghtError, setShowMaxlenghtError] = useState(false);

  const timeFrameStart = 'timeframe_start';
  const timeFrameEnd = 'timeframe_end';

  const defaultIsAllTime = !detail.timeframe_start && !detail.timeframe_end;
  const [isAllTime, setIsAllTime] = useState(defaultIsAllTime);

  const handleDescription = (event: any) => {
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
    if (event.target.value && event.target.value !== detail?.name) {
      const payload = {
        name: event.target.value,
        companyId: detail?.company.id,
      };
      await dispatch(validateViewNameAction(payload));
    }
  };
  const initValues = {
    id: detail.id,
    name: detail.name,
    description: detail.description,
    timeframe: moment(detail.timeframe),
    timeframe_end: detail.timeframe_end ? moment(detail.timeframe_end) : null,
    timeframe_start: detail.timeframe_start
      ? moment(detail.timeframe_start)
      : null,
    isAllTime,
  };
  const onFinish = (values: any) => {
    const data: any = {
      id: detail.id,
      name: values.name,
      description: values.description,
      data_type: viweDataType,
    };
    if (istimeline) {
      data.time_frame_start =
        values.timeframe_start && !isAllTime
          ? `${values.timeframe_start.format(TimeframeFormat)}-01`
          : null;
      data.time_frame_end =
        values.timeframe_end && !isAllTime
          ? `${values.timeframe_end.format(TimeframeFormat)}-01`
          : null;
    } else {
      data.time_frame_start = `${values.timeframe.format(TimeframeFormat)}-01`;
    }
    saveAction(data);
  };

  const changeTime = () => {
    if (istimeline) {
      const values = form.getFieldsValue([timeFrameStart, timeFrameEnd]);
      changeTimeAction({
        time_frame_start: values.timeframe_start
          ? `${values.timeframe_start.format(TimeframeFormat)}-01`
          : undefined,
        time_frame_end: values.timeframe_end
          ? `${values.timeframe_end.format(TimeframeFormat)}-01`
          : undefined,
      });
    } else {
      const values = form.getFieldsValue(['timeframe']);
      changeTimeAction({
        time_frame_start: `${values.timeframe.format(TimeframeFormat)}-01`,
      });
    }
  };
  const alltimeChange = (e: any) => {
    if (istimeline && e.target.checked) {
      changeTimeAction({
        time_frame_start: undefined,
        time_frame_end: undefined,
      });
    }

    const values = form.getFieldsValue([timeFrameStart, timeFrameEnd]);
    if (!e.target.checked && !values.timeframe_start) {
      const startTime = getDefautMonth(availableTimeframes);
      form.setFields([
        {
          name: timeFrameStart,
          value: moment(startTime, TimeframeFormat),
        },
      ]);
      changeTimeAction({
        time_frame_start: `${startTime}-01`,
      });
    }
    if (!e.target.checked && values.timeframe_start) {
      changeTimeAction({
        time_frame_start: values.timeframe_start
          ? `${values.timeframe_start.format(TimeframeFormat)}-01`
          : undefined,
        time_frame_end: values.timeframe_end
          ? `${values.timeframe_end.format(TimeframeFormat)}-01`
          : undefined,
      });
    }
    setIsAllTime(e.target.checked);
  };

  const onValuesChange = () => {
    changeFormValues(true);
  };

  return (
    <ViewInfoSectionContainer>
      <Row>
        <Form
          form={form}
          initialValues={initValues}
          className="create-view-form"
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Row>
            <Col span={20} className="form-section">
              <Row justify="start">
                <Col span={5} className="view-name-input-col">
                  <Form.Item
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
                      className={
                        error && !isNameValid ? 'name-input-error' : ''
                      }
                      onChange={() => dispatch(clearError())}
                    />
                  </Form.Item>
                </Col>
                <Col span={20} className="view-desc-input-col">
                  <Form.Item name="description">
                    <TextArea
                      placeholder={t('Enter')}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                      onChange={handleDescription}
                      className={descriptionOver ? 'textarea-error' : ''}
                    />
                  </Form.Item>
                  <div className="text-count-section">
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
                  <div className="desc-error-msg">
                    {descriptionOver && showMaxlenghtError && (
                      <span className="max-length-error">
                        {t('Longer than maximum length 250 words')}
                      </span>
                    )}
                  </div>
                </Col>
                <Col span={20}>
                  <Row>
                    {detail?.view === viewTypeOptions.snapshot && (
                      <Col span={20} className="view-timeframe-input-col">
                        <Form.Item
                          label={t('Timeframe')}
                          name="timeframe"
                          rules={[
                            {
                              required: true,
                              message: t('Required'),
                            },
                          ]}
                        >
                          <DatePicker
                            picker="month"
                            format={MonthPickerFormat}
                            disabledDate={(current) => {
                              const existMonth = availableTimeframes.find(
                                (m) =>
                                  String(
                                    moment(current).format(TimeframeFormat),
                                  ) === String(m),
                              );
                              return current && !existMonth;
                            }}
                            onChange={changeTime}
                          />
                        </Form.Item>
                      </Col>
                    )}
                    {detail?.view === viewTypeOptions.timeline && (
                      <Col className="view-timeframe-input-col">
                        <Form.Item
                          label={t('Timeframe')}
                          name={timeFrameStart}
                          rules={[
                            {
                              required: !isAllTime,
                            },
                          ]}
                        >
                          <DatePicker
                            picker="month"
                            format={MonthPickerFormat}
                            disabled={isAllTime}
                            allowClear={false}
                            disabledDate={(current) => {
                              const existMonth = availableTimeframes.find(
                                (m) =>
                                  String(
                                    moment(current).format(TimeframeFormat),
                                  ) === String(m),
                              );
                              const endValue = form.getFieldValue(timeFrameEnd);
                              const checkEnd = endValue
                                ? moment(current) > endValue
                                : false;
                              return current && (!existMonth || checkEnd);
                            }}
                            onChange={changeTime}
                          />
                        </Form.Item>
                        <span className="separater-dash">-</span>
                        <Form.Item name={timeFrameEnd}>
                          <DatePicker
                            picker="month"
                            format={MonthPickerFormat}
                            placeholder="None"
                            disabled={isAllTime}
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
                                : false;
                              return current && (!existMonth || checkstart);
                            }}
                            onChange={changeTime}
                          />
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          className="all-time-check"
                          name="isAllTime"
                        >
                          <Checkbox onChange={alltimeChange}>
                            {t('All Time')}
                          </Checkbox>
                        </Form.Item>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={4} className="action-container">
              <PrimaryButton
                htmlType="submit"
                className="add-user-button"
                key="create-view-submit"
                loading={loading}
                disabled={previwing || loading || editing}
              >
                {t('Save')}
              </PrimaryButton>
            </Col>
          </Row>
        </Form>
      </Row>
    </ViewInfoSectionContainer>
  );
};

export default EditViewInfoSection;
