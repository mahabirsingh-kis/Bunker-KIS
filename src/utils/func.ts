import { format, getUnixTime } from 'date-fns';
import { utcToZonedTime, format as formatTZ } from 'date-fns-tz';
import moment from 'moment';

import {
  FullScreenDocument,
  FullScreenDocumentElement,
  CompanyRole,
} from '../constants/types';
import { DataFileTypes, Roles, TimeframeFormat } from '../constants/General';

const OneMin = 60;
const OneHour = 3600;

export const formatTimeStrByTimestamp = (timestamp: number) =>
  format(timestamp * 1000, 'MMM dd, yyyy HH:mm');

export const timeCounterFunc = (timestamp: number) => {
  const currentTimestamp = getUnixTime(new Date());
  if (!timestamp || timestamp <= currentTimestamp) {
    return {
      hrs: 0,
      mins: 0,
      sec: 0,
    };
  }
  const distanceSeconds = timestamp - currentTimestamp;
  const hrs = Math.floor(distanceSeconds / OneHour);
  const mins = Math.floor((distanceSeconds - hrs * OneHour) / OneMin);
  const sec = distanceSeconds - hrs * OneHour - mins * OneMin;
  return { hrs, mins, sec };
};

export const timeCounterByParamsFunc = (
  timestamp: number | null,
  current: number | null,
) => {
  if (!timestamp || !current || timestamp <= current) {
    return {
      hrs: 0,
      mins: 0,
      sec: 0,
    };
  }
  const distanceSeconds = timestamp - current;
  const hrs = Math.floor(distanceSeconds / OneHour);
  const mins = Math.floor((distanceSeconds - hrs * OneHour) / OneMin);
  const sec = distanceSeconds - hrs * OneHour - mins * OneMin;
  return { hrs, mins, sec };
};
/* eslint-disable complexity */
export const getDeveloperName = (
  firstName: string | null,
  lastName: string | null,
) => {
  if (firstName || lastName) {
    const nameArr = [];
    if (firstName) {
      nameArr.push(firstName);
    }
    if (lastName) {
      nameArr.push(lastName);
    }
    if (nameArr.length > 0) {
      return `${nameArr.join(' ')},`;
    }
    return '';
  }
  return '';
};

export const formatTimestampByTimezone = (
  timestamp: number,
  formatString: string,
  timeZone: string,
) => {
  const startDateObj = new Date(timestamp * 1000);
  const startDateZone = utcToZonedTime(startDateObj, timeZone);
  return formatTZ(startDateZone, formatString, {
    timeZone,
  });
};

export const toggleFullscreen = () => {
  const fsDoc = <FullScreenDocument>document;
  const fsDocElem = <FullScreenDocumentElement>document.documentElement;
  if (
    !document.fullscreenElement &&
    /* alternative standard method */ !fsDoc.mozFullScreenElement &&
    !fsDoc.webkitFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (fsDocElem.mozRequestFullScreen) {
      fsDocElem.mozRequestFullScreen();
    } else if (fsDocElem.webkitRequestFullscreen) {
      fsDocElem.webkitRequestFullscreen();
    }
  } else if (fsDoc.cancelFullScreen) {
    fsDoc.cancelFullScreen();
  } else if (fsDoc.mozCancelFullScreen) {
    fsDoc.mozCancelFullScreen();
  } else if (fsDocElem.webkitCancelFullScreen) {
    fsDocElem.webkitCancelFullScreen();
  }
};

export const getRoleTitle = (role: CompanyRole) => {
  if (role.role === Roles.bunkerAdmin.value) {
    return Roles.bunkerAdmin.text;
  }

  if (role.role === Roles.admin.value) {
    return Roles.admin.text;
  }

  if (role.role === Roles.editor.value) {
    return Roles.editor.text;
  }

  if (role.role === Roles.viewer.value) {
    return Roles.viewer.text;
  }
  return '';
};

export const getFileIcon = (type: string) => {
  let fileIcon = '';
  switch (type) {
    case DataFileTypes.xls.label:
      fileIcon = DataFileTypes.xls.image;
      break;
    case DataFileTypes.xlsx.label:
      fileIcon = DataFileTypes.xlsx.image;
      break;
    case DataFileTypes.csv.label:
      fileIcon = DataFileTypes.csv.image;
      break;
    default:
      break;
  }
  return fileIcon;
};

export const uploadProgress = (uploadAction: Function) => {
  const progressCallback = (progressEvent: any) => {
    const { loaded, total } = progressEvent;
    const percentageProgress = Math.floor((loaded / total) * 100);
    if (percentageProgress < 100) {
      uploadAction(percentageProgress);
    } else {
      uploadAction(percentageProgress);
    }
  };
  return progressCallback;
};

export const formatPrice = (value: number, type: string | null = null) => {
  const option = { minimumFractionDigits: 1 };
  if (type === 'Rp') {
    return new Intl.NumberFormat('id', option).format(value);
  }
  return new Intl.NumberFormat('en-US', option).format(value);
};

export const getDefautMonth = (availableMonths: string[]) => {
  const timeDiffs: any[] = [];
  // eslint-disable-next-line
  for (let month of availableMonths) {
    const timeframeDiff = moment(moment(month, TimeframeFormat).toDate()).diff(
      moment().subtract(13, 'month'),
      'month',
    );
    timeDiffs.push({ diff: timeframeDiff, value: month });
  }
  timeDiffs.sort((a, b) => (Math.abs(a.diff) > Math.abs(b.diff) && 1) || -1);
  return timeDiffs[0].value;
};
