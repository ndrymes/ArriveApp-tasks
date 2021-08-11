import Hobbies from '../models/hobbies/Ihobbies';
import { hobbiesModel } from '../models/hobbies/index';
export class HobbiesRepository {
  async saveHobbies({ body }): Promise<Hobbies> {
    return await hobbiesModel.create(body);
  }
  async updateHobbies({ hobbiesId, body }): Promise<Hobbies> {
    return hobbiesModel.findOneAndUpdate(
      { _id: hobbiesId },
      { ...body },
      { new: true }
    );
  }
  async fetchHobbies({ hobbiesId }): Promise<Hobbies> {
    return hobbiesModel.findOne({ _id: hobbiesId });
  }
  async deleteHobbies({ hobbiesId }): Promise<Hobbies> {
    return hobbiesModel.findOneAndDelete({ _id: hobbiesId });
  }
}
export const hobbiesRepository = new HobbiesRepository();
