import { createContainer, asFunction } from 'awilix';
import { TrainingCardViewModel } from '@trainingsapp/components/TrainingCard/ViewModel';
import { DashboardViewModel } from '@trainingsapp/pages/dashboard/ViewModel';
import { TextFieldViewModel } from '@trainingsapp/components/TextField/ViewModel';
import { TrainingConfigurationViewModel } from '@trainingsapp/pages/production/configuration/ViewModel';

const container = createContainer();

container.register({
  DashboardViewModel: asFunction(DashboardViewModel),
  TextFieldViewModel: asFunction(TextFieldViewModel),
  TrainingCardViewModel: asFunction(TrainingCardViewModel),
  TrainingConfigurationViewModel: asFunction(TrainingConfigurationViewModel),
});

export default container;
