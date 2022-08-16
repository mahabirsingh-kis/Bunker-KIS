import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Breadcrumb, Typography, Button, Alert } from 'antd';
import {
  ShareAltOutlined,
  CaretRightOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectLoading,
  selectError,
  selectViewDetail,
  clearCompanyViewDetailData,
  getCompanyViewDetailAction,
  GetCompanyViewDetailPayload,
} from './CompanyViewDetail.slice';
import {
  clearAllEditViewData,
  clearEditSuccessMessage,
  clearEditViewDetailData,
  selectEditSuccess,
} from './EditViewDetails/EditViewDetails.slice';
import {
  ViewPageHeader,
  HeaderTitleContainer,
  ViewTable,
  MonthHeader,
  SnapshotMonthHeader,
  CurrencyCell,
  EmptyCell,
  PercentCell,
  NumberCell,
  ViewDetailContainer,
} from './CompanyViewDetail.components';
import { CompanyViewDetailType } from '../../constants/types';
import LoadingData from '../../components/LoadingData';
import { Colors } from '../../theme';
import { formatPrice } from '../../utils/func';
import { clearCreateViewData } from '../CompanyViews/CreateView/CreateView.slice';
import { UserRoutes } from '../../navigation/Routes';
import MessageAlert from '../../components/MessageAlert';
import AlertContainer from '../../components/AlertContainer';

const columsMinNumber = 26;
const timelineType = 'P&L Timeline';
const defaultColumn = [
  {
    title: <div className="table-header-background"></div>,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    className: 'treeColum',
    render: (value: string, record: any) => {
      const style = {
        fontWeight: 400,
        fontSize: '16px',
        color: Colors.black08,
        marginLeft: '8px',
        fontStyle: 'normal',
      };
      if (record.isBold) {
        style.color = Colors.black08;
        style.fontWeight = 600;
        style.fontSize = '18px';
      }
      if (record.type === 'Percentage') {
        style.fontSize = '14px';
        style.color = Colors.black06;
        style.fontStyle = 'italic';
      }
      return <span style={style}>{value}</span>;
    },
  },
];

const columnEmpty = {
  title: undefined,
  className: 'emptyColum',
  render: () => <EmptyCell />,
};
export interface TableColum {
  title?: string | JSX.Element;
  key: string;
  dataIndex?: string;
  render?: (value: any, record: any) => JSX.Element | null;
  className?: string;
}

const handleData = (
  values: any,
  isTimelineView: boolean,
  viewType?: string,
  parentIndex: number | undefined = undefined,
  itemData?: any,
  isChild?: boolean,
) => {
  /* eslint-disable complexity */
  const newValues = values.map((item: any, index: number) => {
    const newData = { ...item, isChild };
    if (parentIndex || parentIndex === 0) {
      newData.key = viewType
        ? `${viewType}${item.name}${parentIndex}`
        : `${item.name}${parentIndex}`;
      newData.parentIndex = parentIndex;
      newData.type = newData.type || itemData.type;
      newData.currencySymbol =
        newData.currencySymbol || itemData.currencySymbol;
    } else {
      newData.key = viewType
        ? `${viewType}${item.name}${index}`
        : `${item.name}${index}`;
      newData.parentIndex = index;
      if (newData.children && newData.children.length > 0) {
        newData.isRoot = true;
      }
    }

    item.data.forEach((yearData: any) => {
      if (yearData.months) {
        yearData.months.forEach((element: any) => {
          if (isTimelineView) {
            newData[`${element.name}_${yearData.name}`] = element.value;
          } else {
            newData[`${element.name}_${yearData.name}_${element.type}`] =
              element.value;
          }
        });
      } else {
        newData[`${yearData.column}`] = yearData.value;
      }
    });
    if (newData.children && newData.children.length > 0) {
      const children = handleData(
        newData.children,
        isTimelineView,
        viewType,
        newData.parentIndex,
        newData,
        true,
      );
      newData.children = children;
    }
    return newData;
  });
  return newValues;
};

const addTotalData = (values: any, viewType?: string) => {
  const newValues = values.map((item: any) => {
    const newData = { ...item, isChild: true };
    if (newData.children) {
      newData.children.push({
        ...item,
        children: [],
        name: `Total ${item.name}`,
        key: `Total ${item.name}${viewType}`,
      });
    }
    return newData;
  });
  return newValues;
};

