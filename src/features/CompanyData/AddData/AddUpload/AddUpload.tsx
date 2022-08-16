import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Select,
  Typography,
  Progress,
  Alert,
} from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import { CaretDownOutlined } from '@ant-design/icons';

import { Colors, Images } from '../../../../theme';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import {
  acceptStyle,
  activeStyle,
  AddDataContainer,
  AddUploadForm,
  CardContainer,
  ClassificationsContainer,
  EmptyClassificationsContainer,
  FileUploadContainer,
  UploadedFileContainer,
} from './AddUpload.components';
import AddDataFooter from '../../../../components/AddDataFooter';
import { Company } from '../../../../constants/types';
import {
  getDataTypeListAction,
  selectClassificationData,
  selectDataTypes,
  selectError,
  selectFileData,
  selectFileName,
  selectIsFilenameValid,
  selectType,
  selectUploadError,
  selectUploadProgress,
  updateCurrentStep,
  updateProgress,
  updateSelectedFile,
  updateType,
  validateFilenameAction,
  verifyFileAction,
  clearTagGroups,
} from '../AddData.slice';
import { UploadLinks } from '../../../../constants/Links';
import {
  alertDismissTime,
  ProgressValues,
  UploadFileTypes,
} from '../../../../constants/General';
import { getFileIcon } from '../../../../utils/func';
import CategoriesTree from '../../../../components/CategoriesTree';
import { UserRoutes } from '../../../../navigation/Routes';
import AddDataPageHeader from '../AddDataPageHeader';
import { S3_DOMAIN } from '../../../../constants/predicates';
import AlertContainer from '../../../../components/AlertContainer';

const { Content } = Layout;
const { Option } = Select;
const { Text } = Typography;

