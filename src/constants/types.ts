export interface FullScreenDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  webkitCancelFullScreen?: () => void;
}

export interface FullScreenDocument extends HTMLDocument {
  documentElement: FullScreenDocumentElement;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  cancelFullScreen?: () => void;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

export interface VideoInterviewAppointmentInfoState {
  status: string;
  started_time: number | null;
  ended_time: number | null;
  step_status: string | null;
  server_time: number | null;
  zoom_link: string;
  timezone: string;
  contact: {
    first_name: string | null;
    last_name: string | null;
    email: string | null;
  };
}

export interface QuestionState {
  current: {
    step: number;
    question_id: number;
    question_type: string;
    content: string;
    description: string;
    comment: string;
  };
  step_status: Array<{
    step: number;
    step_title: string;
    count: number;
    process: number;
  }>;
  interview_status: string;
  started_time: number | null;
  ended_time: number | null;
  server_time: number | null;
}

export interface IOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  token?: string;
  isBunkerAdmin: boolean;
  updatedAt: string;
  user_company_role?: CompanyRole[];
  user_status?: string;
  walkthrough?: boolean;
}
export interface CompanyRole {
  id: number;
  role: string;
  company_name?: string;
  company_id: number;
  company?: Company;
}

export interface Company {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ImportData {
  id: number;
  name: string;
  status: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface DataType {
  id: number;
  type: string;
  createdAt: string;
  updatedAt: string;
}
export interface TagCategory {
  id?: number;
  name: string;
  group?: TagCategory;
  parent?: TagCategory;
  classification?: TagCategory;
  code?: string;
  isAccount?: boolean;
  children?: TagCategory[];
}

export interface CompanyView {
  id?: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompanyViewDetailDataType {
  title?: string | JSX.Element;
  name: string;
  type: string;
  code?: string;
  isBold?: boolean;
  data?: CompanyViewDetailDataType[];
  months?: {
    name?: string;
    value?: number | string;
  }[];
}

export interface CompanyViewDetailType {
  name: string;
  type: string;
  isBold?: boolean;
  data: CompanyViewDetailDataType[];
  children?: CompanyViewDetailType[];
  currencySymbol?: string;
  itemIndex?: number;
}
