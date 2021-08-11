import Hobbies from '../models/hobbies/Ihobbies';
import { hobbiesModel } from '../models/hobbies/index';
export class HobbiesRepository {
  async saveHobbies({ body }): Promise<Hobbies> {
    return await hobbiesModel.create(body);
  }
  
}
export const hobbiesRepository = new HobbiesRepository();
