import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { ProgressValues } from '../../../constants/General';
import { DataType, TagCategory } from '../../../constants/types';
import CompaniesService from '../../../services/API/Companies/Companies.service';

/* eslint-disable no-param-reassign, complexity */
/* eslint-disabled no-use-before-define */
export interface ErrorType {
  message: string;
}

/**
 * Get Data Types
 */
export const getDataTypeListAction = createAsyncThunk<
  [DataType],
  number,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/getDataTypeListAction',
  async (payload: number | null, { rejectWithValue }) => {
    try {
      const response: any = await CompaniesService.getCompanyDataTypes();
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

export interface ValidateFilenamePayload {
  filename: string;
  companyId: number;
}

/**
 * Upload File action
 */
export const validateFilenameAction = createAsyncThunk<
  string,
  ValidateFilenamePayload,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/validateFilenameAction',
  async (payload: ValidateFilenamePayload, { rejectWithValue }) => {
    try {
      const response: any = await CompaniesService.validateFilename(payload);
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

export interface VerifyFilePayload {
  data: FormData;
  callback: CallableFunction;
}

/**
 * Upload File action
 */
export const verifyFileAction = createAsyncThunk<
  any,
  VerifyFilePayload,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/verifyFileAction',
  async (payload: VerifyFilePayload, { rejectWithValue }) => {
    try {
      const response: any = await CompaniesService.verifyDataFile(payload);
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
export interface SaveDataPayload {
  company_id: number;
  file: CallableFunction;
  data_type: string;
  file_name: string;
  accounts: object;
}

/**
 * Upload File action
 */
export const saveDataAction = createAsyncThunk<
  any,
  FormData,
  {
    rejectValue: ErrorType;
  }
>(
  'companies/saveDataAction',
  async (payload: FormData, { rejectWithValue }) => {
    try {
      const response: any = await CompaniesService.saveData(payload);
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

export interface AddCompanyDataState {
  dataTypes: any[];
  classificationData: any[];
  fileData: File | undefined;
  fileName: string | undefined;
  type: string | undefined;
  loading: boolean;
  currentStep: number;
  isFilenameValid: boolean;
  uploadProgress: number;
  tagGroups?: TagCategory[];
  changeAccounts: TagCategory[];
  error:
    | {
        message: string | undefined;
      }
    | undefined
    | null;
  uploadError:
    | {
        message: string[] | undefined | any;
      }
    | undefined
    | null
    | any;
  success: {
    name: string | undefined;
  } | null;
}

const initialState: AddCompanyDataState = {
  isFilenameValid: true,
  dataTypes: [],
  classificationData: [],
  fileData: undefined,
  fileName: '',
  type: '',
  uploadProgress: ProgressValues.default,
  currentStep: 1,
  loading: true,
  error: null,
  uploadError: null,
  success: null,
  changeAccounts: [],
};

export const addDataSlice = createSlice({
  name: 'addData',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.success = null;
    },
    updateCurrentStep: (state, options) => {
      state.currentStep = options.payload.currentStep;
    },
    updateProgress: (state, options) => {
      state.uploadProgress = options.payload;
    },
    updateSelectedFile: (state, options) => {
      state.fileData = options.payload;
    },
    updateFilename: (state, options) => {
      state.fileName = options.payload;
    },
    updateType: (state, options) => {
      state.type = options.payload;
    },
    setTagGroups: (state, options) => {
      state.tagGroups = options.payload.tagGroups;
      state.changeAccounts = options.payload.changeAccounts;
    },
    clearTagGroups: (state) => {
      state.tagGroups = [];
      state.changeAccounts = [];
    },
    resetTheAddData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataTypeListAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataTypeListAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.dataTypes = action.payload.list;
      })
      .addCase(getDataTypeListAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(validateFilenameAction.fulfilled, (state, action) => {
        state.isFilenameValid = true;
        state.fileName = action.meta.arg.filename;
        state.error = null;
      })
      .addCase(validateFilenameAction.rejected, (state, action) => {
        state.isFilenameValid = false;
        state.fileName = undefined;
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      })
      .addCase(verifyFileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyFileAction.fulfilled, (state, action: any) => {
        state.loading = false;
        state.uploadError = null;
        state.classificationData = Object.values(action.payload);
      })
      .addCase(verifyFileAction.rejected, (state, action) => {
        state.loading = false;
        state.uploadProgress = ProgressValues.default;
        state.classificationData = [];
        state.fileData = undefined;
        if (action.payload) {
          state.uploadError = action.payload;
        } else {
          state.uploadError = action.error;
        }
      })
      .addCase(saveDataAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveDataAction.fulfilled, (state) => {
        state.loading = false;
        state.success = { name: state.fileName };
        state.uploadError = null;
        state.classificationData = [];
        state.fileData = undefined;
        state.fileName = undefined;
      })
      .addCase(saveDataAction.rejected, (state, action: any) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error as ErrorType;
        }
      });
  },
});

export const selectLoading = (state: RootState) => state.addData.loading;
export const selectError = (state: RootState) => state.addData.error;
export const selectFileData = (state: RootState) => state.addData.fileData;
export const selectFileName = (state: RootState) => state.addData.fileName;
export const selectType = (state: RootState) => state.addData.type;
export const selectIsFilenameValid = (state: RootState) =>
  state.addData.isFilenameValid;
export const selectDataTypes = (state: RootState) => state.addData.dataTypes;
export const selectClassificationData = (state: RootState) =>
  state.addData.classificationData;
export const selectCurrentStep = (state: RootState) =>
  state.addData.currentStep;
export const selectUploadProgress = (state: RootState) =>
  state.addData.uploadProgress;
export const selectUploadError = (state: RootState) =>
  state.addData.uploadError;
export const selectSuccess = (state: RootState) => state.addData.success;
export const {
  clearError,
  clearSuccessMessage,
  updateCurrentStep,
  updateProgress,
  updateSelectedFile,
  updateFilename,
  updateType,
  setTagGroups,
  clearTagGroups,
  resetTheAddData,
} = addDataSlice.actions;
export const selectTagGroups = (state: RootState) => state.addData.tagGroups;
export const selectChangeAccounts = (state: RootState) =>
  state.addData.changeAccounts;
export default addDataSlice.reducer;
