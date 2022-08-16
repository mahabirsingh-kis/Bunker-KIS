import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

export interface MenuState {
  openKeys: Array<string>;
  selectedKeys: Array<string>;
  isAdminPage: boolean;
}

const initialState: MenuState = {
  openKeys: [],
  selectedKeys: [],
  isAdminPage: false,
};

/* eslint-disable no-param-reassign */
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    triggerMenuAction: (state, action) => {
      state.openKeys = action.payload.openKeys;
      state.selectedKeys = action.payload.selectedKeys;
      state.isAdminPage = action.payload.isAdminPage;
    },
  },
});

export const { triggerMenuAction } = menuSlice.actions;

export const selectOpenKeys = (state: RootState) => state.menu.openKeys;
export const selectSelectedKeys = (state: RootState) => state.menu.selectedKeys;
export const selectIsAdminPage = (state: RootState) => state.menu.isAdminPage;
export default menuSlice.reducer;
