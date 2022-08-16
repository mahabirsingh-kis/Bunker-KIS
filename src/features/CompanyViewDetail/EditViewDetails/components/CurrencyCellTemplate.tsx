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
import { formatPrice } from '../../../../utils/func';

export interface CurrencyCell extends Cell {
  type: 'currency';
  text: string;
  currency: string;
  value: number | undefined;
  style?: any;
  className?: any;
}

export class CurrencyCellTemplate implements CellTemplate<CurrencyCell> {
  getCompatibleCell(
    uncertainCell: Uncertain<CurrencyCell>,
  ): Compatible<CurrencyCell> {
    const text = getCellProperty(uncertainCell, 'text', 'string');
    const currency = getCellProperty(uncertainCell, 'currency', 'string');
    const value = getCellProperty(uncertainCell, 'value', 'number');
    const className = getCellProperty(uncertainCell, 'className', 'string');
    return { ...uncertainCell, text, currency, value, className };
  }

  handleKeyDown(
    cell: Compatible<CurrencyCell>,
    keyCode: number,
    ctrl: boolean,
    shift: boolean,
    alt: boolean,
  ): { cell: Compatible<CurrencyCell>; enableEditMode: boolean } {
    if (!ctrl && !alt && isAlphaNumericKey(keyCode))
      return { cell, enableEditMode: true };
    return {
      cell,
      enableEditMode:
        keyCode === keyCodes.POINTER || keyCode === keyCodes.ENTER,
    };
  }

  update(
    cell: Compatible<CurrencyCell>,
    cellToMerge: UncertainCompatible<CurrencyCell>,
  ): Compatible<CurrencyCell> {
    return this.getCompatibleCell({ ...cell, text: cellToMerge.text });
  }

  render(cell: Compatible<CurrencyCell>): React.ReactNode {
    const classNames = `currency-cell-wrapper ${cell.className}`;
    return (
      <div className={classNames}>
        <span className="currency-type">{cell.currency}</span>
        <span className="currency-value">
          {formatPrice(cell.value, cell.currency)}
        </span>
      </div>
    );
  }
}
