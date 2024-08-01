import { useEffect } from 'react';
import { useDispatch } from '@trainingsapp/store';
import { getTrainingsUC } from '@trainingsapp/domain/usecases/trainings.usecase';
import { TrainingPresenter } from '@trainingsapp/infrastructure/presenters/trainings.presenter';

export function DashboardViewModel() {
  const dispatch = useDispatch();
  const { data: trainings, isLoading } = TrainingPresenter();

  useEffect(() => {
    dispatch(getTrainingsUC());
  }, []);

  return {
    trainings,
    isLoading,
  };
}
