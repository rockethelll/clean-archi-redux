import { getTrainingsUC } from '@trainingsapp/domain/usecases/trainings.usecase';
import { TrainingPresenter } from '@trainingsapp/infrastructure/presenters/trainings.presenter';
import { useDispatch } from '@trainingsapp/store';
import { useEffect } from 'react';

export function DashboardViewModel() {
  const dispatch = useDispatch();
  const { data: trainings, isLoading } = TrainingPresenter();

  useEffect(() => {
    dispatch(getTrainingsUC());
  }, [dispatch]);

  return { trainings, isLoading };
}
