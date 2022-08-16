import { ChevronCell, Row } from '../../../../libs/react-grid/reactgrid';
import { CompanyViewDetailType } from '../../../../constants/types';
import {
  emptyTextCell,
  nonEditable,
  monthHeaderCell,
  alphaHeaderCell,
  textCell,
  chevronCell,
} from './Cells';
import {
  ALPHA_HEADER_ROW_ID,
  ALPHA_ROW_HEIGHT,
  BOLD_TITLES,
  DIVIDER_TITLES,
  HEADER_ROW_ID,
  ITALIC_TITLES,
  MAIN_TYPE_TITLES,
  RowTypes,
  ROW_HEIGHT,
} from '../../../../constants/ViewTableKeys';

let columnsCount = 0;

function getAlphaHeaderRow(): Row {
  const alphaCodes = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alphaCodes.map((x) =>
    nonEditable(alphaHeaderCell(String.fromCharCode(x), 'alpha-header-cell')),
  );
  return {
    rowId: ALPHA_HEADER_ROW_ID,
    height: ALPHA_ROW_HEIGHT,
    cells: [nonEditable(emptyTextCell), ...alphabet],
  };
}

/* eslint-enable no-param-reassign, complexity */
const createMonthColums = (
  isTimelineView: boolean,
  columsData: CompanyViewDetailType[],
) => {
  const newColums: any = [];
  if (isTimelineView) {
    if (columsData[1] && columsData[1].data) {
      columsData[1].data.forEach((item: any) => {
        if (item.months) {
          item.months.forEach((child: any) => {
            newColums.push(
              nonEditable(
                monthHeaderCell(
                  `${child.name} ${item.name}`,
                  'timeline-header-cell',
                ),
              ),
            );
          });
        } else {
          newColums.push(
            nonEditable(
              monthHeaderCell(`${item.column}`, 'timeline-header-cell'),
            ),
          );
        }
      });
    }
  }
  if (!isTimelineView && columsData[1] && columsData[1].data) {
    columsData[1].data.forEach((item: any) => {
      if (item.months) {
        item.months.forEach((child: any) => {
          newColums.push({
            type: 'snapshotHeader',
            text: child.type,
            month: child.name,
            year: item.name,
            value: 1,
          });
        });
      } else {
        newColums.push(
          nonEditable(
            monthHeaderCell(`${item.column}`, 'timeline-header-cell'),
          ),
        );
      }
    });
  }

  columnsCount = newColums.length;
  return newColums;
};

/* 
  searches for a chevron cell in given row
*/
const findChevronCell = (row: Row) => {
  if (row.cells) {
    return row.cells.find((cell) => cell.type === 'chevron') as
      | ChevronCell
      | undefined;
  }
  return undefined;
};

/* 
  searches for a parent of given row
*/
const findParentRow = (rows: Row[], row: Row) =>
  rows.find((r) => {
    if (r) {
      const foundChevronCell = findChevronCell(row);
      return foundChevronCell ? r.rowId === foundChevronCell.parentId : false;
    }
    return false;
  });

/* 
  check if the row has children
*/
const hasChildren = (rows: Row[], row: Row): boolean =>
  rows.some((r) => {
    const foundChevronCell = findChevronCell(r);
    return foundChevronCell ? foundChevronCell.parentId === row.rowId : false;
  });

/* 
  Checks is row expanded
*/
const isRowFullyExpanded = (rows: Row[], row: Row): boolean => {
  const parentRow = findParentRow(rows, row);
  if (parentRow) {
    const foundChevronCell = findChevronCell(parentRow);
    if (foundChevronCell && !foundChevronCell.isExpanded) return false;
    return isRowFullyExpanded(rows, parentRow);
  }
  return true;
};

const getExpandedRows = (rows: Row[]): Row[] =>
  rows.filter((row) => {
    const areAllParentsExpanded = isRowFullyExpanded(rows, row);
    return areAllParentsExpanded !== undefined ? areAllParentsExpanded : true;
  });

