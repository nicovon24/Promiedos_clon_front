import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState: any = {
  scorersByPage: [],
  activeLeague: "",
  num_pages: 1,
  active_page: 1
};

export const scorersSlice = createSlice({
  name: 'scorers',
  initialState,
  reducers: {
    setScorers: (state, action: PayloadAction<any>) => {
      state.scorersByPage = action.payload
    },
    setUpdateLeague: (state, action: PayloadAction<any>) => {
      state.activeLeague = action.payload
    },
    setPages: (state, action: PayloadAction<any>) => {
      state.num_pages = action.payload
    },
    setActivePage: (state, action: PayloadAction<any>) => {
      state.active_page = action.payload
    },
  }
});

export const { setScorers, setUpdateLeague, setPages, setActivePage } = scorersSlice.actions;

export const getScorers = (state: RootState) => state.data;

export default scorersSlice.reducer;



