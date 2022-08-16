/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import CompaniesService from '../../services/API/Companies/Companies.service';
import { Pagination } from '../../constants/General';
import { ImportData } from '../../constants/types';

export interface ErrorType {
  message: string;
}

export interface GetCompanyDataPayload {
  id: number;
  page: number;
  count: number;
}

export const getCompanyDataAction = createAsyncThunk<
  [ImportData],
  GetCompanyDataPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'company/getData',
  async (payload: GetCompanyDataPayload, { rejectWithValue }) => {
    try {
      const response = await CompaniesService.getCompanyImports(payload);
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

export interface CompanyDataState {
  data: ImportData[];
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
}

const initialState: CompanyDataState = {
  data: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: Pagination.pageSize,
    pageSizeOptions: Pagination.pageSizeOptions,
  },
  loading: false,
  error: null,
};

const CompanyDataSlice = createSlice({
  name: 'companyData',
  initialState,
  reducers: {
    clearCompanyData: () => initialState,
    updatePagination: (state, options) => {
      state.pagination.current = options.payload.page;
      state.pagination.pageSize = options.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyDataAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompanyDataAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload.list;
        state.pagination.total = action.payload.total;
        state.pagination.current = action.meta.arg.page;
        state.pagination.pageSize = action.meta.arg.count;
      })
      .addCase(getCompanyDataAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});
export const selectCompanyDataLoading = (state: RootState) =>
  state.companyData.loading;
export const selectCompanyDataError = (state: RootState) =>
  state.companyData.error;
export const selectCompanyData = (state: RootState) => state.companyData.data;
export const selectCompanyDataPagination = (state: RootState) =>
  state.companyData.pagination;
export const { clearCompanyData, updatePagination } = CompanyDataSlice.actions;

export default CompanyDataSlice.reducer;
