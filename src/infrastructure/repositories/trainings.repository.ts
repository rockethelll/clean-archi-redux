import TrainingsGateway from '@trainingsapp/infrastructure/gateways/trainings.gateway';
import type { Training } from '@trainingsapp/domain/models/training.interface';

export default function TrainingsRepository() {
  return {
    async getTrainings(): Promise<{ data: Training[]; error?: Error }> {
      const trainingsGateway = TrainingsGateway.getInstance();
      const { data, error } = await (
        trainingsGateway as TrainingsGateway
      ).getTrainings();

      return { data, error };
    },
  };
}
