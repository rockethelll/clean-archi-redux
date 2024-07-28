import { createSlice } from '@reduxjs/toolkit';

const trainingSlice = createSlice({
  name: 'training',
  initialState: {},
  reducers: {},
  extraReducers() {}
});

export const trainingReducer = trainingSlice.reducer;