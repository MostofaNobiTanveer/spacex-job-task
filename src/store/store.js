import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './features/missionSlice';

export const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});
