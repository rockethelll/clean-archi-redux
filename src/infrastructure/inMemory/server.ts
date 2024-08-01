import { http, delay, HttpResponse } from 'msw';
import { trainingsFakeData } from '@trainingsapp/infrastructure/inMemory/database/trainings.db';
import { v4 as uuidv4 } from 'uuid';

const ARTIFICIAL_DELAY_MS = 200;

export const handlers = [
  http.get('/fakeApi/getTrainings', async () => {
    await delay(ARTIFICIAL_DELAY_MS);

    return HttpResponse.json(trainingsFakeData, { status: 201 });
  }),

  http.get(
    '/fakeApi/getTraining/:trainingId',
    async ({ params }: { params: any }) => {
      await delay(ARTIFICIAL_DELAY_MS);

      const { trainingId } = params;
      const training = trainingsFakeData.find(
        (training) => training.id === trainingId,
      );

      return HttpResponse.json(training, { status: 201 });
    },
  ),

  http.post(
    '/fakeApi/createTraining',
    async ({ request }: { request: any }) => {
      await delay(ARTIFICIAL_DELAY_MS);

      const training = await request.json();
      training.id = uuidv4();
      trainingsFakeData.push(training);

      return HttpResponse.json(true, { status: 201 });
    },
  ),

  http.patch(
    '/fakeApi/updateTraining',
    async ({ request }: { request: any }) => {
      await delay(ARTIFICIAL_DELAY_MS);

      const updatedTraining = await request.json();
      const index = trainingsFakeData.findIndex(
        (training) => training.id === updatedTraining.id,
      );
      trainingsFakeData.splice(index, 1, updatedTraining);

      return HttpResponse.json(true, { status: 201 });
    },
  ),

  http.delete(
    '/fakeApi/deleteTraining/:trainingId',
    async ({ params }: { params: any }) => {
      await delay(ARTIFICIAL_DELAY_MS);

      const { trainingId } = params;
      const index = trainingsFakeData.findIndex(
        (training) => training.id === trainingId,
      );
      trainingsFakeData.splice(index, 1);

      return HttpResponse.json(true, { status: 201 });
    },
  ),
];
