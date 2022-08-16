import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import ViewService from '../../../services/API/View';
import { CompanyViewDetailType, Company } from '../../../constants/types';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface GetCompanyViewDetailPayload {
  id: string;
}

export interface GetCompanyViewPreviewPayload {
  id: string;
  time_frame_start?: string;
  time_frame_end?: string;
  data_type?: string;
}

interface ViewDetailType {
  id: number;
  name: string;
  description: string;
  view: string;
  data_type: string;
  timeframe?: string;
  timeframe_start?: string;
  timeframe_end?: string;
  company: Company;
}

export const getCompanyViewDetailAction = createAsyncThunk<
  string,
  GetCompanyViewDetailPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'editViewDetail/getCompanyViewDetailAction',
  async (payload: GetCompanyViewDetailPayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.getCompanyViewDetail(payload);
      if (response.success) {
        return response.results;
      }
      return rejectWithValue({
        message: response.message,
      } as ErrorType);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue({
        message: err.response.data.message,
      } as ErrorType);
    }
  },
);

export interface ValidateViewNamePayload {
  name: string;
}

/**
 * Validate View Name
 */
export const validateViewNameAction = createAsyncThunk<
  string,
  ValidateViewNamePayload,
  {
    rejectValue: ErrorType;
  }
>(
  'editViewDetail/validateViewNameAction',
  async (payload: ValidateViewNamePayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.validateViewName(payload);
      if (response.success) {
        return response.results;
      }
      return rejectWithValue({
        message: response.message,
      } as ErrorType);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue({
        message: err.response.data.message,
      } as ErrorType);
    }
  },
);

export interface UpdateViewPayload {
  id: number;
  name?: string;
  description?: string;
  time_frame_start?: string;
  time_frame_end?: string;
}

/**
 * Update View
 */
export const updateViewAction = createAsyncThunk<
  string,
  UpdateViewPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'editViewDetail/updateViewAction',
  async (payload: UpdateViewPayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.updateCompanyView(payload);
      if (response.success) {
        return response.results;
      }
      return rejectWithValue({
        message: response.message,
      } as ErrorType);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue({
        message: err.response.data.message,
      } as ErrorType);
    }
  },
);

/**
 * Preview View
 */
export const previewViewAction = createAsyncThunk<
  string,
  GetCompanyViewPreviewPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'company/getCompanyViewPreviewAction',
  async (payload: GetCompanyViewPreviewPayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.getCompanyViewPreview(payload);
      if (response.success) {
        return response.results;
      }
      return rejectWithValue({
        message: response.message,
      } as ErrorType);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue({
        message: err.response.data.message,
      } as ErrorType);
    }
  },
);

export interface EditViewDetailState {
  viewDetail: ViewDetailType | null;
  viewDetailData: CompanyViewDetailType[];
  loading: boolean;
  isNameValid: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
  previewing: boolean;
  editing: boolean;
  editSuccess: {
    name: string;
  } | null;
}

const initialState: EditViewDetailState = {
  viewDetail: null,
  viewDetailData: [],
  isNameValid: true,
  loading: false,
  error: null,
  previewing: false,
  editing: false,
  editSuccess: null,
};

export const editViewDetailSlice = createSlice({
  name: 'editViewDetail',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearEditSuccessMessage: (state) => {
      state.editSuccess = null;
    },
    clearEditViewDetailData: (state) => {
      // eslint-disable-next-line
      state = {
        ...initialState,
        viewDetail: null,
        viewDetailData: [],
        editSuccess: state.editSuccess,
      };
      console.log(state);
    },
    clearAllEditViewData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyViewDetailAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompanyViewDetailAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.viewDetail = {
          id: action.payload.list.id,
          name: action.payload.list.name,
          description: action.payload.list.description,
          view: action.payload.list.view,
          data_type: action.payload.list.data_type,
          company: action.payload.company,
          timeframe: action.payload.list.timeframe,
          timeframe_start: action.payload.list.timeframe_start,
          timeframe_end: action.payload.list.timeframe_end,
        };
        state.viewDetailData = action.payload.list.data;
      })
      .addCase(getCompanyViewDetailAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(validateViewNameAction.fulfilled, (state) => {
        state.isNameValid = true;
        state.error = null;
      })
      .addCase(validateViewNameAction.rejected, (state, action) => {
        state.isNameValid = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(updateViewAction.pending, (state) => {
        state.editing = true;
      })
      .addCase(updateViewAction.fulfilled, (state, action: any) => {
        state.editing = false;
        state.editSuccess = { name: action.meta.arg.name };
      })
      .addCase(updateViewAction.rejected, (state, action) => {
        state.editing = false;
        state.editSuccess = null;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(previewViewAction.pending, (state) => {
        state.previewing = true;
      })
      .addCase(previewViewAction.fulfilled, (state, action: any) => {
        state.previewing = false;
        state.viewDetail = {
          id: action.payload.list.id,
          name: action.payload.list.name,
          description: action.payload.list.description,
          view: action.payload.list.view,
          data_type: action.payload.list.data_type,
          company: action.payload.company,
          timeframe: action.payload.list.timeframe,
          timeframe_start: action.payload.list.timeframe_start,
          timeframe_end: action.payload.list.timeframe_end,
        };
        state.viewDetailData = action.payload.list.data;
      })
      .addCase(previewViewAction.rejected, (state, action) => {
        state.previewing = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) =>
  state.editViewDetails.loading;
export const selectError = (state: RootState) => state.editViewDetails.error;
export const selectViewDetail = (state: RootState) =>
  state.editViewDetails.viewDetail;
export const selectViewData = (state: RootState) =>
  state.editViewDetails.viewDetailData;
export const selectIsNameValid = (state: RootState) =>
  state.editViewDetails.isNameValid;
export const selectEditing = (state: RootState) =>
  state.editViewDetails.editing;
export const selectEditSuccess = (state: RootState) =>
  state.editViewDetails.editSuccess;
export const selectPreviewing = (state: RootState) =>
  state.editViewDetails.previewing;
export const {
  clearError,
  clearEditViewDetailData,
  clearEditSuccessMessage,
  clearAllEditViewData,
} = editViewDetailSlice.actions;
export default editViewDetailSlice.reducer;