const getDirectChildRows = (rows: Row[], parentRow: Row): Row[] =>
  rows.filter(
    (row) =>
      !!row.cells.find(
        (cell) =>
          cell.type === 'chevron' &&
          (cell as ChevronCell).parentId === parentRow.rowId,
      ),
  );

const assignIndentAndHasChildren = (
  rows: Row[],
  parentRow: Row,
  indent: number = 0,
) => {
  /* eslint-disable-next-line */
  ++indent;
  getDirectChildRows(rows, parentRow).forEach((row) => {
    const foundChevronCell = findChevronCell(row);
    const hasRowChildrens = hasChildren(rows, row);
    if (foundChevronCell) {
      foundChevronCell.indent = indent;
      foundChevronCell.hasChildren = hasRowChildrens;
    }
    if (hasRowChildrens) assignIndentAndHasChildren(rows, row, indent);
  });
};

const getExtraClasss = (record: any) => {
  let classnames = '';
  if (BOLD_TITLES.includes(record.name) || record.isBold) {
    classnames += 'bold-title';
  }
  if (ITALIC_TITLES.includes(record.name)) {
    classnames += 'italic-title';
  }
  if (DIVIDER_TITLES.includes(record.name)) {
    classnames += ' divider-row-border';
  }
  return classnames;
};

const getCurrencyCells = (row: any, extraClasses: string) => {
  const dataCells: any = [];
  /* eslint-disable-next-line */
  for (let element of row.data) {
    if (element.months && element.months.length) {
      element.months.forEach((mon: any) => {
        if ((mon.value || mon.value === 0) && mon.value !== '-') {
          dataCells.push({
            type: 'currency',
            text: mon.name,
            value: Number(mon.value),
            currency: row.currencySymbol,
            className: extraClasses,
          });
        }
        if ((mon.value && mon.value === '-') || mon.value === 'undefined') {
          dataCells.push(
            nonEditable(textCell('-', `null-value-cell ${extraClasses}`)),
          );
        }
      });
    }
    if ((element.value || element.value === 0) && element.value !== '-') {
      dataCells.push({
        type: 'currency',
        text: element.column,
        value: Number(element.value),
        currency: row.currencySymbol,
        className: extraClasses,
      });
    }
    if (
      (element.value && element.value === '-') ||
      element.value === 'undefined'
    ) {
      dataCells.push(
        nonEditable(textCell('-', `null-value-cell ${extraClasses}`)),
      );
    }
  }
  return dataCells;
};

const getPercentageCells = (row: any) => {
  const dataCells: any = [];
  /* eslint-disable-next-line */
  for (let element of row.data) {
    if (element.months && element.months.length) {
      element.months.forEach((mon: any) => {
        if ((mon.value || mon.value === 0) && mon.value !== '-') {
          dataCells.push(
            nonEditable(
              textCell(
                `${Number(mon.value).toFixed(2)}%`,
                'percentage-type-cell',
              ),
            ),
          );
        } else {
          dataCells.push(nonEditable(textCell('-', 'null-value-cell')));
        }
      });
    }
    if ((element.value || element.value === 0) && element.value !== '-') {
      dataCells.push(
        nonEditable(
          textCell(
            `${Number(element.value).toFixed(2)}%`,
            'percentage-type-cell',
          ),
        ),
      );
    }
    if (element.value && element.value === '-') {
      dataCells.push(nonEditable(textCell('-', 'null-value-cell')));
    }
  }
  return dataCells;
};

