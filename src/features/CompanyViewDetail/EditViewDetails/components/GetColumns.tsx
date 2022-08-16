import {
  COL_WIDTH,
  ROW_NO_COL_WIDTH,
  TITLE_COL_WIDTH,
} from '../../../../constants/ViewTableKeys';
import { Column } from '../../../../libs/react-grid/reactgrid';

export function getColumns(): Column[] {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => {
    const colId = String.fromCharCode(x);
    const width = colId === 'A' ? TITLE_COL_WIDTH : COL_WIDTH;
    return { columnId: colId, width };
  });
  return [
    {
      columnId: 'rowNumbers',
      width: ROW_NO_COL_WIDTH,
    },
    ...alphabet,
    {
      columnId: 'Totals',
      width: COL_WIDTH,
    },
  ];
}
