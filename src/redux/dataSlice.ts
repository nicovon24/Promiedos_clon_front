import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { setActiveLeagueAction } from './actions/positions';

const initialState: any = {
  activeLeague: "",
  activeWhatToShow: "Standings",
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
    },
    setActiveLeague: (state, action: PayloadAction<any>) => {
      state.activeLeague = action.payload
    },
    setWhatToShow: (state, action: PayloadAction<any>) => {
      state.activeWhatToShow = action.payload
    },
    setSeason: (state, action: PayloadAction<any>) => {
      state.currentSeason = action.payload
    }
  }
});

export const { setPositions, setActiveLeague, setWhatToShow, setSeason } =
  positionsSlice.actions;

export const getPositions = (state: RootState) => state.data;
// export const getActiveLeague = (state: RootState) => state.data;

export default positionsSlice.reducer;



