import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import AuthenticationService from '../../../services/API/Authentication';
import { User } from '../../../constants/types';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface TempData {
  code: string;
  temp: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

/**
 * Login
 */
export const loginAction = createAsyncThunk<
  User | TempData,
  LoginPayload,
  {
    rejectValue: ErrorType;
  }
>('login/loginAction', async (payload: LoginPayload, { rejectWithValue }) => {
  try {
    const response = await AuthenticationService.doLogin(payload);
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

/**
 * Logout
 */
export const logoutAction = createAsyncThunk('login/loginAction', async () => {
  try {
    // TODO
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
  }
});

export interface LoginState {
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: LoginState = {
  loading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, () => initialState)
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.login.loading;
export const selectError = (state: RootState) => state.login.error;
export const { clearError } = loginSlice.actions;
export default loginSlice.reducer;
