import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import ViewService from '../../../services/API/View';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

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
  'createView/validateViewNameAction',
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

export interface GetAvailableTimeFramesPayload {
  companyId: number;
}

/**
 * Validate View Name
 */
export const getAvailableTimeFramesAction = createAsyncThunk<
  string,
  GetAvailableTimeFramesPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'createView/getAvailableTimeFramesAction',
  async (payload: GetAvailableTimeFramesPayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.getAvailableTimeframes(payload);
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

export interface CreateViewState {
  data: any;
  isNameValid: boolean;
  name: string;
  availableTimeframes: string[];
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
  success: {
    name: string;
  } | null;
  createdViewData: any;
}

const initialState: CreateViewState = {
  data: null,
  name: '',
  isNameValid: true,
  availableTimeframes: [],
  loading: true,
  error: null,
  success: null,
  createdViewData: null,
};

export interface CreateViewPayload {
  companyId: number;
  name: string;
  description: string;
  view_template_id?: number | undefined;
  view_type: string;
  section?: string;
  perspective?: string;
  time_frame_start?: string;
  time_frame_end?: string;
}

/**
 * Create View
 */
export const createViewAction = createAsyncThunk<
  string,
  CreateViewPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'createView/createViewAction',
  async (payload: CreateViewPayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.createCompanyView(payload);
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

export const createViewSlice = createSlice({
  name: 'createView',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.success = null;
    },
    clearCreateViewData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateViewNameAction.fulfilled, (state, action) => {
        state.isNameValid = true;
        state.name = action.meta.arg.name;
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
      .addCase(getAvailableTimeFramesAction.fulfilled, (state, action: any) => {
        state.error = null;
        state.availableTimeframes = action.payload.list;
      })
      .addCase(getAvailableTimeFramesAction.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(createViewAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createViewAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.error = null;
        state.createdViewData = action.payload;
      })
      .addCase(createViewAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) =>
  state.createCompanyView.loading;
export const selectError = (state: RootState) => state.createCompanyView.error;
export const selectAvailableTimeframes = (state: RootState) =>
  state.createCompanyView.availableTimeframes;
export const selectSucesss = (state: RootState) =>
  state.createCompanyView.success;
export const selectIsNameValid = (state: RootState) =>
  state.createCompanyView.isNameValid;
export const selectCreatedViewData = (state: RootState) =>
  state.createCompanyView.createdViewData;
export const { clearError, clearSuccessMessage, clearCreateViewData } =
  createViewSlice.actions;
export default createViewSlice.reducer;
