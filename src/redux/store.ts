import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import scorersSlice from './scorersSlice'

export const store = configureStore({
  reducer: {
      scorers: scorersSlice,
      data: dataSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch