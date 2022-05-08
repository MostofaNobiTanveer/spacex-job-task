import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  missions: null,
};

// redux thunk
export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches');
    const data = await response.json();
    return data;
  }
);

// redux slice
const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    // reducers
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissions.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export reducer
export default missionSlice.reducer;
