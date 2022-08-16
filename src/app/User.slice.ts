/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../constants/types';
import AuthenticationService from '../services/API/Authentication';
import { RootState } from './store';
export interface ErrorType {
  message: string;
}

export const getUserInfoAction = createAsyncThunk(
  'user/getUserInfo',
  async (payoad, { rejectWithValue }) => {
    try {
      const response = await AuthenticationService.getUserInfo();
      if (response.success) {
        return response.results as User;
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

export interface UpdateWalkthroughPayload {
  status: boolean;
}

export const updateWalkthroughStatusAction = createAsyncThunk<
  any,
  UpdateWalkthroughPayload,
  {
    rejectValue: ErrorType;
  }
>('users/walkthrough-status/update', async (payload, { rejectWithValue }) => {
  try {
    const response = await AuthenticationService.doUpdateWalkthroughStatus(
      payload,
    );
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
});

const initialState: User = {
  id: -1,
  email: '',
  first_name: '',
  last_name: '',
  isBunkerAdmin: false,
  updatedAt: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfoAction.fulfilled, (state, action) => action.payload)
      .addCase(updateWalkthroughStatusAction.fulfilled, (state, action) => {
        state.walkthrough = action.meta.arg.status;
      });
  },
});

export const { clearUser } = userSlice.actions;
export const selectUserInfo = (state: RootState) => state.user;
export default userSlice.reducer;
