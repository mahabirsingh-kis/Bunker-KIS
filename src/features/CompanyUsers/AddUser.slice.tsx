/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import CompaniesService from '../../services/API/Companies/Companies.service';
import { User } from '../../constants/types';

export interface ErrorType {
  message: string;
}

interface CompanyRole {
  company_id: number;
  role: string;
}
export interface AddUsersPayload {
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  add_to_company?: CompanyRole[];
}

export const addUsersAction = createAsyncThunk<
  User,
  AddUsersPayload,
  {
    rejectValue: ErrorType;
  }
>('company/addUsers', async (payoad: AddUsersPayload, { rejectWithValue }) => {
  try {
    const response = await CompaniesService.addUser(payoad);
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
});

export interface AddUsersState {
  data: User | null;
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: AddUsersState = {
  data: null,
  loading: false,
  error: null,
};

const AddUserSlice = createSlice({
  name: 'companyUsers',
  initialState,
  reducers: {
    clearAddUser: () => initialState,
    clearAddError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUsersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUsersAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(addUsersAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});
export const selectAddUserLoading = (state: RootState) => state.addUser.loading;
export const selectAddUserError = (state: RootState) => state.addUser.error;
export const selectAddUser = (state: RootState) => state.addUser.data;
export const { clearAddUser, clearAddError } = AddUserSlice.actions;

export default AddUserSlice.reducer;