/* eslint-enable no-param-reassign, complexity */
const createDataRows = (
  rowData: any[],
  parentId?: string | undefined,
  rowIndex?: number,
) => {
  let newRows: any = [];
  if (rowData.length) {
    rowData.forEach((row, index) => {
      /* eslint-disable-next-line */
      const rIdx = rowIndex ? rowIndex + index + 1 : index;
      const rowHasChildren = row.children && row.children.length > 0;
      const rowId = `${row.key.replace(/ /g, '_')}_${row.id}`;
      let cellsArray = [
        nonEditable(textCell(String(rIdx + 2), 'row-number-cell')),
      ];
      if (
        row.type === RowTypes.group &&
        row.itemIndex === 1 &&
        MAIN_TYPE_TITLES.includes(row.name)
      ) {
        cellsArray.push(nonEditable(textCell(row.name, 'actual-title-cell')));
      } else if (row.type === RowTypes.group) {
        cellsArray.push(nonEditable(textCell(row.name, 'group-title-cell')));
      }
      if (row.type === RowTypes.currency) {
        const extraClasses = getExtraClasss(row);
        /* eslint-disable-next-line */
        const paddingLeft = parentId ? 'expansion-padding-left' : '';
        cellsArray.push(
          chevronCell(
            row.name,
            `currency-title-cell ${extraClasses} ${paddingLeft}`,
            false,
            rowHasChildren,
            parentId,
          ),
        );
        if (row.data && row.data.length) {
          const dataCells = getCurrencyCells(row, extraClasses);
          cellsArray = [...cellsArray, ...dataCells];
        } else {
          for (let col = 1; col <= columnsCount; col += 1) {
            cellsArray.push(
              nonEditable(textCell('-', `null-value-cell ${paddingLeft}`)),
            );
          }
        }
      }
      if (row.type === RowTypes.percentage) {
        const extraClasses = getExtraClasss(row);
        cellsArray.push(
          chevronCell(
            row.name,
            `percentage-title-cell ${extraClasses}`,
            false,
            rowHasChildren,
            parentId,
          ),
        );
        if (row.data && row.data.length) {
          const dataCells = getPercentageCells(row);
          cellsArray = [...cellsArray, ...dataCells];
        }
      }
      const rowCells = {
        rowId,
        height: ALPHA_ROW_HEIGHT,
        cells: cellsArray,
      };
      newRows.push(rowCells);
      if (rowHasChildren) {
        const childRows = createDataRows(row.children, rowId, rIdx);
        newRows = [...newRows, ...childRows];
      }
    });
  }
  return newRows;
};

function getHeaderRow(isTimelineView: boolean, dataList: any): Row {
  const monthsColData = createMonthColums(isTimelineView, dataList);
  return {
    rowId: HEADER_ROW_ID,
    height: ROW_HEIGHT,
    cells: [
      nonEditable(textCell('1', 'row-number-cell')),
      nonEditable(emptyTextCell),
      ...monthsColData,
    ],
  };
}

const updateRowIndex = (rows: Row[]) => {
  rows.map((record: any, index: number) => {
    const updatedCells = record.cells;
    updatedCells[0].text = String(index + 2);
    const newCellObj = { ...record, cells: updatedCells };
    return newCellObj;
  });
  return rows;
};

const buildTree = (rows: Row[]): Row[] => {
  rows.map((row: Row) => {
    const foundChevronCell = findChevronCell(row);
    if (foundChevronCell && !foundChevronCell.parentId) {
      const hasRowChildrens = hasChildren(rows, row);
      foundChevronCell.hasChildren = hasRowChildrens;
      if (hasRowChildrens) assignIndentAndHasChildren(rows, row);
    }
    return row;
  });
  return rows;
};

export const getAllRows = (dataList: any) => {
  const dataRows = createDataRows(dataList);
  const updatedRows = updateRowIndex(dataRows);
  const finalRowsData = buildTree(updatedRows);
  return finalRowsData;
};

export const getRows = (
  isTimelineView: boolean,
  dataList: any,
  updates: boolean,
  rawData?: any,
): Row[] => {
  if (updates) {
    const finalRowsData = buildTree(dataList);

    return [
      getAlphaHeaderRow(),
      getHeaderRow(isTimelineView, rawData),
      ...getExpandedRows(finalRowsData),
    ];
  }

  const dataRows = createDataRows(dataList);
  const updatedRows = updateRowIndex(dataRows);
  const finalRowsData = buildTree(updatedRows);

  return [
    getAlphaHeaderRow(),
    getHeaderRow(isTimelineView, dataList),
    ...getExpandedRows(finalRowsData),
  ];
};
