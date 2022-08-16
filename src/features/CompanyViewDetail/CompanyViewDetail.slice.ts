import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import ViewService from '../../services/API/View';
import { CompanyViewDetailType, Company } from '../../constants/types';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface GetCompanyViewDetailPayload {
  id: string;
}

interface ViewDetailType {
  id: number;
  name: string;
  description: string;
  view: string;
  company: Company;
}

export const getCompanyViewDetailAction = createAsyncThunk<
  string,
  GetCompanyViewDetailPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'company/getCompanyViewDetailAction',
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

export interface CompanyViewDetailState {
  viewDetail: ViewDetailType | null;
  viewDetailData: CompanyViewDetailType[];
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
  success: boolean | null;
}

const initialState: CompanyViewDetailState = {
  viewDetail: null,
  viewDetailData: [],
  loading: false,
  error: null,
  success: null,
};

export const companyViewDetailSlice = createSlice({
  name: 'companyViewDetail',
  initialState,
  reducers: {
    clearCompanyViewDetailData: () => initialState,
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
          company: action.payload.company,
        };
        state.viewDetailData = action.payload.list.data;
        state.success = true;
      })
      .addCase(getCompanyViewDetailAction.rejected, (state, action) => {
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
  state.companyViewDetail.loading;
export const selectError = (state: RootState) => state.companyViewDetail.error;
export const selectViewDetail = (state: RootState) =>
  state.companyViewDetail.viewDetail;
export const selectSuccess = (state: RootState) =>
  state.companyViewDetail.success;
export const { clearCompanyViewDetailData } = companyViewDetailSlice.actions;
export default companyViewDetailSlice.reducer;