const CompanyViewDetail = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const detail = useAppSelector(selectViewDetail);
  const editSuccess = useAppSelector(selectEditSuccess);
  const dispatch = useAppDispatch();
  const { id }: { id: string } = useParams();
  const [columns, setColumns] = useState<any>([]);
  const [columnsCount, setColumnsCount] = useState(0);
  const [isTimelineView, setIsTimelineView] = useState(false);
  const [isHandlingData, setIsHandlingData] = useState(true);
  const [dataList, setDataList] = useState<any>([]);

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
      <Breadcrumb.Item>{detail && detail.name}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const HeaderTitle = () => (
    <HeaderTitleContainer>
      <div className="title-container">
        <Typography.Title level={3}>{detail && detail.name}</Typography.Title>
        <ShareAltOutlined style={{ fontSize: '14px', color: Colors.grey5 }} />
      </div>
      <Typography.Text>{detail && detail.description}</Typography.Text>
    </HeaderTitleContainer>
  );

  const fetchData = async () => {
    const payload: GetCompanyViewDetailPayload = { id };
    const getData: any = await dispatch(getCompanyViewDetailAction(payload));

    if (getData.type === getCompanyViewDetailAction.fulfilled.toString()) {
      const isTimeline = getData.payload.list.view === timelineType;
      if (isTimeline) {
        const results = getData.payload.list.data
          ? getData.payload.list.data
          : [
              {
                data: [],
              },
            ];
        let dataArray: any[] = [];
        results.forEach((result: any) => {
          const groupArr =
            getData.payload.list.view === timelineType && result.data.length
              ? [
                  {
                    name: result.name,
                    type: 'group',
                    isBold: true,
                    data: [],
                  },
                ]
              : [];
          const filterData = handleData(
            [...groupArr, ...result.data],
            isTimeline,
            result.name,
          );
          const newData = addTotalData(filterData, result.name);
          dataArray = [...dataArray, ...newData];
        });
        setDataList(dataArray);
      } else {
        const result = getData.payload.list.data
          ? getData.payload.list.data
          : {
              data: [],
            };
        const groupArr =
          getData.payload.list.view === timelineType && result.data.length
            ? [
                {
                  name: result.name,
                  type: 'group',
                  isBold: true,
                  data: [],
                },
              ]
            : [];
        const filterData = handleData([...groupArr, ...result], isTimeline);
        const newData = addTotalData(filterData);
        setDataList(newData);
      }
      setIsHandlingData(false);
    }
  };
  /* eslint-disable no-param-reassign, complexity */
  const renderValue = (value: any, record: any) => {
    if (record.isHide || record.type === 'group') {
      return null;
    }
    if ((value || value === 0) && value !== '-') {
      if (record.type === 'Currency') {
        return (
          <CurrencyCell isBold={record.isBold} isNormal={!record.isChild}>
            <div>
              <span className="currency">
                {record.currencySymbol === 'Rp' ? 'Rp.' : record.currencySymbol}
              </span>
              <span className="value">
                {formatPrice(value, record.currencySymbol)}
              </span>
            </div>
          </CurrencyCell>
        );
      }
      if (record.type === 'Percentage') {
        return <PercentCell>{value}%</PercentCell>;
      }
      return (
        <NumberCell isBold={record.isBold}>
          {formatPrice(value, record.currencySymbol)}
        </NumberCell>
      );
    }
    return (
      <CurrencyCell
        isBold={false}
        isNormal={!(record.type === 'Percentage' || record.isChild)}
      >
        -
      </CurrencyCell>
    );
  };

  /* eslint-enable no-param-reassign, complexity */
  const createColums = (columsData: CompanyViewDetailType[]) => {
    let sumCount = 1;
    const newColums: any = [];
    if (isTimelineView) {
      columsData[1].data.forEach((item: any) => {
        if (item.months) {
          item.months.forEach((child: any, index: number) => {
            const title = (
              <MonthHeader isEven={index % 2 !== 0}>
                {child.name} {item.name}
              </MonthHeader>
            );
            newColums.push({
              title,
              render: renderValue,
              dataIndex: `${child.name}_${item.name}`,
              className: 'monthColumn',
            });
            sumCount += 1;
          });
        } else {
          sumCount += 1;
          newColums.push({
            title: <MonthHeader isEven>{item.column}</MonthHeader>,
            render: renderValue,
            dataIndex: item.column,
            className: 'normaColumn',
          });
        }
        setColumnsCount(sumCount);
      });
    } else {
      columsData[0].data.forEach((item: any) => {
        if (item.months) {
          item.months.forEach((child: any, index: number) => {
            const title = (
              <SnapshotMonthHeader>
                <div className="snapshot-month-container">
                  <div className="type">{child.type}</div>
                  {child.name} {item.name}
                </div>
              </SnapshotMonthHeader>
            );
            newColums.push({
              title,
              render: renderValue,
              dataIndex: `${child.name}_${item.name}_${child.type}`,
              className:
                index !== 0
                  ? 'monthColumn snapshot-type'
                  : 'monthColumn first-header',
            });
          });
          sumCount += item.months.length;
        } else {
          sumCount += 1;
          newColums.push({
            title: <MonthHeader isEven>{item.column}</MonthHeader>,
            render: renderValue,
            dataIndex: item.column,
            className: 'normaColumn',
          });
        }
      });
      setColumnsCount(sumCount);
    }
    return newColums;
  };

  useEffect(() => {
    dispatch(clearAllEditViewData());
    fetchData();
    return () => {
      dispatch(clearCreateViewData());
      dispatch(clearCompanyViewDetailData());
      dispatch(clearEditSuccessMessage());
    };
  }, []);

  useEffect(() => {
    if (error) {
      setIsHandlingData(false);
      MessageAlert.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (dataList.length) {
      const tablecolums = createColums(dataList);
      const emptyColums =
        columnsCount < columsMinNumber
          ? new Array(columsMinNumber - columnsCount).fill(columnEmpty)
          : [];

      setColumns([...defaultColumn, ...tablecolums, ...emptyColums]);
    }
  }, [dataList, columnsCount, timelineType]);

  useEffect(() => {
    setIsTimelineView(!!detail && detail.view === timelineType);
  }, [detail]);

  const handleOnExpand = (expanded: boolean, record: any) => {
    if (record.isRoot) {
      const updateNewData = dataList.map((item: any) => {
        if (item.key === record.key) {
          item.isHide = expanded;
        }
        return item;
      });
      setDataList(updateNewData);
    }
  };
  const goToEditView = () => {
    dispatch(clearEditViewDetailData());
    const path = UserRoutes.companyView.editViewDetail.replace(
      ':id',
      String(id),
    );
    history.push(path);
  };

  const handleAlertClose = () => {
    dispatch(clearEditSuccessMessage());
  };

  return (
    <ViewDetailContainer>
      <Helmet>
        <title>{`${t('View Detail')} | Bunker`}</title>
      </Helmet>
      {editSuccess && (
        <AlertContainer>
          <Alert
            className="submission-success-alert"
            message={t('[view_name] has been updated.', {
              view_name: editSuccess?.name,
            })}
            type="success"
            showIcon
            closable
            afterClose={handleAlertClose}
          />
        </AlertContainer>
      )}
      <ViewPageHeader
        title={<HeaderTitle />}
        className="view-details-page-header"
        breadcrumb={breadcrumb()}
        extra={[
          <Button
            className="edit-view-button"
            key="edit-view"
            type="default"
            onClick={goToEditView}
          >
            {t('Edit view')}
          </Button>,
        ]}
      />
      {loading || isHandlingData ? (
        <LoadingData containerHeight="calc(100vh - 72px - 118.3px)" />
      ) : (
        <ViewTable
          rowKey="key"
          bordered
          columns={columns}
          dataSource={dataList}
          pagination={false}
          scroll={{
            x: true,
            y: `${
              isTimelineView
                ? 'calc(100vh - 72px - 118.3px - 98px)'
                : 'calc(100vh - 72px - 118.3px - 72px)'
            }`,
          }}
          isTimeline={isTimelineView}
          rowClassName={(record: any, index: number) => {
            const rowClasses = [];
            const isEven = (record.parentIndex + 1) % 2 !== 0;
            if (record.type === 'group') {
              rowClasses.push('group');
            }
            if (record.children && record.children.length > 0) {
              rowClasses.push('hasTree');
            }
            if (isEven) {
              rowClasses.push('evenBackground');
            }
            if (record.isBold && index !== 0) {
              rowClasses.push('boldRow');
            }
            return rowClasses.join(' ');
          }}
          expandable={{
            expandRowByClick: true,
            indentSize: 16,
            expandIcon: ({
              expanded,
              record,
            }: {
              expanded: boolean;
              record: any;
            }) => {
              if (record.children && record.children.length > 0) {
                const icon =
                  expanded && record.children ? (
                    <CaretDownOutlined
                      style={{ color: Colors.black06, fontSize: '12px' }}
                    />
                  ) : (
                    <CaretRightOutlined
                      style={{ color: Colors.black06, fontSize: '12px' }}
                    />
                  );
                return icon;
              }
              return undefined;
            },
          }}
          onExpand={handleOnExpand}
        />
      )}
    </ViewDetailContainer>
  );
};

export default CompanyViewDetail;
