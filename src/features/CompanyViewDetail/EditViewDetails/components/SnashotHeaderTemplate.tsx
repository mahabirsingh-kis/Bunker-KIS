import * as React from 'react';
import {
  CellTemplate,
  Cell,
  Compatible,
  Uncertain,
  UncertainCompatible,
  getCellProperty,
  isAlphaNumericKey,
  keyCodes,
} from '../../../../libs/react-grid/reactgrid';

export interface SnapshotHeaderCell extends Cell {
  type: 'snapshotHeader';
  text: string;
  month: string;
  year: string;
  value?: number;
}

export class SnapshotHeaderCellTemplate
  implements CellTemplate<SnapshotHeaderCell>
{
  getCompatibleCell(
    uncertainCell: Uncertain<SnapshotHeaderCell>,
  ): Compatible<SnapshotHeaderCell> {
    const text = getCellProperty(uncertainCell, 'text', 'string');
    const month = getCellProperty(uncertainCell, 'month', 'string');
    const year = getCellProperty(uncertainCell, 'year', 'string');
    const value = getCellProperty(uncertainCell, 'value', 'number');
    return { ...uncertainCell, text, month, year, value };
  }

  handleKeyDown(
    cell: Compatible<SnapshotHeaderCell>,
    keyCode: number,
    ctrl: boolean,
    shift: boolean,
    alt: boolean,
  ): { cell: Compatible<SnapshotHeaderCell>; enableEditMode: boolean } {
    if (!ctrl && !alt && isAlphaNumericKey(keyCode))
      return { cell, enableEditMode: true };
    return {
      cell,
      enableEditMode:
        keyCode === keyCodes.POINTER || keyCode === keyCodes.ENTER,
    };
  }

  update(
    cell: Compatible<SnapshotHeaderCell>,
    cellToMerge: UncertainCompatible<SnapshotHeaderCell>,
  ): Compatible<SnapshotHeaderCell> {
    return this.getCompatibleCell({ ...cell, text: cellToMerge.text });
  }

  render(cell: Compatible<SnapshotHeaderCell>): React.ReactNode {
    return (
      <div className="snapshot-header-cell-wrapper">
        <span className="snapshot-type">{cell.text}</span>
        <span className="snapshot-month">{`${cell.month} ${cell.year}`}</span>
      </div>
    );
  }
}
