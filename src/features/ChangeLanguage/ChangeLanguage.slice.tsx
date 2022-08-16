/* eslint-disable no-param-reassign, complexity */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AuthenticationService from '../../services/API/Authentication';
import { RootState } from '../../app/store';

interface ErrorType {
  message: string;
}

export interface UpdateLanguagePayload {
  language: string;
}

export const updateLanguageAction = createAsyncThunk<
  any,
  UpdateLanguagePayload,
  {
    rejectValue: ErrorType;
  }
>('user/updateLanguage', async (payload, { rejectWithValue }) => {
  try {
    const response = await AuthenticationService.doUpdateUserLanguage(payload);
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

export interface LanguageState {
  loading: boolean;
  language: string;
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
}

const initialState: LanguageState = {
  loading: false,
  error: null,
  language: '',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateLanguageAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateLanguageAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.language = action.meta.arg.language;
      })
      .addCase(updateLanguageAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.changeLanguage.loading;

export default languageSlice.reducer;
