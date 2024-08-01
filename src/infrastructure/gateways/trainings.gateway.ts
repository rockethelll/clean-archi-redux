import SingletonMixin from '@trainingsapp/infrastructure/singleton.mixin';
import axios from 'axios';

export default class TrainingsGateway extends SingletonMixin {
  async getTrainings() {
    try {
      const res = await axios.get('/fakeApi/getTrainings');
      const data = res.data;

      return { data };
    } catch (e) {
      console.error(e);
      const error = e as Error;
      return { error };
    }
  }
}
