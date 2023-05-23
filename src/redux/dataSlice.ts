import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState: any = {
  currentSeason: 2022,
  currentMatchday: "",
  currentArea: "",
  currentCompetition: [],
  allPositions: []
};

export const positionsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPositions: (state, action: PayloadAction<any>) => {
      state.allPositions = action.payload.standings[0].table,
      state.currentArea = action.payload.area,
      state.currentCompetition = action.payload.competition,
      state.currentSeason = action.payload.filters.season,
      state.currentMatchday = action.payload.season.currentMatchday
    }
  }
});

export const { setPositions } =
  positionsSlice.actions;

export const getPositions = (state: RootState) => state.data;

export default positionsSlice.reducer;



