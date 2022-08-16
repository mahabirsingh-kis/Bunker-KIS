import Images from '../theme/Images';

/**
 * General constants
 */
export const test = 'test';

/**
 *Pagination Constants
 */
export const Pagination = {
  pageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100'],
};

export const Roles = {
  bunkerAdmin: {
    value: 'bunker_admin',
    text: 'Bunker admin',
  },
  admin: {
    value: 'admin',
    text: 'Admin',
  },
  editor: {
    value: 'editor',
    text: 'Editor',
  },
  viewer: {
    value: 'viewer',
    text: 'Viewer',
  },
};

export const listFilter = {
  sort: {
    desc: 'desc',
    asc: 'asc',
  },
  sortBy: {
    name: 'name',
  },
};

/**
 *DateFormats
 */
export const DateFormat = 'MMM dd, yyyy';
export const MonthPickerFormat = 'MMM YYYY';
export const TimeframeFormat = 'YYYY-MM';

export const alertDismissTime = 3000;

export const DataFileTypes = {
  xls: {
    label: 'xls',
    image: Images.XLSIcon,
  },
  xlsx: {
    label: 'xlsx',
    image: Images.XLSXIcon,
  },
  csv: {
    label: 'csv',
    image: Images.CSVIcon,
  },
};

export const UploadFileTypes = '.xlsx,.xls,.csv';
export const ProgressValues = {
  default: 0,
  complete: 100,
};

export const TextAreaMaxLength = 250;
export const ViewNameMaxLength = 50;

export const viewTypeOptions = {
  snapshot: 'P&L Snapshot',
  timeline: 'P&L Timeline',
};

export const timeFrameOptions = {
  allTime: 'All Time',
  specificTime: 'Specific Timeframe',
};

export const ViewDataTypeOptions = {
  actual: 'Actual',
  budget: 'Budget',
  budgetVsActual: 'Budget vs Actual',
};

export const EditViewOption = {
  DataType: 'Data Type',
  Perspective: 'Perspective',
  Section: 'Section',
  TimeIncrements: 'Time Increments',
};

export const ViewPerspectiveOption = {
  Number: 'Number (#)',
  PercentageOfRevenue: 'Percentage of Revenue (%)',
};

export const ViewSectionOption = {
  All: 'All',
  TopLineGrossProfit: 'Top  | Top line through gross profit',
  BottomOpEx: 'Bottom | OpEx only',
};
