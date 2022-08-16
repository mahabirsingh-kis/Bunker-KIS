/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import CompaniesService from '../../services/API/Companies/Companies.service';
import { Pagination } from '../../constants/General';
import { User } from '../../constants/types';

export interface ErrorType {
  message: string;
}

export interface GetCompanyUsersPayload {
  id: number;
  page: number;
  count: number;
}

export const getCompanyUsersAction = createAsyncThunk<
  [User],
  GetCompanyUsersPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'company/getUsers',
  async (payoad: GetCompanyUsersPayload, { rejectWithValue }) => {
    try {
      const response = await CompaniesService.getCompanyUsers(payoad);
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

export interface CompanyUsersState {
  data: User[];
  pagination: {
    total: number;
    current: number;
    pageSize: number;
  };
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: CompanyUsersState = {
  data: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: Pagination.pageSize,
  },
  loading: false,
  error: null,
};

const CompanyUsersSlice = createSlice({
  name: 'companyUsers',
  initialState,
  reducers: {
    clearCompanyUsers: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyUsersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompanyUsersAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload.list;
        state.pagination.total = action.payload.total;
        state.pagination.current = action.meta.arg.page;
        state.pagination.pageSize = action.meta.arg.count;
      })
      .addCase(getCompanyUsersAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});
export const selectCompanyUsersLoading = (state: RootState) =>
  state.companyUsers.loading;
export const selectCompanyUsersError = (state: RootState) =>
  state.companyUsers.error;
export const selectCompanyUsers = (state: RootState) => state.companyUsers.data;
export const selectCompanyUsersPagination = (state: RootState) =>
  state.companyUsers.pagination;
export const { clearCompanyUsers } = CompanyUsersSlice.actions;

export default CompanyUsersSlice.reducer;
