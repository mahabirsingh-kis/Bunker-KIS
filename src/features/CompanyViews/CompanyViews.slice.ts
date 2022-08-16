import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Pagination } from '../../constants/General';
import ViewService from '../../services/API/View';
import { CompanyView } from '../../constants/types';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface GetComapanyViewsPayload {
  id: number;
  page: number;
  count: number;
}

/**
 * Get comapany views
 */
export const getComapnyViewsAction = createAsyncThunk<
  string,
  GetComapanyViewsPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/getComapnyViewsAction',
  async (payload: GetComapanyViewsPayload, { rejectWithValue }) => {
    try {
      const response: any = await ViewService.getCompanyViews(payload);
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

export interface CompaniesListState {
  viewsData: CompanyView[];
  companyHasData: boolean;
  pagination: {
    total: number;
    current: number;
    pageSize: number;
    pageSizeOptions: string[];
  };
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
  currentViewId: number | null;
}

const initialState: CompaniesListState = {
  viewsData: [],
  companyHasData: false,
  pagination: {
    total: 0,
    current: 1,
    pageSize: Pagination.pageSize,
    pageSizeOptions: Pagination.pageSizeOptions,
  },
  loading: true,
  error: null,
  success: null,
  currentViewId: null,
};

export const companyViewsSlice = createSlice({
  name: 'companyViews',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    updatePagination: (state, options) => {
      state.pagination.current = options.payload.page;
      state.pagination.pageSize = options.payload.count;
    },
    setCurrentViewId: (state, option) => {
      state.currentViewId = option.payload;
    },
    clearSuccessMessage: (state) => {
      state.success = null;
    },
    clearCompanyViewsData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComapnyViewsAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComapnyViewsAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.companyHasData = action.payload.company_has_data;
        state.viewsData = action.payload.list;
        state.pagination.total = action.payload.total;
        state.pagination.current = action.meta.arg.page;
        state.pagination.pageSize = action.meta.arg.count;
      })
      .addCase(getComapnyViewsAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.companyViews.loading;
export const selectError = (state: RootState) => state.companyViews.error;
export const selectCompanyHasData = (state: RootState) =>
  state.companyViews.companyHasData;
export const selectCurrentViewId = (state: RootState) =>
  state.companyViews.currentViewId;
export const selectViewsData = (state: RootState) =>
  state.companyViews.viewsData;
export const selectSucesss = (state: RootState) => state.companyViews.success;
export const selectCompanyViewsPagination = (state: RootState) =>
  state.companyViews.pagination;
export const {
  clearError,
  updatePagination,
  setCurrentViewId,
  clearSuccessMessage,
  clearCompanyViewsData,
} = companyViewsSlice.actions;
export default companyViewsSlice.reducer;
