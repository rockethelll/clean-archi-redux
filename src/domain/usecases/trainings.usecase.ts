import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import type { RootState } from '@trainingsapp/store';
import type { TrainingsState } from '@trainingsapp/domain/models/trainings.interface';
import TrainingsRepository from '@trainingsapp/infrastructure/repositories/trainings.repository';

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
      .addCase(getTrainingsUC.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getTrainingsUC.fulfilled, (state, action) => {
        state.errors.getTrainingsErrorMessage = '';
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getTrainingsUC.rejected, (state, action) => {
        state.errors.getTrainingsErrorMessage = action.error.message as string;
        state.isLoading = false;
      });
  },
});

const preventMutlipleCalls = {
  condition: (_: void, { getState }: { getState: RootState }) => {
    const { isLoading } = getState().trainings;
    if (isLoading) {
      return false;
    }
  },
};

export const getTrainingsUC = createAsyncThunk(
  'api/getTrainingsUC',
  async (_, { rejectWithValue }) => {
    try {
      const { data: trainings } = await TrainingsRepository().getTrainings();

      return trainings;
    } catch (e) {
      const error = e as Error;
      console.error('Erreur lors du getTrainingUC: ' + error.message);
      return rejectWithValue(error);
    }
  },
  preventMutlipleCalls,
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
