import {
  DefaultCellTypes,
  CellStyle,
  NumberCell,
  TextCell,
  Cell,
  ChevronCell,
  Id,
} from '../../../../libs/react-grid/reactgrid';
import { Colors } from '../../../../theme';

export const emptyTextCell: TextCell = { type: 'text', text: '' };

const numberFormat = new Intl.NumberFormat('de', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export interface FlagCell extends Cell {
  type: 'flag';
  text: string;
}

export const textCell = (
  text: string,
  className = '',
  style?: CellStyle,
): TextCell => ({ type: 'text', text, className, style });

export const chevronCell = (
  text: string,
  className = '',
  isExpanded?: boolean,
  hasChildren?: boolean,
  parentId?: Id,
  style?: CellStyle,
): ChevronCell => ({
  type: 'chevron',
  text,
  className,
  isExpanded,
  hasChildren,
  parentId,
  style,
});

export const numberCell = (
  value: number,
  className = '',
  style?: CellStyle,
): NumberCell => ({
  type: 'number',
  value,
  className,
  style,
  format: numberFormat,
});

export const nonEditable = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  nonEditable: true,
});

export const showZero = (cell: NumberCell): NumberCell => ({
  ...cell,
  nanToZero: true,
  hideZero: false,
});

export const bottomLine = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  style: {
    ...cell.style,
  },
});

export const noSideBorders = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  style: {
    ...cell.style,
  },
});

export function alphaHeaderCell(
  aplhaValue: string,
  additionalClassNames = '',
): DefaultCellTypes {
  return nonEditable(
    textCell(aplhaValue, `${additionalClassNames}`, {
      background: Colors.white,
      color: Colors.grey6,
    }),
  );
}

export function monthHeaderCell(
  month: string,
  additionalClassNames = '',
): DefaultCellTypes {
  return nonEditable(textCell(month, `${additionalClassNames}`));
}

export function classificationCell(
  title: string,
  additionalClassNames = '',
): DefaultCellTypes {
  return nonEditable(textCell(title, `${additionalClassNames}`));
}
