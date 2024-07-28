import { TrainingCardViewModel } from '@trainingsapp/components/TrainingCard/ViewModel';
import { DashboardViewModel } from '@trainingsapp/pages/dashboard/ViewModel';
import { asFunction, createContainer } from 'awilix';

const container = createContainer();

container.register({
  DashboardViewModel: asFunction(DashboardViewModel),
  TrainingCardViewModel: asFunction(TrainingCardViewModel),
});

export default container;
