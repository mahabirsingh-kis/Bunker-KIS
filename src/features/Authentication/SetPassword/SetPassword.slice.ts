import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import AuthenticationService from '../../../services/API/Authentication';

/* eslint-disable no-param-reassign, complexity */

export interface ErrorType {
  message: string;
}

export interface VerifyCodePayload {
  code: string;
}

/**
 * Get email from user code
 */
export const verifyUserCodeAction = createAsyncThunk<
  string,
  VerifyCodePayload,
  {
    rejectValue: ErrorType;
  }
>(
  'setPassword/verifyUserCodeAction',
  async (payload: VerifyCodePayload, { rejectWithValue }) => {
    try {
      const response = await AuthenticationService.verifyUserCode(payload);
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

export interface SetPasswordPayload {
  code: string;
  password: string;
}

export interface SetPasswordState {
  userEmail: string;
  success: boolean;
  loading: boolean;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: SetPasswordState = {
  userEmail: '',
  loading: false,
  success: false,
  error: null,
};

/**
 * Set Password / Set New Password Action
 */
export const setPasswordAction = createAsyncThunk<
  string,
  SetPasswordPayload,
  {
    rejectValue: ErrorType;
  }
>(
  'setPassword/setNewPassword',
  async (payload: SetPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await AuthenticationService.doSetPassword(payload);
      if (response.success) {
        return response.result;
      }
      return rejectWithValue({
        message: response.data.message,
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

export const setPasswordSlice = createSlice({
  name: 'setPassword',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUserCodeAction.pending, (state) => {
        state.loading = false;
      })
      .addCase(verifyUserCodeAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.userEmail = action.payload.email;
      })
      .addCase(verifyUserCodeAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(setPasswordAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(setPasswordAction.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(setPasswordAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.setPassword.loading;
export const selectError = (state: RootState) => state.setPassword.error;
export const selectSuccess = (state: RootState) => state.setPassword.success;
export const selectUserEmail = (state: RootState) =>
  state.setPassword.userEmail;
export const { clearError, clearSuccess } = setPasswordSlice.actions;
export default setPasswordSlice.reducer;
