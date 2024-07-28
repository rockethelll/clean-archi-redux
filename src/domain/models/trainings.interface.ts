import type { Training } from '@trainingsapp/domain/models/training.interface';

export const ERRORS_KEYS = ['getTrainingsErrorMessage'] as const;

export interface TrainingsState {
  data: Training[];
  isLoading: boolean;
  errors: Record<(typeof ERRORS_KEYS)[number], string>;
}
