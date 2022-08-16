import React, { useState, useEffect } from 'react';

import '../../../libs/react-grid/styles.css';

import {
  CellChange,
  CellLocation,
  ReactGrid,
} from '../../../libs/react-grid/reactgrid';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  clearEditViewDetailData,
  selectViewDetail,
} from './EditViewDetails.slice';

import {
  clearCreateViewData,
  getAvailableTimeFramesAction,
} from '../../CompanyViews/CreateView/CreateView.slice';
import { getColumns } from './components/GetColumns';
import { getAllRows, getRows } from './components/GetRows';
import { EditViewTableContaner } from './EditViewDetails.components';
import { CurrencyCellTemplate } from './components/CurrencyCellTemplate';
import { SnapshotHeaderCellTemplate } from './components/SnashotHeaderTemplate';

let itemSumCount = 1;
const caculatTheIndex = (values: any) => {
  const newValues = values.map((item: any) => {
    const newData = { ...item, itemIndex: itemSumCount };
    itemSumCount += 1;
    if (newData.children && newData.children.length > 0) {
      const children = caculatTheIndex(newData.children);
      newData.children = children;
    }
    return newData;
  });
  return newValues;
};

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
    if (item.data) {
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
    }
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
        key: `Total ${item.name} ${viewType}`,
      });
    }
    return newData;
  });
  return newValues;
};

/* eslint-disable max-lines-per-function */
const EditTableView = ({
  tableData,
  isTimelineView,
}: {
  tableData: any;
  isTimelineView: boolean;
}) => {
  const detail = useAppSelector(selectViewDetail);
  const dispatch = useAppDispatch();
  const [dataList, setDataList] = useState<any>([]);

  const [allRows, setAllRows] = useState<any>([]);
  const [rowsToRender, setRowsToRender] = useState<any>([]);
  const [gridColumns, setGridColumns] = useState<any>([]);

  React.useEffect(() => {
    if (dataList.length) {
      setGridColumns(getColumns());
      setAllRows(getAllRows(dataList));
      setRowsToRender(getRows(isTimelineView, dataList, false));
    }
  }, [dataList]);

  const initData = async () => {
    if (isTimelineView) {
      const results = tableData || [
        {
          data: [],
        },
      ];
      let dataArray: any[] = [];
      results.forEach((result: any) => {
        const groupArr =
          isTimelineView && result.data.length
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
          isTimelineView,
          result.name,
        );
        const newData = addTotalData(filterData, result.name);
        dataArray = [...dataArray, ...newData];
      });
      const finalData = caculatTheIndex(dataArray);
      itemSumCount = 1;
      setDataList(finalData);
    } else {
      const result = tableData;
      const groupArr =
        isTimelineView && result.data.length
          ? [
              {
                name: result.name,
                type: 'group',
                isBold: true,
                data: [],
              },
            ]
          : [];
      const filterData = handleData([...groupArr, ...result], isTimelineView);
      const newData = addTotalData(filterData);
      const finalData = caculatTheIndex(newData);
      itemSumCount = 1;
      setDataList(finalData);
    }
  };
  useEffect(() => {
    initData();
  }, [tableData]);

  useEffect(() => {
    if (detail) {
      dispatch(getAvailableTimeFramesAction({ companyId: detail.company.id }));
    }
    return () => {
      dispatch(clearEditViewDetailData());
      dispatch(clearCreateViewData());
    };
  }, []);

  const handleChanges = (changes: CellChange[]) => {
    const newRows = [...allRows];
    changes.forEach((change) => {
      const changeRowIdx = allRows.findIndex(
        (el: any) => el.rowId === change.rowId,
      );
      const changeColumnIdx = gridColumns.findIndex(
        (el: any) => el.columnId === change.columnId,
      );
      newRows[changeRowIdx].cells[changeColumnIdx] = change.newCell;
    });
    setAllRows(newRows);
    const updatedRows = getRows(isTimelineView, newRows, true, dataList);
    setRowsToRender(updatedRows);
  };

  return (
    <>
      {gridColumns.length && rowsToRender.length && (
        <EditViewTableContaner>
          <ReactGrid
            rows={rowsToRender}
            columns={gridColumns}
            stickyLeftColumns={2}
            customCellTemplates={{
              currency: new CurrencyCellTemplate(),
              snapshotHeader: new SnapshotHeaderCellTemplate(),
            }}
            enableRowSelection
            enableColumnSelection
            enableRangeSelection
            onFocusLocationChanged={(location: CellLocation) =>
              console.log(location)
            }
            onCellsChanged={handleChanges}
          />
        </EditViewTableContaner>
      )}
    </>
  );
};

export default EditTableView;
