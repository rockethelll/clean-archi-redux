import {
  EqualityFn,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { trainingReducer } from '@trainingsapp/domain/usecases/training.usecase';
import { trainingsReducer } from '@trainingsapp/domain/usecases/trainings.usecase';

export const reducer = {
  training: trainingReducer,
  trainings: trainingsReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = any;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: EqualityFn<TSelected> | undefined,
): TSelected => useSelectorBase<RootState, TSelected>(selector, equalityFn);
