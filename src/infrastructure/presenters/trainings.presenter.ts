import { useSelector } from '@trainingsapp/store';
import {
  selectTrainings,
  selectIsLoadingTrainings,
} from '@trainingsapp/domain/usecases/trainings.usecase';

export const TrainingPresenter = () => {
  const data = useSelector(selectTrainings);
  const isLoading = useSelector(selectIsLoadingTrainings);

  return {
    data,
    isLoading,
  };
};
