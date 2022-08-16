/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import CompaniesService from '../../services/API/Companies/Companies.service';
import { Pagination } from '../../constants/General';
import { User } from '../../constants/types';
import CompanyService from '../../services/API/Companies';

export interface ErrorType {
  message: string;
}

export interface GetComapaniesPayload {
  page: number;
  count: number;
  sort: string;
  sortby: string;
}

/**
 * Get comapanies
 */
export const getComapniesAction = createAsyncThunk<
  any,
  GetComapaniesPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/getComapnies',
  async (payload: GetComapaniesPayload, { rejectWithValue }) => {
    try {
      const response: any = await CompanyService.getCompaniesListing(payload);
      if (response.success) {
        return response.results.list;
      }
      return rejectWithValue({
        message: response.message,
      } as ErrorType);
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue({
        message: err.response,
      } as ErrorType);
    }
  },
);

export interface GetAdminUsersPayload {
  page: number;
  count: number;
}

export const getUsersAction = createAsyncThunk<
  [User],
  GetAdminUsersPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'admin/getUsers',
  async (payoad: GetAdminUsersPayload, { rejectWithValue }) => {
    try {
      const response = await CompaniesService.getUsers(payoad);
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

export interface AdminUsersState {
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
  conpanyList: any[];
}

const initialState: AdminUsersState = {
  data: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: Pagination.pageSize,
  },
  loading: false,
  error: null,
  conpanyList: [],
};

const AdminUsersSlice = createSlice({
  name: 'adminUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload.list;
        state.pagination.total = action.payload.total;
        state.pagination.current = action.meta.arg.page;
        state.pagination.pageSize = action.meta.arg.count;
      })
      .addCase(getUsersAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(getComapniesAction.fulfilled, (state, action) => {
        state.conpanyList = action.payload;
      });
  },
});
export const selectAdminUsersLoading = (state: RootState) =>
  state.adminUsers.loading;
export const selectAdminUsersError = (state: RootState) =>
  state.adminUsers.error;
export const selectAdminUsers = (state: RootState) => state.adminUsers.data;
export const selectAdminUsersPagination = (state: RootState) =>
  state.adminUsers.pagination;
export const selectCompanys = (state: RootState) =>
  state.adminUsers.conpanyList;

export default AdminUsersSlice.reducer;
