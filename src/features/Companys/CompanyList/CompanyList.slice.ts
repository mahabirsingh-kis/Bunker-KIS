import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Pagination } from '../../../constants/General';
import CompanyService from '../../../services/API/Companies';
import { Company } from '../../../constants/types';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface GetComapaniesPayload {
  page: number;
  count: number;
  sortby: string | null;
  sort: string | null;
}

/**
 * Get comapanies
 */
export const getComapniesAction = createAsyncThunk<
  string,
  GetComapaniesPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/getComapniesAction',
  async (payload: GetComapaniesPayload, { rejectWithValue }) => {
    try {
      const response: any = await CompanyService.getCompaniesListing(payload);
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
        message: err.response,
      } as ErrorType);
    }
  },
);

/**
 * Get Currency List
 */
export const getCurrencyListAction = createAsyncThunk<
  any,
  undefined,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/getCurrencyListAction',
  async (payload: undefined, { rejectWithValue }) => {
    try {
      const response: any = await CompanyService.getCurrencyList();
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
        message: err.response,
      } as ErrorType);
    }
  },
);

export interface CompaniesListState {
  data: any;
  pagination: {
    total: number;
    current: number;
    pageSize: number;
    pageSizeOptions: string[];
  };
  sorting: {
    sortby: string | null;
    sortOrder: string | null;
  };
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
  showAddCompanyModal: boolean;
  success: {
    name: string;
  } | null;
  currentCompany: Company | null;
  currencyList: [];
}

const initialState: CompaniesListState = {
  data: null,
  pagination: {
    total: 0,
    current: 1,
    pageSize: Pagination.pageSize,
    pageSizeOptions: Pagination.pageSizeOptions,
  },
  sorting: {
    sortby: null,
    sortOrder: null,
  },
  loading: true,
  error: null,
  showAddCompanyModal: false,
  success: null,
  currentCompany: null,
  currencyList: [],
};

export interface AddCompanyPayload {
  name: string;
}

/**
 * Add company
 */
export const addCompanyAction = createAsyncThunk<
  string,
  AddCompanyPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/addCompanyAction',
  async (payload: AddCompanyPayload, { rejectWithValue }) => {
    try {
      const response: any = await CompanyService.addCompany(payload);
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

export const companiesSlice = createSlice({
  name: 'setPassword',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    updatePagination: (state, options) => {
      state.pagination.current = options.payload.page;
      state.pagination.pageSize = options.payload.count;
    },
    showHideAddCompanyModal: (state, options) => {
      state.error = null;
      state.showAddCompanyModal = options.payload;
    },
    clearSuccessMessage: (state) => {
      state.success = null;
    },
    setCurrentCompany: (state, data) => {
      state.currentCompany = data.payload;
    },
    clearCurrentCompany: (state) => {
      state.currentCompany = null;
    },
    clearCompanylistData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyListAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrencyListAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.currencyList = action.payload.list;
      })
      .addCase(getCurrencyListAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(getComapniesAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComapniesAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload.list;
        state.pagination.total = action.payload.total;
        state.pagination.current = action.meta.arg.page;
        state.pagination.pageSize = action.meta.arg.count;
        state.sorting.sortOrder = action.meta.arg.sort;
        state.sorting.sortby = action.meta.arg.sortby;
      })
      .addCase(getComapniesAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(addCompanyAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCompanyAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.error = null;
        state.success = { name: action.meta.arg.name };
        state.showAddCompanyModal = false;
      })
      .addCase(addCompanyAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.companies.loading;
export const selectError = (state: RootState) => state.companies.error;
export const selectData = (state: RootState) => state.companies.data;
export const selectSucesss = (state: RootState) => state.companies.success;
export const selectCurrencyList = (state: RootState) =>
  state.companies.currencyList;
export const selectCompanyModalVisible = (state: RootState) =>
  state.companies.showAddCompanyModal;
export const selectPagination = (state: RootState) =>
  state.companies.pagination;
export const selectSorting = (state: RootState) => state.companies.sorting;
export const selectCurrentComapny = (state: RootState) =>
  state.companies.currentCompany;
export const {
  clearError,
  updatePagination,
  showHideAddCompanyModal,
  clearSuccessMessage,
  setCurrentCompany,
  clearCurrentCompany,
  clearCompanylistData,
} = companiesSlice.actions;
export default companiesSlice.reducer;