/* eslint-disable no-param-reassign, complexity */
const AddUpload = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const history = useHistory();
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [isUploadCompleted, setIsUploadCompleted] = useState(false);
  const [isNextEnable, setIsNextEnable] = useState(false);
  const [fileRejectError, setFileRejectError] = useState(false);
  const dataTypes = useAppSelector(selectDataTypes);
  const error = useAppSelector(selectError);
  const uploadError = useAppSelector(selectUploadError);
  const uploadProgress = useAppSelector(selectUploadProgress);
  const isFilenameValid = useAppSelector(selectIsFilenameValid);
  const fileName = useAppSelector(selectFileName);
  const fileData = useAppSelector(selectFileData);
  const selectedType = useAppSelector(selectType);
  const classificationData = useAppSelector(selectClassificationData);
  const dispatch = useAppDispatch();
  const { state: company }: { state: Company } = useLocation();

  useEffect(() => {
    dispatch(updateCurrentStep(1));
    dispatch(getDataTypeListAction(company.id));
    return () => {
      setFileRejectError(false);
    };
  }, []);

  useEffect(() => {
    if (uploadProgress === ProgressValues.complete) {
      setTimeout(() => {
        setIsUploading(false);
        setIsUploadCompleted(true);
        if (selectedFile) {
          dispatch(updateSelectedFile(selectedFile));
        }
      });
    }
  }, [uploadProgress]);

  useEffect(() => {
    if (uploadError) {
      setIsUploading(false);
      setIsUploadCompleted(false);
      setIsNextEnable(false);
      dispatch(updateSelectedFile(null));
    }
  }, [uploadError]);

  useEffect(() => {
    if (error) {
      setIsNextEnable(false);
    }
  }, [error]);

  useEffect(() => {
    if (fileData && classificationData.length && fileName && selectedType) {
      setSelectedFile(fileData);
      setIsNextEnable(true);
    }
  }, [fileData, fileName, classificationData, selectedType]);

  const handleFilename = async (event: any) => {
    if (event.target.value) {
      const payload = { filename: event.target.value, companyId: company.id };
      await dispatch(validateFilenameAction(payload));
    } else {
      setIsNextEnable(false);
    }
  };

  const handleUploadProgress = (progress: number) => {
    dispatch(updateProgress(progress));
  };

  const getFileTypeIcon = (fileObject: File) => {
    const fName = fileObject.name;
    const fileType = fName.substr(fName.lastIndexOf('.') + 1);
    const selectedFileIcon = getFileIcon(fileType);
    return selectedFileIcon;
  };

  const startUploadingFile = async (acceptedFile: File) => {
    dispatch(clearTagGroups());
    getFileTypeIcon(acceptedFile);
    setIsUploadCompleted(false);
    setSelectedFile(acceptedFile);
    setIsUploading(true);
    dispatch(updateProgress(0));
    const formData = new FormData();
    formData.append('company_id', String(company.id));
    formData.append('file', acceptedFile);
    await dispatch(
      verifyFileAction({ data: formData, callback: handleUploadProgress }),
    );
  };

  const reuploadFile = () => {
    if (selectedFile) {
      startUploadingFile(selectedFile);
    }
  };

  const handleTypeSelect = (value: any) => {
    dispatch(updateType(value));
  };

  const goToNextStep = () => {
    history.push(UserRoutes.addData.stepTwo, company);
  };

  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      accept: UploadFileTypes,
      onDrop: (acceptedFiles, rejecteFiles) => {
        if (acceptedFiles.length) {
          startUploadingFile(acceptedFiles[0]);
        }
        if (rejecteFiles.length) {
          setFileRejectError(true);
          setTimeout(() => {
            setFileRejectError(false);
          }, alertDismissTime);
        }
      },
    });

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
    }),
    [isDragActive, isDragAccept],
  );

  const handleAlertClose = () => {
    setFileRejectError(false);
  };

  return (
    <AddDataContainer>
      <Helmet>
        <title>{`${t('Add Data')} | Bunker`}</title>
      </Helmet>
      <Layout className="add-data-layout">
        <Row justify="start">
          <Col span={24}>
            <AddDataPageHeader company={company} currentStep={1} />
          </Col>
          {fileRejectError && (
            <AlertContainer>
              <Alert
                className="submission-success-alert"
                message={t(
                  'Invalid file format, only following xlsx, xls, csv file formats are allowed.',
                )}
                type="error"
                showIcon
                closable
                afterClose={handleAlertClose}
              />
            </AlertContainer>
          )}
        </Row>
        <Content>
          <Row justify="start" style={{ height: '100%' }}>
            <Col span={14} style={{ paddingRight: '20px' }}>
              <CardContainer title={t('Upload File')}>
                <Row className="upload-form-row" style={{ height: '100%' }}>
                  <AddUploadForm name="add-upload-form" form={form}>
                    <Row justify="start">
                      <Col span={15} className="file-name-input-col">
                        <Form.Item
                          labelCol={{ span: 24 }}
                          label={t('File Name')}
                          name="file_name"
                          rules={[
                            {
                              required: true,
                              message: t('Filename is required'),
                            },
                          ]}
                        >
                          <Input
                            placeholder={t('Enter')}
                            defaultValue={fileName}
                            onBlur={handleFilename}
                          />
                        </Form.Item>
                        {error && !isFilenameValid && (
                          <Row className="login-message-error" justify="start">
                            <Col>
                              <Text type="danger">
                                {error.message ? t(error.message) : null}
                              </Text>
                            </Col>
                          </Row>
                        )}
                      </Col>
                      <Col span={9} className="type-input-col">
                        <Form.Item
                          labelCol={{ span: 24 }}
                          label={t('Type')}
                          name="type"
                          rules={[
                            {
                              required: true,
                              message: t('Please select a type'),
                            },
                          ]}
                        >
                          {selectedType ? (
                            <Select
                              placeholder="Select"
                              defaultValue={selectedType || ''}
                              suffixIcon={<CaretDownOutlined />}
                              onChange={handleTypeSelect}
                            >
                              {dataTypes.map((tp) => (
                                <Option
                                  value={tp.id}
                                  key={`type-option-${tp.id}`}
                                >
                                  {tp.type}
                                </Option>
                              ))}
                            </Select>
                          ) : (
                            <Select
                              placeholder="Select"
                              onChange={handleTypeSelect}
                              suffixIcon={<CaretDownOutlined />}
                            >
                              {dataTypes.map((tp) => (
                                <Option
                                  value={tp.id}
                                  key={`type-option-${tp.id}`}
                                >
                                  {tp.type}
                                </Option>
                              ))}
                            </Select>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                  </AddUploadForm>
                  <Typography.Text className="file-upload-label">
                    {t(' File Upload')}
                  </Typography.Text>
                  {!isUploading && !selectedFile && (
                    <>
                      <FileUploadContainer {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        {!isDragActive ? (
                          <>
                            <p className="ant-upload-drag-icon">
                              <img
                                src={Images.UploadIcon}
                                alt=""
                                className=""
                              />
                            </p>

                            <p className="ant-upload-text">
                              <Typography.Text className="ant-upload-text-first">
                                {t('Drag your file here, or')}
                              </Typography.Text>
                              <Typography.Text className="ant-upload-text-link">
                                {t('browse')}
                              </Typography.Text>
                            </p>
                            <p className="ant-upload-hint">
                              <Typography.Text className="hint-text">
                                {t('.xlsx, .xls or .csv file')}
                              </Typography.Text>
                              <Typography.Text className="hint-text">
                                {t('Up to 5M')}
                              </Typography.Text>
                            </p>
                          </>
                        ) : (
                          <p className="ant-upload-hint">
                            <Typography.Text className="hint-text">
                              {t('Drop the file to upload')}
                            </Typography.Text>
                          </p>
                        )}
                      </FileUploadContainer>
                      <Typography.Text className="template-instructions-link">
                        <Trans>
                          See{' '}
                          <Link
                            to={{ pathname: S3_DOMAIN + UploadLinks.template }}
                            target="_blank"
                            download
                          >
                            Template
                          </Link>{' '}
                          and{' '}
                          <Link
                            to={{ pathname: UploadLinks.instructions }}
                            target="_blank"
                          >
                            Instructions
                          </Link>{' '}
                          for more information.
                        </Trans>
                      </Typography.Text>
                    </>
                  )}
                  {selectedFile && (
                    <>
                      <UploadedFileContainer
                        style={{
                          borderColor: uploadError
                            ? Colors.danger5
                            : Colors.grey3,
                        }}
                      >
                        <div className="file-data-container">
                          <img
                            src={getFileTypeIcon(selectedFile)}
                            alt=""
                            className=""
                          />
                          <Typography.Text className="file-name">
                            {selectedFile.name}
                          </Typography.Text>
                        </div>
                        {isUploading && !isUploadCompleted && (
                          <Progress percent={uploadProgress} status="active" />
                        )}
                        {(!isUploading && isUploadCompleted) ||
                        (uploadError && !isUploadCompleted) ? (
                          <div className="upload-status-content">
                            {uploadError && (
                              <>
                                <Typography.Text className="upload-error">
                                  {t('Upload failed')}
                                </Typography.Text>
                                <Typography.Text onClick={reuploadFile}>
                                  <img
                                    alt=""
                                    src={Images.ReloadIcon}
                                    className="reload-icon"
                                  />
                                </Typography.Text>
                              </>
                            )}
                            <div
                              {...getRootProps({
                                className: 'change-file-button',
                              })}
                            >
                              <input {...getInputProps()} />
                              <Typography.Text className="hint-text">
                                {t('Change File')}
                              </Typography.Text>
                            </div>
                          </div>
                        ) : null}
                      </UploadedFileContainer>
                      {uploadError && (
                        <Row className="upload-message-error" justify="start">
                          {uploadError.message &&
                            uploadError.message.map((err: string) => (
                              <Col span={24}>
                                <Text type="danger">{t(err)}</Text>
                              </Col>
                            ))}
                        </Row>
                      )}
                    </>
                  )}
                </Row>
              </CardContainer>
            </Col>
            <Col span={10}>
              <CardContainer title={t('Classifications')}>
                {classificationData.length ? (
                  <ClassificationsContainer>
                    <Row className="classification-container">
                      <Col span={24}>
                        <Content className="classifications-tree-content">
                          <CategoriesTree
                            defaultExpandAll
                            categories={classificationData}
                          />
                        </Content>
                      </Col>
                    </Row>
                  </ClassificationsContainer>
                ) : (
                  <EmptyClassificationsContainer>
                    <Row className="classification-container">
                      <Col span={24}>
                        <Content className="empty-classifications-content">
                          <img src={Images.CategoryIcon} alt="" className="" />
                          <Typography.Text className="no-file-text">
                            {t('Upload a file first')}
                          </Typography.Text>
                        </Content>
                      </Col>
                    </Row>
                  </EmptyClassificationsContainer>
                )}
              </CardContainer>
            </Col>
          </Row>
        </Content>
        <AddDataFooter nextDisabled={!isNextEnable} onNext={goToNextStep} />
      </Layout>
    </AddDataContainer>
  );
};

export default AddUpload;
