import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import type { TrainingsState } from '@trainingsapp/domain/models/trainings.interface';
import { trainingFakeData } from '@trainingsapp/infrastructure/inMemory/training.db';

const initialState: TrainingsState = {
  data: [],
  isLoading: false,
  errors: {
    getTrainingsErrorMessage: '',
  },
};

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTrainingsUC.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrainingsUC.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getTrainingsUC.rejected, (state, action) => {
        state.errors.getTrainingsErrorMessage = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export const getTrainingsUC = createAsyncThunk(
  'api/getTrainingsUC',
  async () => {
    return trainingFakeData;
  },
);

export const selectTrainingsState = (state: { trainings: TrainingsState }) =>
  state.trainings;

export const selectTrainings = createSelector(
  selectTrainingsState,
  ({ data }) => data,
);

export const selectIsLoadingTrainings = createSelector(
  selectTrainingsState,
  ({ isLoading }) => isLoading,
);

export const trainingsReducer = trainingsSlice.reducer;
