import {
  selectIsLoadingTrainings,
  selectTrainings,
} from '@trainingsapp/domain/usecases/trainings.usecase';
import { useSelector } from '@trainingsapp/store';

export const TrainingPresenter = () => {
  const data = useSelector(selectTrainings);
  const isLoading = useSelector(selectIsLoadingTrainings);

  return { data, isLoading };
};
