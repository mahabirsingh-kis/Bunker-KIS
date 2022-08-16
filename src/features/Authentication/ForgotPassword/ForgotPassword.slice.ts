import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

import AuthenticationService from '../../../services/API/Authentication';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

/**
 * Forgot Password
 */
export const forgotPasswordAction = createAsyncThunk<
  string,
  ForgotPasswordPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'forgotPassword/forgotPasswordAction',
  async (payload: ForgotPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await AuthenticationService.doForgotPassword(payload);
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

export interface ForgotPasswordState {
  success: boolean;
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: ForgotPasswordState = {
  success: false,
  loading: false,
  error: null,
};

export const forgotPasswordSlice = createSlice({
  name: 'forgot-password',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPasswordAction.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(forgotPasswordAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.forgotPassword.loading;
export const selectError = (state: RootState) => state.forgotPassword.error;
export const selectSuccess = (state: RootState) => state.forgotPassword.success;
export const { clearError, clearSuccess } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
