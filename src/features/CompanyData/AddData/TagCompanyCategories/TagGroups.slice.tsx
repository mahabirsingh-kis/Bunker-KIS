/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CompanyService from '../../../../services/API/Companies';
import { RootState } from '../../../../app/store';
import { TagCategory } from '../../../../constants/types';

export interface ErrorType {
  message: string;
}
export interface GroupsPayload {
  companyId: number;
}

export const getGroupsAction = createAsyncThunk<
  TagCategory[],
  GroupsPayload,
  {
    rejectValue: ErrorType;
  }
>('Groups/getGroups', async (payoad, { rejectWithValue }) => {
  try {
    const response = await CompanyService.getGroups(payoad);
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
      message: err.response.data.message,
    } as ErrorType);
  }
});

export interface CreateGroupsPayload {
  companyId: number;
  name: string;
  parent_id?: number;
}

export const createGroupAction = createAsyncThunk<
  TagCategory[],
  CreateGroupsPayload,
  {
    rejectValue: ErrorType;
  }
>('Groups/createGroup', async (payload, { rejectWithValue }) => {
  try {
    const response = await CompanyService.createGroup(payload);
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
      message: err.response.data.message,
    } as ErrorType);
  }
});

export interface SearchGroupsPayload {
  companyId: number;
  name?: string;
}
export const searchGroupsAction = createAsyncThunk<
  TagCategory[],
  SearchGroupsPayload,
  {
    rejectValue: ErrorType;
  }
>('Groups/searchGroups', async (payoad, { rejectWithValue }) => {
  try {
    const response = await CompanyService.searchGroups(payoad);
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
      message: err.response.data.message,
    } as ErrorType);
  }
});

interface AccountGroups {
  loading: boolean;
  groupsAndAccounts: TagCategory[];
  search: {
    text?: string;
    groups: TagCategory[];
  };
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: AccountGroups = {
  loading: false,
  groupsAndAccounts: [],
  search: {
    groups: [],
  },
  error: undefined,
};

const accountGroupsSlice = createSlice({
  name: 'accountGroups',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.search = {
        text: undefined,
        groups: [],
      };
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGroupsAction.fulfilled, (state, action) => {
        state.groupsAndAccounts = action.payload;
      })
      .addCase(createGroupAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGroupAction.fulfilled, (state, action) => {
        state.groupsAndAccounts = action.payload;
        state.loading = false;
      })
      .addCase(createGroupAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(searchGroupsAction.fulfilled, (state, action) => {
        state.search.groups = action.payload;
        state.search.text = action.meta.arg.name;
      });
  },
});
export const selectLoading = (state: RootState) => state.accountGroups.loading;
export const selectError = (state: RootState) => state.accountGroups.error;
export const selectAccountGoups = (state: RootState) =>
  state.accountGroups.groupsAndAccounts;
export const selectSearchGoups = (state: RootState) =>
  state.accountGroups.search.groups;
export const { clearSearch, clearError } = accountGroupsSlice.actions;
export default accountGroupsSlice.reducer;
